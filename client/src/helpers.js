import $ from 'jquery';

export function determineScreenSize(){
  let screenWidth = $(window).outerWidth(true);
  return getScreenSize(screenWidth);
}

//returns a string descriptor of the screen size.
function getScreenSize(width){
  if(width >= 1200){
    return 'xlarge';
  } else if (width >= 992 && width <= 1199 ){
    return 'large';
  } else if (width >=768 && width <= 991){
    return 'medium';
  } else if (width >= 576 && width <= 767){
    return 'small';
  } else if (width <= 575){
    return 'xsmall'
  } else {
    return null;
  }
}

export function capitalizeEveryWord(text){
  if(text === undefined){
    return "";
  }
  let textArray = text.split(" ");
  for(let item in textArray){
    textArray[item] = capitalize(textArray[item])
  }
  return textArray.join(" ")
}

export function capitalize(word){
  let strArray = word.split("");
  if(strArray[0] !== undefined){
    strArray[0] = strArray[0].toUpperCase();
  }
  if(strArray[0] === undefined){
    console.log(word)
  }
  return strArray.join("");
}

export function detectOrientationChange(currentOrientationState){
  let screenHeight= window.innerHeight;
  let screenWidth = window.innerWidth;
  let newOrientationState;
  { screenWidth > screenHeight ? newOrientationState = "landscape" : newOrientationState = "portrait" }
  if(currentOrientationState !== newOrientationState){
    return newOrientationState;
  }
  return currentOrientationState;
}
