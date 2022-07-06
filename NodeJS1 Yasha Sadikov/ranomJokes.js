let oneLinerJoke = require('one-liner-joke');

let randomNum = oneLinerJoke.randomInt();

let jokesArray = [];

console.log(randomNum);

while (randomNum > 0) {
    let getRandomJoke = oneLinerJoke.getRandomJoke();
    jokesArray.push(getRandomJoke);
    randomNum = randomNum -1;
}

console.log(jokesArray);



















