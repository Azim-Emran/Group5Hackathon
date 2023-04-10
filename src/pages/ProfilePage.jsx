import Sidebar from "../Components/profileComponents/Sidebar"
import Name from "../Components/profileComponents/Name"
import Services from "../Components/profileComponents/Services"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProfilePage = () => {

    const { userId } = useParams();
    const [userProfile, setUserProfile] = useState([])
    const [category, setCategory] = useState([])

    const [sessionData, setSessionData] = useState({});

    const fetchSessionData = () => {
        const storedSessionData = localStorage.getItem('login_session');

        if (storedSessionData) {
            const sessionObj = JSON.parse(storedSessionData);

            setSessionData({
                isLoggedIn: sessionObj.isLoggedIn,
                userId: sessionObj.userId,
            });
        }
    };

    useEffect(() => {
        fetchSessionData();
    }, [localStorage.getItem('login_session')]);


    const fetchData = async () => {
    

        const [userData, contactData, loginData, serviceData, categoryData] = await Promise.all([
            axios.get('/users/'+userId),
            //axios.get('/contacts/'+id),
            //axios.get('/login'+id),
            axios.get('/sp?user_cred_id='+userId),
            //axios.get('/category')
        ]);

        setUserProfile([...userData.data, ...contactData.data, ...loginData.data, ...serviceData.data]);
        setCategory(...categoryData);
    };



    useEffect(() => {
        fetchData()
    }, [userId])


    return (
        <>
            <div className="wrapper pt-4">
                <Name user={userProfile[0]} login={userProfile[2]} sessionData = {sessionData}/>
                <div className="row mt-3">
                    <div className="col-4">
                        <Sidebar contact={userProfile[1]}/>
                    </div>
                    <div className="col-8">
                        <Services userId={userId} sessionData={sessionData} servicesData={userProfile[3]}/>
                    </div>

                </div>


            </div>
        </>

    )
}

export default ProfilePage