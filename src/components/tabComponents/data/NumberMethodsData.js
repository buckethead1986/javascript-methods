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
          sectionTitle: "Color",
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
              description: (
                <p>
                  Numbers can be written with or without decimals, with
                  scientific notation, and are accurate up to 15 digits.
                </p>
              ),
              code: `const x = 999999999999999;   // x will be 999999999999999\nconst y = 9999999999999999;  // y will be 10000000000000000`
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
        // {
        //   id: 2,
        //   title: "Syntax",
        //   subsections: [
        //     {
        //       id: 0,
        //       title: "",
        //       description: (
        //         <p>
        //           Numbers can be written with or without decimals, with
        //           scientific notation, and are accurate up to 15 digits.
        //         </p>
        //       ),
        //       code: `const x = 999999999999999;   // x will be 999999999999999\nconst y = 9999999999999999;  // y will be 10000000000000000`
        //     },
        //     {
        //       id: 1,
        //       title: "",
        //       description: (
        //         <p>
        //           The maximum number of decimals is 17, but floating point
        //           arithmetic isnt always accurate.
        //         </p>
        //       ),
        //       code: `const x = 0.7 - 0.3;         // x will be 0.39999999999999997`
        //     },
        //     {
        //       id: 2,
        //       title: "",
        //       description: (
        //         <p>
        //           Numbers can be written with or without decimals, with
        //           scientific notation, and are accurate up to 15 digits.
        //         </p>
        //       ),
        //       code: `const x = 999999999999999;   // x will be 999999999999999\nconst y = 9999999999999999;  // y will be 10000000000000000`
        //     },
        //     {
        //       id: 3,
        //       title: "",
        //       description:
        //         "The maximum number of decimals is 17, but floating point arithmetic isn't always accurate.",
        //       code: `const x = 0.7 - 0.3;         // x will be 0.39999999999999997`
        //     }
        //   ]
        // },
        // {
        //   id: 3,
        //   title: "Example",
        //   subsections: [
        //     {
        //       id: 0,
        //       title: "",
        //       description: (
        //         <p>
        //           Numbers can be written with or without decimals, with
        //           scientific notation, and are accurate up to 15 digits.
        //         </p>
        //       ),
        //       code: `const x = 999999999999999;   // x will be 999999999999999\nconst y = 9999999999999999;  // y will be 10000000000000000`
        //     },
        //     {
        //       id: 1,
        //       title: "",
        //       description: (
        //         <p>
        //           The maximum number of decimals is 17, but floating point
        //           arithmetic isnt always accurate.
        //         </p>
        //       ),
        //       code: `const x = 0.7 - 0.3;         // x will be 0.39999999999999997`
        //     },
        //     {
        //       id: 2,
        //       title: "",
        //       description: (
        //         <p>
        //           Numbers can be written with or without decimals, with
        //           scientific notation, and are accurate up to 15 digits.
        //         </p>
        //       ),
        //       code: `const x = 999999999999999;   // x will be 999999999999999\nconst y = 9999999999999999;  // y will be 10000000000000000`
        //     },
        //     {
        //       id: 3,
        //       title: "",
        //       description:
        //         "The maximum number of decimals is 17, but floating point arithmetic isn't always accurate.",
        //       code: `const x = 0.7 - 0.3;         // x will be 0.39999999999999997`
        //     }
        //   ]
        // },
        // {
        //   id: 4,
        //   title: "Concise",
        //   subsections: [
        //     {
        //       id: 0,
        //       title: "",
        //       description: (
        //         <p>
        //           Numbers can be written with or without decimals, with
        //           scientific notation, and are accurate up to 15 digits.
        //         </p>
        //       ),
        //       code: `const x = 999999999999999;   // x will be 999999999999999\nconst y = 9999999999999999;  // y will be 10000000000000000`
        //     },
        //     {
        //       id: 1,
        //       title: "",
        //       description: (
        //         <p>
        //           The maximum number of decimals is 17, but floating point
        //           arithmetic isnt always accurate.
        //         </p>
        //       ),
        //       code: `const x = 0.7 - 0.3;         // x will be 0.39999999999999997`
        //     },
        //     {
        //       id: 2,
        //       title: "",
        //       description: (
        //         <p>
        //           Numbers can be written with or without decimals, with
        //           scientific notation, and are accurate up to 15 digits.
        //         </p>
        //       ),
        //       code: `const x = 999999999999999;   // x will be 999999999999999\nconst y = 9999999999999999;  // y will be 10000000000000000`
        //     },
        //     {
        //       id: 3,
        //       title: "",
        //       description:
        //         "The maximum number of decimals is 17, but floating point arithmetic isn't always accurate.",
        //       code: `const x = 0.7 - 0.3;         // x will be 0.39999999999999997`
        //     }
        //   ]
        // },
        // {
        //   id: 5,
        //   title: "Space",
        //   subsections: [
        //     {
        //       id: 0,
        //       title: "",
        //       description: (
        //         <p>
        //           Numbers can be written with or without decimals, with
        //           scientific notation, and are accurate up to 15 digits.
        //         </p>
        //       ),
        //       code: `const x = 999999999999999;   // x will be 999999999999999\nconst y = 9999999999999999;  // y will be 10000000000000000`
        //     },
        //     {
        //       id: 1,
        //       title: "",
        //       description: (
        //         <p>
        //           The maximum number of decimals is 17, but floating point
        //           arithmetic isnt always accurate.
        //         </p>
        //       ),
        //       code: `const x = 0.7 - 0.3;         // x will be 0.39999999999999997`
        //     },
        //     {
        //       id: 2,
        //       title: "",
        //       description: (
        //         <p>
        //           Numbers can be written with or without decimals, with
        //           scientific notation, and are accurate up to 15 digits.
        //         </p>
        //       ),
        //       code: `const x = 999999999999999;   // x will be 999999999999999\nconst y = 9999999999999999;  // y will be 10000000000000000`
        //     },
        //     {
        //       id: 3,
        //       title: "",
        //       description:
        //         "The maximum number of decimals is 17, but floating point arithmetic isn't always accurate.",
        //       code: `const x = 0.7 - 0.3;         // x will be 0.39999999999999997`
        //     }
        //   ]
        // }
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
