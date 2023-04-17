import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import Endpoints from "../../api/Endpoints";
import { toast } from "react-toastify";


const ServiceRegistration = ({ show, onHide, data, userId }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [errors,setErrors] = useState([])
    
    const [firstRender, setFirstRender] = useState(true);
    //For dropdown

    //const [spData, setSpData] = useState([]);

    // Save data to local storage whenever it changes
    // useEffect(() => {
    //     localStorage.setItem('postServiceData', JSON.stringify(spData));
    // }, [spData]);

    const categoryList = [
        "Graphic Design",
        "Photography & Videography",
        "Writing & Translation",
        "Programming & Tech",
    ]
    const [formData, setFormData] = useState({
        name: '',
        desc: '',
        price: '',
        cat: '',
        photo: '',
    });
    const photoCategory = [
        "graphic-design.jpg",
        "photography-videography.jpg",
        "writing-translation.jpg",
        "programming-tech.jpg",
    ]

    useEffect(() => {
        if (!firstRender) {
            const photo = getCategoryPhoto(formData.cat);
            setFormData({ ...formData, photo: photo, credid: userId });
        } else {
            setFirstRender(false);
        }
    }, [userId, data, formData.cat, firstRender]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setFormData({ ...formData, cat: event.target.value });
    };

    const getCategoryPhoto = (category) => {
        const categoryIndex = categoryList.indexOf(category);
        return photoCategory[categoryIndex];
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validate(formData);

        // console.log(formData.cat)
        // console.log(formData.photo)
        if (Object.keys(errors).length === 0) {
            setFormData({ ...formData, photo: "" })
            //insert formData to spData 
            insertData()
            toast   .success("You have successfully added a new service!",{
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
            })
        } else {
            setErrors(errors);
        }
    };

    // const insertData = () => {

    //     const updatedServices = [...data];
    //     updatedServices.push(formData);
    //     updateServices(updatedServices);
    //     handleHide();

    // }

    const insertData = () => {

        setFormData({ ...formData, credid: userId })
        axios.post('/sp', formData)
        handleHide()

    }
    const validate = (formData) => {
        let errors = {};

        if (!formData.name) {
            errors.serviceName = "Please enter a service name.";
        }

        if (!formData.desc) {
            errors.serviceDescription = "Please enter a service description.";
        }

        if (!formData.price) {
            errors.servicePrice = "Please enter a service price.";
        } else if (!/^\d+(\.\d{1,2})?$/.test(formData.price)) {
            errors.servicePrice = "Please enter a valid price.";
        }

        if (!formData.cat) {
            errors.serviceCategory = "Please select a category.";
        }

        return errors;
    };


    // Reset the form data and errors when the modal is closed
    const handleHide = () => {
        setFormData({
            name: '',
            desc: '',
            price: '',
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
                        <Form.Group controlId="name" className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                isInvalid={!!errors.serviceName}
                                autoComplete="off"
                            />
                            <Form.Control.Feedback type="invalid" className="mb-3">
                                {errors.serviceName}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <div className="row">
                            {/* ======== SERVICE CATEGORY ========== */}
                            <Form.Group controlId="cat" className="mb-3 col-6">
                                <Form.Label>Category</Form.Label>
                                <Form.Control as="select" value={selectedCategory} onChange={handleCategoryChange} required>
                                    <option value="" selected disabled>Choose a category</option>
                                    <option value={categoryList[0]}>Graphic Design</option>
                                    <option value={categoryList[1]}>Photography & Videography</option>
                                    <option value={categoryList[2]}>Writing & Translation</option>
                                    <option value={categoryList[3]}>Programming & Tech</option>
                                </Form.Control>
                            </Form.Group>

                            {/* ======== SERVICE PRICE ========== */}
                            <Form.Group controlId="price" className="mb-3 col-6">
                                <Form.Label>Price</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>$</InputGroup.Text>
                                    <Form.Control
                                        type="number"
                                        name="price"
                                        value={formData.price}
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
                        <Form.Group controlId="desc" className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea" rows={3}
                                name="desc"
                                value={formData.desc}
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