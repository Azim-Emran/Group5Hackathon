import { Card, Image } from "react-bootstrap"
import { BsGear } from "react-icons/bs"
import { OverlayTrigger, Tooltip } from "react-bootstrap"

const Name = () => {

    const tooltip = (
        <Tooltip>
            Edit
        </Tooltip>
    )


    return (
        <Card className="card-container shadow-sm ">
            <Card.Body className="row">
                <div className="col-3">
                <Image className="profile-image" src="https://www.alchinlong.com/wp-content/uploads/2015/09/sample-profile.png" rounded/>
                </div>
                <div className="col-9">
                <Card.Title className="font-weight-bold d-flex justify-content-between align-items-center">
                    Username
                    <OverlayTrigger overlay={tooltip}><BsGear/></OverlayTrigger>    
                </Card.Title>
                <Card.Title >Firstname Lastname</Card.Title>
                <Card.Text className="font-weight-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi maxime quo accusamus eum obcaecati perferendis dolor, eaque nesciunt aperiam iusto!
                </Card.Text>

                </div>
            </Card.Body>
        </Card>
    )
}

export default Name