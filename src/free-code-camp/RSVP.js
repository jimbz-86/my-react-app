/*
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a form with fields for name, email, number of attendees, dietary preferences, and an option to indicate if you are bringing additional guests.

You should have a text input field where you would enter your name (mandatory).

You should have an email input field where you would enter your email address (mandatory). The form should validate the format to ensure it is a proper email.

You should have a number input field where you would enter the number of attendees in the form (mandatory), and the number should not be less than one.

You should have a text input field where you would enter your dietary preferences, and this information should be optional.

You should be able to check or uncheck a checkbox to indicate whether you are bringing additional guests.

You should have a button which submits the form, and the form should not cause the page to reload upon submission.

You should see a confirmation message displayed below the form after submitting, followed by the details provided (name, email, number of attendees, dietary preferences, and optional additional guests).

Here is an example message after submitting the form:

RSVP Submitted!
Name: John Doe
Email: example@example.com
Number of attendees: 2
Dietary preferences: None
Bringing additional guests: Yes
*/

import { useState} from 'react';

export default function EventRSVPForm() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [number,setNumber] = useState('');
  const [diet,setDiet] = useState('');
  const [guests,setGuests] = useState(false);
  const [visible,setVisible] = useState(false)

  function submitForm(e){
    e.preventDefault();
    setVisible(true)
  }

  function updateName(e){
    setName(e.target.value);
  }

  function updateEmail(e){
    setEmail(e.target.value);
  }

  function updateNumber(e){
    setNumber(e.target.value);
  }

  function updateDiet(e){
    setDiet(e.target.value);
  }
  
  function updateGuests(e){
    setGuests(e.target.checked);
  }
  return(
    <form onSubmit={submitForm}>
      <label>
        Name:
        <br/>
        <input type='text' required onChange={updateName}/>
         <br/>
      </label>
      <label>
        Email:
         <br/>
         <input type='email' required onChange={updateEmail}/>
         <br/>
      </label>
      <label>
        Number of Attendees:
        <br/>
        <input type='number' required min='1' onChange={updateNumber}/>
         <br/>
      </label>
      <label>
        Dietary Preferences:
         <br/>
         <input type='text' onChange={updateDiet}/>
         <br/>
      </label>
      <label>
        Bringing Additional Guests ?
        <input type='checkbox' onChange={updateGuests}/>
      </label>
      <br/>
      <button type='submit'>SUBMIT</button>
      <div style={{display: visible? 'block':'none'}}>
        RSVP SUBMITTED
        <br/>
        Name: {name}
        <br/>
        Email: {email}
        <br/>
        Number of attendees: {number}
        <br/>
        Dietary preferences: {diet === '' ? 'None':diet}
        <br/>
        Bringing additional guests: {guests? 'Yes' : 'No'}
        <br/>
      </div>
    </form>
  )
}