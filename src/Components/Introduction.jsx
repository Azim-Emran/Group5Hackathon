import { Image } from "react-bootstrap"
import image1 from "../images/logo.png"

const Introduction = () => {

    return (
        <div className="homepage-container">
            <div className="wrapper row">
                <div className="col-6">
                    <Image src={image1}/>
                </div>
                <div className="col-6">
                    Your all-in-one freelance platform
                    <ul>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, perferendis?</li>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                    </ul>
                </div>
            </div>

        </div>
    )

}

export default Introduction

