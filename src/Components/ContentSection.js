import React from 'react'

function ContentSection({text,title}) {
  return (
    <>
    <h2 style={{fontWeight: 700,fontSize: "16px",lineHeight: "150%",marginTop:"5px" }}>{title}</h2>
    <p style={{"fontSize":"10.24px"}}>{text}</p>
    </>
  )
}

export default ContentSection