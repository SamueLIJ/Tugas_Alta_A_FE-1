import React from 'react'
import { Link} from 'react-router-dom';
import Logo from './image_error.png'
export default function Notfound() {
    return (
        <div className="wp" style={{backgroundColor:"white"}}>
            <img src={Logo} alt="not found" width="300px" height="300px" />
            <h4>Oops something went wrong!!!</h4>
            <Link to="/" style={{ color:'white', textDecoration:'none' }}><button className="nfb">BACK TO HOME</button></Link>
        </div>
    )
}


