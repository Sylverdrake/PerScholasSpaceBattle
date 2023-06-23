//----------------------------------------------
//SHIP STATS
let ship = 
{
    name: "USS ION",
    hull: 20,
    firepower: 5,
    accuracy: 70,
}

//----------------------------------------------
//ENEMY STATS
let enemy1 = 
{   
    name: "Balthraxian Warship",
    hull: randomStat(3, 6),
    firepower: randomStat(2, 4),
    accuracy: randomStat(60, 80)
}

let enemy2 = 
{   
    name: "Balthraxian Battleship",
    hull: randomStat(3, 6),
    firepower: randomStat(2, 4),
    accuracy: randomStat(60, 80)
}

let enemy3 = 
{   
    name: "Balthraxian Interceptor",
    hull: randomStat(3, 6),
    firepower: randomStat(2, 4),
    accuracy: randomStat(60, 80)
}

let enemy4 = 
{   
    name: "Balthraxian Corvette",
    hull: randomStat(3, 6),
    firepower: randomStat(2, 4),
    accuracy: randomStat(60, 80)
}

let enemy5 = 
{   
    name: "Balthraxian Destroyer",
    hull: randomStat(3, 6),
    firepower: randomStat(2, 4),
    accuracy: randomStat(60, 80)
}

let enemy6 = 
{   
    name: "Balthraxian Battlecruiser",
    hull: randomStat(3, 6),
    firepower: randomStat(2, 4),
    accuracy: randomStat(60, 80)
}

//----------------------------------------------
//ENEMY ARRAY
let enemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];
let currentEnemy = enemies[0];

//----------------------------------------------
//TRACKERS
let counter = 0;
let score = 0
let turn = 0

//----------------------------------------------
//FUNCTIONS

//Number Randomizer
function randomStat(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

//----------------------------------------------
//WIN CONDITION
const win = () =>
{
    if(score === 6)
    {
        console.log("You win!");
    }
    else 
    {
        console.log("Enemies still remain!");
    }
}

//----------------------------------------------
//SHIP LIFE CHECK | THIS WORKS SO FAR
let currentHull = ship.hull;
const checkHull = () => 
{
    console.log(`Current Hull is ${ship.hull}`);
    if(ship.hull <= 0)
    {
    console.log("You have been destroyed!")
    }
    else
    {
    console.log("Your ship holds steady!");
    heroTurn()
    }
}

//----------------------------------------------
//ENEMY LIFE CHECK |
let currentEnemyHull = currentEnemy.hull;
const checkenemyHull = () =>
{
    console.log(`Remaining Enemy Hull Strength is ${currentEnemy.hull}`);
    if (currentEnemy.hull <= 0)
    {
        counter++;
        score++;
        console.log("Array Counter: ",counter);
        currentEnemy = enemies[counter]
        console.log("Your score is now:", score);
        win();
        console.log(currentEnemy.name + " approaches!");
        enemyTurn();
    }
    else {
        enemyTurn();
    }
    return "===End Turn==="
}

//----------------------------------------------
//CURRENT ENEMY ATTACKS
const enemyTurn = () => 
{
    if (randomStat(1, 100) < currentEnemy.accuracy)
{      
        turn++;
        console.log(`===Turn: ${turn}===`);
        console.log(`We have a Hull Strength of ${ship.hull}`);
        ship.hull -= currentEnemy.firepower;
        console.log(`We are hit for ${currentEnemy.firepower} damage and have ${ship.hull} Hull remaining.`)
        checkHull()
}
else
{
        turn++;
        console.log(`===Turn: ${turn}===`)
        console.log("We managed to avoid the hit!");
        checkHull()
    }
    return "===End Turn==="
}
//----------------------------------------------
//SHIP ATTACKS
const heroTurn = () => 
{
    if (randomStat(1, 100) < ship.accuracy)
{      
        turn++;
        console.log("We are engaging the enemy!");
        console.log(`===Turn: ${turn}===`);
        console.log(`The enemy has a Hull Strength of ${currentEnemy.hull}`);
        currentEnemy.hull -= ship.firepower;
        console.log(`The enemy is hit for ${ship.firepower} damage and has ${currentEnemy.hull} Hull remaining.`);
        checkenemyHull()
}
else
{
        turn++;
        console.log(`===Turn: ${turn}===`);
        console.log("The enemy managed to avoid the hit!");
        enemyTurn()
    }
    return "===End Turn==="
}

//----------------------------------------------
//RETREAT
const decision = () => 
{
    let choice = prompt("Continue?"); 
    if(choice === "yes")
    {

        dialogue.innerHTML ="We shall press on!"
        console.log("We shall press on!");
        heroTurn()
    }
    else
    {
        dialogue.innerHTML = "Game Over! You have failed!"
        console.log("All is lost!");
    }
}

//----------------------------------------------
//ENGAGE THE ENEMY!!!
const engage = () =>
{
    heroTurn();
}

console.log(engage());
