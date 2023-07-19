import React from 'react'

function Button({title,bg,textColor,borderRadius,fontWeight,borderColor,borderStyle,fontSize,width,height,image}) {
  return (
    <div className=" btn p-3" style={{backgroundColor:bg,color:textColor,borderRadius:borderRadius,fontWeight:fontWeight,borderColor:borderColor,borderStyle:borderStyle,fontSize:fontSize,width:width,height:height}}>
     
      {/* <img src={image}/> */}
      <div className="text-center">
       {title}
       </div>
    </div>
  )
}

export default Button