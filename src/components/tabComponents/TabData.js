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
  }
];
