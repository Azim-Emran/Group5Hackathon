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

    setServices(data);
    console.log("Services:", services);
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

        <div>
          <ul>
            {services.data &&
              services.data.map((service) => (
                <li key={service.service_post_id}>
                  <h2>{service.service_name}</h2>
                  <p>{service.service_description}</p>
                  <p>{service.service_price}</p>
                  <p>{service.service_category}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ExploreServices;
