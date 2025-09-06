console.log("main.js");
(() => {
  console.log("Here we are!");
  window.addEventListener("load", (event) => {
    const firstNum = document.getElementById("multiplier");
    const secondNum = document.getElementById("multiplicand");
    const operator = document.getElementById("operator"); // <select> element
    const result = document.getElementById("product");

    const update = () => {
      const a = parseFloat(firstNum.value) || 0;
      const b = parseFloat(secondNum.value) || 0;
      let output;

      switch (operator.value) {
        case "+":
          output = a + b;
          break;
        case "-":
          output = a - b;
          break;
        case "*":
          output = a * b;
          break;
        case "/":
          output = b !== 0 ? a / b : "∞";
          break;
        default:
          output = "NaN";
      }

      result.textContent = output;
    };

    firstNum.addEventListener("input", update);
    secondNum.addEventListener("input", update);
    operator.addEventListener("change", update);

    update();
  });
})();
