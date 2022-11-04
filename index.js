let arr = [
    {name: "User1", age: 25},
    {name: "User2", age: 30},
    {name: "User3", age: 28}
];

sortByAge(arr);

function sortByAge(array) {
    array.sort((a, b) => a.age - b.age)
}

console.log(arr);

alert(arr[0].name);
alert(arr[1].name);
alert(arr[2].name);