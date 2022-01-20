export function ruleCheck(x, y) {
  if(y.charAt(0) !== x.charAt(x.length - 1)) {
    return false;
  } else {
    return true;
  }
}
