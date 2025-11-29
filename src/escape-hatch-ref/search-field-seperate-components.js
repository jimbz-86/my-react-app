/*
Make it so that clicking the “Search” button puts focus into the field. Note that each component is defined in a separate file and shouldn’t be moved out of it. How do you connect them together?


export default function Page() {
  return (
    <>
      <nav>
        <SearchButton />
      </nav>
      <SearchInput />
    </>
  );
}

function SearchButton() {
  return (
    <button>
      Search
    </button>
  );
}

function SearchInput() {
  return (
    <input
      placeholder="Looking for something?"
    />
  );
}

*/

import { useRef } from 'react';

export default function Page() {
  let input = useRef(null);
  return (
    <>
      <nav>
        <SearchButton input={input}/>
      </nav>
      <SearchInput refInput={input}/>
    </>
  );
}

function SearchButton({input}) {
  return (
    <button onClick={() => input.current.focus()}>
      Search
    </button>
  );
}

function SearchInput({refInput}) {
  return (
    <input ref={refInput}
      placeholder="Looking for something?"
    />
  );
}
