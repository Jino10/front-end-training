import {Link} from 'react-router-dom';
import UserContext from './UserContext';
import React,{ useContext } from 'react';
import './header.css';


function Header(){
      return(
        <ul className='listall'>
            <li><Link to="/View/5">View</Link></li>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
        </ul>
      );
}
function Home(){
    let test=useContext(UserContext);
    return(
        <div>
            {/* <Header/> */}
            <h1 className='content'>Welcome to {test.name}</h1>
            <button onClick={()=>test.setName('Peter')}>Change</button>
        </div>
    );
}
function About(){
    let test=useContext(UserContext);
    return(
        <div>
            {/* <Header/> */}
            <h1 className='content'>Welcome to {test.name}</h1>
            <button onClick={()=>test.setName('Peter')}>Change</button>
        </div>
    );
}
function Contact(){
    let test=useContext(UserContext);
    return(
        <div>
            {/* <Header/> */}
            <h1 className='content'>Welcome to {test.name}</h1>
            <button onClick={()=>test.setName('Peter')}>Change</button>
        </div>
    );
}
export default Header ;
export {Home,About,Contact};