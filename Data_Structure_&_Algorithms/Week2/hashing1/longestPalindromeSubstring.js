// Longest Palindromic Substring
// Write a function that takes a string as input and finds the longest palindromic substring within the string. 
// A palindromic substring is a substring that reads the same forwards and backwards.

console.log(checkPalindromic("babad")); //output bab
console.log(checkPalindromic("cbbd")); //output bb

function checkPalindromic(str) {
    if (str.length === 0) {
      return "";
    }

    let start = 0; 
    let maxLength = 1; 
  
    for (let i = 0; i < str.length; i++) {
      expandFromCenter(i, i);
      expandFromCenter(i, i + 1);
    }

    function expandFromCenter(left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
          left--;
          right++;
        }
    
        const length = right - left - 1;
        if (length > maxLength) {
          maxLength = length;
          start = left + 1;
        }
      }

    return str.slice(start, start + maxLength);
  }

  // TC is O(n)