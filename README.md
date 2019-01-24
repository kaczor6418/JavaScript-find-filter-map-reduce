# find, filter, map, reduece

My own javaScript implementation of those functions

### Prerequisites

To use functions you need only web browser, but if you want to run test you need node.js and karma

```
Google Chrome, node.js, karma, karma-cli
```

## Short about functions


### .find

- it is a method which task is find element from array that fits our conditions
- .find returns first value that will find in this array
- if array does not contain any element that fits conditions, .find will return undefined
- .find does not modify the original array
- .find accepts callBack function as parameter which adopts 1 parameter :
     - cur -> current element of array
  
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = numbers.filter( number => number % 2 === 0 );
console.log(evenNumbers);
```
### .filter

- It is a method which task is filtering arrays
- .filter returns array with elements that fits filtering rules
- if array does not contain any element that fits conditions, .filter will return empty array
- .filter does not modify the original array
- .filter accepts callBack function as parameter which adopts 3 parameter :
     - cur -> current element of array
     - idx -> index of current element
     - src -> parent element of current element

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumber = numbers.find( number => number % 2 === 0 );
console.log(evenNumber);
```
### .map

- It is a method which task is modify arrays
- .map returns array of modified elements
- if array does not contain any element that fits conditions, .map will return undefined
- .map does not modify the original array
- .map accepts callBack function as parameter which adopts 3 parameter :
     - cur -> current element of array
     - idx -> index of current element
     - src -> parent element of current element

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const onlyEvenNumbers = numbers.map( number => number * 2);
console.log(onlyEvenNumbers);
```
### .reduce

- It is a method which task is reducing arrays
- .reduce returns structure(array, object, sting, list, set ...) of reduced elements
- if array does not contain any element that should be reduced, .reduce will return undefined
- .reduce does not modify the original array
- .reduce accepts callBack function as parameter which adopts 4 parameter and initialization structure :
     - acc -> accumulator of whole previous elements saved in initial structure
     - cur -> current element of array
     - idx -> index of current element
     - src -> parent element of current element
- if we don't send the init structure then this init value will be equals constructor of the first element of array
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sumOfNumbers = numbers.reduce( (acc, cur) => {
    return acc + cur;
});
console.log(sumOfNumbers);
```

## Built With

* [Vanilla JavaScript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/en/) - is an open source server environment
* [Jasmine](https://jasmine.github.io/) - JavaScript unit testing framework

## Authors

* **Krzysztof Kaczyński** - *Independent work* - [kaczor6418](https://github.com/kaczor6418)


## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/kaczor6418/filter-find-map-reduce-JavaScript-/blob/master/LICENSE) file for details

