import React from 'react'
import devop from "./../../assets/devop.png"
import Text from "./../../Common/Text"
import business from "./../../assets/business-people-corporate-celebration-success-concept.png"
import shuttle from "./../../assets/shuttle.png"
import devops from "./../../assets/devop.png"
import "./Motivate.scss"
function Motivate() {
  return (
    <div className="motivate position-relative  ">
        
        <div className="d-flex  justify-content-between bgColor  rounded-4 ">
                  <div className="align-self-center">
                    <Text
                      title={"REQUEST A QUOTE"}
                      textColor={"white"}
                      fontSize={"2.6rem"}
                    />
                  </div>
                  <div className="align-self-center">
                    <img src={shuttle} className="shuttlepic" />
                  </div>
                </div>
        <div className=" text-center">
        <img src={devops} className="devops"/>
        </div>
        <div className="pt-5 text-center fw-bold  position-relative">
        <Text title={"Here's How We Push You towards Digital Success!"} fontSize="6rem" textColor="#ffffff"   />
        </div>
        <div className="pt-5 d-flex justify-content-center container">
            <div className="w-50 position-relative">
                 <Text title={"Target Group Analysis And Questionnaire"}fontSize="4rem" textColor="#ffffff"  />
            </div>
            <div className="w-50 position-relative">
                <Text title={"Target group analysis is the process of identifying and understanding the needs, wants, and values of a specific group of people. We use this information to create marketing campaigns tailored to that group's specific needs. Alongside this, we use the target group analysis to create questionnaires for potential customers. These questionnaires help to understand what potential customers are looking for in a website or web page. We cash in on this information to improve the visibility and ranking of the website or web page in search engine results pages."} fontSize="3rem" textColor="#ffffff"  />
            </div>
        </div>
        <img src={business} className="businessimage"/>
    </div>
  )
}

export default Motivate