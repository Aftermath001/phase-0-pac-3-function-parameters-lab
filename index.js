// const gifts = [ "teddy bear", "drone", "doll"];
//  function wrapGifts(gift) {
//     console.log (`Wrapped ${gift} and added a bow`);
//  }
//  wrapGifts(gifts [0]);
//  wrapGifts(gifts [1]);
//  wrapGifts(gifts [2]);
function introduction (name){
 return `Hi, my name is ${name}.`;
}
function introductionWithLanguage(name, language){
   return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
function introductionWithLanguageOptional(name, language="JavaScript"){
   return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}