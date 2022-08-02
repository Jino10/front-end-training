import './home.css';
import React,{useState} from 'react';


function Header()
{
    const[name,setName]=useState("Messi");
return (
     <nav className="Header">
          <h1>WELCOME!!!</h1>
          <h4>{name}</h4>
          <span>LOGO</span>
          <button onClick={()=>setName("Ronaldo")}>Change</button>
     </nav>
);
}

function Container()
{
   const  [lists,setCourse]=useState(["PHP","JSX","HTML","CSS"]);
return (
     <section className='content'>
          <h1>CONTAINER</h1>
          {lists.map((v,k)=><li key={k}>{v}</li>)}
          <button onClick={()=>setCourse(
            [...lists,'CSS']
          )}>Add value</button>
     </section>

);
}

function Footer(props)
{
return (
     <div className='footer'>
          <h1>FOOTER</h1>
          <h1>Welcome to {props.placename}</h1>
          <button onClick={()=>props.changeName("Thoothoor")} >Change</button>
     </div>
);
}

export default Header;
export {Container,Footer};
