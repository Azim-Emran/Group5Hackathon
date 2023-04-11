
import { Card, Button, Image } from "react-bootstrap"
import { FaCogs } from "react-icons/fa";
import { useState,useEffect, useRef } from "react"
import Service from "./Service";
import ServiceRegistration from "./ServiceRegistration";

const Services = ({userId, sessionData, servicesData, }) => {
    const [filteredData, setFilteredData] = useState([]);
    //const [storageChanged, setStorageChanged] = useState(false);

    const [showServiceWindow, setShowServiceWindow] = useState(false);

    //Handlers to open and close login window
    const handleToggleServiceWindow = () => {
        setShowServiceWindow(!showServiceWindow)
    }

    // const updateServices = (updatedServices) => {
    //     setServicesData(updatedServices);
    //   }

    

    useEffect(() => {
        
        if(servicesData.length > 0){
            setFilteredData(servicesData.filter(item => item.user_cred_id == userId));

            //console.log("This is ",filteredData)
        }
      }, [servicesData,userId,sessionData]);

    function loggedInConditions () {
        return sessionData.isLoggedIn && sessionData.userId
    }
    

// const [services, setServices] = useState([
//     {
//         service_photo: "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg",
//         service_name: "name",
//         service_description: "description",
//         service_price: 12.00,
//         service_category: "category"
//     }, {
//         service_photo: "https://images.pexels.com/photos/8867237/pexels-photo-8867237.jpeg",
//         service_name: "Web Design",
//         service_description: "We will design a professional website for your business.",
//         service_price: 250.00,
//         service_category: "Web Design"
//     },
//     {
//         service_photo: "https://images.pexels.com/photos/8204319/pexels-photo-8204319.jpeg",
//         service_name: "Social Media Marketing",
//         service_description: "We will create and manage your social media accounts and campaigns.",
//         service_price: 150.00,
//         service_category: "Marketing"
//     },
//     {
//         service_photo: "https://images.pexels.com/photos/8204322/pexels-photo-8204322.jpeg",
//         service_name: "Logo Design",
//         service_description: "We will design a unique and memorable logo for your brand.",
//         service_price: 100.00,
//         service_category: "Graphic Design"
//     },
//     {
//         service_photo: "https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg",
//         service_name: "Content Writing",
//         service_description: "We will create high-quality and engaging content for your website or blog.",
//         service_price: 50.00,
//         service_category: "Writing"
//     }

// ])


//const [displayServices, setDisplayServices] = useState(services.reverse())  

return (
    <>
        {loggedInConditions() && filteredData.length == 0 &&
            <Card className="card-container shadow-sm p-5 align-items-center">
                <FaCogs size={300} />
                <Card.Text>
                    Seems like you have not yet provides any services yet!
                </Card.Text>
                <Button onClick={handleToggleServiceWindow}>Add a Service</Button>
            </Card>}

        <div className="row">
            {loggedInConditions() && filteredData.length > 0 &&
                <div className="col-md-4 col-sm-6">
                    <Card className="shadow-sm card-container align-items-center ">
                        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                            <Card.Text>You have more service to provide?
                            </Card.Text>
                            <Button variant="primary" onClick={handleToggleServiceWindow}>Add a Service</Button>
                        </Card.Body>
                    </Card>

                </div>}
            {filteredData.map((service, index) => (
                <div key={index} className="col-md-4 col-sm-6">
                    <Service data={service} /></div>
            ))}

        </div>
        <ServiceRegistration 
        data={filteredData} 
        show={showServiceWindow} 
        onHide={handleToggleServiceWindow}
        userId={userId}
        />
    </>

)
}

export default Services