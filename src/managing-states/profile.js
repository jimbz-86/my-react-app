/*
This form switches between two modes: in the editing mode, you see the inputs, and in the viewing mode, you only see the result. The button label changes between “Edit” and “Save” depending on the mode you’re in. When you change the inputs, the welcome message at the bottom updates in real time.

Your task is to reimplement it in React in the sandbox below. For your convenience, the markup was already converted to JSX, but you’ll need to make it show and hide the inputs like the original does.

Make sure that it updates the text at the bottom, too!
export default function EditProfile() {
  return (
    <form>
      <label>
        First name:{' '}
        <b>Jane</b>
        <input />
      </label>
      <label>
        Last name:{' '}
        <b>Jacobs</b>
        <input />
      </label>
      <button type="submit">
        Edit Profile
      </button>
      <p><i>Hello, Jane Jacobs!</i></p>
    </form>
  );
}

*/

import { useState } from "react";

export default function EditProfile() {
  const [isEditMode,setIsEditMode] = useState(false);
  const [firstName,setFirstName] = useState('Jane');
  const [lastName,setLastName] = useState('Jacobs');

  return (
    <form onSubmit={e =>{
        e.preventDefault();
        if (isEditMode){
            setIsEditMode(false);
        }else{
            setIsEditMode(true)
        }
    }}>
      <label>
         First name:
        {!isEditMode ? ( <b >{firstName}</b>):(<input  value = {firstName} onChange={handleOnChangeFirstName}/>)}
      </label>
      <br/>
      <label>
        Last name:
        {!isEditMode ? ( <b>{lastName}</b>):( <input value ={lastName} onChange={handleOnChangeLastName}/>)}  
      </label>
      <br/>
      <button type="submit">
        Edit Profile
      </button>
      <p><i>Hello,{firstName} {lastName}</i></p>
    </form>
  );

  function handleOnChangeFirstName(e){
    setFirstName(e.target.value)
  }

    function handleOnChangeLastName(e){
    setLastName(e.target.value)
  }
}
