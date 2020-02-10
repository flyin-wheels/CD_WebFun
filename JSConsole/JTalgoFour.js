
/* Given an array and a value Y, count and print the number of array values greater than Y. 
function largerY(x,y) {
    var numCount = 0;

    for (var i = 0; i < x.length; i++) {
        if (x[i] > y) {
           console.log(x[i]);
           numCount = numCount + 1;
        }
    }
    console.log(numCount);
}

largerY([4, 78, 22], 11);
*/

/* Given an array, print the max, min and average values for that array. 
function maxminavg(x) {
    var min = 0;

    sum = 0;
    avg = 0;
    for (var i = 0; i < x.length; i++) {
        sum = sum + x[i];
    }
    avg = sum / x.length;
    console.log('Average is ' + avg);

    var maxTemp = x[0];
    var max = maxTemp;
    for(var m = 0; m < x.length; m++){
        if(x[m] > max){
            max = x[m];
        }
    }
    console.log('The max is ' + max);

    var minTemp = x[0];
    var min = minTemp;
    for (var m = 0; m < x.length; m++) {
        if (x[m] < min) {
            min = x[m];
        }
    }
    console.log('The min is ' + min);
}

maxminavg([4, 78, 22, 100, 2,55]);
*/

/*  Given an array of numbers, create a function that returns a new array where negative values 
were replaced with the string ‘Dojo’.For example, replaceNegatives([1, 2, -3, -5, 5]) should return [1, 2, "Dojo", "Dojo", 5]. 
function replaceNegNum(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] < 0) 
          x[i] = "Dojo";
    }
    console.log(x);
} 
replaceNegNum([5,-9,4,-10,34,1]);
*/

/*  working in -place(hence shortening the array).
For example, removeVals([20, 30, 40, 50, 60, 70], 2, 4) should return [20, 30, 70]. 
function arr(s){
s.splice(2,3);
console.log(s);
    }

arr([20,30,40,50,60,70]);
*/