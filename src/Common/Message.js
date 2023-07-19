import React from 'react'

function Message({name,title,bg,width,height,image,textColor,position,left,top,fontSize,padding,fontWeight}) {
  return (
    <div className="border rounded-4 shadow-lg" style={{backgroundColor:bg,width:width,height:height,position:position,top:top,left:left,fontSize,border:0,padding:padding}}>
      <div className="text-center">
        <img src={image} className="cardimage  "/>
        </div>
    <div style={{color:textColor,fontSize:fontSize,fontWeight:fontWeight,textAlign:"center"}}>{name}</div>
    <div >{title}</div>
    </div>
  )
}

export default Message