import Sidebar from "../Components/profileComponents/Sidebar"
import Name from "../Components/profileComponents/Name"
import Services from "../Components/profileComponents/Services"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProfilePage = () => {

    const { id } = useParams();
    const [userProfile, setUserProfile] = useState([])
    const [category, setCategory] = useState([])


    const fetchData = async () => {

        // try{
        //     const resFromUser = await axios.get("")
        //     const resFromContact = await axios.get("")
        //     const resFromLogin = await axios.get("")
        //     const resFromService = await axios.get("")
        //     const resFromCategory = await axios.get("")

        //     const dataUser = resFromUser.data;
        //     const dataContact = resFromContact.data;
        //     const dataLogin = resFromLogin.data;
        //     const dataService = resFromService.data;
        //     const dataCategory = resFromCategory.data;


        //     setUserProfile([...dataUser, ...dataContact, ...dataLogin, ...dataService])
        //     setCategory(dataCategory)

        // }catch(e){
        //     console.log(e)
        // }

        const [userData, contactData, loginData, serviceData, categoryData] = await Promise.all([
            //axios.get('/users/'+id),
            axios.get('/contacts/'+id),
            axios.get('/login'+id),
            axios.get('/services'),
            axios.get('/category')
        ]);

        setUserProfile([...userData.data, ...contactData.data, ...loginData.data, ...serviceData.data]);
        setCategory(...categoryData);
    };
    // axios.get("")
    // .then((response)=>setUserProfile(response.data.data))
    // .catch((error)=>(console.log(error)))



    useEffect(() => {
        fetchData()
    }, [id])


    return (
        <>
            <div className="wrapper pt-4">
                <Name user={userProfile[0]} login={userProfile[2]} />
                <div className="row mt-3">
                    <div className="col-4">
                        <Sidebar contact={userProfile[1]}/>
                    </div>
                    <div className="col-8">
                        <Services user_id={id} service={userProfile[3]} category={category}/>
                    </div>

                </div>


            </div>
        </>

    )
}

export default ProfilePage