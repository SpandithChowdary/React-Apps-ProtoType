import React from 'react'
import  rdom from "react-dom"
import "./Card.css"

const PortalDrop = () => {
  return rdom.createPortal(
   <div className='Card-DropDown'>
      <a href="#option1" className='Card-Link'>Option 1</a>
      <a href="#option2" className='Card-Link'>Option 2</a>
      <a href="#option3" className='Card-Link'>Option 3</a>
      <a href="#option3" className='Card-Link'>Option 4</a>
      <a href="#option3" className='Card-Link'>Option 5</a>
      <a href="#option3" className='Card-Link'>Option 6</a>
      <a href="#option3" className='Card-Link'>Option 7</a>
    </div>
  , document.getElementById("portal-root")
  )}

export default PortalDrop
