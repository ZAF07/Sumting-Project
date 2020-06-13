import './style.css';
import './firstClickAnimations.css';
import './secondClickAnimations.css';
import './set.logo.js';
import * as view from './view.js';
import * as fact from './model.js';
import * as handle from './api';
import * as j from './query';
import 'jQuery';

// First click on page to make bubles float in
window.addEventListener('click', ()=>{
  // float in canvas bubbles
  view.showBubbles();

  // Remove the click event
  view.removeClick();
});

// $('.factSheet').toggle();
j.hideSheet();

let counter = 0;

//view.selectors.selectCanvas3.addEventListener('click', view.popBubbles);
// THE 'back' BUTTON
view.selectors.selectButton.addEventListener('click', ()=>{

  counter ++;

  if (view.selectors.selectCanvas3.childElementCount >= 1){
    view.toggleClass()
    view.removeFacts()
  } else {
    view.factBubbles();
    view.removeFacts()
    view.toggleClass()
  }
  if (counter === 3) { // CREATE A 'FINISH' PAGE
    alert('YEAH BABES!')
  }
});

// first set of bubbles
view.selectors.selectCanvas.addEventListener('click', ()=>{

  // remove first set of bubbles (canvas) also call the API here
  view.shooBubbles();

  // bring in new set of bubbles (canvas 2 and canvas 3)
  view.factBubbles()
});

// the 3 bubbles page
view.selectors.selectCanvas3.addEventListener('click', ()=>{
  // get the selected bubble
  let clickEvent = window.event;
  let selectedBubble = clickEvent.target;

   // Pops the bubbles
   view.popBubbles(selectedBubble)

   // call the fact API here
   // fact.getHowManyInSpace().then((result) => {
   //   let fact = `Humans are amazing, but sometimes are equally as shit.
   //   Right now, there are three people in space. They are ${result[0]},
   //   ${result[1]} and ${result[2]}🚀`;
   //
   //   view.factSlide(fact)
   // })
   const num = Math.floor(Math.random() * (1 - 5) + 5);
   // const num = 4;
   handle.randomData(num);
});
