const num1 = prompt("Enter the First Number:");
const num2 = prompt("Enter the Second Number:");
const num3 = prompt("Enter the Third Number:");
const num4 = prompt("Enter the Four Number:");
const num5 = prompt("Enter the Five Number:");

let ogList = [];

ogList.push(num1);
ogList.push(num2);
ogList.push(num3);
ogList.push(num4);
ogList.push(num5);

let newList = [];

for (let i = ogList.length -1; i >= 0; i--) {
    newList.push(ogList[i]);
};

for (const num of newList) {
    console.log(num);
}