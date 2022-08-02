// import logo from './logo.svg';
import { createContext, useEffect, useRef, useState } from 'react';
// import './App.css';
import React, {BrowserRouter,Switch,Route, Router, Routes,Link} from 'react-router-dom';
import Technology from "./Company";
import Greetings from "./Greetings";
import Login from './Login';
import TableContent from "./table";
import Header,{Home,About,Contact} from './Header';
import ViewRouter from './ViewRouter';
import UserContext from './UserContext';
import ViewPage from './ViewPage';
import Content from './Content';

function App() {
  // const inputRef=useRef();
  // function swap(){
  //   console.log(inputRef.current);
  // }
  // const[name,setName]=useState('Jino');
  
   return (
    

    <BrowserRouter>
            <Routes>
              <Route path="/" element={<Content/>}></Route>
              <Route path="/view/:resume_id" element={<ViewPage/>}></Route>
                  {/* <Route path="/View/:resume_id" element={<ViewRouter/>}></Route> */}
                  {/* <Route path="/" element={<Login/>}></Route> */}
                  {/* <Route path="Header" element={<Header/>}></Route> */}
                  {/* <Route path="Home" element={<Home/>}></Route> */}
                  {/* <Route path="About" element={<About/>}></Route> */}
                  {/* <Route path="Contact" element={<Contact/>}></Route>  */}
                </Routes>
        </BrowserRouter>
    
   
    // <>
    //   {
    //   isLoggedIn?<Greetings uname={name} changeLogged={setLogged}/>:<Login changeLogged={setLogged} changeName={setName}/>
    //   }
    // </>
/* <>   
<input type="text" ref={inputRef} placeholder="Enter a value"/>
<button onClick={swap} >Click</button>
</> */
/* <UserContext.Provider value={{name,setName}}>
        // <Home/> */
        /* <About/>
        <Contact/> */
// </UserContext.Provider>



  );
}

export default App;
