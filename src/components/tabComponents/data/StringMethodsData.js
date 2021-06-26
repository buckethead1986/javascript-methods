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

export const stringMethodsData = {
  eventKey: "string",
  name: "String",
  tabs: [
    {
      eventKey: 0,
      name: "String",
      description: (
        <p>
          `A Javascript String is zero or more characters written inside
          quotation marks. Single or Double quotes can be used, and quotes can
          be part of the string, as long as the internal quote type doesn/'t
          match the outer type.`
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
              code: `const stringName = "This is a String"`
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
              code: `const firstName = "John"\nconst lastName = 'Doe'\nconst nickname = "John 'The Yellow Dart' Doe"`
            }
          ]
        }
      ]
    },
    {
      eventKey: 1,
      name: "String",
      description: (
        <p>
          `A Javascript String is zero or more characters written inside
          quotation marks. Single or Double quotes can be used, and quotes can
          be part of the string, as long as the internal quote type doesn/'t
          match the outer type.`
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
              code: `const stringName = "This is a String"`
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
              code: `const firstName = "John"\nconst lastName = 'Doe'\nconst nickname = "John 'The Yellow Dart' Doe"`
            }
          ]
        }
      ]
    },
    {
      eventKey: 2,
      name: "String",
      description: (
        <p>
          `A Javascript String is zero or more characters written inside
          quotation marks. Single or Double quotes can be used, and quotes can
          be part of the string, as long as the internal quote type doesn/'t
          match the outer type.`
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
              code: `const stringName = "This is a String"`
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
              code: `const firstName = "John"\nconst lastName = 'Doe'\nconst nickname = "John 'The Yellow Dart' Doe"`
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
