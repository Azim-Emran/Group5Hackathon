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
                    <Modal.Title>{data.data.service_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-4">
                            {/* <Image variant="top" src={data.data.service_photo} className="card-image" /> */}
                        </div>
                        <div className="col-md-8">
                            <div className="font-italic mb-3">
                                <span className="font-weight-bold">Description:
                                </span><br/>{data.data.service_description}</div>
                            <div className="mb-3">
                            <span className="font-weight-bold">Price:
                                </span><br/>${data.data.service_price}
                                </div>
                            <div className="">
                            <span className="font-weight-bold">Category:
                                </span><br/>{data.data.service_category}
                                </div>

                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ServiceWindow;