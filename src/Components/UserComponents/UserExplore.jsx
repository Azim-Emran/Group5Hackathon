import { Card, Button, Image, Modal } from "react-bootstrap";
import { useState, useEffect, createContext } from "react";
import { FreelancerContext } from "./FreelancerContext";
import { Link, useNavigate } from "react-router-dom";


// import axios from "axios";

const UserExplore = () => {
  const [selectedName, setSelectedName] = useState("All");
  const [freelancers, setFreelancers] = useState([]);
  const [freelancerContext, setFreelancerContext] = useState("default");

  const fetchServices = async () => {
    const response = await fetch(
      `https://us-central1-upnxt-fc294.cloudfunctions.net/api/ud`
    );
    const data = await response.json();
    console.log(data); // check value of data

    setFreelancers(data.data);
  };

  useEffect(() => {
    fetchServices();
  }, [selectedName]);

  //pop-up
  // const [showFreelancerWindow, setshowFreelancerWindow] = useState(false);
  // const handleToggleFreelancerWindow = () => {
  //   setshowFreelancerWindow(!showFreelancerWindow);
  // };

  return (
    <>
    <FreelancerContext.Provider value={{freelancerContext}}>
      <div class="wrapper">
        <div>
          {/* <button
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
          </button> */}
        </div>
        <div className="row">
          {freelancers.map((freelancer) => (
            <div
              className="col-md-3 col-sm-6 row px-4"
              key={freelancer.user_details_id}
            >
              <Card className="shadow-sm card-container-2">
                <Card.Img
                  variant="top"
                  src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
                />
                <Card.Body>
                  <Card.Title>{freelancer.user_name}</Card.Title>
                  <Card.Text>{freelancer.user_details_id}</Card.Text>
                  <Card.Text>{freelancer.user_description}</Card.Text>
                  <Card.Text>{freelancer.user_category}</Card.Text>
                  <Button className="btn-1" variant="secondary" key={freelancer.user_details_id}><Link className="link-1" to="../../pages/SingleUserPage">View More</Link></Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      </FreelancerContext.Provider>
    </>
  );
};

export default UserExplore;
