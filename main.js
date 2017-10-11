function getRandomNumber(min, max) {
    var randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNum;
}










$(document).ready(function() {

    var character_1 = 100;
    var character_2 = 100;

    $("#button").html("<button>Here is one</button>");






    // CLicka function to get a random number
    $("#button").on("click", function() {
        console.log("Player 1: " + character_1 + " and player two: " + character_2);

        var attack_one = getRandomNumber(0, 9);
        var attack_two = getRandomNumber(0, 9);
        character_1 -= attack_one;
        character_2 -= attack_two;

        $(".charlie_brown p").html(character_1);

        $(".putin p").html(character_2);

        if (character_1 <= 0) {
            console.log("Character two wins!! ");
            $("p").hide();
            $(".win_message").html("Charlie Brown Wins!!!");

        } else if (character_2 <= 0) {
            console.log("Character one wins!");
            $("p").hide();
            $(".win_message").html("Putin Wins!!!");
        }


    });







});