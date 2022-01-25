import { Animals, FnV, Names } from "../../data/categories";

export function ruleCheck(x, y) {
  if(y.charAt(0) !== x.charAt(x.length - 1)) {
    return false;
  } else {
    return true;
  }
}

export function checkDictionary(word, category) {
  if(category.includes(word.toLowerCase())) {
    return true;
  } else {
    console.log('Not an accepted word');
    return false;
  }
}

export function pickCategory(string) {
  switch (string) {
    case 'Fruits & Vegetables':
      return FnV;
    case 'Animals':
      return Animals;
    case 'Names':
      return Names;
    default: 
      console.log('No mo Categories :(');
  }
}

