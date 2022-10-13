const price1 = document.querySelector('#product1');
const price2 = document.querySelector('#product2');
const price3 = document.querySelector('#product3');
const price4 = document.querySelector('#product4');
const submit = document.querySelector('#submit');
const totalAmount = document.querySelector('#total');

//kana mauli

submit.addEventListener('click', () => {

  let sum = 0;
  sum = Number(price1.value) + Number(price2.value) + Number(price3.value) + Number(price4.value);

  totalAmount.value = sum;

});