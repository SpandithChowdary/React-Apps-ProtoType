import React , {useRef} from 'react'
import "./Scroll.css"

function Scroll() {
  const Sections = useRef(null);
  const SectionA = useRef(null);
  const SectionB = useRef(null);
  const SectionC = useRef(null);

  const handleClick = (e, sectionRef) =>{
    e.preventDefault();
    sectionRef.current.scrollIntoView({behavior : "smooth"});
  }

  return (
    <div className='Scroll-Page'>
        <h1 className='Scroll-Title' ref={Sections}>Scroll To Section</h1>
        <div className='Scroll-Btns'>
          <button className='Scroll-Btn Section-A' onClick={(e)=>handleClick(e,SectionA)}>Section A</button>
          <button className='Scroll-Btn Section-B' onClick={(e)=>handleClick(e,SectionB)}>Section B</button>
          <button className='Scroll-Btn Section-C' onClick={(e)=>handleClick(e,SectionC)}>Section C</button>
        </div>
        <div className='Scroll-Content Section-A' ref={SectionA}>
            <h1>Section A</h1>
            <button className='Scroll-Btn Top' onClick={(e)=>handleClick(e,Sections)}>Scroll Top</button>
        </div>
        <div className='Scroll-Content Section-B' ref={SectionB}>
            <h1>Section B</h1>
            <button className='Scroll-Btn Top' onClick={(e)=>handleClick(e,Sections)}>Scroll Top</button>
        </div>
        <div className='Scroll-Content Section-C' ref={SectionC}>
            <h1>Section C</h1>
            <button className='Scroll-Btn Top' onClick={(e)=>handleClick(e,Sections)}>Scroll Top</button>
        </div>
    </div>
  )
}

export default Scroll
