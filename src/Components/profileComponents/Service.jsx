import { Card, Image } from "react-bootstrap"
import ServiceWindow from "./ServiceWindow";
import { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import Image1 from "../../images/graphic-design.jpg"
import Image2 from "../../images/photography-videography.jpg"
import Image3 from "../../images/writing-translation.jpg"
import Image4 from "../../images/programming-tech.jpg"

const Service = (data) => {

    const [showServiceWindow, setShowServiceWindow] = useState(false);

    //Handlers to open and close service window
    const handleToggleServiceWindow = () => {
        setShowServiceWindow(!showServiceWindow)
    }

    const tooltip = (
        <Tooltip>
            Click for more details
        </Tooltip>
    )

    const photoCategory = [
        "graphic-design.jpg",
        "photography-videography.jpg",
        "writing-translation.jpg",
        "programming-tech.jpg"
    ]
    
    function imageHolder(photoLink){
        switch (photoLink) {
            case photoCategory[0]:
                return Image1
            case photoCategory[1]:
                return Image2
            case photoCategory[2]:
                return Image3
            case photoCategory[3]:
                return Image4
            default:
                return ""
        }
    }

    return (

        <>
            <OverlayTrigger overlay={tooltip} placement="bottom">
                <a className="card-link text-decoration-none" onClick={handleToggleServiceWindow}>
                    <Card className="shadow-sm card-container s-container">
                        <Image variant="top" src={imageHolder(data.data.service_photo)} className="card-image" />
                        <Card.Body>
                            <Card.Title>{data.data.service_name}</Card.Title>
                            <Card.Text>
                                {data.data.service_category}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </a>
            </OverlayTrigger>
            <ServiceWindow show={showServiceWindow} onHide={handleToggleServiceWindow} data={data}  />
        </>

    )

}

export default Service;