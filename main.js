var quotes = ["Truth is the offstrping of silence and meditation. - Issac Newton", "As long as they know why they do it, the rest will follow. - Yoon Sean-hak",
"If the last book you read was from high school, that\'s the wrong person to be around. - Villanueva", "You can teach competence.  You can\'t teach character. - Villanueva", "If you want to be a mathametician, you don\'t hangout with writers. - Villanueva", "How to stay awake when you\'re reading...easy, stop reading and start doing something with the reading. - Mark Meyers",
"It\s not the destination.  It\s the journey. - Ralph Waldo Emerson", "I will prepare and some day my chance will come. - Abraham Lincoln", "Punch fear in the face. - Jon Acuff", "No one aims for average. - Jon Acuff",
"Action always beats intention.  Anyone can dream.  It\'s doing that is such a hasle. - Jon Acuff", "What\'s ordinary to one person can be extraordinary to another. - Seo Dal-mi", "Think about it: have YOU done anything impressive today? - John MacCormick",
"Your personal genius is right at your fingertips.  Feel free to use it. - John MacCormich", "If you wait for perfect conditions to seize an opportunity, you\'ll be wating till the day you die. - Mark Batterson"];

function quoteGen() {
  alert(quotes[Math.floor(Math.random()*15)]);
}

function greeting() {
  var leaderName = prompt("Welcome. What is your name?");
  alert(leaderName + " you are a leader!");
}


var dailyAct = ["Talk to one team player. Find out 4 things they do outside of work.", "Find out the names of your team mates spouses and children.", "Memorize this quote today: Show up. Even on your bad days. Those are sometimes the most important.", "Today, memorize these words from Maya Angelou: You may shoot me with your words, You may cut me with your eyes, You may kill me with your hatefulness, But still, like air, I\’\ll rise.", "Think of one person you work with that you do not like or get along with. Write down 3 things you like about this person. Focus on those 3 things when you see them today.", "You are who you hang out with. Call a great leader today and ask them how they learned to lead.", "Think of a great leader that you worked for in the past. Write down what made them great."];

function actionGen() {
  alert(dailyAct[Math.floor(Math.random()*8)]);
}