import { Card, Button, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import Image1 from "../../images/graphic-design.jpg"
import Image2 from "../../images/photography-videography.jpg"
import Image3 from "../../images/writing-translation.jpg"
import Image4 from "../../images/programming-tech.jpg"
// import axios from "axios";

const ExploreServices = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    let sql;

    if (selectedCategory === "All") {
      sql = "SELECT * FROM service_post";
    } else {
      sql = `SELECT * FROM service_post WHERE service_category = '${selectedCategory}'`;
    }

    const response = await fetch(
      `https://us-central1-upnxt-fc294.cloudfunctions.net/api/sp?query=${sql}`
    );
    const data = await response.json();
    console.log(data); // check value of data

    setServices(data.data);
  };

  function imageHolder(photoLink) {
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
  

  const photoCategory = [
    "graphic-design.jpg",
    "photography-videography.jpg",
    "writing-translation.jpg",
    "programming-tech.jpg"
  ]

  useEffect(() => {
    fetchServices();
  }, [selectedCategory]);

  return (
    <>
      <div class="wrapper">
        {/* <div>
          <Button
            class="btn btn-outline-primary mr-3"
            onClick={() => setSelectedCategory("All")}
          >
            All
          </Button>
          <Button
            class="btn btn-outline-primary mr-3"
            onClick={() => setSelectedCategory("graphicdesign")}
          >
            Graphic Design
          </Button>
          <Button
            class="btn btn-outline-primary mr-3"
            onClick={() => setSelectedCategory("photovideo")}
          >
            Photography & Videography
          </Button>
          <Button
            class="btn btn-outline-primary mr-3"
            onClick={() => setSelectedCategory("writetrans")}
          >
            Writing & Translation
          </Button>
          <Button
            class="btn btn-outline-primary mr-3"
            onClick={() => setSelectedCategory("programtech")}
          >
            Programming & Tech
          </Button>
        </div> */}

        <div className="row">
          {services.map((service) => (
            <div
              className="col-md-4 col-sm-6 row px-4"
              key={service.service_post_id}
            >
              <Card className="shadow-sm card-container">
                <Card.Body>
                  <Image variant="top" src={imageHolder(service.service_photo)} className="card-image" />
                  {/* <span>{service.service_photo}</span> */}
                  <Card.Title>{service.service_name}</Card.Title>
                  <Card.Text>{service.service_category}</Card.Text>
                  <p className="font-italic">{service.service_description}</p>
                  <p>${service.service_price}</p>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExploreServices;
