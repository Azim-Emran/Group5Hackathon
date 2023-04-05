import React, { useState } from 'react';
import loginData from '../test/loginData.json'

const LoginMenu = ({ onClose }) => {

    const [formData, setFormData] = useState({
        loginEmail: '',
        loginPassword: ''
    });
    const [isSuccess, setIsSuccess] = useState(false)


    const [errors, setErrors] = useState({});

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check for errors
        const emailRegex = /\S+@\S+\.\S+/;
        let errors = {};
        if (!formData.loginEmail) {
            errors.loginEmail = "Email is required";
        } else if (!emailRegex.test(formData.loginEmail)) {
            errors.loginEmail = "Invalid email format";
        }

        if (!formData.loginPassword) {
            errors.loginPassword = "Password is required";
        }

        setErrors(errors);

        // If there are no errors, submit the form
        if (Object.keys(errors).length === 0) {
            // Send form data to server for processing
            console.log(formData);
            // Close the window
            onClose();
        }
    };

    const onClickHandler = (event) => {
        event.preventDefault();
        let success = false;
        loginData.users.forEach((login) => {
            if (login.email === formData.loginEmail && login.password === formData.loginPassword) {
                success = true;
            }
        });

        console.log(success);
    
        if (success) {
            setIsSuccess(true);
        } else {
            setErrors({ login: "Invalid username or password" });
        }
        console.log(errors);
    };
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    //ID for each var:
    //Email: "loginEmail"
    //Pwd:  "loginPassword"

    return (
        <div className="window-overlay" onClick={handleOverlayClick}>
            <div className="window-container">
                <div className="window border rounded shadow">
                    <div className="window-header">
                        <span className="window-title">User Login</span>
                        <button className="window-close" onClick={onClose}>
                            &times;
                        </button>
                    </div>
                    {errors.login ? <div className="invalid-feedback">{errors.login}</div> : null}
                    <div className="window-content">
                        <form onSubmit={handleSubmit}>
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="regEmail">Email</label>
                                <input
                                    type="email"
                                    name="loginEmail"
                                    id="loginEmail"
                                    className="form-control"
                                    value={formData.loginEmail}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="loginPassword"
                                    id="loginPassword"
                                    className="form-control"
                                    value={formData.loginPassword}
                                    onChange={handleInputChange}
                                    required
                                />

                            </div>
                            <button
                                type="submit"
                                id="loginButton"
                                className="btn btn-primary btn-block mb-4"
                                onClick={onClickHandler}
                            >Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LoginMenu;
