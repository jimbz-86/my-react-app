import { useState } from 'react';


export default function ToggleApp () {
    const [isVisible,setIsVisible] = useState(false)
  return (
    <div id="toggle-container">
      <button onClick={handleToggleVisibility} id="toggle-button">{isVisible ? "Hide Message":"Show Message"}</button>
    {isVisible && <p id="message">I love freeCodeCamp!</p>}
    </div>
  );

  function handleToggleVisibility(){
      setIsVisible(!isVisible);
}
};

