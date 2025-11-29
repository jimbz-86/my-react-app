/*
Make it so that clicking the “Search” button puts focus into the field.

export default function Page() {
  return (
    <>
      <nav>
        <button>Search</button>
      </nav>
      <input
        placeholder="Looking for something?"
      />
    </>
  );
}
*/

import {  useRef } from 'react';
export default function Page() {
  let focus = useRef(null);
  
  function handleFocus(){
    focus.current.focus();
  }
  
  return (
    <>
      <nav>
        <button onClick={()=>handleFocus()}>Search</button>
      </nav>
      <input ref={focus}
        placeholder="Looking for something?"
      />
    </>
  );
}

