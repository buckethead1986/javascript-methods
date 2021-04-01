export const tabData = [
  // {
  //   eventKey: "first",
  //   name: "First Method",
  //   description: "Methods are Lorem Ipsum",
  //   exampleCode: [
  //     "Example",
  //     "thing",
  //     `<NavItem>\n
  //         <NavLink eventKey="fourth">Tab 4</NavLink>\n
  //       </NavItem>\n
  //       <NavItem>\n
  //         <NavLink eventKey="fifth">Tab 5</NavLink>\n
  //       </NavItem>`
  //   ]
  // },
  // {
  //   eventKey: "second",
  //   name: "Darth Vader",
  //   description: "Your powers are weak",
  //   exampleCode: [
  //     "I am your father",
  //     "hey",
  //     `function vader() {\n  const father = {true}\n}`
  //   ]
  // },
  // {
  //   eventKey: "third",
  //   name: "Banana Smoothie",
  //   description: "Delicious Banana Smoothies",
  //   exampleCode: [
  //     "Smoothie Preparation",
  //     "tasty",
  //     `function makeBananas() {\n  {\nplant: 'Banana Tree',\nclimate: 'Tropical',\n blender: true\n}\n}`
  //   ]
  // },
  // {
  //   eventKey: "fourth",
  //   name: "TestName",
  //   description: "Asambi Sana Squash Banana",
  //   exampleCode: [
  //     "Monkeys",
  //     "Salami",
  //     `function testFunction() {\n  const item = ['hey']\n  console.log(item[0])\n}`
  //   ]
  // },
  // {
  //   eventKey: "fifth",
  //   name: "Fifth Method",
  //   description: "The monkey's his uncle?",
  //   exampleCode: [
  //     "Join Example",
  //     "Joins array",
  //     `['there', 'once', 'was', 'a', 'man', 'from', 'nantucket'].join(' ')`
  //   ]
  // },
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
        code: `//Basic Structure:\nfunction functionName(parameter1, parameter2...) = {\n return statement\n}\n\n//Simple Example:\nfunction multiplyByTwo(number) = {\n  return number * 2;\n}`
      },
      {
        id: 1,
        title: "Function Expression",
        description: "Function Expressions start with the keyword 'const'.",
        code: `//Basic Structure:\nconst functionName = function(parameter1, parameter2...) {\n return statement\n}\n\n//Simple Example:\nconst multiplyByThree = function(number) {\n return number * 3;\n}`
      },
      {
        id: 2,
        title: "Arrow Functions",
        description: `Arrow Functions are written similarly to Function Expressions, with a fat arrow (=>) between the list of parameters and code block.
        If there's only one parameter, no parentheses are required.
        If the code block fits on one line, the curly braces and return statement can be removed.
        Arrow functions are anonymous (no name), have shorter syntax, and do not have their own 'this', instead using the 'this' context of the enclosing execution context.`,
        code: `//Basic structure:\nconst functionName = (parameter1, parameter2,...) => {\n return statement\n}\n\n//Simple Example:\nconst multiplyByTwo = (number) => {\n return number * 2\n}\n\n//Removing the parentheses around a single parameter, and the curly braces and return keyword for a code block requiring only one line:\nconst multiplyByTwo = number => number * 2`
      }
    ]
  }
];
