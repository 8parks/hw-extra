document.addEventListener("DOMContentLoaded", function () {
    const inputButton = document.getElementById("inputButton"); 
    const textInput = document.getElementaryById("textInput");
    const messages = doument.querySelectorAll(".message");
   
   inputButton.addEventListener("click", function () {
      // mainbox의 표시 상태를 토글
        messages.forEach(function (message) {
            message.textContent = textInput.value;
        });

        textInput.value = "";
    });
});
   