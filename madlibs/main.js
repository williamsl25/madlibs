var name = prompt("Hi, what is your name?");
var welcome = "Welcome" + name + "Let's play Mad Libs!";
var relativeOne = prompt("Please type a relative's name");
var adjectiveOne = prompt("Please type an adjective");
var adjectiveTwo = prompt("Please type an adjective");
var adjectiveThree = prompt("Please type an adjective");
var personOne = prompt("Please name someone in the room")
var adjectiveFour = prompt("Please type an adjective");

var verbOne = prompt("Pick a verb ending in ed");
var bodyPart = prompt("Please name a body part");
var verbTwo = prompt("Pick a verb ending in ing");
var nounOne = prompt("Pick a noun that is plural");
var nounTwo = prompt("please pick a noun");
var adverb = prompt("Pick an adverb for example, slowly or quietly");
var verbThree = prompt("Pick a verb");
var verbFour = prompt("Pick a verb");
// var relativeTwo = prompt("Please type a relative's name");
var personTwo = prompt("Please name someone in the room");

alert("All done. Ready for your story?");


document.write("Dear "+ relativeOne + ", I am having a(n) " + adjectiveOne  +" time at camp. The counselor is " + adjectiveTwo + " and the food is " + adjectiveThree + "!" + " I met  " + personOne + " and we became " + adjectiveFour + " friends." + " Unfortunately I " + verbOne + " my " + bodyPart + " so we couldn't go " + verbTwo + " like everbody else. I need more " + nounOne + " and a " + nounTwo + " sharpener, so please " + adverb + " " verbThree + " more when you " + verbFour + ". I miss you, Love " + personTwo );
