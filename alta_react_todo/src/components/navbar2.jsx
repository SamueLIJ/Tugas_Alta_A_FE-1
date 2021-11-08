import React from 'react'  
import { Link } from 'react-router-dom';

export default function Navbar2() {
    return (
        <div >
                
              <nav className="navbar2">
               <ul>
                   <li><Link to="/" style={{ textDecoration: 'none' }} >Home</Link></li>
                   <li><Link to="/aboutapp" style={{ textDecoration: 'none' }} >About App</Link></li>
                   <li><Link to="/aboutauthor" style={{ textDecoration: 'none' }} >About Author</Link></li>
                   <li><Link to="/form" style={{ textDecoration: 'none' }} >Form Registration</Link></li>
               </ul>
           </nav>
        </div>
    )
}


