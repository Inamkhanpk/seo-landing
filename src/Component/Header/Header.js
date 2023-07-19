import React from "react";
import "./Header.scss";
import devop from "./../../assets/devop.png";
import telephone from "./../../assets/telephone.png";
import user from "./../../assets/user.png";
import shuttle from "./../../assets/shuttle.png";
import Text from "./../../Common/Text"
function Header() {
  return (
    <nav class="navbar navbar-expand-lg  bg-black rounded-4 mt-5 ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          {" "}
          <img src={devop} width="30" height="20" />
        </a>
        <button
          class="navbar-toggler  "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon humburger border border-white bg-white"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <div className="d-md-flex ">
              <li class="nav-item align-self-center">
                <img src={telephone} className="ml-5" />
              </li>
              
              <li class="nav-item align-self-center">
                <div>
                  <span className="textPhone text-white">+123</span>
                  <span className="textPhone text-white">456</span>
                  <span className="textPhone text-white">7890</span>
                </div>
              </li>
              <li class="nav-item d-flex ">
                <img src={user} className="align-self-center textPhone " />
                <div className="textHeading ">
                  <Text title={"INITIALS CONSULTATION"} fontSize="1.5rem"/>
                  <Text title={"CONTACT:JESSICA"} fontSize="2rem"/>
                 
                </div>
              </li>
             <li class="nav-item align-self-center">
                <div className="request rounded-4 ">
                  <div className="align-self-center">
                <Text title={"REQUEST A QUOTE"} textColor={"white"} fontSize={"1.8rem"}/>
                </div>
                  <div className="align-self-center">
                    <img src={shuttle} />
                  </div>
                </div>
              </li>
              </div>


            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
