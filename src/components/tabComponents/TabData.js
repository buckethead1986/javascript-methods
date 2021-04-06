export const tabData = [
  {
    eventKey: 1,
    name: "Functions",
    description:
      "Javascript functions are blocks of code designed to perform a particular task.",
    sections: [
      {
        id: 0,
        title: "Function Declaration",
        description: `Function Declarations start with the keyword 'function'.`,
        code: `//Basic Syntax:\nfunction functionName(parameter1, parameter2...) = {\n return statement\n}\n\n//Simple Example:\nfunction multiplyByTwo(number) = {\n  return number * 2;\n}\n\n//Expected output:\n//console.log(multiplyByTwo(4)) //8`
      },
      {
        id: 1,
        title: "Function Expression",
        description: "Function Expressions start with the keyword 'const'.",
        code: `//Basic Syntax:\nconst functionName = function(parameter1, parameter2...) {\n return statement\n}\n\n//Simple Example:\nconst multiplyByThree = function(number) {\n return number * 3;\n}\n\n//Expected Output:\n//console.log(multiplyByThree(4)) //12`
      },
      {
        id: 2,
        title: "Arrow Functions",
        description: `Arrow Functions are written similarly to Function Expressions, with a fat arrow (=>) between the list of parameters and code block.
        If there's only one parameter, no parentheses are required.
        If the code block fits on one line, the curly braces and return statement can be removed.
        Arrow functions are anonymous (no name), have shorter syntax, and do not have their own 'this', instead using the 'this' context of the enclosing execution context.`,
        code: `//Basic Syntax:\nconst functionName = (parameter1, parameter2,...) => {\n return statement\n}\n\n//Simple Example:\nconst multiplyByFour = (number) => {\n return number * 4\n}\n\n//Removing the parentheses around a single parameter, and the curly braces and return keyword for a code block requiring only one line:\nconst multiplyByFour = number => number * 4\n\n//Expected Output:\n//console.log(multiplyByFour(6)) //24`
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
  }
];
