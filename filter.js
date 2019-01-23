function isFunction(func) {
    return func && {}.toString.call(func) === '[object Function]';
}

Array.prototype.myFilter = function(callbackFunction = false) {

    if (isFunction(callbackFunction) !== true) {
        console.error('You must provide an argument that is a callback function!');
        return 'You must provide an argument that is a callback function!';
    } else if (callbackFunction.length > 3) {
        console.error('Your callback function has too many parameters');
        return 'Your callback function has too many parameters';
    }

    const filtered = [];
    for (let i = 0; i < this.length; i++) {
        if (callbackFunction(this[i], i, this)) {
            filtered.push(this[i]);
        }
    }
    return filtered;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = numbers.filter( number => number % 2 === 0 );
const myEvenNumbers = numbers.myFilter(number => number % 2 === 0);
console.log('.filter result: ',evenNumbers);
console.log('.myFilter result: ',myEvenNumbers);
