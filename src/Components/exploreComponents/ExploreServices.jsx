import { Card, Button, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
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

    /*     if (Array.isArray(data)) {
      // if data is an array, set services to data
      setServices(data);
    } else if (data && Array.isArray(data.data)) {
      // if data is an object with a 'data' prop containing an array, set services to data.data
      setServices(data.data);
    } else {
      // handle other cases where the response data is not an array
      console.log("Invalid response data");
    } */

    setServices(data);
  };

  useEffect(() => {
    fetchServices();
  }, [selectedCategory]);

  return (
    <>
      <div class="wrapper">
        <div>
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
        </div>

        <div className="row">
          {services.data &&
            services.data.map((service) => (
              <div
                className="col-md-4 col-sm-6 row"
                key={service.service_post_id}
              >
                <Card className="shadow-sm card-container">
                  <Card.Body>
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
