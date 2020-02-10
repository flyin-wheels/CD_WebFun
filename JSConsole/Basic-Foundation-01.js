/* Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255. */
function arr(){
    var arrTwoFive = [];
    for(var i = 1; i <= 255;i++){
        arrTwoFive.push(i);
    }
    return arrTwoFive;
}
console.log(arr());


/* Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.*/
function evenOne(){
    var sum = 0;
    for(var i = 1; i <=1000; i++){
        if(i % 2 === 0){
            sum = sum + i;
        }
    }
    return sum;
}
console.log(evenOne());


/* Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000.(e.g. 1 + 3 + 5 +...+4997 + 4999).*/
function oddOne(){
    var sum = 0;
    for(var i = 1;i<=5000;i++){
        if(i % 2 ===1){
            sum = sum + i;
        }
    }
    return sum;
}
console.log(oddOne());


/* Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1, 2, 5] returns 8.[-5, 2, 5, 12] returns 14).*/
function sumArr(x){
    var sum = 0;
    var sumArrIndex = 0;
    var ctr = x.length;
    while(sumArrIndex < ctr){
        sum = sum + x[sumArrIndex];
        sumArrIndex = sumArrIndex + 1;
    }
return sum;
}
console.log(sumArr([-5,2,5,12]));


/* Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g.for[-3, 3, 5, 7] max is 7)*/
function maxArr(m){
    var max = m[0];
    var ctr = 0;

for(var i = 0; i < m.length;i++){
    if(m[i] > max){
        max = m[i];
    }
}
        return max;
}
console.log(maxArr([-3,3,5,7]));


/* Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g.for[1, 3, 5, 7, 20] average is 7.2)*/
function arrAvg(a){
    var avg = 0;
    var sum = 0;

    for(var i = 0;i < a.length;i++){
        sum = sum + a[i];
    }
    avg = sum/a.length;
    return avg;
}
console.log(arrAvg([1,3,5,7,20]));


/* Array odd - Write a function that would return an array of all the odd numbers between 1 to 50.(ex. [1, 3, 5, .... , 47, 49]).Hint: Use 'push' method.*/
function arrOdd(o){
    var allOdd = [];
    for(var i = 0;i <= o.length; i++){
        if(o[i] % 2 === 1){
            allOdd.push(o[i]);
        }
    }
    return allOdd;
}
console.log(arrOdd([1,2,3,4,5,6,7,8,9,10]));


/* Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. 
For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2.(There are two values in the array greater than 3, which are 5, 7).*/
function greaterY(arr, y){
    var num = 0;
    var yNum = y;

    for(var i = 0; i < arr.length;i++){
        if(arr[i] > yNum){
            num = num + 1;
        }
    }
    return num;
}
console.log(greaterY([1,3,5,7], 3));

/*    Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1, 5, 10, -2] will become[1, 25, 100, 4])*/
function valSq(q){
    var arrSquared = [];
    var temp = 0;

    for(var i = 0;i < q.length;i++){
            arrSquared.push(q[i]*q[i]);
    }
return arrSquared;
}
console.log(valSq([1,5,10,-2]));


/* Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. 
When the program is done the array should contain no negative values. (e.g. [1, 5, 10, -2] will become[1, 5, 10, 0]) */
function noNeg(nn){
    for(var i = 0; i < nn.length; i++){
            if(nn[i] < 0){
                nn.splice([i],1,0);
            }
    }
    return nn;
}
console.log(noNeg([1,5,10,-2]));


/* Max / Min / Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, 
and average values of the original array. (e.g. [1, 5, 10, -2] will return [10, -2, 3.5]) */
function mma(f) {
    var newArr = [];
    var max = 0;
    var min = 0;
    var avg = 0;
    var sum = 0;

    for (var e = 0; e < f.length; e++) {
        if (f[e] > max) {
            max = f[e];
        }
    }
    newArr.push(max);

    for (var a = 0; a < f.length; a++) {
        if (f[a] < min) {
            min = f[a];
        }
    }
    newArr.push(min);

    for (var i = 0; i < f.length; i++) {
       sum = sum + f[i];
     }
    avg = sum / f.length;
    newArr.push(avg);
    return newArr;
}
console.log(mma([1, 5, 10, -2]));


/* Swap Values - Write a function that will swap the first and last values of any given array.The default minimum length of the array is 2.(e.g. [1, 5, 10, -2] will become[-2, 5, 10, 1]). */
function swapArr(s) {
    var newZero = 0;
    var oldZero = s[0];
    var newLast = 0;
    var indexLast = s.length - 1;
    var oldLast = s[indexLast];
    newZero = oldLast;
    newLast = oldZero;

    s.splice(0, 1, newZero);
    s.splice(indexLast, 1, newLast);

    return s;
}
console.log(swapArr([20, 40, 60, 80]));


/* Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'.For example if array = [-1, -3, 2], 
your function will return ['Dojo', 'Dojo', 2].  */

function numStr(h){
        for(var i = 0; i < h.length; i++){
            if(h[i] < 0){
                h[i] = "Dojo";
            }
    }
    return h;
}
console.log(numStr([-1,-3,2]));
