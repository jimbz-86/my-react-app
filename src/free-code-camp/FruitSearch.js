/*
In this workshop, you'll build an application that fetches fruit data from an API based on user input and displays the results dynamically.
*/
import { useState, useEffect} from 'react';

export default function FruitsSearch() {
    const [query,setQuery] = useState('');
      const [results,setResults] = useState([])

function handleSubmit(e){
  e.preventDefault();
}

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }
    const timeoutId = setTimeout(async () => {
      try{
     const response = await fetch(`https://fruit-search.freecodecamp.rocks/api/fruits?q=${query}`);
        const data = await response.json();
        setResults(data.map(fruit => fruit.name));
      }catch(error){
        console.error(error);
      }
    }, 700);
        return () =>{
      clearTimeout(timeoutId)
    };
  }, [query]);

  return(
    <div id = "search-container">
      <form onSubmit={handleSubmit}>
          <label htmlFor="search-input">
          Search for fruits:
          </label>
          <input type="search" id="search-input" value={query} onChange={(e) => setQuery(e.target.value)}/>
      </form>
      <div id="results">
      {results.length > 0  ? results.map((result,index) =>{
          return <p class ="result-item" key={index}>{result}</p>
        }
      ) : <p>No results found</p>}
      </div>
    </div>
  )
}