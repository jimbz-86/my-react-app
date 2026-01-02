/*
Challenge
Learn about nesting and listing React components.

The component EggList will set a prop called eggs which is an array of your favourite easter eggs e.g. "Lindt".
Loop through the props.eggs to output a unorder list of Easter eggs.
Each list item should be a component called EasterEgg with a prop name, to render the name in a li tag.
Each EasterEgg will need a key prop with a unique id. Use the index of the array for now.
*/

import { EasterEgg } from "./EasterEgg"

const eggs =[
    {name:"M&M"},
    {name:"Snickers"},
    {name:"Twix"}
]

export default function EggList() {
    return(
        eggs.map(egg =>{
                return EasterEgg(eggs.indexOf(egg.name),egg.name);
            }
        )
    );
}