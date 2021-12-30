
var resultString = '';
var currentOperation = '';
var userInputLeft = '';
var userInputRight = '';
var currentValue = document.getElementById("text").innerText;

function handleNumber(number) {
	if(currentOperation === ''){
	// If no operation saved yet, save to userInputLeft
	userInputLeft = Number(number);
	// rightNumber = number;
	}
	else {
	// Otherwise save to userInputRight
	userInputRight = Number(number);
	// leftNumber = currentValue;
	}
	updateResultString ();	
};

function handleOperation(string) {
	currentOperation = string;
	// document.getElementById("text").innerText = string;
		// let operation = currentValue+string;
		// document.getElementById("text").innerText = `${userInputLeft}${operation}${userInputRight}`;
};


function updateResultString() {
	// Update result view with information we have so far
	document.getElementById("text").innerText = `${userInputLeft}${currentOperation}${userInputRight}`;
};

function handleClear(string) {
  document.getElementById("text").innerText='';	
	userInputLeft = '';
	currentOperation = '';
	userInputRight = '';
};

function showResult(){
	// Update result view with the result
	if (currentOperation === '+') {
		document.getElementById("text").innerText= userInputLeft + userInputRight;
	} 
	else if (currentOperation === '-') {
		document.getElementById("text").innerText= userInputLeft - userInputRight;
	} 
		else if (currentOperation === '/') {
		document.getElementById("text").innerText= userInputLeft / userInputRight;
	} 
		else if (currentOperation === 'x') {
		document.getElementById("text").innerText= userInputLeft * userInputRight;
	} 
	else {
		document.getElementById("text").innerText = 'NOPE';
	}
	// Example of a result string you might have = "2+3" needs to be "5"
	// You will have that information stored in the variables at the top 
}




 // ______________ SECOND TRY ___________________________



// var resultString = '';
// var currentOperation = '';
// var leftNumber = '';
// var rightNumber = '';

// function handleNumber(number) {
	// let textArea = document.querySelector(".text").innerText=number; // YESSSS !!!!! 
	// nooo changed <input> to <div class="text">
	// yess again
	
	// if(currentOperation === ''){
	// If no operation saved yet, save to leftNumber
	// leftNumber = document.querySelector(".text").innerText=number;
	// }
	// 	else {
	// Otherwise save to rightNumber
// 	rightNumber = document.querySelector(".text").innerText=number;
// 	}
// };

// function handleOperation(string) {
// 	document.querySelector(".text").innerText=string;
	
// 	if(document.querySelector("h3").innerText === 'AC' || 'DEL'){
// 	document.querySelector(".text").innerText="";
// 	console.log(document.querySelector(".text").innerText);
// If no operation saved yet, save to leftNumber
// input = leftNumber

// 	} else {
// 		document.querySelector(".text").innerText=string;
// 		console.log(document.querySelector(".text").innerText);
// 	}
// };

// function handleClear(string) {
// 	document.querySelector(".text").innerText="";	
// };

// function updateResultString(leftNumber,currentOperation,rightNumber) {
	// Update result view with information we have so far
	// let updatedResult = document.querySelector("input").value = leftNumber,currentOperation,rightNumber;
// }

// function showResult(){
	// Update result view with the result
	// Example of a result string you might have = "2+3" needs to be "5"
	// You will have that information stored in the variables at the top 
// }
	
  
  // ______________ FIRST TRY ___________________________
  
  
  // let btnText = document.querySelectorAll("h3");

  // let seven = document.querySelector("#seven");
  // let eight = document.querySelector("#eight");

  // function setInput (){
  //   const input = document.querySelector("input");
    // const btnText = document.querySelectorAll("h3");
    // let btnText = document.querySelector("h3").innerText;
    // let btnText = document.querySelectorAll("h3");

    // let seven = document.querySelector("#seven");
    // let eight = document.querySelector("#eight");

    //   if (seven.innerText == 7) {
    //   console.log(seven.innerText);
    //   input.value = "7";
    //   } else if (eight.innerText == "8") {
    //   console.log(eight.innerText);
    //   input.value = "8";
    //   } else {
    //   alert("something else");
    //   }


	// input.value = "7";
// }


// function setInput (){
//   const input = document.querySelector("input");
//   // let seven = document.querySelector("#seven");

//     if (btnArr[0].innerText == "AC") {
//     console.log(btnArr[0].innerText);
//     input.value = "AC";
//     } else if (button[1].innerText == "DEL") {
//     console.log(button[1].innerText);
//     input.value = "DEL";
//     } else if (buttonText.innerText == "8") {
//     console.log(buttonText.innerText);
//     input.value = "8";
//     } else {
//     alert("something else");
//     }
// }

//   const button = document.querySelectorAll(".button");
//   const btnArr = Array.from(button);
//     for (let i = 0; i < button.length; i++) {
//       button[i].addEventListener("click", setInput);

//     }

  // const buttonText = document.querySelectorAll("h3");
  // // const btnArr = Array.from(buttonText);
  // for (let i = 0; i < buttonText.length; i++) {
  //   buttonText[i].addEventListener("click", setInput);

  // }



// document.querySelector("#seven").addEventListener("click", setInput);

