import { Link } from "react-router-dom";
import RegisterMenu from "./RegisterMenu";
import LoginMenu from "./LoginMenu";
import { useState } from "react";
import Logo from "../images/logo.png";
import StyleLogo from "../Components/smallComponents/Logo.css";

const Navbar = () => {
  //State variables
  const [showLoginWindow, setShowLoginWindow] = useState(false);
  const [showRegWindow, setShowRegWindow] = useState(false);
  const [isUser, setIsUser] = useState(true);

  //Handlers to open and close login window
  const handleToggleLoginWindow = () => {
    setShowLoginWindow(!showLoginWindow);
  };

  //Handlers to open and close registration window
  const handleToggleRegWindow = () => {
    setShowRegWindow(!showRegWindow);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark accent-color wrapper">
        <div className="navbar-brand">
          <img src={Logo} alt="" className="logo" />
        </div>
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              {isUser && (
                <Link className="nav-link" to="/profile">
                  Profile <span className="sr-only">(current)</span>
                </Link>
              )}
            </li>
          </ul>
          {!isUser && (
            <>
              <button
                className="btn btn-outline-light my-2 my-sm-0 ml-3"
                onClick={handleToggleLoginWindow}
              >
                Login
              </button>
              <button
                className="btn btn-outline-light my-2 my-sm-0 ml-3"
                onClick={handleToggleRegWindow}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </nav>
      <RegisterMenu show={showRegWindow} onHide={handleToggleRegWindow} />
      <LoginMenu show={showLoginWindow} onHide={handleToggleLoginWindow} />
    </>
  );
};

export default Navbar;
