function isPalindrome(word) {
    // Write your algorithm here
  let palindrome=word.split('').reverse().join('')
  if(palindrome===word){
    return true
  }
  else{
      return false
  }
}

/* Create a variable palindrome 
 Create if statement 
 return true 
  Add your pseudocode here
*/

/*
Create a varible palindrome to split the word then reverse it then join the word 
Add an if statement and pass an argument condition  and return true if the condition is met
else return false 
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
