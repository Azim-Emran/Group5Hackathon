import axios from 'axios';
import React, { useState, useContext } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext'


const RegisterMenu = ({ show, onHide }) => {
    const { userId, setUserId } = useContext(AuthContext);
    const navigate = useNavigate();

    // Email and password for registration
    const [formData, setFormData] = useState({
        regEmail: '',
        regPassword: '',
        regConfirmPassword: '',
    });

    const [postData, setPostData] = useState({
        email: '',
        password: ''
    })

    // Error messages for each input
    const [errors, setErrors] = useState({
        regEmail: '',
        regPassword: '',
        regConfirmPassword: '',
    });

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

        if (formData.regPassword !== formData.regConfirmPassword) {
            newErrors.regConfirmPassword = 'Passwords do not match';
            hasError = true;
        }

        setErrors(newErrors);

        if (!hasError) {
            setPostData({
                email: formData.regEmail,
                password: formData.regPassword
            })
            axios.post('/user', postData)
                .then(response => {
                    console.log('Response:', response.data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            console.log(formData);

            axios.get('/user')
                .then((response) => (
                    setUserId(response.data.data[response.data.data.length - 1].user_cred_id)
                ))
                .catch((error) => console.log(error))
            setUserId()
            navigate('/profile')
            // Close the window
            handleHide();
        }
    };

    const registerSuccess = () => {

    }

    // Handler for input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };


    // Reset the form data and errors when the modal is closed
    const handleHide = () => {
        setFormData({
            regEmail: '',
            regPassword: '',
            regConfirmPassword: '',
        });
        setErrors({
            regEmail: '',
            regPassword: '',
            regConfirmPassword: '',
        });
        onHide();
    };


    //ID for each var:
    //Email: "regEmail"
    //Pwd:  "regPassword"
    //Checkbox: "regCheckBox"

    return (
        <Modal show={show} onHide={handleHide} centered>
            <Modal.Header closeButton={true}>
                <Modal.Title>User Registration</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="regEmail" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="regEmail"
                            value={formData.regEmail}
                            onChange={handleInputChange}
                            required
                            isInvalid={!!errors.regEmail}
                        />
                        <Form.Control.Feedback type="invalid" className="mb-3">
                            {errors.regEmail}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="regPassword" className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="regPassword"
                            value={formData.regPassword}
                            onChange={handleInputChange}
                            required
                            isInvalid={!!errors.regPassword}
                        />
                        <Form.Control.Feedback type="invalid" className="mb-3">
                            {errors.regPassword}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="regConfirmPassword" className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="regConfirmPassword"
                            value={formData.regConfirmPassword}
                            onChange={handleInputChange}
                            required
                            isInvalid={!!errors.regConfirmPassword}
                        />
                        <Form.Control.Feedback type="invalid" className="mb-3">
                            {errors.regConfirmPassword}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit" className='btn-block'>
                        Sign Up
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );

};

export default RegisterMenu;
