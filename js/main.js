//One Missing: Write a function that takes an array of integers between 1 and 10, with one missing integer, as an argument and returns the missing integer. Test this with Mocha and Chai.
//for loop and if statement = filter

function whatsMissing(array){
  var sorted = array.slice(0).sort(function(a,b){return a-b;});
  // var matchArray = [1,2,3,4,5,6,7,8,9,10];
  //sort array initially
  //loop through array and see if each index is any number 1 through 10
  //have an array that it can match to
  //if that number does not match any index, push it to a new array, return that array

  // for (var i = 0; i < array.length; i++) {
  //   if (matchArray.indexOf(array[i]) === -1){
  //     missing = array[i];
  //   }
  // }
  // return missing;


}

//functional
var missing = sorted.filter(function(num, i){
  return sorted[i+1] - num > 1;
}).map(function(num){
  return num +1;
});

return missing;

//non functional
var missing = [];
for (var i = 0; i < sorted.length; i++) {
  if(sorted[i+1] - sorted[i] > 1){
    missing.push(sorted[i] + 1);
  }
}
return missing;

