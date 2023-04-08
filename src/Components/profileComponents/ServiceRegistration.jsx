import { useState, useEffect } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import axios from "axios";
import Endpoints from "../../api/endpoint";

const ServiceRegistration = ({ show, onHide, data, updateServices }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    //For dropdown

    const [spData, setSpData] = useState([]);
    const [services, setServices] = useState([])

    useEffect(() => {
        const storedData = localStorage.getItem('postServiceData')
        if (storedData) {
            setSpData(JSON.parse(storedData))
        }
        console.log(storedData)
        console.log(spData)


    }, [])

    // Save data to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('postServiceData', JSON.stringify(spData));
    }, [spData]);

    const categoryList = [
        "Graphic Design",
        "Photography & Videography",
        "Writing & Translation",
        "Programming & Tech",
    ]
    const [formData, setFormData] = useState({
        service_name: '',
        service_description: '',
        service_price: '',
        service_category: '',
        service_photo: '',
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setFormData({ ...formData, service_category: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validate(formData);
        switch (formData.service_category) {
            case categoryList[0]:
                setFormData({ ...formData, service_photo: "../images/graphic-design.jpg" })
                break;
            case categoryList[1]:
                setFormData({ ...formData, service_photo: "../images/photography-videography.jpg" })
                break;
            case categoryList[2]:
                setFormData({ ...formData, service_photo: "../images/writing-translation.jpg" })
                break;
            case categoryList[3]:
                setFormData({ ...formData, service_photo: "../images/programming-tech.jpg" })
                break;
            default:
                setFormData({ ...formData, service_photo: "" })
        }
        if (Object.keys(errors).length === 0) {

            //insert formData to spData 
            insertData()
        } else {
            setErrors(errors);
        }
    };

    const insertData = () => {

        const updatedServices = [...data];
        updatedServices.push(formData);
        updateServices(updatedServices);
        handleHide();

    }

    const validate = (formData) => {
        let errors = {};

        if (!formData.service_name) {
            errors.serviceName = "Please enter a service name.";
        }

        if (!formData.service_description) {
            errors.serviceDescription = "Please enter a service description.";
        }

        if (!formData.service_price) {
            errors.servicePrice = "Please enter a service price.";
        } else if (!/^\d+(\.\d{1,2})?$/.test(formData.service_price)) {
            errors.servicePrice = "Please enter a valid price.";
        }

        if (!formData.service_category) {
            errors.serviceCategory = "Please select a category.";
        }

        return errors;
    };


    // Reset the form data and errors when the modal is closed
    const handleHide = () => {
        setFormData({
            service_name: '',
            service_description: '',
            service_price: '',
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
                        <Form.Group controlId="service_name" className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                name="service_name"
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
                            <Form.Group controlId="service_category" className="mb-3 col-6">
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
                            <Form.Group controlId="service_price" className="mb-3 col-6">
                                <Form.Label>Price</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>$</InputGroup.Text>
                                    <Form.Control
                                        type="number"
                                        name="service_price"
                                        value={formData.service_price}
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
                        <Form.Group controlId="service_description" className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea" rows={3}
                                name="service_description"
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