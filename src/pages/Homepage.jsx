import Introduction from "../Components/Introduction"
import Navbar from "../Components/Navbar"


const Homepage = () => {
    return (
        <div>
            <Navbar/>
            <Introduction/>
            <div style={{height: "600px"}}></div>
        </div>
    )
}

export default Homepage