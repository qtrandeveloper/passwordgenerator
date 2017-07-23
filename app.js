var button = document.getElementById("copy-button");

function generatePassword() {
      var passwordLength = document.getElementById("charsnumber").value;
      var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var newPassword = "";
              for (var i = 0; i < passwordLength; i++) {
                   var rnum = Math.floor(Math.random() * chars.length);
      		     newPassword += chars.substring(rnum,rnum+1);
                  }
      document.getElementById("new-password").value = newPassword;
}


button.addEventListener("click", function() {

    // We will need a range object and a selection.
    var range = document.createRange(),
        selection = window.getSelection();

    // Clear selection from any previous data.
    selection.removeAllRanges();

    // Make the range select the entire content of password
    range.selectNodeContents(newPassword);

    // Add that range to the selection.
    selection.addRange(range);

    // Copy the selection to clipboard.
    document.execCommand('copy');

    // Clear selection if you want to.
    selection.removeAllRanges();

}, false);
