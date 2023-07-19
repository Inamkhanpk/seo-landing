import React from "react";
import Text from "./../../Common/Text";
import tick from "./../../assets/Group 41938.png";
import quotes from "./../../assets/quote-red.png.png";
import user from "./../../assets/onfident-handsome-man-with-arms-crossed-body-smiling-looking-determined.png";
import circle from "./../../assets/pseudo.png";
import "./Rates.scss";
import rainbow from "./../../assets/Group 41946.png";
import laugh from "./../../assets/man-laughing.webp.png";
import Card from "./../PriceCard/PriceCard";
import line from "./../../assets/Path-3.png";
import cardpic from "./../../assets/div.tab-inner-middle.png";
import pseudo1 from "./../../assets/pseudo1.png";
import pseudo2 from "./../../assets/pseudo2.png";

function Rates() {
  return (
    <div className="bg-white ">
      <div className="bg-white container position-relative">
        {/* <div className="circle">
          <img src={circle} className="circleImage" />
        </div>
        <div className="rainbow">
          <img src={rainbow} className="rainbowimage" />
        </div> */}
        <div className="text-center">
          <div className="mt-5">
            <Text
              title={"Why SEO is necessary for Business?"}
              fontSize="4rem"
              fontWeight="bold"
              textColor="#587BEA"
            />
          </div>
          <div className="mt-5 d-flex justify-content-center">
            <Text
              title={"Make sales ,More Revenue & More Profitability"}
              fontSize="3rem"
              backgroundColor="#A646A5"
              textColor="white"
              width="70rem"
              borderRadius="1rem"
            />
          </div>
          <div className="mt-5 mb-5">
            <Text
              title={"That's why you need to be first page of Google"}
              fontSize="3rem"
            />
          </div>
        </div>



        <div className="row mt-3 d-flex justify-content-around space   ">
          <div className=" col-md-4 col-sm-12 cardWidth">
            <div className="mb-5">
              <img
                src={quotes}
                className="quoteImage"
                style={{ color: "#A646A5" }}
              />
            </div>
            <div className="mb-5 mt-5">
              <img src={user} className="user" />
            </div>

            <Text
              title={
                "This company provided me with the best website design services I have ever come across. Not only is my website now more modern and visually appealing, but it’s also much easier to use. Highly recommend this company!"
              }
              fontSize="3rem"
            />
            <div className="mt-5">
              <Text title={"Jackson Davis"} fontSize="3rem" fontWeight="bold" />
            </div>
          </div>
          <div
            className=" mt-3 col-md-4 col-sm-12 cardWidth"
            style={{ backgroundColor: "#E6F4F9", zIndex: 1 }}
          >
            <Text
              title={"Atleast 88% of visitors go with a competitor, after a"}
              fontSize="4rem"
            />
            <Text title={"poor website"} textColor="#FD3A30" fontSize="4rem" />
            <img src={line} className="lineWidth" />
            <Text title={"experience."} fontSize="4rem" />
            <div className="d-flex ">
              <div className="me-5">
                <img src={tick} className="tick" />
              </div>
              <Text
                title={
                  "Google is responsible for 95% of all search traffic.90% of people never go past the first page of search results."
                }
                fontSize="2.5rem"
              />
            </div>

            <div className="d-flex">
              <div className="me-5">
                <img src={tick} className="tick" />
              </div>
              <Text
                title={
                  "The top three results on the first page of Google receive 54.4% of all clicks."
                }
                fontSize="2.5rem"
              />
            </div>
            <div className="d-flex">
              <div className="me-5">
                <img src={tick} className="tick" />
              </div>
              <Text
                title={
                  "Sites that load faster rank higher and see 70% longer Average Sessions.86% of people are looking into Google Maps to find the direction to a location."
                }
                fontSize="2.5rem"
              />
            </div>
            <div className="d-flex">
              <div className="me-5">
                {" "}
                <img src={tick} className="tick" />
              </div>
              <Text
                title={
                  "The first result on the first page of Google receives 25% of all clicks.Being on the first page of Google search results will increase your brand visibility and click-through rate (CTR)."
                }
                fontSize="2.5rem"
              />
            </div>
            <div className="d-flex">
              <div className="me-5">
                <img src={tick} className="tick" />
              </div>
              <Text
                title={
                  "Google is the most popular search engine in the world, handling over 8.5 billion searches per day. That's a lot of potential traffic!"
                }
                fontSize="2.5rem"
              />
            </div>
          </div>
          <div
            className=" mt-3 col-md-4 col-sm-12 cardWidth "
            style={{ backgroundColor: "#E6F4F9", zIndex: 1 }}
          >
            <Text
              title={
                "Imagine You Don't Need To Worry About Getting New Clients Again!"
              }
              fontSize="4rem"
            />
            <div className="mt-5 mb-5">
              <Text
                title={"Our Clients Are Happy!"}
                textColor="#FD3A30"
                fontSize="4rem"
              />
              <img src={line} className="linesWidth" />
            </div>

            <div className="d-flex">
              <div>
                <img src={cardpic} className="cardpic" />
              </div>
              <div>
                <div className="ms-4">
                  <Text title={"600+"} fontSize="6rem" />
                  <Text title={"Project Completed"} fontSize="2rem" />
                </div>

                <div className="ms-4">
                  <Text title={"12+"} fontSize="6rem" />
                  <Text title={"Years in Business"} fontSize="2rem" />
                </div>

                <div className="ms-4">
                  <Text title={"100%"} fontSize="6rem" />
                  <Text title={"Positive reviews"} fontSize="2rem" />
                </div>

                <div className="ms-4">
                  <Text title={"92%"} fontSize="6rem" />
                  <Text title={"Customer Retention"} fontSize="2rem" />
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="row space ">
          <div className="col-md-6 col-sm-12 p-5    ">
            <Text
              title={"How do we drive traffic,qualified leads, andconversions?"}
              fontSize="5rem"
            />
            <Text
              title={
                "Building a successful business requires bringingtogether different pieces. The SRP team hasbrought good returns for its customers like you,with the help of content marketing. A well thoughtout and professionally built website is thefoundation of this endeavor."
              }
              fontSize="3rem"
            />
            <div className="d-flex">
              <img src={pseudo1} className="me-5 mb-2 mt-2" />
              <div className="align-self-center">
                <Text
                  title={"Create a custom website for your brand"}
                  fontSize="2.5rem"
                />
              </div>
            </div>
            <div className="d-flex">
              <img src={pseudo2} className="me-5 mb-2 mt-2" />
              <div className="align-self-center">
                <Text title={"Enhance Performance & UX"} fontSize="2.5rem" />
              </div>
            </div>
            <div className="d-flex">
              <img src={pseudo2} className="me-5 mb-2 mt-2" />
              <div className="align-self-center">
                <Text title={"High quality content copy"} fontSize="2.5rem" />
              </div>
            </div>
            <div className="d-flex">
              <img src={pseudo2} className="me-5 mb-2 mt-2" />
              <div className="align-self-center">
                <Text title={"Optimize for Search Engines"} fontSize="2.5rem" />
              </div>
            </div>
            <div className="d-flex">
              <img src={pseudo2} className="me-5 mb-2 mt-2" />
              <div className="align-self-center">
                <Text title={"Drive Quality & Niche Traffic"} fontSize="2.5rem" />
              </div>
            </div>
            <div className="d-flex">
              <img src={pseudo2} className="me-5 mb-2 mt-2" />
              <div className="align-self-center">
                <Text
                  title={"Track Conversion, Refine & Improve"}
                  fontSize="2.5rem"
                />
              </div>
            </div>
            <div className="buttonBackColor text-center w-25 p-4">
              <Text
                title={"Schedule a call"}
                textColor="white"
                fontSize="2.5rem"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 z-1 ">
            <div className="d-flex justify-content-center align-items-center">
              <img src={laugh} className="businesspic" />
            </div>
          </div>
        </div>


        <div className="mt-5 d-flex justify-content-center">
            <Text
              title={"Pricing /That Help Your Website Rank High on Google"}
              fontSize="3rem"
             
              
              width="72rem"
              borderRadius="1rem"
              borderColor="#A646A5"
            borderStyle="solid"
            />
          </div>


        {/* <div className="text-center">
          <Text
            borderColor="#A646A5"
            borderStyle="solid"
            title={"Pricing /That Help Your Website Rank High on Google"}
            fontSize="2.5rem"
          />
        </div> */}
        <div className="text-center">
          <Text title={"SEO Packages"} fontSize="5rem" />
        </div>

        <div className="d-flex justify-content-center mb-5 mt-5">
          <div className="buttonColor me-5 p-5">
            <Text textColor="white" title={"ANNUALLY"} fontSize="2.5rem" />
            <Text textColor="white" title={"(SAVE 40%)"} fontSize="2.5rem" />
          </div>
          <div className="buttonColor me-5">
            <Text textColor="white" title={"QUATERLY"} fontSize="2.5rem" />
            <Text textColor="white" title={"(SAVE 30%)"} fontSize="2.5rem" />
          </div>
          <div className="buttonColor">
            <Text textColor="white" title={"MONTHLY"} fontSize="2.5rem" />
            <Text textColor="white" title={"(SAVE 10%)"} fontSize="2.5rem" />
          </div>
        </div>

        <div className="  d-flex justify-content-around flex-wrap pt-5 pb-5 ">
          <Card />

          <Card />

          <Card />
        </div>

        <div className="pt-5 pb-5 d-flex flex-wrap justify-content-around ">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Rates;
