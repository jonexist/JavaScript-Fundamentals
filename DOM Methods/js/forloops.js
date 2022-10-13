const priceInput = document.querySelectorAll(`.price`);
const totalAmount = document.querySelector(`#amount`);
const totalSum = document.querySelector(`#calculate`);

totalSum.addEventListener('click', () => {
  
  let sum = 0;

  for (let i = 0; i < priceInput.length; i++) {

    sum += Number(priceInput[i].value);

  }
    totalAmount.value = sum;
});