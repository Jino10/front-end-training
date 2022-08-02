// import './log.css'

// function Login(props)
// {
//     return(
//         <div className='home'>
//             <button className="userClick" onClick={()=>{props.changeLogged(true);(props.changeName('Jino X'))}}>User-account</button>
//             <button className="guestClick" onClick={()=>{props.changeLogged(true);(props.changeName('Guest'))}}>Guest-account</button>
//         </div>
//     );
// }
// export default Login;
import App from "./App";
import React, {Link} from 'react-router-dom';
function Login()
{
    return(
        <div>
            <button className="btn btn-success"><Link to="/Header">Login</Link></button>
        </div>    
    );
}
export default Login;