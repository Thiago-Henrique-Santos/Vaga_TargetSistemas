const input = document.querySelector("input#num");
const button = document.querySelector("button#calculate");
const resultBlock = document.querySelector("p#result");

button.addEventListener("click", ()=>{
    let number = Number(input.value);
    let result = isNumberIncludedInFibonacci (number);
    
    if (result < 0) {
        resultBlock.style.color = "red";
        resultBlock.textContent = "A sequência não possui números negativos.";
    } else if (result < number) {
        resultBlock.style.color = "rgb(255, 115, 0)";
        resultBlock.textContent = `O número ${number} não está na sequência.`;
    } else {
        resultBlock.style.color = "green";
        resultBlock.textContent = `O número ${number} está na sequência.`;
    }
});

function isNumberIncludedInFibonacci (number) {
    let fibonacciCount = [0, 1];
    let finalNumber = 2;
    let countingFinalNumber = 2;
	if (number < 0) {
        finalNumber = -1;
    } else if(number == 0) {
		finalNumber = fibonacciCount[0];
	} else if(number == 1) {
		finalNumber = fibonacciCount[1];
	} else {
		for (i = 2; countingFinalNumber <= number; i++) {
			fibonacciCount[i]=fibonacciCount[(i-1)]+fibonacciCount[(i-2)];

            finalNumber = countingFinalNumber;
            countingFinalNumber = fibonacciCount[i];
		}
	}
    return finalNumber;
}