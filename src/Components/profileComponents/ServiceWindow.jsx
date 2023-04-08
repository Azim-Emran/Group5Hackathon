import { useState } from "react";
import { Image, Modal } from "react-bootstrap";

const ServiceWindow = ({ show, onHide, data }) => {

    const handleHide = () => {
        onHide();
    }

    return (
        <>

            <Modal show={show} onHide={handleHide} centered dialogClassName="service-modal-container">
                <Modal.Header closeButton>
                    <Modal.Title>{data.props.service_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-4">
                            {/* <Image variant="top" src={data.props.service_photo} className="card-image" /> */}
                        </div>
                        <div className="col-md-8">
                            <div className="font-italic">{data.props.service_description}</div>
                            Price: ${data.props.service_price}<br/>
                            Category: {data.props.service_category}

                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ServiceWindow;