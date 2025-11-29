/*
This form renders two <MyInput /> components.

Press “Show form” and notice that the second field automatically gets focused. This is because both of the <MyInput /> components try to focus the field inside. When you call focus() for two input fields in a row, the last one always “wins”.

Let’s say you want to focus the first field. The first MyInput component now receives a boolean shouldFocus prop set to true. Change the logic so that focus() is only called if the shouldFocus prop received by MyInput is true.

To verify your solution, press “Show form” and “Hide form” repeatedly. When the form appears, only the first input should get focused. This is because the parent component renders the first input with shouldFocus={true} and the second input with shouldFocus={false}. Also check that both inputs still work and you can type into both of them.

import { useEffect, useRef } from 'react';

export default function MyInput({ shouldFocus, value, onChange }) {
  const ref = useRef(null);

  // TODO: call focus() only if shouldFocus is true.
  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
}

*/

import { useEffect, useRef,useState } from 'react';

function MyInput({ shouldFocus, value, onChange }) {
  const ref = useRef(null);

  // TODO: call focus() only if shouldFocus is true.
  useEffect(() => {
    if(shouldFocus){
          ref.current.focus();
    }
  }, [shouldFocus]);

  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
}

export default function Form() {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState('Taylor');
  const [lastName, setLastName] = useState('Swift');
  const [upper, setUpper] = useState(false);
  const name = firstName + ' ' + lastName;
  return (
    <>
      <button onClick={() => setShow(s => !s)}>{show ? 'Hide' : 'Show'} form</button>
      <br />
      <hr />
      {show && (
        <>
          <label>
            Enter your first name:
            <MyInput
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              shouldFocus={true}
            />
          </label>
          <label>
            Enter your last name:
            <MyInput
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              shouldFocus={false}
            />
          </label>
          <p>Hello, <b>{upper ? name.toUpperCase() : name}</b></p>
        </>
      )}
    </>
  );
}

