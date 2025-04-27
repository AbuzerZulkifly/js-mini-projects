let calculatorDisplay = document.querySelector(".input")
let inputBtn = document.querySelectorAll("button")
let clearBtn = document.querySelector(".clear")
let deleteBtn = document.querySelector(".delete")
let firstValue = 0;
let operatorValue = "";
let awaitNextValue = false

function addvalues(numbers) {
  if(awaitNextValue){
    calculatorDisplay.value = `${numbers}`;
    awaitNextValue = false
  }
  else{
  displayValue = calculatorDisplay.value
  calculatorDisplay.value = displayValue === 0 ? numbers: displayValue + numbers}
}

const calculate = {
  "/": (firstNumber, secondNumber)=> firstNumber/secondNumber,
  "+": (firstNumber, secondNumber)=> firstNumber+secondNumber,
  "*": (firstNumber, secondNumber)=> firstNumber*secondNumber,
  "-": (firstNumber, secondNumber)=> firstNumber-secondNumber,
  "=": (firstNumber, secondNumber)=> secondNumber
}

function useOperator(operator){
  const currentValue = Number(calculatorDisplay.value)
  if(operatorValue && awaitNextValue){
    operatorValue = operator
    return
  }
  if (!firstValue){
    firstValue = currentValue
  }
  else {
    const calculation = calculate[operatorValue](firstValue,currentValue)
    calculatorDisplay.value = calculation
  }
  awaitNextValue = true;
  operatorValue = operator
}

inputBtn.forEach((inputBtns)=>{
  if(inputBtns.classList.length === 0 ) {
    inputBtns.addEventListener("click", ()=> addvalues(inputBtns.value))
  }
  else if (inputBtns.classList.contains = "operator") {
    inputBtns.addEventListener("click",()=> useOperator(inputBtns.value))
  }
})
clearBtn.addEventListener("click", ()=> {
  operatorValue = ""
  firstValue = 0
  awaitNextValue = false
  calculatorDisplay.value = 0
})
deleteBtn.addEventListener("click", ()=> calculatorDisplay.value = calculatorDisplay.value.toString().slice(0,-1))