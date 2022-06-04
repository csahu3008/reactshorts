import React from 'react'
import ConnectionButton from './ConnectionButton'
import Info from './Info'
import profile from '../images/profile.png'
import mail from '../images/mail.png'
import linkedin from '../images/linkedin.png'
function UpperSection() {
  return (
    <div className=''>
        <img src={profile}  height='300px' width='317px' alt="No Images" />
        <Info />
        <div className="connection_buttons">
                <ConnectionButton img_src={mail}  title="Mail"  bg="#FFFFFF" />
                <ConnectionButton  img_src={linkedin}  title="LinkedIn" bg="#297FE5" />
        </div>
    </div>
  )
}

export default UpperSection