function generatePassword() {
var passwordLength = document.input.charsnumber.value;
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var newPassword = "";
        for (var i = 0; i < passwordLength; i++) {
             var rnum = Math.floor(Math.random() * chars.length);
		     newPassword += chars.substring(rnum,rnum+1);
            }        
document.output.newpassword.value = newPassword;
}



function copyPassword() {
var toBeCopied = document.output.newpassword.value;
}
