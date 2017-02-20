var computerChoices = ["a", "b", "c", "d", "e","f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
						"r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var left = 9;

document.onkeyup = function(event) {

	var userGuess = event.key;

	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") ||
		(userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") ||
		(userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") ||
		(userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") ||
		(userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") ||
		(userGuess === "z")) 

		
		{
			if (userGuess != computerGuess) {
				
				left--;

				$(".guesses_left").append(left);

				$(".guesses_sofar").append(userGuess);
					
					if(left === 0) {

						losses++;

						$(".losses").append(losses);
					
					}
			
			}
			
			else if (userGuess === computerGuess) {

				wins ++;

				$(".wins").append(wins);

			}
		
		}
		console.log(left)
		console.log(wins)
		console.log(losses)

 }
