import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Endpoints from "../../API/Endpoints";
import { Button, Card } from "react-bootstrap";

const ExploreServices = () => {
  const [services, setServices] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchData = async () => {
    let endpoint = `https://us-central1-upnxt-fc294.cloudfunctions.net/api/sp/category/${selectedCategory}`;

    if (selectedCategory === null || selectedCategory === "All") {
      endpoint = `https://us-central1-upnxt-fc294.cloudfunctions.net/api/sp`;
    }

    const response = await fetch(endpoint);

    const data = await response.json();
    console.log(data);

    setServices(data.data);
  };

  useEffect(() => {
    fetchData();
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    if (category === "All") {
      setSelectedCategory(null);
    }
    setSelectedCategory(category);
  };

  return (
    <>
      <div class="wrapper">
        <div>
          <button
            class="btn btn-outline-dark mr-3"
            onClick={() => handleCategoryClick("All")}
          >
            All
          </button>
          <button
            class="btn btn-outline-dark mr-3"
            onClick={() => handleCategoryClick("Graphic Design")}
          >
            Graphic Design
          </button>
          <button
            class="btn btn-outline-dark mr-3"
            onClick={() => handleCategoryClick("Photography & Videography")}
          >
            Photography & Videography
          </button>
          <button
            class="btn btn-outline-dark mr-3"
            onClick={() => handleCategoryClick("Writing & Translation")}
          >
            Writing & Translation
          </button>
          <button
            class="btn btn-outline-dark mr-3"
            onClick={() => handleCategoryClick("Programming & Tech")}
          >
            Programming & Tech
          </button>
        </div>

        <div className="row">
          {services.map((service) => (
            <div
              className="col-md-4 col-sm-6 row px-4"
              key={service.service_post_id}
            >
              <Card className="shadow-sm card-container">
                <Card.Body>
                  <span>{service.service_photo}</span>
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
