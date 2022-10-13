//DOM methods

//first method to get ID
document.getElementById('firstInput');
//end

//second method to get ID and its value
document.getElementById('firstInput').value

firstInput.value

window.alert(`Name is: ${firstInput.value}`);
//end

//third method to get ID and its value using query selector

/*getting id*/
document.querySelector('#firstInput');
/*getting class name*/
document.querySelector('.name');
/*getting name value*/
document.querySelector(`[name='name']`);
document.querySelector(`[id='firstInput']`);
document.querySelector(`[class='name']`);
//end