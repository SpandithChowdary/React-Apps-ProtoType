import React from 'react'
import { CiMenuKebab } from "react-icons/ci";
import "./Card.css"
import PortalDrop from './PortalDrop';
import PortalOverlay from './PortalOverlay';

function card() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropDown = () =>{
    setIsOpen(!isOpen);
  }
  return (
    <div className='Card-Page'>
        {isOpen && <PortalOverlay />}
        <div className='Card-Content'>
            <div className='Card-Header'>
              <h1>Card Title</h1>
              <button onClick={()=>toggleDropDown()} ><CiMenuKebab /></button>
              {isOpen && <PortalDrop />}
            </div>
        </div>
        <div className='Card-Content'>
            <h1>ToolTip</h1>
            <button className='Tooltip-Btn'>Hover Me</button>
            <div className='Tooltip-Content'>This is a tooltip message!</div>
        </div>
    </div>
  )
}

export default card
