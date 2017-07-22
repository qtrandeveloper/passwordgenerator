//accept character number input
//assign number to password string length
//onlick generate button creates random string of number length
//password will be made up of characters a-z, A-Z, 0-9
//how to randomly create string?
//assign string to password
//return password to input field after generated

function generatePassword() {
var passwordLength = document.getElementById("chars-number").value;
var characters = "";
var newPassword = "";

document.getElementById("new-password").value = newPassword;
}


// how to copy input from form and copy to clipboard?
function copyPassword() {
var toBeCopied = document.getElementById("new-password").value;
}
