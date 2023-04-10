import { Card, Image } from "react-bootstrap"
import ServiceWindow from "./ServiceWindow";
import { useState } from "react";

const Service = ({userId, sessionData, service}) => {

    const [showServiceWindow, setShowServiceWindow] = useState(false);

    //Handlers to open and close service window
    const handleToggleServiceWindow = () => {
        setShowServiceWindow(!showServiceWindow)
    }

    return (

        <>
        <a className="card-link text-decoration-none" onClick={handleToggleServiceWindow}>
            <Card className="shadow-sm card-container s-container">
                {/* <Image variant="top" src={data.props.service_photo} className="card-image" /> */}
                <Card.Body>
                    <Card.Title>{data.props.service_name}</Card.Title>
                    <Card.Text>
                        {data.props.service_category}
                    </Card.Text>
                </Card.Body>
            </Card>
        </a>
        <ServiceWindow show={showServiceWindow} onHide={handleToggleServiceWindow} data={data} />
        </>

    )

}

export default Service;