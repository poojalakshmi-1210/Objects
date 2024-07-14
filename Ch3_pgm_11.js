// Using a property in a calculation

var player1;

player1 = {
	  name: "Max",
	  score: 0
};

console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score + 50;

console.log(player1.name + " has scored " + player1.score);

// Increase player1's score by 10%
player1.score = player1.score + (player1.score * 0.1); // 10% increase
console.log(player1.name + "'s new score after 10% increase: " + player1.score);

// Add a second player
var player2 = {
    name: "Alice",
    score: 100
};

// Calculate and log the sum of their scores
var totalScore = player1.score + player2.score;
console.log(player1.name + " and " + player2.name + " have a total score of " + totalScore);


/* Further Adventures
 *
 * 1) Write code to increase player1's score by 10%.
 *
 * 2) Add a second player.
 *
 * 3) Use the players' properties to find the sum
 *    of their scores and log it to the console,
 *    along with an appropriate message that includes
 *    their names.
 *
 */