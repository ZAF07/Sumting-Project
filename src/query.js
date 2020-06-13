export const slideSheetUp = () => {
  $('.factSheet').slideUp('slow');
}


export const slideBtnUp = () => {
  $('button').slideUp('fast');
}

export const slideSheetDown = () => {
  $('.factSheet').slideDown('slow');
}

export const slideBtnDown = () => {
  $('button').slideDown('slow');
}

export const hideSheet = () => {
  $('.factSheet').toggle();
}
