Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

  1.Parameter: n (any) number of values of any datatypes.

  2.The datatypes of parameters: (number, string, boolean, array, null, undefined, object and function etc)

  3.Return: a single Array consisting of by all the values passed as parameters in the same        order.

  4.Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
  5.`concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.

  6.No it does not mutate the original array.

2. `join`
   
  1.parameter: it accept an - optional parameter - for specifies a separation between the elements in new string. and by default it separate the element with "comma" separator. If separator is an empty string, all elements are joined without any characters in between them.

  2.The datatypes of parameters: ('string') but it is a separator. 

  3.Return: A single string with all the element of Array with comma separator or specifies separator in parameter.

  4.Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.join(4); // "1,2,3"
     let sentanceArray = ["A quick brown fox jumped over a lazy", "dog"]
     sentanceArray.join(" ") //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.join(" - "); // [red - green - blue]
    ```

  5.`join()`The string conversions of all array elements are joined into one string. If an element is undefined, null, it is converted to an empty string instead of the string "null" or "undefined".

  6.No it does not mutate the original array.

3. `flat`
  1.parameter: it accept an - optional parameter - depth - for how deep a nested array flattened.
  by default it is one.

  2.The datatypes of parameters: ('number')

  3.Return: A new array with all the elements of flattened arrays.
  
  4.Example:
     ```js
     let numbers = [1, [2, 3]];
     numbers.flat(); // [1,2,3]
     let sentanceArray = ["A quick", ["brown fox jumped"] ,"over a lazy" ,["dog"]]
     sentanceArray.flat() //["A quick brown fox jumped over a lazy dog"]
     let colors = [['red', ['green', ['blue']]]];
     colors.flat(infinity); // [red,  green, blue]
    ```
  5.`flat()` method applied on nested array and return A new array with the sub-array elements concatenated into it.

  6.No it does not mutate the original array.

4. `push`
  1.parameter: it accept an element as a  parameter.

  2.The datatypes of parameters: ('number', 'boolean', 'string', etc)

  3.Return: A new array with pushed element with new leng.
  
  4.Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.push(4); // [1,2,3,4]
     let sentanceArray = ["A quick", "brown fox jumped" ,"over a lazy" ]
     sentanceArray.push("dog") //["A quick brown fox jumped over a lazy dog"]
     let colors = ['red', 'green', 'blue']
     colors.push("yellow"); // [red, green, blue, yellow]
    ```
  5.`push()` method applied Any array and and it adds a new element to the end of the array.and return a new length of array.

  6.Yes it mutates the original array.

5. `indexOf`
  1.parameter: it accept one parameter - searchElement - for locate in array and an optional parameter - fromIndex. 
      Negative index counts back from the end of the array - if fromIndex < 0 -, fromIndex + array.length is used. Note, the array is still searched from front to back in this case.
 
      - fromIndex < -array.length - or fromIndex is omitted, 0 is used, causing the entire array to be searched.

      If - fromIndex >= array.length -, the array is not searched and -1 is returned.

  2.The datatypes of parameter(searchElement): ('number', 'boolean', 'string', etc) & typeof (fromindex) parameter is a 'number'

  3.Return: The first index of the element in the array; -1 if not found.
  
  4.Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.indexOf(3); // 2
     let sentanceArray = ["A quick", "brown fox jumped" ,"over a lazy" ]
     sentanceArray.indexOf("dog") // -1
     let colors = ['red', 'green', 'blue', 'red' , 'blue']
     colors.indexOf("red" , -1); // 3
     colors.indexof('blue', 3)// 4
     
    ```
  5.`The indexOf()` method returns the first index at which a given element can be found in the array, or -1 if it is not present.

  6.No it does not mutates the original array.

6. `lastIndexOf`
  1.parameter: it accept one parameter - searchElement - for locate in array and an optional parameter - fromIndex. 
      Negative index counts back from the end of the array — if fromIndex < 0, fromIndex + array.length is used.

      If fromIndex < -array.length, the array is not searched and -1 is returned. You can think of it conceptually as starting at a nonexistent position before the beginning of the array and going backwards from there. There are no array elements on the way, so searchElement is never found.

      If fromIndex >= array.length or fromIndex is omitted, array.length - 1 is used, causing the entire array to be searched. You can think of it conceptually as starting at a nonexistent position beyond the end of the array and going backwards from there. It eventually reaches the real end position of the array, at which point it starts searching backwards through the actual array elements.

  2.The datatypes of parameters: ('number', 'boolean', 'string', etc) & typeof (fromindex) parameter is a 'number'

  3.Return: The last index of the element in the array; -1 if not found.
  
  4.Example:
     ```js
     let numbers = [1, 2, 3,1];
     numbers.lastIndexOf(1); // 3
     let sentanceArray = ["a" ,"quick", "brown fox jumped" ,"over", "a", "lazy", "dog" ]
     sentanceArray.lastIndexOf("a", -1)  // -1
     let colors = ['red', 'green', 'blue', 'red' , 'blue']
     colors.lastIndexOf("red" , -1); // 3
     colors.lastIndexOf('blue', 3)// 4
    ```
  5.`The lastIndexOf()` method returns the last index at which a given element can be found in the array, or -1 if it is not present.

  6.No it does not mutates the original array.

7. `includes`
  1.parameter: it accept - searchElement - for locate in array and an optional parameter - fromIndex. 
      Negative index counts back from the end of the array — if fromIndex < 0, fromIndex + array.length is used. However, the array is still searched from front to back in this case.

      If fromIndex < -array.length or fromIndex is omitted, 0 is used, causing the entire array to be searched.

      If fromIndex >= array.length, the array is not searched and false is returned.

  2.The datatypes of parameters: ('number', 'boolean', 'string', etc) & typeof (fromindex) parameter is a 'number'

  3.Return: A boolean value which is true if the value searchElement is found within the array and false, if not.
  
  4.Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.includes(3); // true
     let sentanceArray = ["A quick", "brown fox jumped" ,"over a lazy" ]
     sentanceArray.includes("dog") // false
     let colors = ['red', 'green', 'blue', 'red' , 'blue']
     colors.includes("red" , -1); 
     colors.includes('blue', 3)
    ```
  5.`The includes() `method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

  6.No it does not mutates the original array.

8. `reverse`
  1.parameter: it doesn't accept any parameter.
  
  2.The datatypes of parameters: 

  3.Return: A new Array having reversed index and element of calling Array.
  
  4.Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.reverse(); // [3,2,1]
     let sentanceArray = ["A quick", "brown fox jumped" ,"over a lazy" ]
     sentanceArray.reverse() // ["over a lazy", "brown fox jumped","A quick"]
    ```
  5.`The reverse() `The reverse() method transposes the elements of the calling array object in place, mutating the array, and returning a reference to the array.

  6.Yes it mutates the original array.

9. `every`
  1.parameter: it accept a - callbackFn - A function to execute for each element in the array. 
  
  2.The datatypes of parameters: (function) but it is an Error of javascript. function is a typeof object. but it returns a function.

     -The function is called with the following arguments:

     _element_
     The current element being processed in the array.

     _index_
     The index of the current element being processed in the array.

     _array _
     The array every() was called upon.

   _ thisArg_ (Optional)  
     A value to use as this when executing callbackFn. See iterative methods.

  3.Return: true if callbackFn returns a truthy value for every array element. Otherwise, false.
  
  4.Example:
     ```js
     function isPositive(num){
      if(num > 0 ){
        return true;
      }else{
        false
      }
     }
     let numbers = [1, 2, 3];
     numbers.every(isPositive); // [3,2,1]

    ```
  5.`The every()` method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

  6.No it doesn't mutates the original array.

10. `shift`
  1.parameter: it doesn't accept any parameter.
  
  2.The datatypes of parameters: 

  3.Return: A new Array having changed index and removed first element.
  
  4.Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.shift(); // [2,3]
     let sentanceArray = ["A quick", "brown fox jumped" ,"over a lazy" ]
     sentanceArray.shift() // [ "brown fox jumped","A quick"]
    ```
  5.`The shift() `The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

  6.Yes it mutates the original array.

11. `splice`
  1.parameter: -start-

    Zero-based index at which to start changing the array, converted to an integer.

    Negative index counts back from the end of the array — if start < 0, start + array.length is used.
    
    If start < -array.length or start is omitted, 0 is used.

    If start >= array.length, no element will be deleted, but the method will behave as an adding function, adding as many elements as provided.

    -deleteCount-

    An integer indicating the number of elements in the array to remove from start.

    If deleteCount is omitted, or if its value is greater than or equal to the number of elements after the position specified by start, then all the elements from start to the end of the array will be deleted. However, if you wish to pass any itemN parameter, you should pass Infinity as deleteCount to delete all elements after start, because an explicit undefined gets converted to 0.

   If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element (see below).

   -(item1, …, itemN)Optional

    The elements to add to the array, beginning from start.

    If you do not specify any elements, splice() will only remove elements from the array.
  
  2.The datatypes of parameters: first two parameter(number) and after than anything.

  3.Return: An array containing the deleted elements.

     If only one element is removed, an array of one element is returned.

     If no elements are removed, an empty array is returned.
  
  4.Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.splice(1,2); // [2,3]
     let sentanceArray = ["A quick", "brown fox jumped" ,"over a lazy" ]
     sentanceArray.splice(3,0,"dog") //[]
    ```
  5.`The splice() `The splice() method changes the contents of an array by removing or replacing existing elements 

  6.Yes it mutates the original array.

12. `find`
  1.parameter: - callbackFn -
  A function to execute for each element in the array. It should return a truthy value to indicate a matching element has been found.

  The function is called with the following arguments:

  - element -
  The current element being processed in the array.

  - index -
  The index of the current element being processed in the array.

  - array -
  The array find() was called upon.

  thisArg -Optional-
  A value to use as this when executing callbackFn.
  
  2.The datatypes of parameters: (function) but it is an Error of javascript. function is a typeof object. but it returns a function.

  3.Return: The first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
  
  4.Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.find(num => num > 0)
     ```
     
  5.` find `The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

  6.No it doesn't mutate the Array.

13. `unshift`
  1.parameter: The elements to add to the front of the arr.(n)
  
  2.The datatypes of parameters: it can be anything like  (number, Boolean, string etc)

  3.Return: The new length property of the object upon which the method was called.

  4.Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.unshift(2,3); // 5
     let sentanceArray = ["A quick", "brown fox jumped" ,"over a lazy" ]
     sentanceArray.unshift("dog") // 4
    ```
  5.`The unshift() `The unshift() method inserts the given values to the beginning of an array.

  6.Yes it mutates the original array.

14. `findIndex`
  1.parameter: callbackFn
    function to execute for each element in the array. It should return a truthy value to indicate a matching element has been found.

   The function is called with the following arguments:

   element
   The current element being processed in the array.

   index
   The index of the current element being processed in the array.

   array
   The array findIndex() was called upon.

thisArg (Optional)
A value to use as this when executing callbackFn. See iterative methods.
  
  2.The datatypes of parameters: (function) but it is an Error of javascript. function is a typeof object. but it returns a function.

  3.Return: The index of the first element in the array that passes the test. Otherwise, -1.
  
  4.Example:

     ```js
     let numbers = [1, 2, 3];
     numbers.findIndex(num => num > 0); // 0
     let sentanceArray = ["A quick", "brown fox jumped" ,"over a lazy" ]
     sentanceArray.findIndex(string => string.toUpperCase === string)// -1
     ```
   
  5.`The findIndex()` The findIndex() is an iterative method. It calls a provided callbackFn function once for each element in an array in ascending-index order, until callbackFn returns a truthy value. findIndex() then returns the index of that element and stops iterating through the array. If callbackFn never returns a truthy value, findIndex() returns -1.

  6.No it doesn't mutates the original Array.
  
15. `filter`
  1.parameter: callbackFn
    function to execute for each element in the array. It should return a truthy value to indicate a matching element has been found.

   The function is called with the following arguments:

   element
   The current element being processed in the array.

   index
   The index of the current element being processed in the array.

   array
   The array findIndex() was called upon.

   thisArg (Optional)
   A value to use as this when executing callbackFn. See iterative methods.
  
  2.The datatypes of parameters: (function) but it is an Error of javascript. function is a typeof object. but it returns a function.

  3.Return: A shallow copy of a portion of the given array, filtered down to just the elements from the given array that pass the test implemented by the provided function. If no elements pass the test, an empty array will be returned.
  
  4.Example:
     ```js
     const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

     const result = words.filter(word => word.length > 6); //  ["exuberant", "destruction", "present"]
    ```
  5.The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

  6.No it doesn't mutates the original Array.
  
16. `forEach`
  1.parameter: callbackFn
    function to execute for each element in the array. It should return a truthy value to indicate a matching element has been found.

   The function is called with the following arguments:

   element
   The current element being processed in the array.

   index
   The index of the current element being processed in the array.

   array
   The array findIndex() was called upon.

   thisArg (Optional)
   A value to use as this when executing callbackFn. See iterative methods.
  
  2.The datatypes of parameters: (function) but it is an Error of javascript. function is a typeof object. but it returns a function.

  3.Return:undefined.
  
  4.Example:
     ```js
     const array1 = ['a', 'b', 'c'];
     array1.forEach(element => console.log(element));// "a"
                                                     //"b"
                                                     //"c"
    ```
  5.`The forEach()` method executes a provided function once for each array element.

  6.No it doesn't mutates the original Array.
   
17. `map`
  1.parameter: callbackFn
    function to execute for each element in the array. It should return a truthy value to indicate a matching element has been found.

   The function is called with the following arguments:

   element
   The current element being processed in the array.

   index
   The index of the current element being processed in the array.

   array
   The array findIndex() was called upon.

   thisArg (Optional)
   A value to use as this when executing callbackFn. See iterative methods.
  
  2.The datatypes of parameters: (function) but it is an Error of javascript. function is a typeof object. but it returns a function.

  3.Return:A new array with each element being the result of the callback function.
  
  4.Example:
     ```js
     const array1 = [1, 4, 9, 16];
     const map1 = array1.map(x => x * 2);// [2,8,18,32]
    ```
  5.`The map()` The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

  6.No it doesn't mutates the original Array.
  
18. `pop`
19. `reduce`
20. `slice`
21. `some`
