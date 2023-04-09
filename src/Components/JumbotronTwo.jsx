import './smallComponents/JumbotronTwo.css'

const JumboTwo = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-10">
          <div className="section-title text-center pb-14">
            <h3 className="title">With a personal recruiter, you’ll get matched to roles that are right for you.</h3>
            <p className="text">
              Find information about latest news.
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-7 col-sm-9">
          <div className="pricing-style mt-30">
            <div className="pricing-icon text-center">
              <img src="https://d3fy651gv2fhd3.cloudfront.net/charts/brunei-unemployment-rate@2x.png?s=bruuneiunetrate&v=202107132317V20200908" alt="" />
            </div>
            <div className="pricing-header text-center">
              <h5 className="sub-title"></h5>
              <p className="month">
                <span className="price">Chart</span>
              </p>
            </div>
            <div className="pricing-list">
              <ul>
                <li>
                  <i className="lni lni-check-mark-circle text-center"></i> Search
                  by individual chart.
                </li>
                <li>
                  <i className="lni lni-check-mark-circle"></i>{" "}
                </li>
              </ul>
            </div>
            <div className="pricing-btn rounded-buttons text-center">
              <a className="main-btn rounded-one" href="#">
                Find out more
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-7 col-sm-9">
          <div className="pricing-style mt-30">
            <div className="pricing-icon text-center">
              <br />
              <br />
              <img src="https://th.bing.com/th/id/R.a18ce9889680c12043a1731f99b5c4e2?rik=0iCGp21nYmpuYQ&riu=http%3a%2f%2fwww.hktdc.com%2fresources%2fMI_Portal%2fArticle%2fobor%2f2015%2f09%2f471285%2f1539241118571_BN03unemploymentEN_471285.jpg&ehk=ySmRWO5re7PUPg90vW9MkP%2bPXzUhLMrF1FJ1eRwACgs%3d&risl=&pid=ImgRaw&r=0" alt="" />
              <br />
              <br />
            </div>
            <div className="pricing-header text-center">
              <h5 className="sub-title"></h5>
              <p className="month">
                <span className="price">Compare</span>
              </p>
            </div>
            <div className="pricing-list">
              <ul>
                <li>
                  <i className="lni lni-check-mark-circle text-center"></i>Compare
                  different data
                </li>
                <li>
                  <i className="lni lni-check-mark-circle"></i>{" "}
                </li>
              </ul>
            </div>
            <div className="pricing-btn rounded-buttons text-center">
              <a className="main-btn rounded-one" href="#">
                Find out more
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-7 col-sm-9">
          <div className="pricing-style mt-30">
            <div className="pricing-icon text-center">
              <br />
              <br />
              <img src="https://www.southstaffs.ac.uk/wp-content/uploads/2021/11/JobFair.jpg" alt="" />
              <br />
              <br />
            </div>
            <div className="pricing-header text-center">
              <h5 className="sub-title"></h5>
              <p className="month">
                <span className="price">Others</span>
              </p>
            </div>
            <div className="pricing-list">
              <ul>
                <li>
                  <i className="lni lni-check-mark-circle text-center"></i>Other
                  available news.
                </li>
                <li>
                  <i className="lni lni-check-mark-circle"></i>{" "}
                </li>
              </ul>
            </div>
            <div className="pricing-btn rounded-buttons text-center">
              <a className="main-btn rounded-one" href="#">
                Find out more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JumboTwo;
