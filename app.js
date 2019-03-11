document.getElementById("gen-pass").addEventListener("click", generatePassword);

// WHY ISNT MY CODE WORKING?
function generatePassword() {
      var passwordLength = document.getElementById("chars-number").value;
      var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		if (passwordLength < 10) {
		document.getElementById("chars-number").value = "Your password needs to be longer";
	} 
  
	else {
		      var newPassword = "";
              for (var i = 0; i < passwordLength; i++) {
                   var rnum = Math.floor(Math.random() * chars.length);
                   newPassword += chars.substring(rnum,rnum+1);
                  }
        } 
    document.getElementById("new-password").value = newPassword;
}


document.getElementById("copy-button").addEventListener("click", function() {
	
	var copiedText = document.getElementById("new-password");
    copiedText.select();
    document.execCommand('copy');
	alert("New password copied to clipboard!");
	
});
