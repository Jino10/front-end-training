
import {useState} from 'react';

function Technology()
{
    const[list,setList]=useState(["UI developer","Java Developer","Manual testing","Auto testing"]);
    const[tech,setTech]=useState([]);
        return(
            <ul>
             {
                list.map((value,k)=>
                <li key={k}>{value}<i className="fa fa-plus ml-3"></i></li>)
             }
             </ul>
        );
}

export default Technology;