
    const getInput = document.querySelector("#name-input");
    const getOutput = document.querySelector("#name-output");
    
getInput.addEventListener("input", () => {
    const trimmedValue = getInput.value.trim();
    getOutput.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
})

console.log(getOutput);