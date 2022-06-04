import React from 'react'
import twitter from '../images/twitter.png'
import fb from '../images/facebok.png'
import insta from '../images/insta.png'
import git from '../images/git.png'
function Footer() {
  return (
    <div class='footer'>
       <img src={twitter}  alt="no" />
       <img src={fb}  alt="no"/>
       <img src={insta} alt="no" />
       <img src={git}  alt="no"/>
    </div>
  )
}

export default Footer