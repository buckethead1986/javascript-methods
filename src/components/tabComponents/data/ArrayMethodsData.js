export const arrayMethodsData = {
  eventKey: "array",
  name: "Array",
  tabs: [
    {
      eventKey: 0,
      name: "Array",
      description:
        "Arrays are Objects and are used to store multiple values in a single variable. Arrays indexes are zero-based. The first element in an array is 0, the second is 1, etc.",
      sections: [
        {
          id: 0,
          sectionTitle: "Syntax",
          subsections: [
            {
              id: 0,
              title: "",
              description: "",
              code: `const arrayName = [value1, value2, ...]`
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
              code: `const simpleArray = ['a', 'b', 'c', 'd', 'e']\nconsole.log(simpleArray[1]) // 'b'\n\nconst variedArray = [13, 'string', {objects: "themselves"}, ["Other", "Arrays"], 900]\nconsole.log(variedArray[0]) // 13\nconsole.log(variedArray[2].objects) // 'themselves'`
            }
          ]
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
          sectionTitle: "Syntax",
          subsections: [
            {
              id: 0,
              title: "",
              description: "",
              code: `array.join(separator)`
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
              code: `const fruits = ['Apples', 'Oranges', 'Bananas', 'Watermelon']\nconsole.log(fruits.join()) // 'Apples, Oranges, Bananas, Watermelon'\nconsole.log(fruits.join(' and ')) // 'Apples and Oranges and Bananas and Watermelon'`
            }
          ]
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
          sectionTitle: "Syntax",
          subsections: [
            {
              id: 0,
              title: "",
              description: "",
              code: `string.split(separator)`
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
              code: `const str = 'No, I am your father'\nconsole.log(str.split("")) // [ 'N', 'o', ',', ' ', 'I', ' ', 'a', 'm', ' ', 'y', 'o', 'u', 'r', ' ', 'f', 'a', 't', 'h', 'e', 'r' ]\nconsole.log(str.split(',')) // [ 'No', ' I am your father' ]`
            }
          ]
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
          sectionTitle: "Syntax",
          subsections: [
            {
              id: 0,
              title: "",
              description: "",
              code: `array.filter(filterFunction)`
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
              code: `const array = [4, 7, 30, 19, 107, 24]\n\nfunction checkForEven(number) {\n return number % 2 === 0   // modulus (%) returns any remainder from dividing by the given number. Even numbers return 0 when divided by 2\n}\nconsole.log(array.filter(checkForEven)) // [4, 30, 24]\nconsole.log(array.filter(number => number % 2 === 0)) // [4, 30, 24]`
            }
          ]
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
          sectionTitle: "Syntax",
          subsections: [
            {
              id: 0,
              title: "",
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
              code: `const numbers = [1, 2, 3, 4]\n\nfunction multiplyByThree(currentValue, index, arr) {\n arr[index] = currentValue * 3\n}\n\nconsole.log(numbers.forEach(multiplyByThree)) // [3, 6, 9, 12]\n\n// Same functionality using an arrow function:\nnumbers.forEach((element, index, arr) => arr[index] = element * 3)  // [3, 6, 9, 12]`
            }
          ]
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
          sectionTitle: "Syntax",
          subsections: [
            {
              id: 0,
              title: "",
              description: "",
              code: `array.includes(element)`
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
              code: `const numbers = [1, 2, 3, 4]\nnumbers.includes(4) // true\nnumbers.includes('banana') // false`
            }
          ]
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
          sectionTitle: "Syntax",
          subsections: [
            {
              id: 0,
              title: "",
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
              code: `const allEvenNumbers = [2, 4, 6, 8]\nconst someOddNumbers = [2, 4, 7, 8]\n\nfunction checkForEven(number) {\n  return number % 2 === 0\n}\n\nconsole.log(allEvenNumbers.every(checkForEven)) // true\nconsole.log(someOddNumbers.every(checkForEven)) // false`
            }
          ]
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
          sectionTitle: "Syntax",
          subsections: [
            {
              id: 0,
              title: "",
              description: "",
              code: `array.indexOf(element)`
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
              code: `const items = ["lions", "tigers", "bears", "oh", "my"]\nconsole.log(items.indexOf('bears')) // 2\nconsole.log(items.indexOf('banana')) // -1`
            }
          ]
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
          sectionTitle: "Syntax",
          subsections: [
            {
              id: 0,
              title: "",
              description: "",
              code: `array.length`
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
              code: `const items = ["lions", "tigers", "bears", "oh", "my"]\nconsole.log(items.length) // 5\n\nitems.length = 3\nconsole.log(items) // ["lions", "tigers", "bears"]\n\nitems.length = 5\nconsole.log(items) // ["lions", "tigers", "bears", , ] // (empty item positions)\nconsole.log(items[2]) // "bears"\nconsole.log(items[3]) // undefined`
            }
          ]
        }
      ]
    },
    {
      eventKey: 10,
      name: ".pop()",
      description: (
        <p>
          Removes the last element of an array.
          <ul>
            <li>pop() returns the removed element.</li>
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
              code: `array.pop()`
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
              code: `const items = ["lions", "tigers", "bears", "oh", "my"]\n\nconst x = items.pop()\nconsole.log(items) // ["lions", "tigers", "bears", "oh"]\nconsole.log(x) // "my"`
            }
          ]
        }
      ]
    },
    {
      eventKey: 11,
      name: ".push()",
      description: (
        <p>
          Adds an element to the end of an array.{" "}
          <ul>
            <li>push() returns the length of the new array.</li>
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
              code: `array.push(element)`
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
              code: `const items = ["lions", "tigers", "bears", "oh"]\n\nconst x = items.push("my")\nconsole.log(items) // ["lions", "tigers", "bears", "oh", "my"]\nconsole.log(x) // 5`
            }
          ]
        }
      ]
    },
    {
      eventKey: 12,
      name: ".shift()",
      description: (
        <p>
          Removes an element from the beginning of an array.
          <ul>
            <li>shift() returns the removed element.</li>
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
              code: `array.shift()`
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
              code: `const items = ["alpha", "beta", "gamma", "delta"]\n\nconst x = items.shift()\nconsole.log(items) // ["beta", "gamma", "delta"]\nconsole.log(x) // "alpha"`
            }
          ]
        }
      ]
    },
    {
      eventKey: 13,
      name: ".unshift()",
      description: (
        <p>
          Adds an element to the beginning of an array.
          <ul>
            <li>unshift() returns the length of the new array.</li>
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
              code: `array.unshift(element)`
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
              code: `const items = ["in", "the", "name", "of", "love"]\n\nconst x = items.unshift("stop")\nconsole.log(items) // ["stop", "in", "the", "name", "of", "love"]\nconsole.log(x) // 6`
            }
          ]
        }
      ]
    },
    {
      eventKey: 14,
      name: ".sort()",
      description: (
        <p>
          The sort() method sorts an array alphabetically, and will produce
          incorrect results when sorting numbers. To sort numerically, a compare
          function defining a different sorting method, returning a positive,
          negative, or zero value, must be used.
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
              title: "Standard alphabetical sort:",
              description: "",
              code: `array.sort()`
            },
            {
              id: 0,
              title: "Generic numerical sort:",
              description: (
                <ul>
                  <li>
                    If a negative value is returned, a is sorted before b.
                    Positive, b is sorted before a. Zero, no change is made.
                  </li>
                </ul>
              ),
              code: `array.sort(function(a, b) {return b-a})`
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
              code: `const strings = ["apple", "duck", "banana", "cucumber"]\nconsole.log(strings.sort()) // ["apple", "banana", "cucumber", "duck"]\n\nconst numbers = [1, 4, 10, -2, 7]\nconsole.log(numbers.sort()) // [ -2, 1, 10, 4, 7 ]\nconsole.log(numbers.sort(function(a,b) {return b-a})) // [10, 7, 4, 1, -2]\nconsole.log(numbers.sort(function(a,b) {return a-b})) // [-2, 1, 4, 7, 10]`
            }
          ]
        }
      ]
    },
    {
      eventKey: 15,
      name: ".splice()",
      description: (
        <p>
          splice() modifies an array by adding or deleting elements from a
          specified position.
          <ul />
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
              description: (
                <div style={{ marginBottom: "1%" }}>
                  Required Values:
                  <ul style={{ marginBottom: 0 }}>
                    {" "}
                    {/*Ugly and repetitive. Rewrite javascriptMethodTabPane to create these lists itself*/}
                    <li>
                      startPosition: The index in the array to insert or remove
                      elements. '1' would insert elements between index 0 and 1,
                      or remove elements starting with element 1.
                    </li>
                    <li>
                      numberOfElementsToRemove: How many elements should be
                      removed, beginning with the element in startPosition.
                    </li>
                  </ul>
                  The remaining elements are optional (element1, element2,...),
                  and are any elements to be added into the array.
                </div>
              ),
              code: `array.splice(startPosition, numberOfElementsToRemove, element1, element2,...)`
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
              description:
                "Starting at index 2 (Giraffes), removes 1 element, and inserts 1 element (Bears).",
              code: `const animals = ["Lions", "Tigers", "Giraffes", "Oh", "My"]\nanimals.splice(2, 1, "Bears")\nconsole.log(animals) // ["Lions", "Tigers", "Bears", "Oh", "My"]`
            }
          ]
        }
      ]
    },
    {
      eventKey: 16,
      name: ".slice()",
      description: (
        <p>
          slice() creates a new array by slicing a part out of an existing
          array.
          <ul />
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
              description: (
                <div style={{ marginBottom: "1%" }}>
                  Required Values:
                  <ul style={{ marginBottom: 0 }}>
                    {" "}
                    {/*Ugly and repetitive. Rewrite javascriptMethodTabPane to create these lists itself*/}
                    <li>
                      startPosition: The index in the array to start the removal
                      of elements.
                    </li>
                  </ul>
                  Optional Values:
                  <ul style={{ marginBottom: 0 }}>
                    <li>
                      endPosition: The index in the array to end the removal.
                      Without this value, slice stops at the end of the array.
                    </li>
                  </ul>
                </div>
              ),
              code: `array.slice(startPosition, endPosition)`
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
              description: "Removes elements from index 2 to 4",
              code: `const animals = ["Lions", "Tigers", "Bears", "Oh", "My"]\n\nconst fullSlice = animals.slice(2)\nconst partialSlice = animals.slice(1, 3)\n\nconsole.log(animals) // ["Lions", "Tigers", "Bears", "Oh", "My"]\nconsole.log(fullSlice) // ["Bears", "Oh", "My"]\nconsole.log(partialSlice) // ["Tigers", "Bears"]`
            }
          ]
        }
      ]
    },
    {
      eventKey: 17,
      name: ".forEach()",
      description:
        "Calls a function once for each element in an array, in order.",
      sections: [
        {
          id: 0,
          sectionTitle: "Syntax",
          subsections: [
            {
              id: 0,
              title: "",
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
              code: `const numbers = [1, 2, 3, 4]\n\nfunction multiplyByThree(currentValue, index, arr) {\n arr[index] = currentValue * 3\n}\n\nconsole.log(numbers.forEach(multiplyByThree)) // [3, 6, 9, 12]\n\n// Same functionality using an arrow function:\nnumbers.forEach((element, index, arr) => arr[index] = element * 3)  // [3, 6, 9, 12]`
            }
          ]
        }
      ]
    },
    {
      eventKey: 18,
      name: ".forEach()",
      description:
        "Calls a function once for each element in an array, in order.",
      sections: [
        {
          id: 0,
          sectionTitle: "Syntax",
          subsections: [
            {
              id: 0,
              title: "",
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
              code: `const numbers = [1, 2, 3, 4]\n\nfunction multiplyByThree(currentValue, index, arr) {\n arr[index] = currentValue * 3\n}\n\nconsole.log(numbers.forEach(multiplyByThree)) // [3, 6, 9, 12]\n\n// Same functionality using an arrow function:\nnumbers.forEach((element, index, arr) => arr[index] = element * 3)  // [3, 6, 9, 12]`
            }
          ]
        }
      ]
    },
    {
      eventKey: 19,
      name: ".slice()",
      description: (
        <p>
          slice() creates a new array by slicing a part out of an existing
          array.
          <ul />
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
              description: (
                <div style={{ marginBottom: "1%" }}>
                  Required Values:
                  <ul style={{ marginBottom: 0 }}>
                    {" "}
                    {/*Ugly and repetitive. Rewrite javascriptMethodTabPane to create these lists itself*/}
                    <li>
                      startPosition: The index in the array to start the removal
                      of elements.
                    </li>
                  </ul>
                  Optional Values:
                  <ul style={{ marginBottom: 0 }}>
                    <li>
                      endPosition: The index in the array to end the removal.
                      Without this value, slice stops at the end of the array.
                    </li>
                  </ul>
                </div>
              ),
              code: `array.slice(startPosition, endPosition)`
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
              description: "Removes elements from index 2 to 4",
              code: `const animals = ["Lions", "Tigers", "Bears", "Oh", "My"]\n\nconst fullSlice = animals.slice(2)\nconst partialSlice = animals.slice(1, 3)\n\nconsole.log(animals) // ["Lions", "Tigers", "Bears", "Oh", "My"]\nconsole.log(fullSlice) // ["Bears", "Oh", "My"]\nconsole.log(partialSlice) // ["Tigers", "Bears"]`
            }
          ]
        }
      ]
    },
    {
      eventKey: 20,
      name: ".slice()",
      description: (
        <p>
          slice() creates a new array by slicing a part out of an existing
          array.
          <ul />
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
              description: (
                <div style={{ marginBottom: "1%" }}>
                  Required Values:
                  <ul style={{ marginBottom: 0 }}>
                    {" "}
                    {/*Ugly and repetitive. Rewrite javascriptMethodTabPane to create these lists itself*/}
                    <li>
                      startPosition: The index in the array to start the removal
                      of elements.
                    </li>
                  </ul>
                  Optional Values:
                  <ul style={{ marginBottom: 0 }}>
                    <li>
                      endPosition: The index in the array to end the removal.
                      Without this value, slice stops at the end of the array.
                    </li>
                  </ul>
                </div>
              ),
              code: `array.slice(startPosition, endPosition)`
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
              description: "Removes elements from index 2 to 4",
              code: `const animals = ["Lions", "Tigers", "Bears", "Oh", "My"]\n\nconst fullSlice = animals.slice(2)\nconst partialSlice = animals.slice(1, 3)\n\nconsole.log(animals) // ["Lions", "Tigers", "Bears", "Oh", "My"]\nconsole.log(fullSlice) // ["Bears", "Oh", "My"]\nconsole.log(partialSlice) // ["Tigers", "Bears"]`
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
