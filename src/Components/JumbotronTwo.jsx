import './smallComponents/JumbotronTwo.css'

const JumboTwo = () => {
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-10">
          <div class="section-title text-center pb-25">
            <h3 class="title">Data</h3>
            <p class="text">
              Find information about today's data product and wastage.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-7 col-sm-9">
          <div class="pricing-style mt-30">
            <div class="pricing-icon text-center">
              <img src="https://d3fy651gv2fhd3.cloudfront.net/charts/brunei-unemployment-rate@2x.png?s=bruuneiunetrate&v=202107132317V20200908" alt="" />
            </div>
            <div class="pricing-header text-center">
              <h5 class="sub-title"></h5>
              <p class="month">
                <span class="price">Chart</span>
              </p>
            </div>
            <div class="pricing-list">
              <ul>
                <li>
                  <i class="lni lni-check-mark-circle text-center"></i> Search
                  by individual chart.
                </li>
                <li>
                  <i class="lni lni-check-mark-circle"></i>{" "}
                </li>
              </ul>
            </div>
            <div class="pricing-btn rounded-buttons text-center">
              <a class="main-btn rounded-one" href="#">
                Find out more
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-7 col-sm-9">
          <div class="pricing-style mt-30">
            <div class="pricing-icon text-center">
              <br />
              <br />
              <img src="https://th.bing.com/th/id/R.a18ce9889680c12043a1731f99b5c4e2?rik=0iCGp21nYmpuYQ&riu=http%3a%2f%2fwww.hktdc.com%2fresources%2fMI_Portal%2fArticle%2fobor%2f2015%2f09%2f471285%2f1539241118571_BN03unemploymentEN_471285.jpg&ehk=ySmRWO5re7PUPg90vW9MkP%2bPXzUhLMrF1FJ1eRwACgs%3d&risl=&pid=ImgRaw&r=0" alt="" />
              <br />
              <br />
            </div>
            <div class="pricing-header text-center">
              <h5 class="sub-title"></h5>
              <p class="month">
                <span class="price">Compare</span>
              </p>
            </div>
            <div class="pricing-list">
              <ul>
                <li>
                  <i class="lni lni-check-mark-circle text-center"></i>Compare
                  different data
                </li>
                <li>
                  <i class="lni lni-check-mark-circle"></i>{" "}
                </li>
              </ul>
            </div>
            <div class="pricing-btn rounded-buttons text-center">
              <a class="main-btn rounded-one" href="#">
                Find out more
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-7 col-sm-9">
          <div class="pricing-style mt-30">
            <div class="pricing-icon text-center">
              <br />
              <br />
              <img src="assets/images/Graph3.png" alt="" />
              <br />
              <br />
            </div>
            <div class="pricing-header text-center">
              <h5 class="sub-title"></h5>
              <p class="month">
                <span class="price">Others</span>
              </p>
            </div>
            <div class="pricing-list">
              <ul>
                <li>
                  <i class="lni lni-check-mark-circle text-center"></i>Other
                  available Data.
                </li>
                <li>
                  <i class="lni lni-check-mark-circle"></i>{" "}
                </li>
              </ul>
            </div>
            <div class="pricing-btn rounded-buttons text-center">
              <a class="main-btn rounded-one" href="#">
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
