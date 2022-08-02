function Skills(props)
{
    const list=["HTML","CSS","JavaScript","Bootstrap"];
    return(
        <ul>
         {
            list.map((value,index)=>
            <li key={index}>{value}</li>)
         }
         </ul>
    );
}

function Footer(props)
{
    return(
        <div>
            <p>@Copyrights 2022</p>
            <button onClick={()=>props.setLoggedOut(false)}>Logout</button>
        </div>
    );
}

function Greetings(props)
{
    return (
    <div>
    <h1>Welcome to {props.uname} </h1>
    <Skills></Skills>
    <Footer setLoggedOut={props.changeLogged}></Footer>
    </div>
    );
}
export default Greetings;