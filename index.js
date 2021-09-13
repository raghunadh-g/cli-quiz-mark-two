var readlineSync=require("readline-sync");
const chalk = require('chalk');
const error = chalk.bold.red;
const correct = chalk.bold.green;
const ask = chalk.yellow;
const bgGreen = chalk.bgGreen;
const bgYellow = chalk.bgYellow;

var score=0;
function play(question,answer,options,correctOption){
  var response=readlineSync.question(ask(question));
  var help=false;
  var chance=false;
  if(response===""){
    chance=true;
    help=readlineSync.keyInYN(chalk.blue("Need help? "));
  }
  if(help){
    index = readlineSync.keyInSelect(options, chalk.blue('Which option? '));
    if(index+1===0){
      score--;
      console.log(bgGreen("The correct answer is: "+answer));
    }
    else if((index+1)===correctOption){
      score++;
      console.log(correct("correct !!"))
    }else{
      score--;
      console.log(error("incorrect.."))
      console.log(bgGreen("The correct answer is: "+answer));
    }
  }else{

    if(chance)
      var response=readlineSync.question(chalk.bgRed("Please enter the answer: "));
  if(response.toLowerCase()===answer.toLowerCase()){
    score++;
    console.log(correct("correct !!"))
  }else{
      score--;
      if(response!=="")
        console.log(error("incorrect.."))
      console.log(bgGreen("The correct answer is: "+answer));
    }
  }
}


function askQuestions(questions){
  for(var i=0;i<questions.length;i++){
  play(`${i+1}. `+questions[i].question,questions[i].answer,questions[i] .options,questions[i].correctOption);
  }
}

var levevl_1_questions=[
  {
    question:"What does Sheldon's mom call him? ",
    answer:"shelly",
    options:['sheldon','pumpkin','shelly','sweetie'],
    correctOption:3
  },
  {
    question:"What breed of dog does Raj have? ",
    answer:"yorkshire terrier",
    options:['golden retriever','yorkshire terrier','dabur man','bulldog'],
    correctOption:2
  },
  {
    question:"Who is the only member of the cast to hold a PhD in real life? ",
    answer:"Mayim Bialik",
    options:['Jim Parsons','Johnny Galecki','Kaley Cuoco','Mayim Bialik'],
    correctOption:4
  },
  {
    question:"What astronaut nickname was Howard given by his space friends? ",
    answer:"Froot loops",
    options:['Howie','Rocket Man','Froot loops','Big guy'],
    correctOption:3
  },
  {
    question:"Where did Amy get her undergraduate degree? ",
    answer:"Harvard",
    options:["Harvard","MIT","Stanford","IIT"],
    correctOption:1
  }
];

var level_2_questions=[
  {
    question:"What apartment do Penny and Leonard live in? ",
    answer:"4A",
    options:['4A','4B','3A','3B'],
    correctOption:1
  },
  {
    question:"Who was once engaged to a Saudi prince? ",
    answer:"Amy",
    options:['Amy','Penny','Bernedette','Raj'],
    correctOption:1
  },
  {
    question:"Who officiates Sheldon and Amy's wedding? ",
    answer:"Mark Hamil",
    options:['Will Wheaton','Mark Hamil','Penny','Leonard'],
    correctOption:2
  },
  {
    question:"How many times does Sheldon have to knock on a door and say a person's name before he'll go in?",
    answer:"3",
    options:['1','2','3','4'],
    correctOption:3
  },
  {
    question:"Where do Sheldon, Amy, Raj, Howard, and Leonard work? ",
    answer:"Caltech",
    options:["USC","ULCA","Caltech","Cal Poly"],
    correctOption:3
  }
];

var highScores=[
  {
    name:"raghu",
    score:7
  },{
    name:"Hari priya",
    score:6
  }
]


console.log(bgYellow("Welcome to the quiz about this famous show: THE BIG BANG THEORY !!!"));
let name=readlineSync.question("Please enter your name:");
console.log(correct("Warm welcome "+name+"!"));
console.log(chalk.cyan("1. The game consists of 5 questions\n2. Notice that the case of the answer you type doesn't matter(lower case or upper case or mixed)\n3. For every correct answer you will get 1 point and -1 for the wrong answer\n4. Incase you need help, simply press enter without typing anything\n5. There are two levels in this game: Level-1 and Level-2\n6. Minimum score to pass each level is 3"));


var interest=readlineSync.keyInYN(chalk.magenta("Ready? "));




if(interest){
  console.log("===========================")
  console.log(chalk.magenta("*** Level-1 ***"));
  console.log("===========================")

  askQuestions(levevl_1_questions);

  console.log(chalk.blue("Your score in level-1: "+score+"/"+"5"));
  

  if(score>=3){
      console.log(chalk.blue("*** Congratulations, you made it to level 2 ***"));
    
      var interest=readlineSync.keyInYN(chalk.magenta("Ready? "));
      if(interest){
        console.log("===========================")
        console.log(chalk.magenta("*** Level-2 ***"));
        console.log("===========================")
        var score1=score;
        score=0;
        askQuestions(level_2_questions);
        if(score>=3){
          console.log(bgGreen("*** Congratulations you've successfully completed the game! ***"))
        }else{
          console.log(ask("You can perform well next time :-)"))
        }

        console.log(chalk.blue("Your score in level-2: "+score+"/"+"5"));
        var combinedScore=score+score1;
        console.log(correct("Your combined score:"+combinedScore))
        if(combinedScore===10){
          console.log("*************************")
          console.log(chalk.magenta("Flawless..."))  
          console.log("*************************")
        }else {
          var max=true;
          for(var i=0;i<highScores.length;i++){
            if(combinedScore<highScores.score){
              max=false;
            }
          }
          if(max){
            console.log("===========================")
            console.log(chalk.magenta("High scorer so far..."))
            console.log("===========================")
          }
        }
        console.log(ask("Thanks for playing it!! Hope you enjoyed :-)"))
      }else{
        console.log(chalk.bgRed("Exiting.."))
      }
  }

}else{
  console.log(chalk.bgRed("Exiting.."))
}


////////////////////////0909

