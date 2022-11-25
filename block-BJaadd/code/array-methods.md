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
     colors.includes("red" , -1); // 3
     colors.includes('blue', 3)// 4
    ```
  5.`The includes() `method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

  6.No it does not mutates the original array.

8. `reverse`
  1.parameter: it accept - searchElement - for locate in array and an optional parameter - fromIndex. 
      Negative index counts back from the end of the array — if fromIndex < 0, fromIndex + array.length is used. However, the array is still searched from front to back in this case.

      If fromIndex < -array.length or fromIndex is omitted, 0 is used, causing the entire array to be searched.

      If fromIndex >= array.length, the array is not searched and false is returned.

  2.The datatypes of parameters: ('number', 'boolean', 'string', etc) & typeof (fromindex) parameter is a 'number'

  3.Return: A boolean value which is true if the value searchElement is found within the array and false, if not.
  
  4.Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.includes(3); // 2
     let sentanceArray = ["A quick", "brown fox jumped" ,"over a lazy" ]
     sentanceArray.includes("dog") // -1
     let colors = ['red', 'green', 'blue', 'red' , 'blue']
     colors.includes("red" , -1); // 3
     colors.includes('blue', 3)// 4
    ```
  5.`The includes() `method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

  6.No it does not mutates the original array.
9. `every`
10. `shift`
11. `splice`
12. `find`
13. `unshift`
14. `findIndex`
15. `filter`
16. `forEach`
17. `map`
18. `pop`
19. `reduce`
20. `slice`
21. `some`
