import Sidebar from "../Components/profileComponents/Sidebar"
import Name from "../Components/profileComponents/Name"
import Services from "../Components/profileComponents/Services"

const ProfilePage = () => {



    return (
        <>
            <div className="wrapper pt-4">
                <Name/>
                <div className="row mt-3">
                    <div className="col-4">
                        <Sidebar/>
                    </div>
                    <div className="col-8">
                        <Services/>
                    </div>

                </div>


            </div>
        </>

    )
}

export default ProfilePage