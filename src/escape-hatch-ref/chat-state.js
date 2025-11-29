/*
In this example, after you press “Send”, there is a small delay before the message is shown. Type “hello”, press Send, and then quickly edit the input again. Despite your edits, the alert would still show “hello” (which was the value of state at the time the button was clicked).

Usually, this behavior is what you want in an app. However, there may be occasional cases where you want some asynchronous code to read the latest version of some state. Can you think of a way to make the alert show the current input text rather than what it was at the time of the click?

import { useState, useRef } from 'react';

export default function Chat() {
  const [text, setText] = useState('');

  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + text);
    }, 3000);
  }

  return (
    <>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </>
  );
}

*/

import { useState, useRef } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  let latestText = useRef(text)

  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + latestText.current);
    }, 3000);
  }

  return (
    <>
      <input
        value={text}
        onChange={e => {
            setText(e.target.value)
            latestText.current = text;
            }
        }
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </>
  );
}
