// Fucking FizzBuzz
let num = parseInt(prompt("Insert a number"));
function fuckinFizzBuzz(num){
  if (num % 3 === 0 && num % 5 === 0){
    console.log('FizzBuzz bitch');
  } else if (num % 5 === 0) {
    console.log('buzz');
  } else if (num % 3 === 0) {
    console.log('fizz');
  } else {
    console.log(num);
  }
}
fuckinFizzBuzz(num);

//Checker Board
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let place = array1.length;
for(i = 0; i <= place; i++){
  if (array1[i] % 2 === 0) {
    console.log('# ');
  } else {
    console.log(' #');
  }
}