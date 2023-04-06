import React from "react";
import { Image } from "react-bootstrap";
import image1 from "../images/logo.png";
import image2 from "../images/image.png";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap";
import CarouselOne from "../images/c1.jpg";
import CarouselTwo from "../images/c2.jpg";
import CarouselThree from "../images/c3.jpg";
import JumbotronTwo from './JumbotronTwo'
import Testimonial from './Testimonial'

const Introduction = () => {
  return (
    <div className="homepage-container">
      <div className="wrapper row">
        <div className="col-12">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={CarouselOne} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={CarouselTwo} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={CarouselThree} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-target="#carouselExampleControls"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-target="#carouselExampleControls"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <JumbotronTwo />
      </div>
      <div className="container padding">
        <Testimonial />
      </div>
      <Divider />
    </div>
  );
};

export default Introduction;
