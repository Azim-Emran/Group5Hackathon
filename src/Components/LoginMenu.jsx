import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import loginData from '../test/loginData.json';

const LoginMenu = ({ show, onHide }) => {
  const [formData, setFormData] = useState({
    loginEmail: '',
    loginPassword: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleHide = () => {
    setFormData({
        loginEmail: '',
        loginPassword: '',
    });
    setErrors({
        regEmail: '',
        regPassword: '',
        regConfirmPassword: '',
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
      console.log(formData);
      // Close the window
      setIsSuccess(true);
      onHide();
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
      setErrors({ login: 'Invalid username or password' });
    }
    console.log(errors);
  };

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
          <Button variant="primary" type="submit" className="btn-block" onClick={onClickHandler}>
            Sign In
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginMenu;
