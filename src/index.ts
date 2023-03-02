const intersectAll = <T>(compareFn: (...arg: any) => any = (value: T, index: number, array: Array<T>) => array.indexOf(value) !== index, ...data: T[][]): T[] => {
  const flatArray = data.flat().sort();
  return [...new Set(flatArray.filter(compareFn))];
};

type Menu = {
  id: number,
  name: string,
}
const breakfastMenu = [
  {id: 1, name: 'Banana Bread'},
  {id: 2, name: 'Avocado Smash'},
  {id: 3, name: 'Burrito'},
  {id: 4, name: 'Coffee'},
];
const lunchMenu = [
  {id: 2, name: 'Avocado Smash'},
  {id: 3, name: 'Burrito'},
  {id: 4, name: 'Coffee'},
  {id: 5, name: 'Lasagna'},
];
const dinnerMenu = [
  {id: 2, name: 'Avocado Smash'},
  {id: 3, name: 'Burrito'},
  {id: 5, name: 'Lasagna'},
  {id: 6, name: 'Pizza'},
];

const findDuplicateRecord = ({name}: {name: string}, index: number, array: Array<Menu>) => array.findIndex(({name: otherName}: {name: any}) => name === otherName) !== index;

const result = intersectAll<Menu>(findDuplicateRecord, breakfastMenu, lunchMenu, dinnerMenu)

console.log(result)
