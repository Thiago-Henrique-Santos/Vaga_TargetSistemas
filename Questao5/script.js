const string = window.prompt("Este programa irá inverter a string inserida.\nDigite uma palavra ou texto:");
let reversedString = "";

for (let i = (string.length-1); i >= 0; i--) {
    reversedString += string[i];
}

const resultParagraph = document.getElementById("result");
resultParagraph.innerHTML = `String inserida: ${string}<br>String invertida: ${reversedString}`;