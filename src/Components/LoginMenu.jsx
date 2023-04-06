import React, { useContext, useEffect, useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';
import { AuthContext } from '../AuthContext'


const LoginMenu = ({ show, onHide }) => {
  const { userId, setUserId } = useContext(AuthContext);

  const [loginDetails,setLoginDetails] = useState([{}])

  const [formData, setFormData] = useState({
    loginEmail: '',
    loginPassword: '',
  });

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    axios.get('/user')
      .then((response) => (
        setLoginDetails(response.data.data)
      ))
      .catch((error) => console.log(error))
  }


  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleHide = () => {
    setFormData({
      loginId:'',
      loginEmail: '',
      loginPassword: '',
    });
    setErrors({
      loginEmail: '',
      loginPassword: '',
    });
    onHide();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check for errors
    const emailRegex = /\S+@\S+\.\S+/;
    let errors = {};
    if (!formData.loginEmail) {
      errors.loginEmail = 'Email is required';
    } else if (!emailRegex.test(formData.loginEmail)) {
      errors.loginEmail = 'Invalid email format';
    }

    if (!formData.loginPassword) {
      errors.loginPassword = 'Password is required';
    }

    setErrors(errors);

    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      // Send form data to server for processing
      // Close the window
      validation();
    }
  };

  const validation = () => {
    
    let success = false;
    loginDetails.forEach((login) => {
      if (formData.loginEmail === login.email &&  formData.loginPassword === login.password) {
        success = true;
        setUserId(login.user_cred_id);
        handleHide();
      }
      if (success) {
        setIsSuccess(true);
      } else {
        setErrors({ login: 'Invalid username or password' });
      }
      //console.log(errors);
    })

  }

  const login = () => {

  }

  // const onClickHandler = (event) => {
  //   event.preventDefault();
  //   let success = false;
  //   loginData.users.forEach((login) => {
  //     if (login.email === formData.loginEmail && login.password === formData.loginPassword) {
  //       success = true;
  //     }
  //   });

  //   console.log(success);

  //   if (success) {
  //     setIsSuccess(true);
  //   } else {
  //     setErrors({ login: 'Invalid username or password' });
  //   }
  //   console.log(errors);
  // };

  return (
    <Modal show={show} onHide={handleHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>User Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {errors.login ? <Alert variant="danger">{errors.login}</Alert> : null}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="loginEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="loginEmail"
              value={formData.loginEmail}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="loginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="loginPassword"
              value={formData.loginPassword}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="btn-block">
            Sign In
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginMenu;
