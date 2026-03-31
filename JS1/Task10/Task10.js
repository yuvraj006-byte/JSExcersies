console.log("Testing");

const input = () => {
    const inputValue1 = document.getElementById("userInput1").value.trim();
    const inputValue2 = document.getElementById("userInput2").value.trim();
    
    alert(`Number of Die is ${inputValue1} With Estimated Sum: ${inputValue2}`);
};


document.addEventListener("DOMContentLoaded", () => {
    const getInput = document.getElementById("userSubmit");
    
    if (getInput) getInput.addEventListener("click", input);
})


export {input}