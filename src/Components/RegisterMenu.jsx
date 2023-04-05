import React, { useState } from 'react';

const RegisterMenu = ({ onClose }) => {

    //Email and password for registration
    const [formData, setFormData] = useState({
        regEmail: '',
        regPassword: '',
        regConfirmPassword: '',
    });

    // Error messages for each input
    const [errors, setErrors] = useState({
        regEmail: '',
        regPassword: '',
        regConfirmPassword: '',
    });


    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate the form data
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let hasError = false;
        const newErrors = {
            regEmail: '',
            regPassword: '',
            regConfirmPassword: '',
        };

        if (!formData.regEmail || !emailRegex.test(formData.regEmail)) {
            newErrors.regEmail = 'Please enter a valid email address';
            hasError = true;
        }

        //If you want password length validation, disable the comment for below
        // if (!formData.regPassword || formData.regPassword.length < 8) {
        //     newErrors.regPassword = 'Please enter a password with at least 8 characters';
        //     hasError = true;
        // }

        if (formData.regPassword !== formData.regConfirmPassword) {
            newErrors.regConfirmPassword = 'Passwords do not match';
            hasError = true;
        }

        setErrors(newErrors);

        if (!hasError) {
            // Send form data to server for processing
            console.log(formData);
            // Close the window
            onClose();
        }
    };

    //Handler for input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    //ID for each var:
    //Email: "regEmail"
    //Pwd:  "regPassword"
    //Checkbox: "regCheckBox"

    return (
        <div className="window-overlay" onClick={handleOverlayClick}>
            <div className="window-container">
                <div className="window border rounded shadow">
                    <div className="window-header">
                        <span className="window-title">User Registration</span>
                        <button className="window-close" onClick={onClose}>
                            &times;
                        </button>
                    </div>
                    <div className="window-content">
                        <form onSubmit={handleSubmit}>
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="regEmail">Email</label>
                                <input
                                    type="email"
                                    name="regEmail"
                                    id="regEmail"
                                    className={`form-control ${errors.regEmail ? 'is-invalid' : ''}`}
                                    value={formData.regEmail}
                                    onChange={handleInputChange}
                                    required
                                />
                                {errors.regEmail ? 
                                <div className="invalid-feedback">
                                    {errors.regEmail}</div>
                                    : null}
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="regPassword"
                                    id="regPassword"
                                    className={`form-control ${errors.regPassword ? 'is-invalid' : ''}`}
                                    value={formData.regPassword}
                                    onChange={handleInputChange}
                                    required
                                />
                                {/* {errors.regPassword 
                                && 
                                <div class="invalid-feedback">
                                    {errors.regPassword}
                                    </div>} */}
                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="password">Confirm Password</label>
                                <input
                                    type="password"
                                    name="regConfirmPassword"
                                    id="regConfirmPassword"
                                    className={`form-control ${errors.regConfirmPassword ? 'is-invalid' : ''}`}
                                    value={formData.regConfirmPassword}
                                    onChange={handleInputChange}
                                    required
                                />
                                {errors.regConfirmPassword 
                                ? 
                                <div className="invalid-feedback">
                                    {errors.regConfirmPassword}
                                    </div> : null}
                            </div>
                            <div className="mb-4">
                                <div className="col d-flex">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            onChange={handleCheckboxChange}
                                            type="checkbox"
                                            value=""
                                            id="regCheckBox"
                                            checked={isChecked} />
                                        <label className="form-check-label" htmlFor="regCheckBox">I am a freelancer</label>
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                id="regButton"
                                className={`btn btn-primary btn-block mb-4"`}
                            >Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default RegisterMenu;
