import React from 'react'
import ContentSection from './ContentSection'
const text1="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
const text2="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
function LowerSection() {
  return (
    <div className='lower' >
        <ContentSection text={text1} title="About" />
        <ContentSection text={text2} title="Interests"/>
      
    </div>
  )
}

export default LowerSection