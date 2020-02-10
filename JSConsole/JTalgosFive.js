
/* Return the given array, after setting any negative values to zero.For example resetNegatives([1, 2, -1, -3]) should return [1, 2, 0, 0]. 
function arrNeg(n){
    for(var i = 0; i < n.length; i++){
        if(n[i] < 0){
            n.splice(i,1,0);
        }
    }
return n;
}

console.log(arrNeg([0,7,-99,-8,245]));
*/

/* Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.For example 
    moveForward([1, 2, 3]) should return [2, 3, 0]. 
function arrMove(m) {
    m.splice(0,1);
    m.push(0);
    return m;
}
console.log(arrMove([7, 8, 9, 10]));
*/

/* Given an array, return an array with values in a reversed order.For example, returnReversed([1, 2, 3]) should return [3, 2, 1]. 
function arrRev(r) {
    r.reverse(r);
    return r;
}
console.log(arrRev([10, 20, 30, 40]));
*/

/*  Create a function that changes a given array to list each original element twice, retaining original order.Have the function return the 
     new array.For example repeatTwice([4, ”Ulysses”, 42, false]) should return [4, 4, “Ulysses”, “Ulysses”, 42, 42, false, false]. 
function arrDouble(d) {
    var arrNew = [];
for (var i = 0; i < d.length; i++) {
        arrNew = arrNew + d[i];
    arrNew = arrNew + d[i];
    }
    return arrNew;
}
console.log(arrDouble([4, "Zeus", 333, false]));
*/