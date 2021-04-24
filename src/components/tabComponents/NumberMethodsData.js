export const numberMethodsData = {
  eventKey: "number",
  name: "Number",
  description: "Numbers description placeholder",
  sections: [
    {
      id: 0,
      title: "Syntax",
      description: "",
      code: `const eight = 8`
    },
    {
      id: 1,
      title: "Example",
      description: "",
      code: ``
    }
  ],
  methods: [
    {
      eventKey: 0,
      name: "Number",
      description:
        "Javascript has only one type of number, 64-bit floating point (unlike other programming languages, which can specify how precisely a number can be stored: Integer, short, long, float, etc). Numbers can be written with or without decimals, with scientific notation, and are accurate up to 15 digits.",
      sections: [
        {
          id: 0,
          title: "Syntax",
          description: "",
          code: `number syntax`
        },
        {
          id: 1,
          title: "Example",
          description: "",
          code: `number issues examples`
        }
      ]
    },
    {
      eventKey: 1,
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
  ]
};
