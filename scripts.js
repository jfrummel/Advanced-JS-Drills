name = "Jeremy";
var name;
console.log(name);

setName();
function setName() {
    let name = "Covalence";
    console.log(name)
}

console.log('Average');
let avg = findAvg(2, 2);
console.log('Average', avg);
function findAvg(a, b) {
    console.log('Average');
    var answer = ( a + b) / 2;
    return answer;
}

let fruits = ['apple', 'orange', 'banana'];

function fruit() {
    let favFruit = fruits[2];
    console.log(fruits[0]);

    function printFavFruit() {
        console.log(favFruit);
    }
    printFavFruit();
    let leastFav = "cherries";
    console.log(leastFav);
}

fruit();

helloJ();
function helloJ() {
    console.log('Hello Jeremy');
}

let alertText = function () {
    alert("Text of my choosing.");
}

alertText();