/*
In this example, each Letter has an isSelected prop and an onToggle handler that marks it as selected. This works, but the state is stored as a selectedId (either null or an ID), so only one letter can get selected at any given time.

Change the state structure to support multiple selection. (How would you structure it? Think about this before writing the code.) Each checkbox should become independent from the others. Clicking a selected letter should uncheck it. Finally, the footer should show the correct number of the selected items.
*/

import { useState } from 'react';
import Letter from './letter-checkbox.js';

export default function MailClient() {

 const letters = [{
  id: 0,
  subject: 'Ready for adventure?',
  isSelected: true,
}, {
  id: 1,
  subject: 'Time to check in!',
  isSelected: false,
}, {
  id: 2,
  subject: 'Festival Begins in Just SEVEN Days!',
  isSelected: false,
}];

  const [letter, setLetter] = useState(letters);

  const selectedCount = letter.filter(letter => letter.isSelected).length;

  function handleToggle(toggledId) {
    setLetter(letter.map(letter => {
      if (letter.id === toggledId) {
        if(letter.isSelected){
             return {
                ...letter,
                isSelected:false
            };
        }else{
             return {
                ...letter,
                isSelected:true
            };
        }
      } else {
        return letter;
      }
    }));
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letter.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              letter.isSelected
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedCount} letters
          </b>
        </p>
      </ul>
    </>
  );
}
    