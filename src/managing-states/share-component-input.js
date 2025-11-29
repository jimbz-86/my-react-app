/*
These two inputs are independent. Make them stay in sync: editing one input should update the other input with the same text, and vice versa.
import { useState } from 'react';

export default function SyncedInputs() {
  return (
    <>
      <Input label="First input" />
      <Input label="Second input" />
    </>
  );
}

function Input({ label }) {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={handleChange}
      />
    </label>
  );
}

*/

import { useState } from 'react';




export default function SyncedInputs() {
    const [text, setText] = useState('');


  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <Input label="First input" text = {text} changeText={handleChange} />
      <Input label="Second input" text = {text} changeText={handleChange}/>
    </>
  );
}

function Input({ label,text, changeText }) {

  return (
    <label>
      {label}
      {' '}
      <input
        value={text}
        onChange={changeText}
      />
    </label>
  );
}
