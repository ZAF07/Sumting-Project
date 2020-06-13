import * as j from './query';

// Selector
export const selectors = {
  selectDiv: document.querySelector('div'),
  selectCanvas: document.querySelector('.canvas'),
  selectCanvas2: document.querySelector('.canvas2'),
  selectCanvas3: document.querySelector('.canvas3'),
  selectSection: document.querySelector('section'),
  selectPara: document.querySelector('p'),
  selectFactSheet: document.querySelector('.factSheet'),
  selectButton: document.querySelector('button'),
  selectFactArea: document.querySelector('.factsHere')
};


// First ever click on site Bubbles float in function
export const showBubbles = () => {
  let bubbles = `
    <div class="bubble1" id="bub"></div>
    <div class="bubble2" id="bub"></div>
    <div class="bubble3" id="bub"></div>
    <div class="bubble4" id="bub"></div>
    <div class="bubble5" id="bub"></div>
    <div class="bubble6" id="bub"></div>
    <div class="bubble7" id="bub"></div>
    <div class="bubble8" id="bub"></div>
    <div class="bubble9" id="bub"></div>
    <div class="bubble10" id="bub"></div>
    <div class="bubble11" id="bub"></div>
    <div class="bubble12" id="bub"></div>
    <div class="bubble13" id="bub"></div>
    <div class="bubble14" id="bub"></div>
    <div class="bubble15" id="bub"></div>
    <div class="bubble16" id="bub"></div>
    <div class="bubble17" id="bub"></div>
    <div class="bubble18" id="bub"></div>
  `;

  selectors.selectCanvas.insertAdjacentHTML('beforeend', bubbles);
};

// Function to remove window's click event
export const removeClick= ()=>{
  window.removeEventListener('click', showBubbles);
};


// Make first set of bubbles float away
let bubList = [];
export const shooBubbles = () =>{

  let animationName = ['shoo 3s ease-in forwards', 'shoo2 3.5s linear forwards', 'shoo2 3.4s ease forwards', 'shoo2 4.4s ease forwards', 'shoo4 1.5s ease-out forwards', 'shoo4 1.7s ease-out forwards', 'shoo3 2.8s ease-in forwards', 'shoo5 3s ease-out forwards', 'shoo4 2.5s ease-out forwards'  ];

  let bubId;
  let bubArr;

    bubId =document.querySelectorAll('#bub');
      Array.from(bubId).forEach(function callback(el) {
      if (el.parentNode.className === 'canvas'){
        bubList.push(el)
      } else {
        alert('Refresh page please');
      }
    })
    bubList.forEach((el, i) => {
      if (el.offsetParent) { // not really sure might wanna change later on
        el.style.animation = `${animationName[i]}`;
      } else {
        console.log('try again');
      }
    });
}

// New set of bubbles / Second wave of bubbles
export const factBubbles = ()=>{

  // insert new set of bubbles
  let newBubbles = `
      <div class="bubble19 bub2"></div>
      <div class="bubble20 bub2"></div>
      <div class="bubble21 bub2"></div>
      <div class="bubble22 bub2"></div>
      <div class="bubble23 bub2"></div>
      <div class="bubble24 bub2"></div>
      <div class="bubble25 bub2"></div>
      <div class="bubble26 bub2"></div>
      <div class="bubble27 bub2"></div>
      <div class="bubble28 bub2"></div>
      <div class="bubble29 bub2"></div>
      <div class="bubble30 bub2"></div>
      <div class="bubble31 bub2"></div>
      <div class="bubble32 bub2"></div>
      <div class="bubble33 bub2"></div>
      <div class="bubble34 bub2"></div>
      <div class="bubble35 bub2"></div>
      <div class="bubble36 bub2"></div>
  `;

  let factsBub = `
  <div class="bubble37 bub3"></div>
  <div class="bubble38 bub3"></div>
  <div class="bubble39 bub3"></div>
  `;

  selectors.selectCanvas2.insertAdjacentHTML('beforeend', newBubbles);
  selectors.selectCanvas3.insertAdjacentHTML('beforeend', factsBub);
  selectors.selectDiv.removeEventListener('click', shooBubbles);

  // remove the canvas (first set of bubbles) class from the DOM
  if (selectors.selectCanvas.parentNode){
    selectors.selectDiv.parentNode.removeChild(selectors.selectCanvas)
  }
}

// Function to pop bubbles
export const popBubbles = (el)=>{

  el.style.animation = 'pop 0.2s linear';
  el.parentNode.removeChild(el)
  // remove the canvas2 class from the DOM
  if (selectors.selectCanvas2) {
    selectors.selectCanvas2.innerHTML = '';
  }
}

// Function to show facts
export const factSlide = (fact)=>{
  // insert the fact sheet
  //  fact = `
  // "facts">Lorem ipsum dolor sit amet, consectetur adipisicing
  //  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  //   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  //   aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
  //   voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  //    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
  //     anim id est laborum.
  // `;

  selectors.selectFactArea.insertAdjacentHTML('afterbegin', fact);
  // $('.factSheet').slideDown('slow');
  // $('button').slideDown('slow');

  j.slideSheetDown();
  j.slideBtnDown();

  // selectors.selectFactSheet.style.animation= 'sheetSlide 0.3s ease-in forwards'
}


// Function to animate the fact sheet
export const toggleClass = ()=>{
    // selectors.selectCanvas3.classList.toggle('disableClick');
    // selectors.selectFactSheet.style.animation = 'sheetSlideBack 0.7s ease-out forwards'
    // $('.factSheet').slideUp('slow');
    // $('button').slideUp('fast');

    j.slideSheetUp()
    j.slideBtnUp()
  }

  export const removeFacts = () => {
      selectors.selectFactArea.innerHTML = '';
  }
