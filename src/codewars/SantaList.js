/*
Santa wants to simplify his life and offer children the possiblity to enter their wishlist via an online form.

The form should be a React component and should contain:

- an input field for the child's name (with id 'name')
- a text area to describe the wish (id: 'wish')
- a drop-down indicating the priority of the wish, from 1 to 5 - default is 1 (id: 'priority')
- the keys in the state to store the corresponding values should be named the same as the element's id
- an onSubmit action calling the function handleSubmit
- a function called handleSubmit, which
- calls send (a function that is already provided as part of the injected properties props)
- passes the current state as a parameter to send
- calls event.preventDefault
- it should be a controlled component (i.e. using onChange to bind input to the component's state)
*/

import {useState} from 'react'

export default function SantaList(){
    const [wish,setWish] = useState({
        name:"",
        wish:"",
        priority:"1"
    });

    return(
        <div>
            <form onSubmit={handleSubmit}>
           Name: <input id ="name" onChange={e =>setWish(
            {...wish,name: e.target.value})}/>
            <br/>
            Wish: <textarea id="wish" onChange={e =>setWish(
            {...wish,wish: e.target.value})}/>
            <br/>
            Priority: 
            <select id="priority" onChange={e =>setWish(
            {...wish,priority: e.target.value})}>
                <option id="1">1</option>
                <option id="2">2</option>
                <option id="3">3</option>
                <option id="4">4</option>
                <option id="5">5</option>
            </select>
            <button>SUBMIT</button>
            </form>
        </div>
    );


    function handleSubmit(event){
        alert(wish.name)
        alert(wish.wish)
        alert(wish.priority)
        event.preventDefault();
    }
} 
