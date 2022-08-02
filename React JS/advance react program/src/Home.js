import { useEffect, useState } from "react";
import './home.css';

function Home(){
   const[view,setView]=useState([]);
   const[showid,setShowId]=useState([]);
useEffect(()=>{
    getUser();
},[])
let getUser=()=>{
    fetch('https://karka.academy/api/action.php?request=getAllInternalTeam').
    then((res)=>res.json()).
    then((response)=>{
        console.log(response);
        setView(response.data)
        console.log(view);
    })
}
const Show=(id)=>{
    fetch(`https://karka.academy/api/action.php?request=getInternalTeamdetail&id=${id}`).
    then((res)=>res.json()).
    then((response)=>{
        console.log(response);
        setShowId(response.data);
    })
}

return(
    <div>
        <div>
        <table className="table table-striped listall">
            <thead>
                <tr>
                    <th>User-Id</th>
                    <th>User-Name</th>
                    <th>E-Mail</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    view.map((t,k)=>
                    <tr key={k}>
                        <td>{t.id}</td>
                        <td>{t.name}</td>
                        <td>{t.email}</td>
                        <td><button type="button" onClick={()=>Show(t.id)}>View</button></td>
                    </tr>
                    )
                }
            </tbody>
        </table>
        </div>
        <div>
        <table className="table table-striped listid">
            <thead>
                <tr>
                    <th>User-Id</th>
                    <th>User-Name</th>
                    <th>E-Mail</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th>Location</th>
                    <th>Date-Time</th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>{showid.id}</td>
                        <td>{showid.name}</td>
                        <td>{showid.email}</td>
                        <td>{showid.gender}</td>
                        <td>{showid.date_of_birth}</td>
                        <td>{showid.location}</td>
                        <td>{showid.datetime}</td>
                    </tr>
            </tbody>
        </table>
        </div>
    </div>
);

}
export default Home;
