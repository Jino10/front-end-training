import { useState } from "react";

function Forms()
{
    const[userDetail,setUserDetail]=useState({
           fname:"",
           lname:"",
           email:""
    });
    const handleInput=(e,key)=>{
       setUserDetail({...userDetail,[key]:e.target.value});
    //    console.log(e);
    };
    return(
      <div>
        <form>
        <p>
        <input type="text" defaultValue="Ramesh" onChange={(e)=>handleInput(e,'fname')}/>
        </p>
        <p>
        <input type="text" onChange={(e)=>
                        setUserDetail({...userDetail,lname:e.target.value})}/>
        </p>
        <p>
        <input type="email" onChange={(e)=>
                        setUserDetail({...userDetail,email:e.target.value})}/>
        </p>
        </form>
       <b>{JSON.stringify(userDetail)}</b>
      </div>
    );

}
export default Forms;