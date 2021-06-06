// Data structure:
// const example = {
//   eventKey: 0,
//   name: "name",
//   tabs: [
//     {
//       eventKey: 0,
//       name: "firstTabName",
//       description: "tabDescription",
//       sections: [
//         {
//           id: 0,
//           sectionTitle: "sectionTitle",
//           subsections: [
//             {
//               id: 0,
//               title: "subsectionTitle",
//               description: "subsectionDescription",
//               code: "subsectionCodeSnippet"
//             }
//           ]
//         }
//       ]
//     },
//     {
//       eventKey: 1,
//       name: "secondTabName",
//       ...
//     }
//   ]
// };

export const numberMethodsData = {
  eventKey: "number",
  name: "Number",
  tabs: [
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
      sections: [
        {
          id: 0,
          sectionTitle: "Precision",
          subsections: [
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
              description: (
                <p>
                  The maximum number of decimals is 17, but floating point
                  arithmetic isnt always accurate.
                </p>
              ),
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
        },
        {
          id: 1,
          sectionTitle: "Adding Numbers and Strings",
          subsections: [
            {
              id: 0,
              title: "",
              description: (
                <p>
                  Javascript uses '+' for both addition and string
                  concatenation.
                </p>
              ),
              code: `const x = 5\nconst y = 10\nconsole.log(x + y) // 15, a Number\n\nconst a = '5'\nconst b = '10'\nconsole.log(a + b) // '510', a String.`
            },
            {
              id: 1,
              title: "",
              description: (
                <p>
                  If you add a number and a string, or a string and a number,
                  Javascript will concatenate them as strings.
                </p>
              ),
              code: `const x = 5 // a Number\nconst y = '10' // a String\nconsole.log(x + y) // '510', a String\nconsole.log(y + x) // '105', a String.`
            },
            {
              id: 2,
              title: "",
              description: <p>Common mistakes:</p>,
              code: `const x = 5 // a Number\nconst y = 10 // a Number\nconst z = '20' // a String\n\nconsole.log(x + y + z) // '1520', a String, not '51020'.\n// Javascript evaluates left to right, so evaluates 'x + y', and then evaluates that result + z.\n\nconsole.log("x + y is equal to: " + x + y) // 'x + y is equal to: 510'\n// The string is concatenated with x, and then that string is concatenated with y.`
            }
          ]
        },
        {
          eventKey: 99,
          name: "",
          description: (
            <p>
              Description
              <ul>
                <li>fillerBullet</li>
              </ul>
            </p>
          ),
          sections: [
            {
              id: 0,
              sectionTitle: "Syntax",
              subsections: [
                {
                  id: 0,
                  title: "",
                  description: "",
                  code: ``
                }
              ]
            },
            {
              id: 1,
              sectionTitle: "Example",
              subsections: [
                {
                  id: 0,
                  title: "",
                  description: "",
                  code: ``
                }
              ]
            }
          ]
        },
        {
          eventKey: 99,
          name: "",
          description: (
            <p>
              Description
              <ul>
                <li>fillerBullet</li>
              </ul>
            </p>
          ),
          sections: [
            {
              id: 0,
              sectionTitle: "Syntax",
              subsections: [
                {
                  id: 0,
                  title: "",
                  description: "",
                  code: ``
                }
              ]
            },
            {
              id: 1,
              sectionTitle: "Example",
              subsections: [
                {
                  id: 0,
                  title: "",
                  description: "",
                  code: ``
                }
              ]
            }
          ]
        },
        {
          eventKey: 99,
          name: "",
          description: (
            <p>
              Description
              <ul>
                <li>fillerBullet</li>
              </ul>
            </p>
          ),
          sections: [
            {
              id: 0,
              sectionTitle: "Syntax",
              subsections: [
                {
                  id: 0,
                  title: "",
                  description: "",
                  code: ``
                }
              ]
            },
            {
              id: 1,
              sectionTitle: "Example",
              subsections: [
                {
                  id: 0,
                  title: "",
                  description: "",
                  code: ``
                }
              ]
            }
          ]
        },
        {
          eventKey: 99,
          name: "",
          description: (
            <p>
              Description
              <ul>
                <li>fillerBullet</li>
              </ul>
            </p>
          ),
          sections: [
            {
              id: 0,
              sectionTitle: "Syntax",
              subsections: [
                {
                  id: 0,
                  title: "",
                  description: "",
                  code: ``
                }
              ]
            },
            {
              id: 1,
              sectionTitle: "Example",
              subsections: [
                {
                  id: 0,
                  title: "",
                  description: "",
                  code: ``
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

// blank template:
//
// {
//   eventKey: 99,
//   name: "",
//   description: (
//     <p>
//       Description
//       <ul>
//         <li>fillerBullet</li>
//       </ul>
//     </p>
//   ),
//   sections: [
//     {
//       id: 0,
//       sectionTitle: "Syntax",
//       subsections: [
//         {
//           id: 0,
//           title: "",
//           description: "",
//           code: ``
//         }
//       ]
//     },
//     {
//       id: 1,
//       sectionTitle: "Example",
//       subsections: [
//         {
//           id: 0,
//           title: "",
//           description: "",
//           code: ``
//         }
//       ]
//     }
//   ]
// }
