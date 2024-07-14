document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton"); 
    const numInput1 = document.getElementById("numInput1");
    const numInput2 = document.getElementById("numInput2");
    const messages = document.querySelectorAll(".message");
   
   calculateButton.addEventListener("click", function () {
        const num1 = parseInt(numInput1.value, 10)||0;
        const num2 = parseInt(numInput2.value, 10)||0;
        let increment = 1;
        
        messages.forEach(function (message) {
            const adjustedNum1 = num1 + increment;
            const adjustedNum2 = num2 + increment;
            const result = adjustedNum1 * adjustedNum2;
            message.textContent = `${adjustedNum1} X ${adjustedNum2} = ${result}`; 
            increment++;
        });

    });
});
   