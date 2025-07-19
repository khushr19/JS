let array1=[1,2,3,4,5];
array1.push(5);
console.log(array1);
array1.pop(3);
console.log(array1);

console.log(array1.length-1);
console.log(array1[Math.round((array1.length - 1) / 2)]);
array1.shift();
console.log(array1);
array1.unshift(5);
console.log(array1);


console.log(array1.at(0));

let array2=[6,7,8,9,10];
// console.log(array1.concat(array2));
const isLargeNumber = (element) => element > 9;
console.log(isLargeNumber, "isLargeNumber");
console.log(array1.findIndex(4));
var res=array1.slice(2);
// console.log(res);
array1.splice(1,0,55);
console.log(array1);
let tp=[44,88,3,2,5];
console.log(tp.sort());
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems);
console.log(items.toString());

let i = 1;
do{
    console.log(i);
    i++;
}while(i<=10)

    let i=10;
    do{
        console.log(i);
        i--;
    }while(i>=1)
    for (let i = 1; i <= 10; i++) {
  if (i == 5 || i == 7 || i == 1) {
    continue;
  }
  console.log(i);
}
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}