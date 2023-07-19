import React from "react";
import Text from "./../../Common/Text";
import Button from "./../../Common/Button";
import "./Explain.scss";
import arrow from "./../../assets/Vector1.png";
import chart from "./../../assets/Group 41997.png";

function Explain() {
  return (
    <div className="bg-black  pt-5 pb-5 ">
      <div className="container pt-5 pb-5 mt-5 mb-5">
        <div className="row d-flex justify-content-center  flex-wrap">
          <div className="col-md-6 col-sm-12 d-flex flex-column align-items-center justify-content-center">
            <div>
              <Text
                title={
                  "Want to improve your ROI? Drive more organic traffic to your website."
                }
                textColor={"white"}
                fontSize="6rem"
              />
              <Text
                title={
                  "Get more qualified traffic on the search terms that matter most to your business. We analyze every variable that affects SERPs, from domain authority to site speed – allowing us to achieve results that matter. SmartSites has a proven track record. Set your business up for long-term success today!"
                }
                textColor={"white"}
                fontSize="3rem"
              />
            </div>
            <div className="d-flex me-2 pt-5">
              <div className="me-5">
              <Text title={"200%"} textColor={"#587BEA"} fontSize="8rem" />
              </div>
             <div className="align-self-center">
              <Text
                title={
                  "Most of our SEO campaigns double their traffic within 6 months."
                }
                textColor={"#587BEA"}
                fontSize="4rem"
              />
              </div>
            </div>

            <div className="d-flex align-items-around p-5 ">
           
              <div className="fieldWidth  me-5">
                <div className="">
                <Text
                  title={"Enter your website"}
                  textColor={"#3B3B3B"}
                  fontSize={"3.5rem"}
                  borderWidth={"0.3rem"}
                  borderColor="#3B3B3B"
                  borderStyle={"solid"}
                  
                />
                </div>
              </div>
              <div className="fieldWidth explain d-flex justify-content-around align-items-center">
                <Button
                  title={"Send a proposal"}
                  bg={"#A646A5"}
                  textColor={"white"}
                  borderRadius={"0"}
                  fontSize="2.5rem"
                />

                <div clasName="align-self-center  ">
                  <img src={arrow} className="arrow" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12  d-flex justify-content-center  ">
            <div className="rotateText">
              <Text title={"200%+"} textColor={"#3B3B3B"} fontSize="18rem" />
            </div>
            <div>
              <img src={chart} className="rotateChart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explain;
