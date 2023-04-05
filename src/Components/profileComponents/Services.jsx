
import { Card, Button, Image } from "react-bootstrap"
import { FaCogs } from "react-icons/fa";
import { useState } from "react"
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([
        {
            service_photo: "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg",
            service_name: "name",
            service_description: "description",
            service_price: 12.00,
            service_category: "category"
        }, {
            service_photo: "https://images.pexels.com/photos/8867237/pexels-photo-8867237.jpeg",
            service_name: "Web Design",
            service_description: "We will design a professional website for your business.",
            service_price: 250.00,
            service_category: "Web Design"
        },
        {
            service_photo: "https://images.pexels.com/photos/8204319/pexels-photo-8204319.jpeg",
            service_name: "Social Media Marketing",
            service_description: "We will create and manage your social media accounts and campaigns.",
            service_price: 150.00,
            service_category: "Marketing"
        },
        {
            service_photo: "https://images.pexels.com/photos/8204322/pexels-photo-8204322.jpeg",
            service_name: "Logo Design",
            service_description: "We will design a unique and memorable logo for your brand.",
            service_price: 100.00,
            service_category: "Graphic Design"
        },
        {
            service_photo: "https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg",
            service_name: "Content Writing",
            service_description: "We will create high-quality and engaging content for your website or blog.",
            service_price: 50.00,
            service_category: "Writing"
        }

    ])

    return (
        <>
            <Card className="card-container shadow-sm p-5 align-items-center">
                <FaCogs size={300} />
                <Card.Text>
                    Seems like you have not yet provides any services yet!
                </Card.Text>
                <Button>Add a Service</Button>
            </Card>

            <div className="row">
                {/* {services.map((service, index) => (
                    <div key={index}>
                        <Service props={service} /></div>
                ))} */}
                <a className="">
                    <Card className="card-container shadow-sm align-items-center col-4">
                        <Image variant="top" src={services[0].service_photo} className="card-image"/>
                        <Card.Body>
                            <Card.Title>{services[0].service_title}</Card.Title>
                            <Card.Text>
                                {services[0].service_category}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </a>


            </div>
        </>

    )
}

export default Services