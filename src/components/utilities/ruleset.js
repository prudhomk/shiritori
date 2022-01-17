export function ruleCheck(x, y) {
  if(y.charAt(0) !== x.charAt(-1)) {
    return false;
  }
}
