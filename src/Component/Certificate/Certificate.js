import React from 'react'
import  Image2 from "./../../assets/Image 2.png"
import  Image3 from "./../../assets/Image 3.png"
import  Image4 from "./../../assets/Image 4.png"
import  Image5 from "./../../assets/Image 5.png"
import  Image6 from "./../../assets/Image 6.png"
import  Image7 from "./../../assets/Image 7.png"
import  Image8 from "./../../assets/Image 8.png"
import  Image9 from "./../../assets/Image 9.png"

function Certificate() {
  return (
    <div >
    <div className="container d-flex flex-wrap justify-content-between ">
        <div style={{color:"#EEF1FD"}} >
            <img src={Image2} style={{color:"#EEF1FD", width:"10rem",height:"10rem"}} />
        </div>
        <div style={{backgroundColor:"#EEF1FD"}}>
            <img src={Image3} style={{backgroundColor:"#EEF1FD" ,width:"10rem",height:"10rem"}}/>
        </div>
        <div>
            <img src={Image4}  style={{backgroundColor:"#EEF1FD" ,width:"10rem",height:"10rem"}}/>
        </div>
        <div style={{color:"#EEF1FD"}}>
            <img src={Image5} style={{color:"#EEF1FD",width:"10rem",height:"10rem"}}/>
        </div>
        <div style={{backgroundColor:"#EEF1FD"}}>
            <img src={Image6} style={{backgroundColor:"#EEF1FD",width:"10rem",height:"10rem"}}/>
        </div>
        <div style={{backgroundColor:"#EEF1FD"}}>
            <img src={Image7} style={{backgroundColor:"#EEF1FD",width:"10rem",height:"10rem"}}/>
        </div>
        <div style={{backgroundColor:"#EEF1FD"}}>
            <img src={Image8} style={{backgroundColor:"#EEF1FD",width:"10rem",height:"10rem"}}/>
        </div>
        <div>
            <img src={Image9} style={{backgroundColor:"#EEF1FD",width:"10rem",height:"10rem"}}/>
        </div>
        
    </div>
    </div>
  )
}

export default Certificate