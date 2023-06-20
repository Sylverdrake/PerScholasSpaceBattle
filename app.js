//https://perscholas.instructure.com/courses/1464/assignments/291113

//Need to create statblock for Ship
let ship = {
    hull: 20,
    firepower: 5,
    accuracy: 70,
}

//Need to create randomized statblocks for Alien Ship

function randomStat(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let enemy = {
    hull: randomStat(3, 6),
    firepower: randomStat(2, 4),
    accuracy: randomStat(60, 80)
}

//let currentHull = ship.hull -= enemy.firepower

//Damage Check against self
console.log("Hull is " + ship.hull);

    if (randomStat(1, 100) < enemy.accuracy)
    {
        ship.hull -= enemy.firepower;
        console.log("You are hit and have this much Hull remaining: " + ship.hull)
    }else
    {
        console.log("You dodged!");
    }

    if (ship.hull <= 0)
    {
    console.log("You have been destroyed!");
    }

    if (ship.hull > 0)
    {
    console.log("Your ship holds steady!");
    }

//For loop
//Press Engage and initiate function
//Function will have ship attack, then enemy attack
//Check HP of ship and enemy, if ship hp = 0, game over, if enemy hp = 0, go to next enemy
//repeat until you win or ship hp = 0

//Accuracy and Damage Check against enemy 

// console.log("Hull is " + enemy.hull);

//     if (randomStat(1, 100) < ship.accuracy)
// {
//         enemy.hull -= ship.firepower;
//         console.log("The enemy is hit and has this much Hull remaining: " + enemy.hull)
//     }else
// {
//         console.log("The enemy dodged!");
//     }

// if (enemy.hull <= 0)
// {
//     console.log("The enemy is destroyed");
// }

// if (enemy.hull > 0)
// {
//     console.log("The enemy still remains.");
// }


//Need to create For Loop for Engage! button

//Dialgoue Box should have text:

//An enemy approaches! What will you do?

//Pressing Retreat has box say:

//Game Over! You have retreated!

//Pressing Engage! has box say:

//You engage the enemy and begin the loop. 
//The loop ends when either the enemy or player is reduced to 0 Hull.

//If Player Hull is reduced to 0, and dialogue says: "Your ship has been destroyed!"

//If Enemy Hull is reduced to 0, the alien is removed from the list, and player is prompted with inital choice
//When list is empty, player is given dialogue "You have saved the planet!"

//Actions will print to console until I figure out a better way to make it turn based?