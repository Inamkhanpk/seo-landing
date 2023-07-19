import React from "react";
import Button from "./../../Common/Button";
import combineImage from "./../../assets/Group 41918.png";
import girl from "./../../assets/hero.png";
import user from "./../../assets/user.png";
import Text from "./../../Common/Text";
import Message from "./../../Common/Message";
import Field from "./../../Common/Field";
import Certificate from "./../Certificate/Certificate";
import "./Carousel.scss";
import Certificate1 from "../../assets/icons/certificate1";
import icon from "./../../assets/Icon.png";
import setting from "./../../assets/high-quality.png"
import star from "./../../assets/Group 41996.png"

function Carousel() {
  return (
    <div className="carouselSetting">
      <div className=" row d-flex justify-content-center  flex-wrap ">
        <div className="col-md-6 ">
          <Button
            title={"Be Successful Online"}
            textColor={"#A646A5"}
            fontWeight={"bold"}
            fontSize="2.3rem"
            borderRadius="1rem"
            borderColor="#A646A5"
            bg="#E9E9F8"
          />
          <Text
            title={
              "We Know How to win Clients,Grow Traffic, Increase Sales & Maximize Profitability For You!"
            }
            fontSize={"7rem"}
            fontWeight={"bold"}
            maxWidth="80%"
          />
         <div className="mb-5" >
          <Text
            title={
              "Our proven seo delivers you more traffic, and more customers."
            }
            fontSize={"3rem"}
          />
          </div>
          <Field />
          <Certificate1 />

          <div className="mt-5">
            <img
              src={combineImage}
              style={{ maxWidth: "80%", height: "auto" }}
            />
          </div>
        </div>

        <div className="col-md-6  d-flex justify-content-center   position-relative">
          <img src={girl} className="girl" />

          <div>
            <Message
              bg={"#FFFFFF"}
              image={user}
              name={"Jessica, replied"}
              position={"absolute"}
              top={"18%"}
              left={"63%"}
              fontSize="2rem"
              
              padding="1rem"
              title={
                "Good Morning,Get top rankings on Google,Let's Discuss yourcompetitor"
              }
              textColor={"#828A90"}
            />

            <div className="bg-white rounded-4 shadow-lg d-flex justify-content-between position-absolute" style={{top:"50%",left:"5%",padding:"1rem"}}>
                <div >
                <Text title={"$59.4+"} fontWeight={"bold"} fontSize="4rem" />
                <Text title={"Million Worth Traffic Driven"} fontSize="2rem" textColor="#828A90" />
                </div>
                <div className="align-self-center">
                <img src={setting} className="cardImage"/>
                </div>

            </div>
            {/* <Message
            image={setting}
              title={"Million Worth Traffic Driven"}
              name={"$59.4+"}
              position={"absolute"}
              top={"50%"}
              left={"5%"}
              fontSize="2rem"
              padding="1rem"
              bg={"#FFFFFF"}
              fontWeight="bold"
            /> */}
            <Message
             image={icon}
              title={"Next Friday"}
              name="Follow uo Meeting"
              position={"absolute"}
              top={"70%"}
              left={"5%"}
              fontSize="2rem"
              padding="1rem"
              bg={"#FFFFFF"}
            />


<div className="bg-white rounded-4 shadow-lg d-flex justify-content-between position-absolute" style={{top:"70%",left:"45%",padding:"1rem"}}>
                <div >
                <Text title={"Page #1 Rankings"} fontWeight={"bold"} fontSize="4rem" />
                <Text title={"Increased Sales and Conversions"} fontSize="2rem" textColor="#828A90" />
                </div>
                <div className="align-self-center">
                <img src={star} className="cardImage"/>
                </div>

            </div>
            {/* <Message
            image={star}
              title={"Increased Sales and Conversions"}
              name={"Page #1 Rankings"}
              position={"absolute"}
              top={"70%"}
              left={"45%"}
              fontSize="2rem"
              padding="1rem"
              bg={"#FFFFFF"}
            /> */}
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Certificate />
      </div>
    </div>
  );
}

export default Carousel;
