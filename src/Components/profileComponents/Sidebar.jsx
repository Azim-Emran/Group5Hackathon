import { useState } from "react"
import { Card } from "react-bootstrap"
import EditTooltip from "../smallComponents/EditTooltip"
import { BsBehance, BsBriefcase, BsFacebook, BsInstagram, BsLinkedin, BsTelephone, BsTwitter } from "react-icons/bs"
import { Link } from "react-router-dom"

const Sidebar = () => {

    const [isUser, setIsUser] = useState(true)

    const [portfolio,setPortfolio] = useState("example.com/hilda-machilda-portfolio")
    
    const [contact,setContact] = useState("+6732233421")

    const [skillList, setSkillList] = useState([
        {
            id: 1,
            name: "HTML",
            description: "HTML is a markup language used to create interactive web pages. It is used to create interactive web pages, such as websites, applications, and other web applications.",
        },
        {
            id: 2,
            name: "CSS",
            description: "CSS is a style sheet language used to create interactive web pages. It is used to create interactive web pages, such as websites, applications, and other web applications.",
        },
        {
            id: 3,
            name: "JavaScript",
            description: "JavaScript is a scripting language used to create interactive web pages. It is used to create interactive web pages, such as websites, applications, and other web applications.",
        },
    ])

    const [socials,setSocials] = useState([
        {
            name: "Facebook",
            link: "http://fb.co/myfbaccount",
            icon: <BsFacebook/>
        },
        {
            name: "Twitter",
            link: "http://twitter.co/mytwitteraccount",
            icon: <BsTwitter/>
        },
        {
            name: "Instagram",
            link: "http://instagram.co/myinstagramaccount",
            icon: <BsInstagram/>
        },
        {
            name: "Behance",
            link: "http://behance.co/mybehanceaccount",
            icon: <BsBehance/>
        },
        {
            name: "Linkedin",
            link: "http://linkedin.co/mylinkedinaccount",
            icon: <BsLinkedin/>
        },
    ])


    return (
        <Card className="card-container shadow-sm ">
            <Card.Body>

                <div className="d-flex justify-content-between align-items-center">
                    <Card.Title
                        className="font-weight-bold">
                        Skills
                    </Card.Title>
                    {isUser && <EditTooltip />}
                </div>
                <Card.Body>
                    {skillList.map((skill,index) => (
                        <div key={skill.id} 
                        className={index === skillList.length - 1 ? "": "mb-3"}>
                            {skill.name}</div>
                    ))}

                </Card.Body>
                <hr />

                <div className="d-flex justify-content-between align-items-center">
                    <Card.Title
                        className="font-weight-bold">
                        Portfolio
                    </Card.Title>
                    {isUser && <EditTooltip />}
                </div>
                <Card.Text>
                   <BsBriefcase/> <a href={portfolio} className="text-decoration-none">{portfolio}</a>

                </Card.Text>
                <hr />

                <div className="d-flex justify-content-between align-items-center">
                    <Card.Title
                        className="font-weight-bold">
                        Contact
                    </Card.Title>
                    {isUser && <EditTooltip />}
                </div>
                <Card.Body>
                   <div className="mb-3"><BsTelephone/> {contact}
                    </div>

                   {socials.map((social,index) => (
                        <div key={index} 
                        className={index === socials.length - 1 ? "": "mb-3"}>
                            {social.icon}  <a href={social.link} className="text-decoration-none">{social.name}</a></div>
                    ))}

                </Card.Body>
                <hr />


            </Card.Body>
        </Card>
    )
}

export default Sidebar;