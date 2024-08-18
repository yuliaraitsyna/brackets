module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let bracketCounter = {};

  let bracketMap = {};

  for (let [open, close] of bracketsConfig) {
    bracketMap[close] = open;
    if (open === close) {
      bracketCounter[open] = 0;
    }
  }

  for (let char of str) {
    if (bracketCounter.hasOwnProperty(char)) {
      if(bracketCounter[char] % 2 === 0) {
        stack.push(char);
      }
      else {
        if(stack.length === 0 || stack.pop() !== char) {
          return false;
        }
      }
      bracketCounter[char]++;
    }
    else if(Object.values(bracketMap).includes(char)) {
      stack.push(char);
    }
    else if (bracketMap.hasOwnProperty(char)) {
      if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
