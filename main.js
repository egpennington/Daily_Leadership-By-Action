var quotes = ["Truth is the offstrping of silence and meditation. - Issac Newton", "As long as they know why they do it, the rest will follow. - Yoon Sean-hak",
"If the last book you read was from high school, that\'s the wrong person to be around. - Villanueva", "You can teach competence.  You can\'t teach character. - Villanueva", "If you want to be a mathametician, you don\'t hangout with writers. - Villanueva", "How to stay awake when you\'re reading...easy, stop reading and start doing something with the reading. - Mark Meyers",
"It\s not the destination.  It\s the journey. - Ralph Waldo Emerson", "I will prepare and some day my chance will come. - Abraham Lincoln", "Punch fear in the face. - Jon Acuff", "No one aims for average. - Jon Acuff",
"Action always beats intention.  Anyone can dream.  It\'s doing that is such a hasle. - Jon Acuff", "What\'s ordinary to one person can be extraordinary to another. - Seo Dal-mi", "Think about it: have YOU done anything impressive today? Your personal genius is right at your fingertips. Feel free to use it. - John MacCormich",
"If you wait for perfect conditions to seize an opportunity, you\'ll be wating till the day you die. - Mark Batterson", "Reading books is like lifting weights for the body. - John Villanueva", "If you want to succeed, you have to take control of your life. You have to influence yourself. - John Villanueva", "We need to focus our energies to be good at anything. - John Villanueva", "You must master a new way to think before you can master a new way to be.", "There is no chance, no destiny, no fate, that can circumvent or hinder or control the firm resolve of a determined soul. Ella Wheeler Wilcox", "There\'s sill some dreams floating around out there.  It\'s not too late, you just have to reach out and grab them. - Nick Campbell", "You have the courage to dream. Inspite of your limitations, you never gave up on that dream. - Mr. Chetty", "Lift your head up. Take a breath. there\'s a lot of great possibilities out there. - Bill McMahon", "If you fight for your limitatons, you get to keep them. - Bill McMahon", 
"Take 100% responsibility, put in the work, read twice as much as you watch TV. Your life won't change until you do.", "Whatever it is you\'re scared of doing, DO IT. - Neil Gaiman.", "Continuous effort is the key to unlocking your potential.", "No man ever steps in the same river twice, for it is not the same river and he is not the same man. - Heraclitus", "If you think you\'re leading but no one is following, then you are only taking a walk. - John c. Maxwell", "Every person has the ability to improve in leadership.  Becoming a leader isn't a mystical subject. It can be appoarched very practically. - John C. Maxwell", "Leadership isn\'t about the title or having an office. It\'s about influence and the fact that you can make an impact on others. - John C. Maxwell", "If you want to grow as a leader, be prepared to be uncomfortable. - John C. Maxwell", "There is no progress without risk. - John C. Maxwell",
            "It\'s not the load that breaks you down.  It\'s the way you carry it. We are capable of carrying heavy things. - Jason Van Camp", "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill"];

function quoteGen() {
  alert(quotes[Math.floor(Math.random()*quotes.length)]);
}

function greeting() {
  var leaderName = prompt("Welcome. What is your name?");
  alert("Welcome" + leaderName + "Your leadership journey starts now!");
}


var dailyAct = ["Talk to one team player. Find out 4 things they do outside of work.", "Find out the names of your team mates spouses and children.", "Memorize this quote today: Show up. Even on your bad days. Those are sometimes the most important.", "Today, memorize these words from Maya Angelou: You may shoot me with your words, You may cut me with your eyes, You may kill me with your hatefulness, But still, like air, I\’\ll rise.", "Think of one person you work with that you do not like or get along with. Write down 3 things you like about this person. Focus on those 3 things when you see them today.", "You are who you hang out with. Call a great leader today and ask them how they learned to lead.", "Think of a great leader that you worked for in the past. Write down what made them great.", 
               "As a leader, you may be tempted to build relationships only with the people you like or with whom you are highly compatible, and to ignore the others. However, by doing that, you have the potential to lose a lot of people.  Today, remember that while the things we have in common may make relationships enjoyable, the differences are what really make them interesting.", "Connect with someone today. What three nonbusiness things do you know about this person?"];

function actionGen() {
  alert(dailyAct[Math.floor(Math.random()*dailyAct.length)]);
}
