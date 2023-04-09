import { Link, useNavigate } from "react-router-dom";
import RegisterMenu from "./RegisterMenu";
import LoginMenu from "./LoginMenu";
import Logo from "../images/logo.png";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import { toast } from 'react-toastify';

import StyleLogo from "../Components/smallComponents/Logo.css";


//login_session is for login storage
const Navbar = () => {
//     const storedSessionData = localStorage.getItem('login_session')
    
//   console.log(localStorage.getItem('login_session'))
//     const [sessionData, setSessionData] = useState({})
//     if (storedSessionData) {
//         const sessionObj = JSON.parse(sessionData)
//         setSessionData({
//             isLoggedIn: sessionObj.isLoggedIn,
//             userId: sessionObj.user_cred_id,
//         })
//     }

    const navigate = useNavigate();

    //State variables
    const [showLoginWindow, setShowLoginWindow] = useState(false);
    const [showRegWindow, setShowRegWindow] = useState(false);
    //const { userId, setUserId } = useContext(AuthContext);


    //Handlers to open and close login window
    const handleToggleLoginWindow = () => {
        setShowLoginWindow(!showLoginWindow);
    };

    //Handlers to open and close registration window
    const handleToggleRegWindow = () => {
        setShowRegWindow(!showRegWindow);
    };

    //Handler when logging out
    const handleLogout = () => {
        //localStorage.removeItem('myapp_session');
        localStorage.clear();
        toast.success("You have successfully logged out",{
            position: 'bottom-right',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
          });
        navigate('/');

    }

    return (
        <>
        
            <nav className="navbar navbar-expand-lg navbar-dark accent-color wrapper">
                <img src={Logo} alt="" className="logo" />
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            {/* {sessionData.userId && sessionData.isLoggedIn &&
                                <Link className="nav-link" to="/profile">Profile <span className="sr-only">(current)</span></Link>} */}
                        </li>
                        <li className="nav-item dropdown">
                            <div>
                                <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Explore
                                </a>
                            </div>
                            <ul className="dropdown-menu mb-n1 mt-n1" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item py-3" to="/users">Freelancers</Link></li>
                                <li><Link className="dropdown-item py-3" to="/services">Services</Link></li>
                            </ul>
                        </li>
                    </ul>

                    {/* {sessionData.userId && sessionData.isLoggedIn ? (
                        <button className="btn btn-outline-light my-2 my-sm-0 ml-3" onClick={handleLogout}>Logout</button>
                    ) : (
                        <>
                            <button className="btn btn-outline-light my-2 my-sm-0 ml-3" onClick={handleToggleLoginWindow}>Login</button>
                            <button className="btn btn-outline-light my-2 my-sm-0 ml-3" onClick={handleToggleRegWindow}>Sign Up</button>
                        </>
                    )} */}
                    <button className="btn btn-outline-light my-2 my-sm-0 ml-3" onClick={handleToggleLoginWindow}>Login</button>
                    <button className="btn btn-outline-light my-2 my-sm-0 ml-3" onClick={handleLogout}>Logout</button>
                </div>
            </nav>
            <RegisterMenu show={showRegWindow} onHide={handleToggleRegWindow} />
            <LoginMenu show={showLoginWindow} onHide={handleToggleLoginWindow} />

        </>


    )
}

export default Navbar;
