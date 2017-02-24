import Stack from './Stack';

export default function dec2Bin(dNumber) {
  if (dNumber === 0) {
    return '0';
  }

  const stack = new Stack();
  let rem;
  let binaryString = '';

  while (dNumber > 0) {
    // Remaining
    rem = Math.floor(dNumber % 2);

    // Pushing to the stack
    stack.push(rem);

    // Divide by 2
    dNumber = Math.floor(dNumber / 2);
  }

  // While the stack has elements
  while (stack.hasElements()) {
    // Concatenate each element.
    binaryString += stack.pop().toString();
  }

  return binaryString;
}
