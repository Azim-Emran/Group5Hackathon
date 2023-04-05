import { Card, Button, Image } from "react-bootstrap"

const Service = (props) => {

    return (
        <a className="">
            <Card className="card-container shadow-sm  align-items-center col">
                <Image variant="top" src={props.service_photo} />
                <Card.Body>
                    <Card.Title>{props.service_title}</Card.Title>
                    <Card.Text>
                        {props.service_category}
                    </Card.Text>
                </Card.Body>
            </Card>

        </a>

    )

}

export default Service;