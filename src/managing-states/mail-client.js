/*
There is a list of letters in state. When you hover or focus a particular letter, it gets highlighted. The currently highlighted letter is stored in the highlightedLetter state variable. You can “star” and “unstar” individual letters, which updates the letters array in state.

This code works, but there is a minor UI glitch. When you press “Star” or “Unstar”, the highlighting disappears for a moment. However, it reappears as soon as you move your pointer or switch to another letter with keyboard. Why is this happening? Fix it so that the highlighting doesn’t disappear after the button click.

import { useState } from 'react';
import { initialLetters } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
  const [letters, setLetters] = useState(initialLetters);
  const [highlightedLetter, setHighlightedLetter] = useState(null);

  function handleHover(letter) {
    setHighlightedLetter(letter);
  }

  function handleStar(starred) {
    setLetters(letters.map(letter => {
      if (letter.id === starred.id) {
        return {
          ...letter,
          isStarred: !letter.isStarred
        };
      } else {
        return letter;
      }
    }));
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={
              letter === highlightedLetter
            }
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
}
*/

import { useState } from 'react';
import Letter from './letter.js';
import './letter-style.css'

export default function MailClient() {
 const initialLetters = [{
  id: 0,
  subject: 'Ready for adventure?',
  isStarred: true,
  isHighlighted:false
}, {
  id: 1,
  subject: 'Time to check in!',
  isStarred: false,
  isHighlighted:false
}, {
  id: 2,
  subject: 'Festival Begins in Just SEVEN Days!',
  isStarred: false,
  isHighlighted:false
}];

  const [letters, setLetters] = useState(initialLetters);

  /*
  The problem is that you’re holding the letter object in highlightedLetter. But you’re also holding the same information in the letters array. So your state has duplication! When you update the letters array after the button click, you create a new letter object which is different from highlightedLetter. This is why highlightedLetter === letter check becomes false, and the highlight disappears. It reappears the next time you call setHighlightedLetter when the pointer moves.

To fix the issue, remove the duplication from state. 
  */

  function handleHover(selectedLetter) {
    setLetters(letters.map(letter => {
      if (letter.id === selectedLetter.id) {
        return {
          ...letter,
          isHighlighted:true
        };
      } else {
        return {
          ...letter,
          isHighlighted:false
        };
      }
    }));
  }

  function handleStar(starred) {
    setLetters(letters.map(letter => {
      if (letter.id === starred.id) {
        return {
          ...letter,
          isStarred: !letter.isStarred
        };
      } else {
        return letter;
      }
    }));
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={
              letter.isHighlighted
            }
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
}
