import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Header,{Container,Footer} from './components/home';

function App() {
  const[name,setName]=useState("Poothurai");
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Footer placename={name} changeName={setName} />
  
  );
}

export default App;
