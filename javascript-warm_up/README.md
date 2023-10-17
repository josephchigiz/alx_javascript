# Learning JavaScript

## Variables  

To declare a variable, use `let`, followed by the name you're giving to the variable.

```js
    let myVariable;
```

A semicolon `;` at the end of the line of code shows the end of the statement.  

> * *NOTE that it is only necessary when separating 2 statements on the same line. But can also be used after each statement.*  

Variable naming is fairly open, but remember that `js` is **case-sensitive**.  
You can then give the declared variable a value:
```js
    myVariable = "Joe";
```  
...or do both operations on the same line:
```js
    let myVariable = "Joe";
```  

You can retrieve the value by calling the variable name:
```js
    myVariable;
```  
After assigning a value to a variable you can change it later in the code.  

**Note** that variables can hold values of different `data types`:  
* String &nbsp;- ``` let myVariable = "Joe";```  
* Number &nbsp;- ``` let myVariable = 10;```  
* Boolean &nbsp;- ``` let myVariable = true;```  
* Array &nbsp;- ``` let myVariable = [1, 2, "Joe", 6.9, "Mac"];```  
* Oject &nbsp;- ``` let myVariable = document.queryselector('h1'); ```  

An **`Object`** in JS can be anything. Everything in JS is an object and can be stored in a variable.  

## Comments  
In JS, you can write the comments just as in CSS:
```js
/*
    This is a comment in JavaScript.
*/
```  
If the comment has no line breaks, it can be written as:  
```js
    //This is a comment
```  

### Operators unique to JS  
#### Strict equality  
This operator performs a test to see whether two values are equal and of the same data type. It returns a boolean result.  

The symbol used is `===`.  

#### Not, Does-not-equal  
The following symbols are used respectively, `!`, `!==`.  

```js
    let myVariable = 3;
    !(let myVariable === 3);
```  

Here, we are testing "is `myVariable` *NOT equal* to 3". It returns `false` because `myVariable` *IS equal* to 3.  

### Conditionals  
These are used to test whether a statement is true or false.  
A very common one is the `if ... else` statement. For example:  
```js
    let laptop = "Thinkpad";
    if (laptop === "Thinkpad") {
        alert("Yow G, thanks so much. I love this.");
    } else {
        alert("Yow G, thanks, but I would have loved a Thinkpad.");
    }
```  

The test in this case is the expression inside `if ()`.  
If the statement returns true, then the first block of code runs, otherwise the else statement is run.  


### Functions  
You can define a body of code as a function and call it when you want to reuse it.  
This is more efficient than rewriting the same code.  

Some of the examples of functions are:  
```js
    let myVariable = document.querySelector("h1");
```

```js
    alert("Hello!");
```  
The functions, `document.queryselector` and `alert`, are inbuilt functions in the browser.  


Functions normally take ***arguments***: arguments help in the functionality of a function and they appear inside the brackets `()` after a function.  

You also have the ability of defining your own functions:  
```js
    function oddOrEven(num) {
        let parsedNum = parseInt(num);
        if (parsedNum % 2 === 0) {
            return `${parsedNum} is even.`;
        } else {
            return `${parsedNum} is odd.`;
        }
    }
```  
*return* is used to return a variable or string, set inside a function. The variables returned can only be those inside said function because they are only available in this function.  

### Events  
Meaningful interactivity in a web browser requires an event handler.  
They listen for any activity and respond by running certain code.  

An example is when you click on a button on a webpage and a certain action takes place.  
For example:  

```js
    document.querySelector("html").addEventListener("click", function () {
        alert("Ouch! Stop poking me");
    });
```  
Here we have selected the `<html>` element. Then we called an eventListener and when it detects a `('click')` then the function to run the event happens.  

The function passed into `addEventListener` is called an *anonymous* function because it doesn't have a name.  
Instead of writing `function ()`, we can write an **arrow function** `() =>` instead:  

```js
    document.querySelector('html').addEventListener("click", () => {
        alert("Ouch! Stop poking me");
    });
```  
With this, we have covered most of the basics of JS.  
If you have time, you can go through the extras below.

## Extras!!  
#### Using JavaScript with DOM API  

> The ***`DOM API`***(Document Object Model API) is a programming interface for web pages. It represents the structure of HTML and XML documents in a tree-like form, with each element in the doc represented as a node in the tree. This allows developers to access, manipulate, and modify the structure and content of the web documents using programming languages such as JavaScript  

We got a peek into how the `eventlistener` listened to click and runs code in response.  
Here, we will use JavaScript to respond to clicks by changing the image displayed.  

Now in your main JS file, maybe `"main.js"`. Add the following code to your `main.js`:  

```js
    const myImage = document.querySelector("img");

    myImage.onclick = () => {
        const mySrc = myImage.getAttribute("src");
        if (mySrc === "images/firefox-icon.png") {
            myImage.setAttribute("src", "images/firefox2.png");
        } else {
            myImage.setAttribute("src", "images/firefox-icon.png");
        }
    };
```
