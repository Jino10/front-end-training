import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import React, { useState } from 'react';
import LoginPage from './LoginPage';
import UserContents from './UserContents';
import Home from './Home';


function App() {
   
     const[userDetails,setUserDetails]=useState({});

  return (
    <div>
      <UserContents.Provider value={{userDetails,setUserDetails}}>
       <BrowserRouter>
          <Routes>
              <Route path="/" element={<LoginPage/>}></Route>
              <Route path="/home" element={userDetails?.status=="success"?<Home/>:<LoginPage/>}></Route>
          </Routes>
       </BrowserRouter>
       </UserContents.Provider>
    </div>
  );
}

export default App;
