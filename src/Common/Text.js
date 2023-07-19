import React from 'react'

function Text({title,fontSize,fontWeight,textColor,maxWidth,backgroundColor,width,borderColor,borderWidth,borderStyle,borderRadius}) {
  return (
    <div style={{fontSize:fontSize,fontWeight:fontWeight,color:textColor,maxWidth:maxWidth,backgroundColor:backgroundColor,width:width,borderColor:borderColor,borderStyle:borderStyle,borderWidth:borderWidth,borderRadius:borderRadius}}>{title}</div>
  )
}

export default Text