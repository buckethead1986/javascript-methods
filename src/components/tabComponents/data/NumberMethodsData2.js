export const numberMethodsData2 = {
  eventKey: "number",
  name: "Number",
  sections: [
    {
      eventKey: 0,
      name: "Number",
      description: (
        <p>
          Javascript has only one type of number, 64-bit floating point (unlike
          other programming languages, which can specify how precisely a number
          can be stored: Integer, short, long, float, etc). The number is stored
          in bits 0-51, the exponent in bits 52-62, and the sign in bit 63.
        </p>
      ),
      examples: [
        {
          id: 0,
          title: "Precision",
          sections: [
            {
              id: 0,
              title: "",
              description: (
                <p>
                  Numbers can be written with or without decimals, with
                  scientific notation, and are accurate up to 15 digits.
                </p>
              ),
              code: `const x = 999999999999999;   // x will be 999999999999999\nconst y = 9999999999999999;  // y will be 10000000000000000`
            },
            {
              id: 1,
              title: "",
              description:
                "The maximum number of decimals is 17, but floating point arithmetic isn't always accurate.",
              code: `const x = 0.7 - 0.3;         // x will be 0.39999999999999997`
            },
            {
              id: 2,
              title: "",
              description:
                "The maximum number of decimals is 17, but floating point arithmetic isn't always accurate.",
              code: `const x = 0.7 - 0.3;         // x will be 0.39999999999999997`
            },
            {
              id: 3,
              title: "",
              description:
                "The maximum number of decimals is 17, but floating point arithmetic isn't always accurate.",
              code: `const x = 0.7 - 0.3;         // x will be 0.39999999999999997`
            }
          ]
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
