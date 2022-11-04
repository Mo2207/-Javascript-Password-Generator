// Assignment code here

  // all potential lower-case characters:
  let lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  // all potential upper-case characters:
  let uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  // all potential number characters:
  let numbers = ["1","2","3","4","5","6","7","8","9","0"];

  // all potential special characters:
  let specialCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|",`/`,":",";",`"`,"'","<",",",">",".","?","/"];

function generatePassword() {

  let allCharacters = [];
  let newPassword = "";

  // ALL PASSWORD PROMPTS:

  // password length prompt:
  let passwordLength = prompt("choose the length of your password:");
  if (parseInt(passwordLength) < 8) { // checks if too short
    alert("Password length must be at least 8 characters long.");
    generatePassword();
  }
  if (parseInt(passwordLength) > 128) { // checks if too long
    alert("Password length must be no more than 128 characters long.");
    generatePassword();
  }

  // include lowercase characters prompt:
  let includeLowerCase = confirm("Do you wish to include any lower-case characters?");  

  if (includeLowerCase) { // checks to add characters or not
    allCharacters.push(...lowercaseLetters);
    
    console.log(`current characters to choose from are: ${allCharacters}`);
  }

  // include uppercase characters prompt:
  let includeUpperCase = confirm("Do you wish to include any upper-case characters?");

  if (includeUpperCase) { // checks to add characters or not
    allCharacters.push(...uppercaseLetters);

    console.log(`current characters to choose from are: ${allCharacters}`);
  }

  // include numeric characters prompt:
  let includeNumberCharacters = confirm("Do you wish to include any numbers?");

  if (includeNumberCharacters) { // checks to add characters or not
    allCharacters.push(...numbers);

    console.log(`current characters to choose from are: ${allCharacters}`);
  }

  // include special characters prompt:
  let includeSpecialCharacters = confirm("Do you wish to include any special characters?");

  if (includeSpecialCharacters) { // checks to add characters or not
    allCharacters.push(...specialCharacters);

    console.log(`current characters to choose from are: ${allCharacters}`);
  }

  // checks to make sure at least one of the character types were chosen:
  if (!includeLowerCase && !includeUpperCase && !includeNumberCharacters && !includeSpecialCharacters) {
    alert("At least one character type needs to be selected (upper/lower case characters, numbers or special characters)");
    generatePassword();
  }

  // PASSWORD GENERATION:

  console.log(allCharacters);

  for (let i=0; i < parseInt(passwordLength); i++) {
    newPassword += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    console.log(newPassword);
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
