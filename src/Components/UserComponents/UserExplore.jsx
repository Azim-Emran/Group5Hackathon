import { Card, Button, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
// import axios from "axios";

const UserExplore = () => {
  const [selectedName, setSelectedName] = useState("All");
  const [freelancers, setFreelancers] = useState([]);

  const fetchServices = async () => {
    let sql;

    // if (selectedName === "All") {
    //   sql = "SELECT * FROM user_details";
    // } else {
    //   sql = `SELECT * FROM user_details WHERE name = '${selectedName}'`;
    // }

    const response = await fetch(
      `https://us-central1-upnxt-fc294.cloudfunctions.net/api/ud?query=${sql}`
    );
    const data = await response.json();
    console.log(data); // check value of data

    setFreelancers(data.data);
  };

  useEffect(() => {
    fetchServices();
  }, [selectedName]);

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
          {freelancers.map((freelancer) => (
            <div
              className="col-md-3 col-sm-6 row px-4"
              key={freelancer.user_details_id}
            >
              <Card className="shadow-sm card-container-2">
              <Card.Img variant="top" src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png" />
                <Card.Body>
                  <Card.Title>{freelancer.user_name}</Card.Title>
                  <Card.Text>{freelancer.user_category}</Card.Text>
                  <Card.Text>{freelancer.user_description}</Card.Text>
                  <Card.Text>{freelancer.user_photo}</Card.Text>
                  <Button className="btn-1" variant="secondary">View More</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserExplore;
