import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ViewPage(){
   const[view,setView]=useState([]);
     let Para=useParams();
     let ele=Para.resume_id;
     console.log(ele);
      useEffect(()=>{
        getId();
      },[])
     const getId=()=>{
        fetch(`http://karka.academy/api/action.php?request=get_resume_by_id&user=jino&id=${ele}`).
        then((res)=>res.json()).
        then((response)=>{
            console.log(response.data.data);
            let shows=JSON.parse(response.data.data)
            setView(shows);
            // console.log(view);

        })
     }
     return(
        <div>
            <h2>Welcome to {view.name}</h2>
        </div>
     );
}
export default ViewPage;