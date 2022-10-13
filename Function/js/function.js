//Function

//Continuosly running

/* first method to use function */
function run(name) {
  return `${name} is running!`
}
run('Jonathan');
//end

/* second method to use function in a variable */
const run2 = function(name) {
  return `${name} is running!`
}
run2('Jonathan');
//end

/* third method to use function(ES6) */
const run3 = (name) => {
  return `${name} is running!!`
}
run3('Jonathan');
//end

//another example
const whatIsYourAge = age => {
  return `Your age is: ${age}`
}
whatIsYourAge('21');