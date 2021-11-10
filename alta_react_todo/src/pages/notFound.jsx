import { useNavigate } from "react-router-dom"
import Logo from "../assets/images/image_error.png"
const Notfound = () => {
    const navigate = useNavigate()
    const handleHome = () => navigate('/')
    return (
        <div class="d-flex justify-content-center align-items-center vh-100">
            <div>
                <img src={Logo} alt="not found" width="300px" height="300px" />
                <h3>Oops something went wrong!!!</h3>
                <button onClick={handleHome} className="btn btn-outline-primary btn-lg">Go Back To Home </button>
            </div>
        </div>
    )
}

export default Notfound;