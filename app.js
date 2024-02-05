/*=========== Get Html Elements ============= */

const inputNum = document.querySelector(".input-box input");
const selectBtn = document.getElementById("mySelect");
const submitBtn = document.querySelector("#sub-btn");
const resultField = document.querySelector(".result-box");
/*=========== Number system Function ============= */
submitBtn.addEventListener("click", function resultFun() {
  let inputVal = parseFloat(inputNum.value);
  let selectValue = selectBtn.value;
  switch (selectValue) {
    case "Octal":
      let changeOct = inputVal.toString(8);
      resultField.innerHTML = selectValue + ": " + changeOct;
      break;
    case "Binary":
      let changeBin = inputVal.toString(2);
      resultField.innerHTML = selectValue + ": " + changeBin;
      break;
    case "Hexademal":
      let changeHex = inputVal.toString(16);
      resultField.innerHTML = selectValue + ": " + changeHex.toUpperCase();
      break;
    case "N-Base":
      let base = parseFloat(prompt("Enter a Base Number:"));
      let changeNum = inputVal.toString(base);
      resultField.innerHTML = selectValue + ": " + changeNum;
      break;
    default:
      resultField.innerHTML = selectValue + ": " + inputVal;
  }
});
