/* 
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation and capitalization
 */



  const str1 = "a x a";
  const expected1 = true;
  
  const str2 = "racecar";
  const expected2 = true;
  
  const str3 = "Dud";
  const expected3 = false;
  
  const str4 = "oho!";
  const expected4 = false;
  
  /**
   * Determines if the given str is a palindrome (same forwards and backwards).
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str
   * @returns {boolean} Whether the given str is a palindrome or not.
   */

   function isPalindrome(input){
    for(let i = 0; i < input.length/2; i++){
        if(input[i] == input[input.length - 1]){
            return true
        }
        else{
            return false
        }
    }
  }

  function palChecker(str){
    let newStr = ""
    let len =str.length
    for (let i = 0; i <= len; i++){
      newStr += str.charAt(len - i);
    }
    if (newStr === str){
      return true
    }
    else{
      return false
    }
  }
  
  // console.log(isPalindrome(str1))
  // console.log(isPalindrome(str2))
  // console.log(isPalindrome(str3))
  // console.log(isPalindrome(str4))

//   ************************************

/* 
  Longest Palindrome
  For this challenge, we will look not only at the entire string provided,
  but also at the substrings within it.
  Return the longest palindromic substring. 
  Strings longer or shorter than complete words are OK.
  All the substrings of "abc" are:
  a, ab, abc, b, bc, c
*/
const two_str1 = "what up, daddy-o?";
const two_expected1 = "dad";

const two_str2 = "uh, not much";
const two_expected2 = "u";

const two_str3 = "Yikes! my favorite racecar erupted!";
const two_expected3 = "e racecar e";

const two_str4 = "a1001x20002y5677765z";
const two_expected4 = "5677765";

const two_str5 = "a1001x20002y567765z";
const two_expected5 = "567765";

/**
 * Finds the longest palindromic substring in the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The longest palindromic substring from the given string.
 */
// function longestPalindromicSubstring(str) {}
function longestPalindrome(str){
  var longestPal = '';
  let midIdx = Math.floor(str.length / 2)
  for(var i = 0; i < str.length; i++){
      if(i > midIdx && str.length - 1 < longestPal.length){
        break;
      }
  }
  return currentLongest;
}

function concatPalindromeFromCenter(str = "")

function longestPalindrome(str) {
  let output = str[0]
  for (let initChar = 0; initChar < str.length; initChar++){
    let pal = null;
    for(let endingChar = initChar + 1;
      endingChar < str.length;
      endingChar++){
        if (isPalindrome(str.substring(initChar, endingChar)))
          pal
      }
  }
}
console.log(longestPalindrome(two_str1))
console.log(longestPalindrome(two_str2))
console.log(longestPalindrome(two_str3))
console.log(longestPalindrome(two_str4))
console.log(longestPalindrome(two_str5))
