/*
User Stories:

You should define and export a ColorPicker component.
You should use the useState hook.
You should have a #color-picker-container element with a white background.
You should have a #color-input element which should be a color input.
Your #color-input should be a child of #color-picker-container.
When #color-input is changed, #color-picker-container should have its background set to that new value.
*/

import { useState} from 'react';

export const ColorPicker = () => {
  const [color,setColor] = useState("#ffffff");
  return (
    <div id="color-picker-container" style={{backgroundColor:color}}>
      <input id="color-input" type="color" onChange={handleColorChange} value={color}></input>
    </div>
  );

  function handleColorChange(e){
    setColor(e.target.value);
  }
};