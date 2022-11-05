// Assignment code here

  // ----------All potential lower-case characters----------
  let lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  // ----------All potential upper-case characters----------
  let uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  // ----------All potential number characters----------
  let numbers = ["1","2","3","4","5","6","7","8","9","0"];

  // ----------All potential special characters----------
  let specialCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|",`/`,":",";",`"`,"'","<",",",">",".","?","/"];

function generatePassword() {

  // Defines empty variables everytime function is called
  let allCharacters = [];
  let newPassword = "";

  // ----------ALL PASSWORD PROMPTS----------

  // ----------Password length prompt----------
  let passwordLength = prompt("choose the length of your password:");
  if (parseInt(passwordLength) < 8) { // Checks if too short
    alert("Password length must be at least 8 characters long.");
    generatePassword();
  }
  if (parseInt(passwordLength) > 128) { // Checks if too long
    alert("Password length must be no more than 128 characters long.");
    generatePassword();
  }

  // ----------Include lowercase characters prompt----------
  let includeLowerCase = confirm("Do you wish to include any lower-case characters?");  
  if (includeLowerCase) { // checks to add characters or not
    allCharacters.push(...lowercaseLetters);
    
    console.log(`current characters to choose from are: ${allCharacters}`);
  }

  // ----------Include uppercase characters prompt----------
  let includeUpperCase = confirm("Do you wish to include any upper-case characters?");
  if (includeUpperCase) { // checks to add characters or not
    allCharacters.push(...uppercaseLetters);

    console.log(`current characters to choose from are: ${allCharacters}`);
  }

  // ----------Include numeric characters prompt----------
  let includeNumberCharacters = confirm("Do you wish to include any numbers?");
  if (includeNumberCharacters) { // checks to add characters or not
    allCharacters.push(...numbers);

    console.log(`current characters to choose from are: ${allCharacters}`);
  }

  // ----------Include special characters prompt----------
  let includeSpecialCharacters = confirm("Do you wish to include any special characters?");
  if (includeSpecialCharacters) { // checks to add characters or not
    allCharacters.push(...specialCharacters);

    console.log(`current characters to choose from are: ${allCharacters}`);
  }

  // Checks to make sure at least one of the character types were chosen:
  if (!includeLowerCase && !includeUpperCase && !includeNumberCharacters && !includeSpecialCharacters) {
    alert("At least one character type needs to be selected (upper/lower case characters, numbers or special characters)");
    generatePassword();
  }

  // ----------PASSWORD GENERATION----------

  console.log(`All characters to be randomly generated: ${allCharacters}`);

  for (let i=0; i < parseInt(passwordLength); i++) {
    // Loops through allCharacters and chooses randomly which to add, finishes when the users password length is reached
    newPassword += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  } return newPassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
