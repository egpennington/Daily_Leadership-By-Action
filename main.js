var quotes = ["Truth is the offspring of silence and meditation. - Issac Newton", "As long as they know why they do it, the rest will follow. - Yoon Sean-hak",
"If you\'re 40 years old and the last book you read was from high school, you got a lot of catching up to do. - Villanueva", "You can teach competence.  You can\'t teach character. - Villanueva", "If you want to be a mathametician, you don\'t spend most of your time hanging out with writers. - Villanueva", "How to stay awake when you\'re reading...easy, stop reading and start doing something with the reading. - Mark Meyers",
"It\s not the destination.  It\s the journey. - Ralph Waldo Emerson", "I will prepare and some day my chance will come. - Abraham Lincoln", "Punch fear in the face. - Jon Acuff", "No one aims for average. - Jon Acuff",
"Action always beats intention.  Anyone can dream.  It\'s doing that is such a hasle. - Jon Acuff", "What\'s ordinary to one person can be extraordinary to another. - Seo Dal-mi", "Think about it: have YOU done anything impressive today? Your personal genius is right at your fingertips. Feel free to use it. - John MacCormich",
"If you wait for perfect conditions to seize an opportunity, you\'ll be wating till the day you die. - Mark Batterson", "Reading books is like lifting weights for the body. - John Villanueva", "If you want to succeed, you have to take control of your life. You have to influence yourself. - John Villanueva", "We need to focus our energies to be good at anything. - John Villanueva", "You must master a new way to think before you can master a new way to be.", "There is no chance, no destiny, no fate, that can circumvent or hinder or control the firm resolve of a determined soul. - Ella Wheeler Wilcox", "There\'s still some dreams floating around out there.  It\'s not too late, you just have to reach out and grab them. - Nick Campbell", "You have the courage to dream. Inspite of your limitations, you never give up on that dream. - Mr. Chetty", "Lift your head up. Take a breath. there\'s a lot of great possibilities out there. - Bill McMahon", "If you fight for your limitatons, you get to keep them. - Bill McMahon", 
"Take 100% responsibility, put in the work, read twice as much as you watch TV. Your life won't change until you do.", "Whatever it is you\'re scared of doing, DO IT. - Neil Gaiman.", "Continuous effort is the key to unlocking your potential.", "No man ever steps in the same river twice, for it is not the same river and he is not the same man. - Heraclitus", "If you think you\'re leading but no one is following, then you are only taking a walk. - John C. Maxwell", "Every person has the ability to improve in leadership.  Becoming a leader isn't a mystical subject. It can be appoarched very practically. - John C. Maxwell", "Leadership isn\'t about the title or having an office. It\'s about influence and the fact that you can make an impact on others. - John C. Maxwell", "If you want to grow as a leader, be prepared to be uncomfortable. - John C. Maxwell", "There is no progress without risk. - John C. Maxwell",
            "It\'s not the load that breaks you down.  It\'s the way you carry it. We are capable of carrying heavy things. - Jason Van Camp", "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill", "The desert would cover the entire world if it was sunny every day. We need the rain and the snow for plants and delicious fruits to grow. - Seo Dal-mi", "If the start is easy, then it\'ll be taken away easily as well. - Seo In-jin", "Luck favors the prepared.", "Stop trying to change everyone else, focus on finding your purpose and then elevate! - Jason Van Camp", "He that is good at making excuses is seldom good at anything else. - Benjamin Franklin", "You build on failure. You use it as a stepping stone. - Johnny Cash", "If you stay in your comfort zone, that is where you will fail. Success is not a comfortable procedure. - Steve Harvey", "You can\'t cheat the grind. - Nashaly Maldonado", "The world breaks everyone, many are strong at the broken places. - Ernest Hemingway.", 
              "It\'s not the load that breaks you down. It\'s the way you carry it. We are capable of carrying heavy things. - Jason Van Camp", "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy. - Martin Luther King, Jr.", "Don\'t let someone else\'s opinion of you become your reality. - Les Brown", "In life it\'s more important to ask questions than to provide answers. Questions are a true measure of a first rate mind. - John Villanueva", "It\'s easy to blame others, blame circumstances...but it is the person I see in the mirror who truly creates the most obstacles. - Thomas George", "For I have the desire to do what is right, but not the ability to carry it out. For I do not do the good I want, but the evil I do not want is what I keep on doing. - Romans 7:18-19", "If you could kick the person in the pants responsible for most of your trouble, you wouldn't sit for a month. - Theodore Roosevelt.", "Only one thing in this world is advisable to have in excess, and that is gratitutde. - Jean de La Bruyere.",
             "Great leaders learn from failures and continue to move forward. Failure is inevitable. Your response to failure is your choice. - Petrick R. Leddin", "If you are going to live out your purpose as a leader and make a unique contribution, you are going to have to make the conscious decision to go all in. Halfway isn\'t good enough. - Patrick R. Leddin.", "Winning begets winning. Momentum fuels everything. - Patrick R. Leddin.", "Leaders who frequently employ the word IMAGINE when working with others foster a spirit of creativity, determination, and potential. - Patrick R. Leddin", "If you set out to acommplish priorities that you have never accomplilshed before, you need to remain open to new ways of doing things. - Patrick R. Leddin", "Remember, if you\'re not uncomfortable, you\'re probably not growing. - Thomas Parker", "It\'s simple. All you need to do is keep moving forward. Do the best that you can do. Be better than you were yesterday. Prove to yourself that you don\'t quit when you\'re having a bad day or life throws a wrench in your plans. Figure it out. Drive on. Be an inspiration for someone else to keep going. - Jason Van Camp",
             "Your listening to that voice in your head whispering in your ear to give up. Don\'t. Stop lisening to yourself and start talking to yourself. - Jason Van Camp", "Success isn\'t owned it\'s rented and rent is due every day.", "Thinking something is hard? Remember man could not fly until he tried...- Ken Vennera"];

function quoteGen() {
  alert(leaderName + ": " + (quotes[Math.floor(Math.random()*quotes.length)]));
}

var leaderName = prompt("Hello. What is your name?");

function greeting() {
  alert("Welcome " + leaderName + " Your leadership journey starts now! Click on the Daily Leadership by Action button for your action today. Complete the action and come back tomorrow for another one.");
}


var dailyAct = ["Talk to one team player. Find out 4 things they do outside of work.", "Find out the names of your team mate\'s spouses and children.", "Memorize this quote: Show up. Even on your bad days. Those are sometimes the most important.", "Memorize these words from Maya Angelou: You may shoot me with your words, You may cut me with your eyes, You may kill me with your hatefulness, But still, like air, I\’\ll rise.", "Think of one person you work with that you do not like or get along with. Write down 3 things you like about this person. Focus on those 3 things when you see them today.", "You are who you hang out with. Call a great leader today and ask them how they learned to lead.", "Think of a great leader that you worked for in the past. Write down what made them great.", 
               "As a leader, you may be tempted to build relationships only with the people you like or with whom you are highly compatible, and to ignore the others. However, by doing that, you have the potential to lose a lot of people.  Today, remember that while the things we have in common may make relationships enjoyable, the differences are what really make them interesting.", "Connect with someone on your team. What three nonbusiness things do you know about this person?", "If you want to accomplish something that you have never accomplished before, you will face setbacks and failure. Think about a recent failure that you\'ve experienced. Identify one thing you can learn from that failure to help you to become a better leader.", 
                "Identify one person who can provide you guidance, direction, or counsel. Send that person a note and set up a time to talk.", "Identify one small but painful action that you can take today to improve in one area.", "Make a commitment to pause three times today and reflect on the moment. Jot down what you observed, heard, felt, and so on. Be in the moment.", "Meet with two people and ask each to share a time when they were on a team with a great leader. As they share their stories, listen for examples of energy, commitment, and results. Doing this will allow you to see firsthand the power of leadership.", 
                "As you go through the workday, pause occasionally and relect on your energy level. Make note of times when you feel most energized and ask yourself what it is about what you are doing in the moment that is causing your energy to spike.", "If you want people to own the results, they need to won the plan. Bringing team members into the discussion early creates a sense of ownership from the beginning. Today, reflect on a time when your leader acted independently of you and your team by creating both the priorites and the plan to accomplish them. Consider how it felt to be left out of the process.", "Find someone who you believe has a genuine concern and a craving to be heard. Ask them to meet today. Listen to the person with the intent of understanding. Don\'t try to fix the problem; just let the other person be heard. Often, they will be able to fix it without you doing anything but lending a concerned ear.",
               "Think of a leader from the past whom you truly admire. Imagine you were asked to explain that leader\'s legacy. Write down three to five items that you would share about how that leader behaved, achieved results, touched lives, and made a difference.", "Grow your team and organization. Invite everyone to the table. Leaders tend to have a favorite go-to person to get things done. Be aware that someone else may be better suited or needs to gain experience. Be intentional including others; today, notice if someone is quite and not participating in a meeting. After, ask that person for their opinions.  Ask how you can help them participate. Do they need to think before they respond - then maybe they can send their thoughts in an email, or have a one-on-one meeting with them. Intentionally Include everyone.", "Take time during your day to Get outside. Science suggests that spending 20 minutes in the open air gives your brain an energy boost comparable to one cup of coffee."];

function actionGen() {
  alert(leaderName + ", " + (dailyAct[Math.floor(Math.random()*dailyAct.length)]));
}
