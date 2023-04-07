var items = [
    { name: 'item 1' },
    { name: 'item 2' },
    { name: 'item 11' },
    { name: 'item 3' },
    { name: 'item 10' }
];

var items2 = [
    { name: 'a' },
    { name: 'b' },
    { name: 'c' },
    { name: 'd' }
];

var items3 = [
    { name: 'a' },
    { name: 'a 1' },
    { name: '' }
];

const getItemsMaxNumber = (items: {name: string}[]): number => {
  const strings = items.map(({ name }) => name);
  const numbers = strings.map((string) => string.match(/\d+/)?.flat());
  const filtered = numbers.filter((n) => n != null).flat();
  const numberArray = filtered.map(Number);

  if (!filtered.length) return 0;
  return Math.max(...numberArray);
};

console.log(getItemsMaxNumber(items));
console.log(getItemsMaxNumber(items2));
console.log(getItemsMaxNumber(items3));
