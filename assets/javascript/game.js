var gameOn = true;
var storedPower = 0;
var defenderEmpty = true;
var defName = "";
var fighter = "";
var currentHp = 0;
var currentAttack = 0;
var enemyHp = 0;
var enemyKill = 0;


var availableChar = [
  //Mace Windu Obj
  {
    name: "Mace Windu",
    hp: 160,
    attack: 10,
    counter: 12,
    //Method to switch character selected to fighter
    switchFighter: function () {
      $("#charOne").removeClass("select").addClass("fighter");
      $("#charTwo").removeClass("select").addClass("enemy");
      $("#charThree").removeClass("select").addClass("enemy");
      $("#charFour").removeClass("select").addClass("enemy");
    },

    //Method to move character
    moveChar: function () {
      if (($("#charOne").hasClass("select") && defenderEmpty == true) || ($("#charOne").hasClass("fighter") && defenderEmpty == true)) {
        $("#charOne").appendTo("#activeChar");
        $("#charTwo").appendTo("#enemies");
        $("#charThree").appendTo("#enemies");
        $("#charFour").appendTo("#enemies");
        fighter = "Mace";
        currentHp = Mace.hp;
        currentAttack = Mace.attack;
      }
      else if ($("#charOne").hasClass("enemy") && defenderEmpty == true) {
        $("#charOne").addClass("target");
        $("#charOne").appendTo("#defender");
        $("#fight-text").text("");
        defenderEmpty = false;
        defName = "Mace";
        enemyHp = Mace.hp;
      }
    },
  },

  //Darth Vader Obj
  {
    name: "Darth Vader",
    hp: 170,
    attack: 12,
    counter: 20,

    //Method to switch character selected to fighter
    switchFighter: function () {
      $("#charTwo").removeClass("select").addClass("fighter");
      $("#charOne").removeClass("select").addClass("enemy");
      $("#charThree").removeClass("select").addClass("enemy");
      $("#charFour").removeClass("select").addClass("enemy");
    },

    //Method to move character
    moveChar: function () {

      if (($("#charTwo").hasClass("select") && defenderEmpty == true) || ($("#charTwo").hasClass("fighter") && defenderEmpty == true)) {
        $("#charTwo").appendTo("#activeChar");
        $("#charOne").appendTo("#enemies");
        $("#charThree").appendTo("#enemies");
        $("#charFour").appendTo("#enemies");
        fighter = "Vader";
        currentHp = Vader.hp;
        currentAttack = Vader.attack;
      }
      else if ($("#charTwo").hasClass("enemy") && defenderEmpty == true) {
        $("#charTwo").addClass("target");
        $("#charTwo").appendTo("#defender");
        $("#fight-text").text("");
        defenderEmpty = false;
        defName = "Vader";
        enemyHp = Vader.hp;
      }
    }
  },

  //Yoda Object
  {
    name: "Yoda",
    hp: 200,
    attack: 15,
    counter: 25,

    //Method to switch character selected to fighter
    switchFighter: function () {
      $("#charThree").removeClass("select").addClass("fighter");
      $("#charOne").removeClass("select").addClass("enemy");
      $("#charTwo").removeClass("select").addClass("enemy");
      $("#charFour").removeClass("select").addClass("enemy");
    },

    //Method to move character
    moveChar: function () {

      if (($("#charThree").hasClass("select") && defenderEmpty == true) || ($("#charThree").hasClass("fighter") && defenderEmpty == true)) {
        $("#charThree").appendTo("#activeChar");
        $("#charOne").appendTo("#enemies");
        $("#charTwo").appendTo("#enemies");
        $("#charFour").appendTo("#enemies");
        fighter = "Yoda";
        currentHp = Yoda.hp;
        currentAttack = Yoda.attack;
      }
      else if ($("#charThree").hasClass("enemy") && defenderEmpty == true) {
        $("#charThree").addClass("target");
        $("#charThree").appendTo("#defender");
        $("#fight-text").text("");
        defenderEmpty = false;
        defName = "Yoda";
        enemyHp = Yoda.hp;
      }
    }
  },

  //Darth Maul Obj
  {
    name: "Darth maul",
    hp: 150,
    attack: 9,
    counter: 15,

    //Method to switch character selected to fighter
    switchFighter: function () {
      $("#charFour").removeClass("select").addClass("fighter");
      $("#charOne").removeClass("select").addClass("enemy");
      $("#charThree").removeClass("select").addClass("enemy");
      $("#charTwo").removeClass("select").addClass("enemy");
    },

    //Method to move character
    moveChar: function () {
      if (($("#charFour").hasClass("select") && defenderEmpty == true) || ($("#charFour").hasClass("fighter") && defenderEmpty == true)) {
        $("#charFour").appendTo("#activeChar");
        $("#charOne").appendTo("#enemies");
        $("#charTwo").appendTo("#enemies");
        $("#charThree").appendTo("#enemies");
        fighter = "maul";
        currentHp = maul.hp;
        currentAttack = maul.attack;
      }
      else if ($("#charFour").hasClass("enemy") && defenderEmpty == true) {
        $("#charFour").addClass("target");
        $("#charFour").appendTo("#defender");
        $("#fight-text").text("");
        defenderEmpty = false;
        defName = "maul";
        enemyHp = maul.hp;
      }
    }
  },
];

var Mace = availableChar[0];
var Vader = availableChar[1];
var Yoda = availableChar[2];
var maul = availableChar[3];

function startGame() {
  $(".mace-hp").text(Mace.hp);
  $(".vader-hp").text(Vader.hp);
  $(".yoda-hp").text(Yoda.hp);
  $(".maul-hp").text(maul.hp);
  $("#reset").hide();
}

$("#charOne").on("click", function () {
  if (gameOn && $("#charOne").hasClass("select")) {
    Mace.switchFighter();
  }
  Mace.moveChar();
});

$("#charTwo").on("click", function () {
  if (gameOn && $("#charTwo").hasClass("select")) {
    Vader.switchFighter();
  }
  Vader.moveChar();
});

$("#charThree").on("click", function () {
  if (gameOn && $("#charThree").hasClass("select")) {
    Yoda.switchFighter();
  }
  Yoda.moveChar();
});

$("#charFour").on("click", function () {
  if (gameOn && $("#charFour").hasClass("select")) {
    maul.switchFighter();
  }
  maul.moveChar();
});


$("#attack").on("click", function () {
  if ($("#defender").html().length === 0 && $("#enemies").html().length > 0) {
    $("#fight-text").text("Pick another enemy to fight");
  }
  else {
    if (fighter == "Mace" && defName == "Vader" && gameOn) {
      currentHp = currentHp - Vader.counter;
      $(".mace-hp").text(currentHp);
      currentAttack = currentAttack + Mace.attack;
      enemyHp = enemyHp - currentAttack;
      $(".vader-hp").text(enemyHp);
      checkWin();
    }
    else if (fighter == "Mace" && defName == "Yoda" && gameOn) {
      currentHp = currentHp - Yoda.counter;
      $(".mace-hp").text(currentHp);
      currentAttack = currentAttack + Mace.attack;
      enemyHp = enemyHp - currentAttack;
      $(".yoda-hp").text(enemyHp);
      checkWin();
    }
    else if (fighter == "Mace" && defName == "maul" && gameOn) {
      currentHp = currentHp - maul.counter;
      $(".mace-hp").text(currentHp);
      currentAttack = currentAttack + Mace.attack;
      enemyHp = enemyHp - currentAttack;
      $(".maul-hp").text(enemyHp);
      checkWin();
    }

    if (fighter == "Vader" && defName == "Mace" && gameOn) {
      currentHp = currentHp - Mace.counter;
      $(".vader-hp").text(currentHp);
      currentAttack = currentAttack + Mace.attack;
      enemyHp = enemyHp - currentAttack;
      $(".mace-hp").text(enemyHp);
      checkWin();
    }
    else if (fighter == "Vader" && defName == "Yoda" && gameOn) {
      currentHp = currentHp - Yoda.counter;
      $(".vader-hp").text(currentHp);
      currentAttack = currentAttack + Mace.attack;
      enemyHp = enemyHp - currentAttack;
      $(".yoda-hp").text(enemyHp);
      checkWin();
    }
    else if (fighter == "Vader" && defName == "maul" && gameOn) {

      currentHp = currentHp - maul.counter;
      $(".vader-hp").text(currentHp);
      currentAttack = currentAttack + Mace.attack;
      enemyHp = enemyHp - currentAttack;
      $(".maul-hp").text(enemyHp);
      checkWin();
    }

    if (fighter == "Yoda" && defName == "Mace" && gameOn) {
      currentHp = currentHp - Mace.counter;
      $(".yoda-hp").text(currentHp);
      currentAttack = currentAttack + Mace.attack;
      enemyHp = enemyHp - currentAttack;
      $(".mace-hp").text(enemyHp);
      checkWin();
    }
    else if (fighter == "Yoda" && defName == "Vader" && gameOn) {
      currentHp = currentHp - Vader.counter;
      $(".yoda-hp").text(currentHp);
      currentAttack = currentAttack + Mace.attack;
      enemyHp = enemyHp - currentAttack;
      $(".vader-hp").text(enemyHp);
      checkWin();
    }
    else if (fighter == "Yoda" && defName == "maul" && gameOn) {
      currentHp = currentHp - maul.counter;
      $(".yoda-hp").text(currentHp);
      currentAttack = currentAttack + Mace.attack;
      enemyHp = enemyHp - currentAttack;
      $(".maul-hp").text(enemyHp);
      checkWin();
    }

    if (fighter == "maul" && defName == "Mace" && gameOn) {
      currentHp = currentHp - Mace.counter;
      $(".maul-hp").text(currentHp);
      currentAttack = currentAttack + Mace.attack;
      enemyHp = enemyHp - currentAttack;
      $(".mace-hp").text(enemyHp);
      checkWin();
    }
    else if (fighter == "maul" && defName == "Yoda" && gameOn) {
      currentHp = currentHp - Yoda.counter;
      $(".maul-hp").text(currentHp);
      currentAttack = currentAttack + Mace.attack;
      enemyHp = enemyHp - currentAttack;
      $(".yoda-hp").text(enemyHp);
      checkWin();
    }
    else if (fighter == "maul" && defName == "Vader" && gameOn) {

      currentHp = currentHp - Vader.counter;
      $(".maul-hp").text(currentHp);
      currentAttack = currentAttack + Mace.attack;
      enemyHp = enemyHp - currentAttack;
      $(".vader-hp").text(enemyHp);
      checkWin();
    }
  }
});


function checkWin() {

  if ($("#defender").is(":empty") && $("#enemies").html().lenth > 0) {
    $("#fight-text").text("Pick another enemy to fight");

  }
  else if ((currentHp <= 0)) {
    $("#fight-text").text("You Lose, restart the game and try again!");
    gameOn = false;
    $("#reset").show();
  }
  else if (enemyHp < 0 && enemyKill < 2 && currentHp > 0) {

    $(".target").remove();
    defenderEmpty = true;
    $("#fight-text").text("You defeated " + defName + " you can choose to fight another enemy.")
    enemyKill++;

  }
  else if (currentHp > 0 && enemyHp < 0 && $("#enemies").is(":empty")) {
    $(".target").remove();
    $("#fight-text").text("You Won, good job restart game to try again");
    gameOn = false;
    $("#reset").show();
  }
};

$("#reset").on("click", function () {
  location.reload();
});

startGame();