import { Image, Modal } from "react-bootstrap";
import Image1 from "../../images/graphic-design.jpg"
import Image2 from "../../images/photography-videography.jpg"
import Image3 from "../../images/writing-translation.jpg"
import Image4 from "../../images/programming-tech.jpg"

const ServiceWindow = ({ show, onHide, data }) => {

    const handleHide = () => {
        onHide();
    }

    const photoCategory = [
        "graphic-design.jpg",
        "photography-videography.jpg",
        "writing-translation.jpg",
        "programming-tech.jpg"
    ]

    function imageHolder(photoLink){
        switch (photoLink) {
            case photoCategory[0]:
                return Image1
            case photoCategory[1]:
                return Image2
            case photoCategory[2]:
                return Image3
            case photoCategory[3]:
                return Image4
            default:
                return ""
        }
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
                            <Image variant="top" src={imageHolder(data.data.service_photo)} className="card-image" />
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