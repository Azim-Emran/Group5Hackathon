import Navbar from "../Components/Navbar";
import ExploreHeader from "../Components/exploreComponents/ExploreHeader";
import ExploreServices from "../Components/exploreComponents/ExploreServices";


const ServicesPage = () => {
  return (
    <>
      <div className="wrapper">
        <ExploreHeader />
        <ExploreServices/>
      </div>
    </>
  );
};

export default ServicesPage;
