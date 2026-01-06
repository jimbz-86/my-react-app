/*
A mood board is a collage of images and text that conveys a general idea, goal, or feeling about a particular topic.

In this lab, you will create a mood board using reusable React components. The CSS has already been provided for you.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create and export a MoodBoardItem component that accepts three props: color, image, and description.
Your MoodBoardItem component should return a div with the class mood-board-item as its top-level element.
You should set the background color of the .mood-board-item element to the value of the color prop using inline styles.
You should render an img element, with a class of mood-board-image and its src attribute set to the value of the image prop, within the .mood-board-item element.
You should render an h3 element, with a class of mood-board-text and its text the value of the description prop, within the .mood-board-item element.
You should create and export a MoodBoard.
Your MoodBoard component should return a div as its top-level element.
Your MoodBoard component should render an h1 element with a class of mood-board-heading and the text Destination Mood Board.
Your MoodBoard component should render a div with a class of mood-board.
Your MoodBoard component should render at least three MoodBoardItem components within the .mood-board element, each should pass color, image, and description props with valid values.
You can use the following images in your Mood Board if you would like:

https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg
https://cdn.freecodecamp.org/curriculum/labs/shore.jpg
https://cdn.freecodecamp.org/curriculum/labs/grass.jpg
https://cdn.freecodecamp.org/curriculum/labs/ship.jpg
https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg
https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg

*/

export function MoodBoardItem({color, image, description}){
  return (
  <div className="mood-board-item" style={{backgroundColor: color}}>
   <img className="mood-board-image" src={image}/>
   <h3 className="mood-board-text">{description}</h3>
  </div>);
}

export function MoodBoard(){
  return (<div className="mood-board">
    <h1 className="mood-board-heading">
      Destination Mood Board
    </h1>
    <MoodBoardItem color="blue"image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg" description="pathway"/>
    <MoodBoardItem color="brown" image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg" description="shore"/>
    <MoodBoardItem color="green" image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg" description="grass"/>
  </div>);
}