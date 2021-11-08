import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { faBars,faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Navbar() {
    let path = useLocation();
    const [btn,setButton] = useState(false);

    const toogleChecked = () => setButton(value => !value);

    console.log(btn);
    return (
    <div className="navbar">
        {btn ?  <FontAwesomeIcon icon={faTimes} className="icon addAnimation" onClick={toogleChecked} style={{color:"white"}}/> : <FontAwesomeIcon icon={faBars} className="icon" onClick={toogleChecked} style={{color:"white"}}/> }
           <nav className={btn ? '' : 'nav-hide'}>
               <ul>
                   <li><Link to="/" style={{ textDecoration: 'none' }} >Home</Link></li>
                   <li><Link to="/aboutapp" style={{ textDecoration: 'none' }} className={path.pathname==='/aboutapp' ? "" : "active"}>About App</Link></li>
                   <li><Link to="/aboutauthor" style={{ textDecoration: 'none' }} className={path.pathname==='/aboutauthor' ? "" : "active"}>About Author</Link></li>
                   <li><Link to="/form" style={{ textDecoration: 'none' }} className={path.pathname==='/form' ? "" : "active"}>Form</Link></li>
               </ul>
           </nav>
        </div>
    )
}


