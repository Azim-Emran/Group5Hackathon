import { Card, Image } from "react-bootstrap"
import { BsGear, BsEnvelopeAt } from "react-icons/bs"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import { useContext, useState, useEffect } from "react";
import axios from 'axios';
import { AuthContext } from "../../AuthContext";


const Name = () => {
    const { userId, setUserId } = useContext(AuthContext);

    const tooltip = (
        <Tooltip>
            Edit
        </Tooltip>
    )

    useEffect(() => {
        fetchData()
      }, [])

      const fetchData = () => {
        axios.get('/sp',{
        })
          .then((response) => (
            console.log(response.data.data)
          ))
          .catch((error) => console.log(error))
      }
    return (
        <Card className="card-container shadow-sm ">
            <Card.Body className="row">
                <div className="col-3">
                <Image className="profile-image" src="https://www.alchinlong.com/wp-content/uploads/2015/09/sample-profile.png" rounded/>
                </div>
                <div className="col-9">
                <Card.Title className="font-weight-bold d-flex justify-content-between align-items-center">
                    Hilda Machilda 
                    {userId && <OverlayTrigger overlay={tooltip}><BsGear/></OverlayTrigger> }    
                </Card.Title>
                <Card.Text className="font-weight-light">
                As a freelance web developer, I specialize in creating dynamic and responsive websites that are tailored to your needs. Whether you need a simple landing page or a complex web application, I have the skills and expertise to deliver exceptional results. My services range from graphic design, including branding and visual identity, to programming and tech, including web development and e-commerce solutions. With years of experience in the industry, I pride myself on delivering quality work that exceeds expectations. Let's work together to bring your vision to life!
                </Card.Text>
                <Card.Text>
                    <BsEnvelopeAt/> testemail@gmail.com
                </Card.Text>

                </div>
            </Card.Body>
        </Card>
    )
}

export default Name