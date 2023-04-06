import { Link, useNavigate } from "react-router-dom";
import RegisterMenu from "./RegisterMenu";
import LoginMenu from "./LoginMenu";
import { useContext, useEffect, useState, } from "react";
import logo from "../images/logo.png"
import { Image } from "react-bootstrap";
import { AuthContext } from "../AuthContext";

const Navbar = () => {

    const navigate = useNavigate();

    //State variables
    const [showLoginWindow, setShowLoginWindow] = useState(false);
    const [showRegWindow, setShowRegWindow] = useState(false);
    const { userId, setUserId } = useContext(AuthContext);

    //Handlers to open and close login window
    const handleToggleLoginWindow = () => {
        setShowLoginWindow(!showLoginWindow)
    }


    //Handlers to open and close registration window
    const handleToggleRegWindow = () => {
        setShowRegWindow(!showRegWindow)
    }

    const handleLogout = () => {
        setUserId('');
        navigate('/');
        
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark accent-color wrapper">
                <Image src={logo} className="navbar-logo" />
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            {userId && <Link className="nav-link" to="/profile">Profile <span className="sr-only">(current)</span></Link>}
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/services">Explore </Link>
                        </li>
                    </ul>
                    {userId ? (
                        <button className="btn btn-outline-light my-2 my-sm-0 ml-3" onClick={handleLogout}>Logout</button>
                    ) : (
                        <>
                            <button className="btn btn-outline-light my-2 my-sm-0 ml-3" onClick={handleToggleLoginWindow}>Login</button>
                            <button className="btn btn-outline-light my-2 my-sm-0 ml-3" onClick={handleToggleRegWindow}>Sign Up</button>
                        </>
                    )}
                </div>
            </nav>
            <RegisterMenu show={showRegWindow} onHide={handleToggleRegWindow} />
            <LoginMenu show={showLoginWindow} onHide={handleToggleLoginWindow} />

        </>


    )
}

export default Navbar;