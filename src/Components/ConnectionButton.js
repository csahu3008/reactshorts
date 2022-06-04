import React from 'react'

function ConnectionButton({img_src,title,bg}) {
   const bgcolor={
       "backgroundColor":bg
   };
    return (
    <div>
        <div className='connect' style={bgcolor}>
            <img src={img_src}  />
            <div > {title}</div>
        </div>
    </div>
  )
}

export default ConnectionButton