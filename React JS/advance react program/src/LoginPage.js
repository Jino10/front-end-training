import React,{useState,useEffect} from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContents from './UserContents';
import './form.css';

function LoginPage(){
    
    const[user,setUser]=useState({
        email:"",
        passwd:""
    });
    let test=useContext(UserContents);

    const handleInput=(e,key)=>{
        setUser({...user,[key]:e.target.value})
    }
    useEffect(()=>{
        Upload();
    },[])
    let navigate=useNavigate();
    const Upload=()=>{
        fetch(`https://karka.academy/api/action.php?request=stefhi_login&&email=${user.email}&&password=${user.passwd}`).
        then((res)=>res.json()).
        then((response)=>{
            console.log(response);
            if(response.status=="success")
            {
                test.setUserDetails(response);
                navigate("/home");
            }
            console.log(test);
            console.log(response.data);
            // let data=response.data;
            // console.log(data);
          
        })
    }
return(
    <div className='login'>
        <>
        <form className="formAlign">
        <p>
        <label className='form-label'>User-id</label>
        <input type="email" placeholder='Enter user id' className='form-control' onChange={(e)=>handleInput(e,'email')}/>
        </p>
        <p>
        <label className='form-label'>Password</label>
        <input type="password" placeholder='Enter password' className='form-control' onChange={(e)=>handleInput(e,'passwd')}/>
        </p>
        <p>
            <button type="button" className='btn btn-primary buton' onClick={Upload}>Login</button>
        </p>

        {/* <b>{JSON.stringify(user)}</b> */}
        </form>
        </>

    </div>
);



}
export default LoginPage;