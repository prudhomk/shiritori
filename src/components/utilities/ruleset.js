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

export function checkRepeats(word, wordList) {
  if(!wordList.includes(word)) {
    return true;
  } else {
    console.log('Word has already been said, try again');
    return false;
  }
}

export function checkTimer(count) {
  if(count === 0) {
    return true;
  } else {
    return false;
  }
}

export function scoreCritic(wordList) {
  if(wordList.length < 5) {
    return 'Mediocre!';
  } else if(5 < wordList.length < 15) {
    return 'Impressive!';
  } else if(15 < wordList.length) {
    return 'Amazing!';
  }
}


