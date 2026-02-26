import React from 'react'
import "./Count.css";

function Count() {
  const InputRef = React.useRef(null);

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const handleInput = () => {
      setCount(InputRef.current.value.length);
    };

    InputRef.current.addEventListener("input", handleInput);

    return () => {
      InputRef.current.removeEventListener("input", handleInput);
    };
  }, []);

  return (
    <div className='Count-Page'>
      <h1 className='Count-Title'>Character Count</h1>
      <p>Type something in the input field to see the character count...</p>
      <label className='Count-Label'>
        <h3>Input</h3>
        <textarea className='Count-Input' type="text" ref={InputRef}/>
      </label>
      <h2 className='Count-Result'>Character Count: {count}</h2>
    </div>
  )
}

export default Count
