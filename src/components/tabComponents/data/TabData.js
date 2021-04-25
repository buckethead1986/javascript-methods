export const tabData = [
  {
    eventKey: 1,
    name: "Functions",
    description: (
      <p>
        Javascript functions are blocks of code designed to perform a particular
        task.
      </p>
    ),
    sections: [
      {
        id: 0,
        title: "Function Declaration",
        description: (
          <p>Function Declarations start with the keyword 'function'.</p>
        ),
        code: `//Basic Syntax:\nfunction functionName(parameter1, parameter2...) = {\n return statement\n}\n\n//Simple Example:\nfunction multiplyByTwo(number) = {\n  return number * 2;\n}\n\n//Expected output:\nconsole.log(multiplyByTwo(4)) //8`
      },
      {
        id: 1,
        title: "Function Expression",
        description: (
          <p>Function Expressions start with the keyword 'const'.</p>
        ),
        code: `//Basic Syntax:\nconst functionName = function(parameter1, parameter2...) {\n return statement\n}\n\n//Simple Example:\nconst multiplyByThree = function(number) {\n return number * 3;\n}\n\n//Expected Output:\nconsole.log(multiplyByThree(4)) //12`
      },
      {
        id: 2,
        title: "Arrow Functions",
        description: (
          <p>
            Arrow Functions are written similarly to Function Expressions, with
            a fat arrow (=>) between the list of parameters and code block.
            <br />
            If there&apos;s only one parameter, no parentheses are required.
            <br />
            If the code block fits on one line, the curly braces and return
            statement can be removed.
            <br />
            Arrow functions are anonymous (no name), have shorter syntax, and do
            not have their own 'this', instead using the 'this' context of the
            enclosing execution context.
          </p>
        ),
        code: `//Basic Syntax:\nconst functionName = (parameter1, parameter2,...) => {\n return statement\n}\n\n//Simple Example:\nconst multiplyByFour = (number) => {\n return number * 4\n}\n\n//Removing the parentheses around a single parameter, and the curly braces and return keyword for a code block requiring only one line:\nconst multiplyByFour = number => number * 4\n\n//Expected Output:\nconsole.log(multiplyByFour(6)) //24`
      }
    ]
  },
  {
    eventKey: 2,
    name: ".join()",
    description:
      "Convert the elements of an array into a string. The elements are separated by a specified separator, which is a comma by default.",
    sections: [
      {
        id: 0,
        title: "Syntax",
        description: "",
        code: `array.join(separator)`
      },
      {
        id: 1,
        title: "Example",
        description: "",
        code: `const fruits = ['Apples', 'Oranges', 'Bananas', 'Watermelon']\nconsole.log(fruits.join()) // 'Apples, Oranges, Bananas, Watermelon'\nconsole.log(fruits.join(' and ')) // 'Apples and Oranges and Bananas and Watermelon'`
      }
    ]
  },
  {
    eventKey: 3,
    name: ".split()",
    description:
      "Convert the elements of a string into an array, split around a specified separator.",
    sections: [
      {
        id: 0,
        title: "Syntax",
        description: "",
        code: `string.split(separator)`
      },
      {
        id: 1,
        title: "Example",
        description: "",
        code: `const str = 'No, I am your father'\nconsole.log(str.split("")) // [ 'N', 'o', ',', ' ', 'I', ' ', 'a', 'm', ' ', 'y', 'o', 'u', 'r', ' ', 'f', 'a', 't', 'h', 'e', 'r' ]\nconsole.log(str.split(',')) // [ 'No', ' I am your father' ]`
      }
    ]
  },
  {
    eventKey: 4,
    name: ".filter()",
    description:
      "Iterates through all elements of an array, returning a new array containing all elements that pass a test (provided as a function)",
    sections: [
      {
        id: 0,
        title: "Syntax",
        description: "",
        code: `array.filter(filterFunction)`
      },
      {
        id: 1,
        title: "Example",
        description: "",
        code: `const array = [4, 7, 30, 19, 107, 24]\n\nfunction checkForEven(number) {\n return number % 2 === 0   // modulus (%) returns any remainder from dividing by the given number. Even numbers return 0 when divided by 2\n}\nconsole.log(array.filter(checkForEven)) // [4, 30, 24]\nconsole.log(array.filter(number => number % 2 === 0)) // [4, 30, 24]`
      }
    ]
  },
  {
    eventKey: 5,
    name: ".forEach()",
    description:
      "Calls a function once for each element in an array, in order.",
    sections: [
      {
        id: 0,
        title: "Syntax",
        description: (
          <p>
            Required Values:
            <ul>
              <li>currentValue: The current element in the array.</li>
            </ul>
            Optional Values:
            <ul>
              <li>index: The array index of currentValue.</li>
              <li>arr: The array object.</li>
              <li>
                thisValue: Can be passed to provide a 'this' value for the
                function.
              </li>
            </ul>
          </p>
        ),
        code: `array.forEach(function(currentValue, index, arr), thisValue)`
      },
      {
        id: 1,
        title: "Example",
        description: "",
        code: `const numbers = [1, 2, 3, 4]\n\nfunction multiplyByThree(currentValue, index, arr) {\n arr[index] = currentValue * 3\n}\n\nconsole.log(numbers.forEach(multiplyByThree)) // [3, 6, 9, 12]\n\n// Same functionality using an arrow function:\nnumbers.forEach((element, index, arr) => arr[index] = element * 3)  // [3, 6, 9, 12]`
      }
    ]
  },
  {
    eventKey: 6,
    name: ".includes()",
    description:
      "Determines whether an array includes a specified element. Returns 'true' if it does, and 'false' if not.",
    sections: [
      {
        id: 0,
        title: "Syntax",
        description: "",
        code: `array.includes(element)`
      },
      {
        id: 1,
        title: "Example",
        description: "",
        code: `const numbers = [1, 2, 3, 4]\nnumbers.includes(4) // true\nnumbers.includes('banana') // false`
      }
    ]
  },
  {
    eventKey: 7,
    name: ".every()",
    description:
      "Iterates over an array, checking if every element passes a test (provided as a function). Returns true if all elements pass the test, false if one or more fails. Does not change the original array",
    sections: [
      {
        id: 0,
        title: "Syntax",
        description: (
          <p>
            Required Values:
            <ul style={{ marginBottom: 0 }}>
              {" "}
              {/*Ugly and repetitive. Rewrite javascriptMethodTabPane to create these lists itself*/}
              <li>currentValue: The current element in the array.</li>
            </ul>
            Optional Values:
            <ul style={{ marginBottom: 0 }}>
              {/*Ugly and repetitive. Rewrite javascriptMethodTabPane to create these lists itself*/}
              <li>index: The array index of currentValue.</li>
              <li>arr: The array object.</li>
              <li>
                thisValue: Can be passed to provide a 'this' value for the
                function.
              </li>
            </ul>
          </p>
        ),
        code: `array.every(function(currentValue, index, arr), thisValue)`
      },
      {
        id: 1,
        title: "Example",
        description: "",
        code: `const allEvenNumbers = [2, 4, 6, 8]\nconst someOddNumbers = [2, 4, 7, 8]\n\nfunction checkForEven(number) {\n  return number % 2 === 0\n}\n\nconsole.log(allEvenNumbers.every(checkForEven)) // true\nconsole.log(someOddNumbers.every(checkForEven)) // false`
      }
    ]
  },
  {
    eventKey: 8,
    name: ".indexOf()",
    description:
      "Searches an array for a specified item, and returns its position. Returns -1 if the item isn't found.",
    sections: [
      {
        id: 0,
        title: "Syntax",
        description: "",
        code: `array.indexOf(element)`
      },
      {
        id: 1,
        title: "Example",
        description: "",
        code: `const items = ["lions", "tigers", "bears", "oh", "my"]\nconsole.log(items.indexOf('bears')) // 2\nconsole.log(items.indexOf('banana')) // -1`
      }
    ]
  },
  {
    eventKey: 9,
    name: ".length",
    description: "Returns or sets the length of the array.",
    sections: [
      {
        id: 0,
        title: "Syntax",
        description: "",
        code: `array.length`
      },
      {
        id: 1,
        title: "Example",
        description: "",
        code: `const items = ["lions", "tigers", "bears", "oh", "my"]\nconsole.log(items.length) // 5\n\nitems.length = 3\nconsole.log(items) // ["lions", "tigers", "bears"]\n\nitems.length = 5\nconsole.log(items) // ["lions", "tigers", "bears", , ] // (empty item positions)\nconsole.log(items[2]) // "bears"\nconsole.log(items[3]) // undefined`
      }
    ]
  }
];
