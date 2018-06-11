//Minimum
// Write a function min that takes two arguments and returns their minimum.

function min(a, b){
  if(a < b){
      return a;
  } else if(b < a){
      return b;
    } else if(a || b === NaN){
        console.log("Please enter 2 integers");
      } else if(a === b){
          console.log('You entered the same number for both parameters');
        }
}
min(0, 10);
min(0, -10);

//Recursion
//Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

function isEven(num){
let test = Math.floor((num/1)%10); //I have this here so I can solely target the last digit of the argument. It doesn't matter if the number passed is pos or neg, it will evaluate just the last number. 
 console.log(test); 
  function inner(test){
    if(test >= 2){
      console.log(test + " greater/equal 2");
      return inner(test - 2);
    } else if(test === 1){
        console.log(test +" false 1");
        return false;
      } else if(test === 0){
          console.log(test +" true 0");
          return true;
        } else if(test % 2 === 0){ // I had to add the specification that test % 2 needed to equal 0 in order to address negative numbers. Without this explicit notation negative odd numbers, 3/5/7/9, were returning true/even at this specific breakpoint. This is also the central processing argument for the neg numbers 
            console.log(test + " true % 2");
            return true;
          } else if(test < 0){
              console.log(test + " < 0");
              return inner(-test);
            } else {
                console.log(test + " last pass");
                return inner(test-2);
              }
  } return inner(test);
}
isEven(50);
isEven(75);
isEven(-1);

//Bean Counter - Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string. Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

//Version 1 - Count Bs
function countBs(iterable){
array = [];
  for(let i of iterable){
    if(i === "B"){
      array.push(i);
    }
    console.log(i);
    console.log(array);
  } return array;
}
countBs("BBC");

//Version 2 - Character Count
function charCount(iterable, letter){
array = [];
  for(let i of iterable){
    if(i === letter){
      array.push(i);
    }
    console.log(i);
    console.log(array);
  } return "There are " + array.length + " " + array[0]+"s";
}
charCount("kakkerlakw", "k");

