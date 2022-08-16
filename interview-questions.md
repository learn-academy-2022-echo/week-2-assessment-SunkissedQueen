# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer:
From Developer Clifford
Researched answer:
A Parameter is a "placeholder value". The information that goes there is not available at this time, but when it is needed, it will be supplied and you can put it right there in the parameter spot. it can also be referenced multiple times in the function. When that parameter is filled. it is filled with the argument. An argument is whatever filled up that "placeholder value".

An Argument is contained in a set of (), following the function call. Its job is to be the value that is being referenced.  A function or method may not need and argument in which case, it could just be a set of empty () which is a self invoking function. Sometimes some functions will have multiple parameters, which will need multiple arguments to fills those spots.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer:
From Developer Hieu
Researched answer:
The .map() method can take in 4 parameters: 
    currentValue - the value of the current element, REQUIRED;
    index - the index of the current element, OPTIONAL;
    arr - the array of the current element, OPTIONAL;
    thisValue - A value passed to the function to be used as its this value, OPTIONAL. Default value undefined. 

Example: https://www.educative.io/answers/how-to-use-the-map-function-in-javascript
```javascript
// array.map(function(currentItem, index, arrayobj), thisValue)

// currentValue: the value of the current element.

// index: the index of the current element being processed.

// arr: the array object on which map() is called.

// thisValue: value to be used as the function’s this value when executing it. “undefined” will be passed if this value is not provided. It is passed as a second argument.

const array = [11, 21, 19, 18];

const thisObj = { key: 46 };

const map = array.map(function (x, index, array) {
  console.log('The array is: ', array);
  console.log('The value of "this" is', this);
  console.log('The index is: ', index);
}, thisObj);
```
3. What is the difference between map and filter?

Your answer:
From Developer Holden
Researched answer:
After greater research my own answer above covers functionality over all yet there are some specifics in behavior that is important to consider. The .map() method specifically looks at every value on every index when performing operations on said values, not particularly needing to see the entire array but instead stepping through each index like a standard for loop. On the opposite end, .filter takes the entire array with the intent of whittling down the number of indexes based on the criteria set on the values stored at said indexes. While this also functions much like a loop in how it steps through the array, the fundamental actions are more so conditional than purely operational.

4. What is the DOM?
From Developer Joyce
Your answer: DOM stands for Document Object Model. The DOM would be the visible/visual representation of the code you have written. For example, when you look at a website on your phone or computer, you are looking seeing all the code that you have written display what you have told the computer you want it to show to a user. 

Researched answer: My answer is correct. DOM allows developers to see the interface of the website and this is where you can review the content like the paragraphs someone has written. You can see the style which would include the colors of the background, the font used, or even if there are photos. Lastly, this is where you can see the structure as well. This means the amount of space one column can take up or how the page is divide to include different items within the application. 

5. What is React? Why would you use it?
From Developer Namier 
Your answer:
React is a javascript library that was created by Meta.  I would use React to develop a web page or mobile application. React allows me to view the page or application on my local server and see how what I am building would look and perform.

Researched answer: React is an open-sourced, front-end javascript library that is free and used for building UI. It can be used to develop a mobile, single page or server-renderd application. React was created and is maintained by Meta.


6. STRETCH: What is hoisting in JavaScript?

Your answer:
From Devloper Cathrine
Researched answer:
What I have read online is that JavaScript hoisting is pulling variables to the top of the file even if they are not positioned on top. JavaScript can hoist variables declared in var even if it is at the bottom of the code. The variable declared with let and const on the other hand cannot be referenced if they are outside the code. There’s also called the function hoisting wherein the function hoists the variable depending on the position of the variable whether it is inside or outside the encapsulation.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: focus on the value provided to the end user

2. Spread operator: unpack array elements into another array, can be used in place of concatenation

3. React props: arguments passed inside react components using html attributes, properties, read-only

4. Conditional rendering: render different UI markup if it meets a certain condition

5. DOM events: actions performed by users, such as mouse clicks or touch events on mobile device, that triggers functions 
