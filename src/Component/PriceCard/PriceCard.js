import React from 'react'
import Text from "./../../Common/Text"
import "./PriceCard.scss"
import fire from "./../../assets/Group 41940.png"
import Button from "./../../Common/Button"
import whitetick from "./../../assets/Vector.png"
import phone from "./../../assets/old-typical-phone.png"
import scroll from "./../../assets/scroll.png"
import "./PriceCard.scss"
function PriceCard() {
  return (
    <div className="cards mt-2 p-5">
      <Text title={"BASIC"} fontSize={"2rem"}/>
      <div style={{marginTop:"2rem"}}>
      <Text  title={"Great for new start ups and businesses new to SEO! A solid first step towards conversions."} fontSize={"1rem"}/>
      </div>
      <div style={{marginTop:"2rem"}}>
      <Text title={"$199 /mo"} fontSize={"3rem"}/>
      </div>
      
       <div style={{marginTop:"2rem",backgroundColor:"#A646A5",display:"flex",justifyContent:"center",alignItems:"center",padding:"1rem",borderRadius:"2rem"}}>
        <div className="align-self-center"> <img src={fire}/></div>
       
      <Button  bg={"#A646A5"} title={"Get Started"} textColor="white" width="100%" fontSize={"2rem"}/>
      </div>
       <div className="d-flex justify-content-between pt-5">
      <div>
      <div style={{marginTop:"2rem",marginBottom:"2rem"}}>
      <Text title={"Keyword Research"} fontWeight="bold" fontSize={"2rem"}/>
      </div>
     <div className='d-flex align-items-center'>
     <img src={whitetick} width="10" height="10" className="me-2"/> <Text title={"15 Keywords"} fontSize={"2rem"}/>
     </div>
       <div style={{marginTop:"2rem",marginBottom:"2rem"}}>
      <Text title={"Content"} fontWeight="bold" fontSize={"2rem"}/>
      </div>

      <div className='d-flex align-items-center' >
      <img src={whitetick} width="10" height="10"  className="me-2"/>  <Text title={"2 Articles (400 words)"} fontSize={"2rem"}/>
      </div>
      <div>
      
      <div className="d-flex align-items-center">
      <img src={whitetick} width="10" height="10"  className="me-2"/>  <Text title={"2 Blogs (500 words)"} fontSize={"2rem"}/>
      </div>
      </div>
      <div style={{marginTop:"2rem",marginBottom:"2rem"}}>
      <Text title={"Link Building"} fontWeight="bold" fontSize={"2rem"}/>
      </div>
      
      <div className="d-flex align-items-center">
      <img src={whitetick} width="10" height="10"  className="me-2"/>  <Text title={"10 Submissions 10 Classifieds"} fontSize={"2rem"}/>
      </div>
      <div className="d-flex align-items-center">
      <img src={whitetick} width="10" height="10"  className="me-2"/> <Text title={"10 Community Participation"} fontSize={"2rem"}/>
      </div>
      <div className="d-flex align-items-center">
      <img src={whitetick} width="10" height="10"  className="me-2"/> <Text title={"10 Business Profiles"} fontSize={"2rem"}/>
      </div>
      
<div style={{marginTop:"2rem",marginBottom:"2rem"}}>
<Text title={"Website"} fontWeight="bold" fontSize={"2rem"}/>
</div>

<div className="d-flex align-items-center">
<img src={whitetick} width="10" height="10"  className="me-2"/> <Text title={"Meta Tags Creation"} fontSize={"2rem"}/>
</div>
<div className="d-flex align-items-center">
<img src={whitetick} width="10" height="10"  className="me-2"/> <Text title={"Web Content Optimization"} fontSize={"2rem"}/>
</div>
<div className="d-flex align-items-center">
<img src={whitetick} width="10" height="10"  className="me-2"/> <Text title={"Keyword Optimization"} fontSize={"2rem"}/>
</div>
<div className="d-flex align-items-center">
<img src={whitetick} width="10" height="10"  className="me-2"/> <Text title={"Anchor Text Optimization"} fontSize={"2rem"}/>
</div>
</div>
<div>
    <img src={scroll} className='scrollpic'/>
</div>
</div>

<div className='d-flex justify-content-between mt-5'>
    <div className='d-flex justify-content-center align-items-center'>
    <img src={phone} className="phonepic" /> 
    <div >
            <span className="textChat " >1-213-477-7023</span>
            
        </div>
    </div>
    <div>
      <Text fontWeight="bold" title={"LIVE CHAT"} fontSize="2rem"/>
    </div>
</div>

    </div>
  )
}

export default PriceCard