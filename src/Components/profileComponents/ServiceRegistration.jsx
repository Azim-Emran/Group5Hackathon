import { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import axios from "axios";
import Endpoints from "../../api/endpoint";

const ServiceRegistration = ({ show, onHide }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    //For dropdown

    const categoryList = [
        "Graphic Design",
        "Photography & Videography",
        "Writing & Translation",
        "Programming & Tech",
    ]
    const [formData, setFormData] = useState({
        serviceName: '',
        serviceDescription: '',
        servicePrice: '',
        serviceCategory: '',
        servicePhoto: '',
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setFormData({ ...formData, serviceCategory: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = validate(formData);
        switch (formData.serviceCategory) {
            case categoryList[0]:
                setFormData({ ...formData, servicePhoto: "../../images/graphic-design.jpg" })
                break;
            case categoryList[1]:
                setFormData({ ...formData, servicePhoto: "../../images/photography-videography.jpg" })
                break;
            case categoryList[2]:
                setFormData({ ...formData, servicePhoto: "../../images/writing-translation.jpg" })
                break;
            case categoryList[3]:
                setFormData({ ...formData, servicePhoto: "../../images/programming-tech.jpg" })
                break;
            default:
                setFormData({ ...formData, servicePhoto: "" })
        }
        if (Object.keys(errors).length === 0) {
            // try {
            //     await axios.post(Endpoints.POST, formData);
            //     // handle success (e.g. show a success message)
            //     console.log('Service added successfully');
            // } catch (error) {
            //     // handle error (e.g. show an error message)
            //     console.log('Error adding service', error);
            // }
            //User cred_ID not yet prepared, so can't test this.
        } else {
            setErrors(errors);
        }
    };

    const validate = (formData) => {
        let errors = {};

        if (!formData.serviceName) {
            errors.serviceName = "Please enter a service name.";
        }

        if (!formData.serviceDescription) {
            errors.serviceDescription = "Please enter a service description.";
        }

        if (!formData.servicePrice) {
            errors.servicePrice = "Please enter a service price.";
        } else if (!/^\d+(\.\d{1,2})?$/.test(formData.servicePrice)) {
            errors.servicePrice = "Please enter a valid price.";
        }

        if (!formData.serviceCategory) {
            errors.serviceCategory = "Please select a category.";
        }

        return errors;
    };


    // Reset the form data and errors when the modal is closed
    const handleHide = () => {
        setFormData({
            serviceName: '',
            serviceDescription: '',
            servicePrice: '',
        });
        setErrors({
            serviceName: '',
            serviceDescription: '',
            servicePrice: '',
            serviceCategory: '',
        });
        setSelectedCategory('')
        onHide();
    };

    return (
        <>

            <Modal show={show} onHide={handleHide} centered dialogClassName="">
                <Modal.Header closeButton>
                    <Modal.Title>Add New Service</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        {/* ======== SERVICE NAME ========== */}
                        <Form.Group controlId="serviceName" className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                name="serviceName"
                                value={formData.service_name}
                                onChange={handleInputChange}
                                required
                                isInvalid={!!errors.serviceName}
                            />
                            <Form.Control.Feedback type="invalid" className="mb-3">
                                {errors.serviceName}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <div className="row">
                            {/* ======== SERVICE CATEGORY ========== */}
                            <Form.Group controlId="serviceCategory" className="mb-3 col-6">
                                <Form.Label>Category</Form.Label>
                                <Form.Control as="select" value={selectedCategory} onChange={handleCategoryChange} required>
                                    <option value="" selected disabled></option>
                                    <option value={categoryList[0]}>Graphic Design</option>
                                    <option value={categoryList[1]}>Photography & Videography</option>
                                    <option value={categoryList[2]}>Writing & Translation</option>
                                    <option value={categoryList[3]}>Programming & Tech</option>
                                </Form.Control>
                            </Form.Group>

                            {/* ======== SERVICE PRICE ========== */}
                            <Form.Group controlId="servicePrice" className="mb-3 col-6">
                                <Form.Label>Price</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>$</InputGroup.Text>
                                    <Form.Control
                                        type="number"
                                        name="servicePrice"
                                        value={formData.servicePrice}
                                        onChange={handleInputChange}
                                        required
                                        isInvalid={!!errors.servicePrice}
                                    />
                                </InputGroup>
                                <Form.Control.Feedback type="invalid" className="mb-3">
                                    {errors.servicePrice}
                                </Form.Control.Feedback>
                            </Form.Group>

                        </div>

                        {/* ======== SERVICE DECSRIPTION ========== */}
                        <Form.Group controlId="serviceDescription" className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea" rows={3}
                                name="serviceDescription"
                                value={formData.service_description}
                                onChange={handleInputChange}
                                required
                                isInvalid={!!errors.serviceDescription}
                            />
                            <Form.Control.Feedback type="invalid" className="mb-3">
                                {errors.serviceDescription}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button
                            variant="primary" type="submit" className='btn-block'>
                            Add Service
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ServiceRegistration;