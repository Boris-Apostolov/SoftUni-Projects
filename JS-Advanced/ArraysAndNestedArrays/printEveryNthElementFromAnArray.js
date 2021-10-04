function printEveryNthElementFromAnArray(input, step) {
  const result = [];
  for (let i = 0; i < input.length; i += step) {
    result.push(input[i]);
  }
  return result;
}
console.log(printEveryNthElementFromAnArray(['5',
  '20',
  '31',
  '4',
  '20'],
  2))