Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

   - Parameter: it doesn't accept parametre.
   - Return: A new string representing the calling string converted to upper case.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.toUpperCase(); //"ARYA STARK"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.toUpperCase(); // "A QUICK BROWN FOX JUMPED OVER A LAZY DOG"
     let houseName = 'Starks';
     houseName.toUpperCase(); // "STARKS
     ```
   - `toUpperCase()`methods returns the value of the string converted to uppercase.

3. `toLowerCase`
   - Parameter: it doesn't accept parametre.
   - Return: A new string representing the calling string converted to  lowercase.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.toLowerCase; //""
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.toLowerCase; // "a quick brown fox jumped over a lazy dog"
     let houseName = 'Starks';
     houseName.toLowerCase; // "starks"
     ```
   - `toLowerCase()`methods returns the value of the string converted to lowercase.
4. `trim`
   - Parameter: it doesn't accept parametre.
   - Return: A new string representing with skipped space from both its beginning and end.
   - Example:
     ```js
     let name = '  Arya Stark  ';
     name.trim(); //"Arya Stark"
     let sentance = '    A quick brown fox jumped over a lazy dog';
     sentance.trim(); // "A quick brown fox jumped over a lazy dog"
     let houseName = 'Starks';
     houseName.trim(); // "starks"
     ```
   - `trim()`methods returns the value of the string with no space in both end.
   
5. `trimEnd`
   - Parameter: it doesn't accept any parametre.
   - Return: A new string representing with skipped space from last end of string.
   - Example:
     ```js
     let name = '  Arya Stark  ';
     name.trimEnd(); //"  Arya Stark"
     let sentance = '    A quick brown fox jumped over a lazy dog  ';
     sentance.trimEnd(); // "   A quick brown fox jumped over a lazy dog"
     let houseName = '  Starks ';
     houseName.trimEnd(); // "  starks"
     ```
   - `trimEnd()`methods returns the value of the string with no space in last end.

6. `trimStart`
   - Parameter: it doesn't accept parametre.
   - Return: A new string representing with skipped space from both its beginning and end.
   - Example:
     ```js
     let name = '  Arya Stark  ';
     name.trimStart(); //"Arya Stark  "
     let sentance = '    A quick brown fox jumped over a lazy dog';
     sentance.trimStart(); // "A quick brown fox jumped over a lazy dog"
     let houseName = '  Starks';
     houseName.trimStart(); // "starks"
     ```
   - `trimStart()`methods returns the value of the string with no space in beginning.

7. `concat`
   - Parameter: it accept One or more parametre to concate with string. (string datatype )
   - Return: A new string representing concatitation result of all given arrguments. 
   - Example:
     ```js
     let name = 'Arya Stark';
     name.concat(" ", "from" ," ", "got"); //"Arya Stark from got "
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.concate(" ", "is a sentence in which all alphabets are used"); // "A quick brown fox jumped over a lazy dog is a is a sentence in which all alphabets are used "
     let houseName = 'Starks';
     houseName.concate(" ", "character"); // "starks"
     ```
     `The concat()`function concatenates the string arguments to the calling string and returns a new string. Changes to the original string or the returned string don't affect the other.

8. `endsWith`
   - Parameter: it accept two parameter;

   - parameter:  searchString (string data type)
     The characters to be searched for at the end of str. 

    -parameter:  Optional: endPosition (number data type)
     The end position at which searchString is expected to be found (the index of searchString's last character plus 1). Defaults to str.length.

   - Return: true if the given characters are found at the end of the string; otherwise, false.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.endsWith("Stark"); //true
     let sentance = 'A quick brown fox jumped over a lazy dog..';
    
     sentance.endsWith("dog"); //false
     let houseName = 'Starks';
     houseName.endsWith("t", 2); // true
     ```
     `endsWith()`This method lets you determine whether or not a string ends with another string. This method is case-sensitive..

9. `includes`
   - Parameter: it accept two parameter;

   - parameter:  searchString (string data type)
     The characters to be searched for within string. 

    -parameter:  Optional: Position (number data type)
     The end position at which searchString is expected to be found (the index of searchString's last character plus 1). Defaults to str.length.

   - Return: true if the given characters are found at the end of the string; otherwise, false.
   - Example:
     ```js
     let name = 'Arya Stark';
     name.includes("Stark"); //true
     let sentance = 'A quick brown fox jumped over a lazy dog..';
     sentance.includes("dog"); //true
     let houseName = 'Starks';
     houseName.includes("t", 1); // true
     ```
     `includes()`true if the search string is found anywhere within the given string; otherwise, false if not.

10. `indexOf`
    
    
    

11. `lastIndexOf`
12. `padEnd`
13. `padStart`
14. `repeat`
15. `replace`
16. `slice`
17. `split`
18. `substring`
