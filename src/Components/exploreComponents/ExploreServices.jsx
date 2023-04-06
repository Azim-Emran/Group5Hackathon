import { Card, Button, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
// import axios from "axios";

const ExploreServices = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, [selectedCategory]);

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

  return (
    <>
      <div class="wrapper">
        <div>
          <Button
            class="btn btn-outline-primary"
            onClick={() => setSelectedCategory("All")}
          >
            All
          </Button>
          <Button
            class="btn btn-outline-primary"
            onClick={() => setSelectedCategory("Graphic Design")}
          >
            Graphic Design
          </Button>
          <Button
            class="btn btn-outline-primary"
            onClick={() => setSelectedCategory("Photography & Videography")}
          >
            Photography & Videography
          </Button>
          <Button
            class="btn btn-outline-primary"
            onClick={() => setSelectedCategory("Writing & Translation")}
          >
            Writing & Translation
          </Button>
          <Button
            class="btn btn-outline-primary"
            onClick={() => setSelectedCategory("Programming & Tech")}
          >
            Programming & Tech
          </Button>
        </div>

        <div className="row">
          {services.map((service) => (
            <div
              className="col-md-4 col-sm-6 row"
              key={service.service_post_id}
            >
              <Card className="shadow-sm card-container">
                <Card.Body>
                  <span>{service.service_photo}</span>
                  <Card.Title>{service.service_name}</Card.Title>
                  <Card.Text>{service.service_category}</Card.Text>
                  <p>{service.service_description}</p>
                  <p>{service.service_price}</p>
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

