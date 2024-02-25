// const x = [1, 2, 3, 4, 5];

// const x = 'ITI Ismailia';

// const x = new Set([1, 2, 3, 2, 4, 5]);

// const x = new Map([
//   [1, 1],
//   [2, 2],
//   [3, 3],
//   [4, 4],
// ]);

// const x = {
//   name: 'ahmed',
//   role: 'admin',
// };

// for (const value of x) {
//   console.log(value);
// }

// const iterator = {
//   next() {
//     // return { value: currentValue, done: false };

//     // return { value: undefined, done: true };
//   },
// };

function getStringIterator(input: string) {
  let currentIndex = 0;

  return {
    next() {
      if (currentIndex < input.length) {
        return { value: input[currentIndex++], done: false };
        // const result = { value: input[currentIndex], done: false };
        // currentIndex++;
        // return result;
      }

      return { value: undefined, done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}

// console.dir(getStringIterator('ITI Ismailia').next);

// const iterator = getStringIterator('ITI Ismailia');
// const iterator = x[Symbol.iterator]();
// console.log(iterator);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// for (const value of iterator) {
//   console.log(value);
// }

// ------

// class Stack<TType> {
//   readonly items: TType[] = [];

//   push(item: TType) {
//     this.items.push(item);
//   }

//   pop() {
//     return this.items.pop();
//   }

//   [Symbol.iterator]() {
//     let index = this.items.length - 1;
//     return {
//       next: () => {
//         if (index >= 0) {
//           return { value: this.items[index--], done: false };
//         }

//         return { value: undefined, done: true };
//       },
//     };
//   }
// }

// const bookStack = new Stack<string>();
// bookStack.push('HTML');
// bookStack.push('CSS');
// bookStack.push('JS');

// console.log(books.items);
// for (const value of bookStack) {
//   console.log(value);
// }
