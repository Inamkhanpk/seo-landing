import React from 'react'

function Field() {
  return (
    <div>
        <div className="row">
            <div className="col-md-4 col-sm-12 text-center" style={{borderColor:" #A646A5",backgroundColor:"#E9E9F8",borderStyle:"solid",borderWidth:"thin",fontSize:"3rem"}}>
              Full Name
            </div>
            <div  className="col-md-4 col-sm-12 text-center " style={{borderColor:" #A646A5",backgroundColor:"#E9E9F8",borderStyle:"solid",borderWidth:"thin" ,fontSize:"3rem"}}>
              Your Name
            </div>
            <div  className="col-md-4 col-sm-12 text-center " style={{borderColor:" #A646A5",backgroundColor:"#E9E9F8",borderStyle:"solid",borderWidth:"thin" ,fontSize:"3rem"}}>
            Your Phone Number
            </div>
            
        </div>
        <div className="row mt-3">
        <div  className="col-md-8 col-sm-12 text-center " style={{borderColor:" #A646A5",backgroundColor:"#E9E9F8",borderStyle:"solid",borderWidth:"thin" ,fontSize:"3rem"}}>
          Your Website URL
           </div>
           <div  className="col-md-4 col-sm-12 text-center " style={{backgroundColor:"#A646A5",alignSelf:"center",color:"#FFFFFF",fontSize:"3rem",borderColor:" #A646A5"}}>
           SUBMIT
           </div>
        </div>
    </div>
  )
}

export default Field