import { Card, Button, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const ExploreServices = () => {
  const [category, setCategory] = useState("");
  const [services, setServices] = useState([]);

  const handleCategoryClick = (category) => {
    setCategory(category);
    axios
      .get(
        `https://us-central1-upnxt-fc294.cloudfunctions.net/api/sp?service_category=${category}`
      )
      .then((response) => response.json())
      .then((data) => setServices(data));
  };

  return (
    <>
      <div class="wrapper">
        <div class="jumbotron jumbotron-fluid">
          <h1 class="display-4">Explore</h1>
          <p class="lead">
            Browse from a wide selection of services provided by talented
            freelancers.
          </p>
        </div>

        <div>
          <Button class="btn btn-outline-primary mr-3">All</Button>
          <Button
            class="btn btn-outline-primary mr-3"
            onClick={() => handleCategoryClick("graphicdesign")}
          >
            Graphic Design
          </Button>
          <Button class="btn btn-outline-primary mr-3">
            Photography & Videography
          </Button>
          <Button
            class="btn btn-outline-primary mr-3"
            onClick={() => handleCategoryClick("writetrans")}
          >
            Writing & Translation
          </Button>
          <Button class="btn btn-outline-primary mr-3">
            Programming & Tech
          </Button>
        </div>

      <div>
        {services.map(service => (
          <li key={service.id}>{service.name}</li>
        ))}
      </div>

      </div>
    </>
  );
};

export default ExploreServices;
