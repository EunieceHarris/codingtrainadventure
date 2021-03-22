//   Remove Items from an Array with pop() and shift()
function popShift(arr) {
    let popped = arr.pop(); // Change this line => removes element from end of array
    let shifted = arr.shift(); // Change this line => removes an element from the beginning
    return [shifted, popped];
    }
    
    console.log(popShift(['challenge', 'is', 'not', 'complete']));

// Remove Items Using splice()
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1,4) // => first param is the index, second param is how many to remove after
console.log(arr);    

// Add Items Using Splice
function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond') // => third param adds items to array
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

// Copy Array Items Using slice()
function forecast(arr) {
    // Only change code below this line
  
    arr = arr.slice(2, 4);
    return arr;
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


// Copy an Array with the Spread Operator
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
        newArr.push([...arr]);
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));

// Combine Arrays with the Spread Operator
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
    return sentence;
  }
  
  console.log(spreadOut());

// Check for Prescence of Elemnet with indexOf()
function quickCheck(arr, elem) {
    // Only change code below this line
      let check = arr.indexOf(elem);
      if (check >= 0){
        return(true);
      } else {
        return (false);
      }
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
  
//   
