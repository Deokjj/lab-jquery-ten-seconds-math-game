// Use this file to write the logic of your game, the needed attrs and functions
var operator = ["addition", "subtraction", "multiplication", "division"];

var TenSecondsMathGame = function(operator, numberLimit) {
  this.operator = operator;
  this.numberLimit = numberLimit;

  //current is [Array(3),result] -> Array(3): a, b, operator
  this.current = this.newQuestion();

  this.current.toString = function(){
    return this[0][0] +" " +this[0][2] + " " +this[0][1] +" = " + this[1];
  };

};

TenSecondsMathGame.prototype.newQuestion = function(){
  var randOper = this.operator[Math.floor(Math.random() * this.operator.length)];
  var a;
  var b;

  //add & sub & mult
  if(randOper === "addition" || randOper === "multiplication" || randOper == "subtraction"){
    //create first random number
    a=Math.floor(Math.random()*this.numberLimit)+1;
    //second number rule -> Not the same number
    do{
      b =Math.floor(Math.random()*this.numberLimit)+1;
    }while(a === b);
    //return accoring to randOper
    if(randOper === "addition"){
      return [[a,b,randOper],a+b];
    }
    if(randOper === "multiplication"){
      return[[a,b,randOper],a*b];
    }
    if(randOper === "subtraction"){
      if(a>b){
        return [[a,b,randOper],a-b];
      }
      else{
        return [[b,a,randOper],b-a];
      }
    }
  }
  //div
  if(randOper === "division"){
    do{
      a =Math.floor(Math.random()*this.numberLimit)+1;
      b =Math.floor(Math.random()*this.numberLimit)+1;
    }while( a*b > this.numberLimit );

    if(a>b){
      return [[a*b,b,randOper], a*b/b];
    }
    else{
      return[[a*b,a,randOper], a*b/a];
    }
  }
  return "wrong operator value";
};

TenSecondsMathGame.prototype.isCorrectAnswer = function( answer ){
  if(this.current[1] === answer){
    return true;
  }
  else{
    return false;
  }
};

game = new TenSecondsMathGame([operator[1],operator[2]],10);
console.log(game.current);
console.log(game.current.toString());

// Returns a random integer between [1..numberLimit]


// Returns an object with {question, answer}


// Checks a user answer
