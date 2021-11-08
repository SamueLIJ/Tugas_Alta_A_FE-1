import Navbar2 from "./navbar2";
export default function AboutApp() {
    return (  
        <div className="about-nav">
            <Navbar2/>
            <div style={{justifyContent:'center', alignItems:'center', height: '100vh'}}>
                <h1> About The App </h1>
                <p style={{color:"black"}}>This is a to do list website app</p>
            </div>
        </div>
    );
}
 
