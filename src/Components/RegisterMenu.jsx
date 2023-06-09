import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
//import { hashPwd } from './processes/Hash';


const RegisterMenu = ({ show, onHide, showLoginMenu }) => {

    const [sessionData, setSessionData] = useState({});
    const [loginData, setLoginData] = useState([]);
    const [firstRender, setFirstRender] = useState(true);
    const [loginDetails, setLoginDetails] = useState([]);

    const fetchSessionData = () => {
        const storedSessionData = localStorage.getItem('login_session');

        if (storedSessionData) {
            const sessionObj = JSON.parse(storedSessionData);

            setSessionData({
                isLoggedIn: sessionObj.isLoggedIn,
                userId: sessionObj.userId,
            });
        }
    };

    useEffect(() => {
        fetchSessionData();
    }, [localStorage.getItem('login_session'), loginData,]);

    // useEffect(() => {
    //     // if (!firstRender) {
    //         fetchLoginData();
    //         if(loginDetails){
    //             if(!sessionData.isLoggedIn || !sessionData){
    //                 setSessionData({
    //                     isLoggedIn: true,
    //                     userId: loginDetails.userId
    //                 })
    //                 localStorage.setItem('userId', sessionData)
    //             }
    //         }
    //     // } else {
    //     //     setFirstRender(false);
    //     // }
    // },[loginData,sessionData,loginDetails])

    // const fetchLoginData = () => {
    //     axios.get('/user')
    //       .then((response) => (
    //         //setLoginDetails(response.data.data)
    //         console.log(response.data.data)
    //       ))
    //       .catch((error) => console.log(error))
    // } 

    // const navigate = useNavigate();

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

            // const hashedPassword = hashPwd(formData.regPassword)
            // console.log(hashedPassword)
            axios.post('/user', {
                email: formData.regEmail,
                password: formData.regPassword
            })
                .then(response => {
                    console.log('Response:', response.data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
                
                
            toast.success("You have successfully registered! Please login to continue!",{
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
              })
              showLoginMenu()
              handleHide()
            //   if(loginDetails.userId){
            //     navigate('/profile'+loginDetails.userId)
            //   }
            // console.log("Before post",formData) 
            //     setPostData({
            //         email: formData.regEmail,
            //         password: formData.regPassword
            //     })
            //     console.log(postData)   
            //     try {
            //         const response = axios.post('/user', postData);
            //         console.log('Response:', response.data, postData);
            //         navigate('/profile');
            //         handleHide();
            //     } catch (error) {
            //         console.error('Error:', error);
            //     }
            // if (!hasError) {
            //     setPostData({
            //         email: formData.regEmail,
            //         password: formData.regPassword
            //     })
            //     console.log("This is" +postData)
            //     axios.post('/user', postData)
            //         .then(response => {
            //             console.log('Response:', response.data, postData);
            //         })
            //         .catch(error => {
            //             console.error('Error:', error);
            //         });
            //     console.log(formData);

            // axios.get('/user')
            //     .then((response) => (
            //         setUserId(response.data.data[response.data.data.length - 1].user_cred_id)
            //     ))
            //     .catch((error) => console.log(error))
            //setUserId()
            // navigate('/profile')
            // Close the window
            // handleHide();
        }
    };

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
