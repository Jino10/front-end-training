import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Greetings from './Greetings';
import Technology from './Company';
import Forms from './Form';
import TableContent from './table';
import Apps from './select';
import Login from './Login';
import Header,{Home,About,Contact} from './Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Apps/> */}
    {/* <Forms/> */}
    {/* <Technology/> */}
    {/* <TableContent/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
