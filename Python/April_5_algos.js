/* case insensitive string compare */

const strA1 = "ABC";
const strB1 = "abc";
const expected1 = true;

const strA2 = "ABC";
const strB2 = "abd";
const expected2 = false;

const strA3 = "ABC";
const strB3 = "bc";
const expected3 = false;

// are the strings the same length?

 // create a function with two input parameters
 // first, make both strings lowercase
 // see if two lowercase strings are equal to one another
     // if they're the same, we return true
    // if they're not the same, return false


/**
# * Determines whether or not the strings are equal, ignoring case.
  * - Time: O(?).
 * - Space: O(?).
 * @param {string} strA
 * @param {string} strB
  * @returns {boolean} If the strings are equal or not.
  */

function caseInsensitiveStringCompare(str1, str2){
    if(str1.toLowerCase() === str2.toLowerCase()) return true;
    else return false;
}
console.log(caseInsensitiveStringCompare(strA1, strB1))
console.log(caseInsensitiveStringCompare(strA2, strB2))
console.log(caseInsensitiveStringCompare(strA2, strB3))

/* 
  Given an arr and a separator string, output a string of every item in the array separated by the separator.
  
  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

const arr1 = [1, 2, 3];
const separator1 = ", ";
// const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
// const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
// const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
// const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
// const expected5 = "";

/**
 * Converts the given array into a string of items separated by the given separator.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string|number|boolean>} arr The items to be joined as a string.
 * @param {string} separator To separate each item of the given arr.
 * @returns {string} The given array items as a string separated by the given separator.
 */
function join(arr, separator) {
    output = ""
    if(arr.length ==1){
        output = arr[0]
    }else{
        for(i = 0; i < arr.length; i++){
            if(i < arr.length - 1){
                output += arr[i] + separator
                }else{
                    output += arr[i]
            }
        }
    }console.log(output)
    return output
}
join(arr1, separator1)
join(arr2, separator2)
join(arr3, separator3)
join(arr4, separator4)
join(arr5, separator5)