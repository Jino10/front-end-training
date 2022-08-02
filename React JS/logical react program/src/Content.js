import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';

function Content(){

    const[list,setList]=useState([]);
    useEffect(()=>{
      getResume();
    },[]);
  const getResume=()=>{
  fetch('http://karka.academy/api/action.php?request=get_user_resume&user=jino').
  then((res)=>res.json())
  .then((response)=>{
    console.log(response);
    setList(response.data);
    console.log(list);
  })
  
}
return(
    
    <table className='table table-striped'>
        <thead>
            <tr>
                <th>USER-ID</th>
                <th>USER-NAME</th>
                <th>DATE-TIME</th>
                <th>ACTION</th>
            </tr>
        </thead>
        <tbody>
            {
                list.map((t,k)=>
                    <tr key={k}>
                        <td>{t.id}</td>
                        <td>{t.user}</td>
                        <td>{t.datetime}</td>
                        <td><Link to={`view/${t.id}`}>ViewDetails</Link></td>
                    </tr>
                )
                
            }
            

        </tbody>
    </table>
);
}
export default Content;