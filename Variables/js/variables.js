//Declaring Variables

//Using var
var name = 'Jonathan';
var surname = 'Goboli';
var nickname = 'Tano';
/* Using + sign */
console.log('Name: '+ name);
/* Using comma */
console.log('Surname:', surname);
/* Using literal sign */
console.log(`Nickname: ${nickname}`);
//end

//Using const(hindi maooveride yung value ng isang variable na nagamit na)
const a = 5;
const b = 6;
const c = a+b;
//final output
console.log('The sum of a & b is equal to = ' + c);
//end

//Using let(same lang sa var subalit kapag magrereassign ng value kailangan variable na mismo yung kunin wag na mag type ng let declaration.)
/* First declaration */
let age = 'age?';
console.log('Guess my', age);
/* reassigning value of variable */
age = 21; 
console.log('my age is:', age);