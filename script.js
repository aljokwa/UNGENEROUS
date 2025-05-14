// script.js
document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            question: "Your friend just got a promotion they've been working toward for months. You:",
            answers: {
                A: "Throw them a surprise celebration",
                B: "Send a quick \"congrats\" text",
                C: "Feel a twinge of jealousy but still congratulate them",
                D: "Change the subject when they bring it up"
            }
        },
        {
            question: "A friend calls you at 2 AM needing a ride because they're stranded:",
            answers: {
                A: "You're out the door before they finish explaining",
                B: "You help them if you don't have to work early",
                C: "You suggest they call someone who lives closer",
                D: "You ignore the call and text them in the morning"
            }
        },
        {
            question: "You hear gossip about your friend that could damage their reputation:",
            answers: {
                A: "Shut it down immediately and warn your friend",
                B: "Don't participate but don't stop it either",
                C: "Listen curiously but don't spread it further",
                D: "Add your own stories to the conversation"
            }
        },
        {
            question: "When hanging out with your friend group, you:",
            answers: {
                A: "Make sure everyone feels included",
                B: "Stick with whoever is most entertaining that day",
                C: "Dominate the conversation with your stories",
                D: "Constantly check your phone for better options"
            }
        },
        {
            question: "Your friend confides in you about a personal struggle:",
            answers: {
                A: "Listen attentively and ask how you can support them",
                B: "Listen and share similar experiences to relate",
                C: "Give unsolicited advice on how to fix their problem",
                D: "Accidentally share their secret with others later"
            }
        },
        {
            question: "When your friend achieves something you've been working toward:",
            answers: {
                A: "Feel genuinely happy for them and celebrate together",
                B: "Congratulate them while feeling a little envious",
                C: "Point out the flaws in their achievement",
                D: "Bring up your own accomplishments to compete"
            }
        },
        {
            question: "A friend asks to borrow something valuable:",
            answers: {
                A: "Lend it without hesitation if you trust them",
                B: "Lend it but remind them a few times to return it",
                C: "Make excuses why you can't",
                D: "Agree but hold it over their head as leverage later"
            }
        },
        {
            question: "When making plans with friends:",
            answers: {
                A: "You commit and show up on time",
                B: "You confirm but might be a little late",
                C: "You say \"maybe\" and decide last minute",
                D: "You agree but bail if something better comes up"
            }
        },
        {
            question: "If a friend calls you out on something you did wrong:",
            answers: {
                A: "Listen, apologize, and work to make it right",
                B: "Get defensive at first but eventually consider their point",
                C: "Turn it around to what they've done wrong",
                D: "Deny everything and ghost them for a while"
            }
        },
        {
            question: "Your friend is going through a tough breakup:",
            answers: {
                A: "Check in daily and provide distraction when needed",
                B: "Send supportive messages occasionally",
                C: "Tell them they should just get over it",
                D: "Use this opportunity to pursue their ex"
            }
        },
        {
            question: "When it comes to keeping secrets:",
            answers: {
                A: "You're a vault - what's told to you stays with you",
                B: "You keep important secrets but might slip on small stuff",
                C: "You tell \"just one trusted person\" most secrets",
                D: "You use secrets as social currency when convenient"
            }
        },
        {
            question: "A friend needs help moving:",
            answers: {
                A: "You block off the whole day and bring snacks",
                B: "You help for a few hours if your schedule allows",
                C: "You make an excuse about a suddenly bad back",
                D: "You completely ignore their request"
            }
        },
        {
            question: "When your friend has an unpopular opinion:",
            answers: {
                A: "You respect their view even when disagreeing",
                B: "You debate them but stay respectful",
                C: "You mock their perspective behind their back",
                D: "You publicly embarrass them for their views"
            }
        },
        {
            question: "If a friend is making a mistake you can see coming:",
            answers: {
                A: "Gently voice your concern while supporting their autonomy",
                B: "Drop subtle hints about potential issues",
                C: "Say nothing and wait to say \"I told you so\"",
                D: "Encourage the bad decision to watch the drama unfold"
            }
        },
        {
            question: "When it comes to financial matters with friends:",
            answers: {
                A: "You keep track but are generous without expecting payback",
                B: "You split things evenly and settle debts promptly",
                C: "You conveniently \"forget\" when you owe money",
                D: "You expect friends to pay your way regularly"
            }
        },
        {
            question: "When your friend is receiving attention at a social gathering:",
            answers: {
                A: "You hype them up even more",
                B: "You enjoy seeing them shine",
                C: "You try to shift attention back to yourself",
                D: "You bring up embarrassing stories about them"
            }
        },
        {
            question: "If you and your friend are interested in the same romantic prospect:",
            answers: {
                A: "You have an honest conversation and respect the outcome",
                B: "You step aside if your friend seems more invested",
                C: "You pursue aggressively without acknowledging the conflict",
                D: "You sabotage your friend's chances behind their back"
            }
        },
        {
            question: "Your long-distance friend is visiting your city:",
            answers: {
                A: "You clear your schedule completely to spend time with them",
                B: "You make time to see them around your commitments",
                C: "You meet briefly if it's convenient for you",
                D: "You make plans but cancel last minute"
            }
        },
        {
            question: "When remembering important dates like birthdays:",
            answers: {
                A: "You plan something special weeks in advance",
                B: "You remember the day and send a thoughtful message",
                C: "You rely on social media reminders",
                D: "You consistently forget or ignore them"
            }
        },
        {
            question: "If your friend gets criticized by others:",
            answers: {
                A: "You defend them regardless of whether they're present",
                B: "You defend them when they're not around to do it themselves",
                C: "You stay silent to avoid conflict",
                D: "You pile on with additional criticism"
            }
        }
    ];

    const results = {
        A: { title: "THE RIDE-OR-DIE HOMIE", description: "You're the friend everyone wishes they had! Your loyalty is unmatched, and you genuinely celebrate others' victories as your own. You show up when it matters and often when it doesn't. Your friends know they can count on you through thick and thin, no questions asked. You're not just a good friend—you're the definition of friendship itself." },
        B: { title: "THE SOLID BACKUP", description: "You're a dependable friend who maintains healthy boundaries. While you might not drop everything at a moment's notice, you're consistently there when it truly counts. Your friendship comes with a healthy dose of honesty and practicality. People appreciate knowing exactly where they stand with you, and you rarely disappoint." },
        C: { title: "THE FAIR-WEATHER FRIEND", description: "Friendship isn't your strongest skill. You tend to be there when it's convenient or beneficial for you, but you struggle with genuine empathy and sacrifice. Your friends might feel like they're walking on eggshells or that the relationship is one-sided. Time to take a hard look at your priorities—are you treating people as resources rather than connections?" },
        D: { title: "THE TOXIC SNAKE", description: "Yikes! You're the definition of a bad friend. You manipulate, backstab, and treat friendships as transactions where you should always come out ahead. You've probably left a trail of damaged relationships in your wake. Either you haven't learned the basics of human connection, or you're a total narcissist who sees others as tools for your advancement. Major character development needed!" }
    };

    const startButton = document.getElementById('start-button');
    const questionContainer = document.getElementById('question-container');
    const questionText = document.getElementById('question-text');
    const answerButtonsContainer = document.getElementById('answer-buttons');
    const resultArea = document.getElementById('result-area');
    const resultTitle = document.getElementById('result-title');
    const resultDescription = document.getElementById('result-description');
    const restartButton = document.getElementById('restart-button');
    const friendZone = document.getElementById('friend-zone');
    const friendImage = document.getElementById('friend-image');
    const friendStatus = document.getElementById('friend-status');
    
    // Audio Elements
    const backgroundMusic = document.getElementById('background-music');
    const selectSound = document.getElementById('select-sound');
    const narcAlertSound = document.getElementById('narc-alert-sound');

    const friendVisuals = {
        NEUTRAL: { src: "placeholder_friend.png", status: "Hmm, let's see about this one..." },
        A: { src: "friend_angel.png", status: "Looks like a keeper!" },
        B: { src: "friend_reliable.png", status: "A pretty solid pal!" },
        C: { src: "friend_shady.png", status: "Kinda sus, ngl..." },
        D: { src: "friend_snake.png", status: "Danger! Danger! High Voltage Narcissism!" }
    };

    let currentQuestionIndex = 0;
    let scores = { A: 0, B: 0, C: 0, D: 0 };

    startButton.addEventListener('click', startQuiz);
    restartButton.addEventListener('click', restartQuiz);

    function startQuiz() {
        startButton.classList.add('hidden');
        friendZone.classList.remove('hidden');
        updateFriendVisual("NEUTRAL", true);
        questionContainer.classList.remove('hidden');
        resultArea.classList.add('hidden');
        currentQuestionIndex = 0;
        scores = { A: 0, B: 0, C: 0, D: 0 };
        showQuestion();

        // Start background music
        if (backgroundMusic) {
            backgroundMusic.currentTime = 0;
            backgroundMusic.play().catch(error => console.log("Background music playback failed: ", error));
        }
    }

    function showQuestion() {
        resetAnswerButtons();
        const currentQuestion = quizData[currentQuestionIndex];
        questionText.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
        Object.entries(currentQuestion.answers).forEach(([key, value]) => {
            const button = document.createElement('button');
            button.innerHTML = `<span>${key}:</span> ${value}`;
            button.dataset.answerType = key;
            button.addEventListener('click', selectAnswer);
            answerButtonsContainer.appendChild(button);
        });
        updateFriendStatusBasedOnAnswers();
    }

    function resetAnswerButtons() {
        while (answerButtonsContainer.firstChild) {
            answerButtonsContainer.removeChild(answerButtonsContainer.firstChild);
        }
    }

    function selectAnswer(e) {
        const selectedButton = e.target.closest('button');
        const answerType = selectedButton.dataset.answerType;
        scores[answerType]++;
        
        // Play select sound
        if (selectSound) {
            selectSound.currentTime = 0;
            selectSound.play().catch(error => console.log("Select sound playback failed: ", error));
        }

        // Play special sound for 'D' answers
        if (answerType === 'D' && narcAlertSound) {
            narcAlertSound.currentTime = 0;
            narcAlertSound.play().catch(error => console.log("Narc alert sound playback failed: ", error));
        }

        flashFriendReaction(answerType);

        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            showQuestion();
        } else {
            showResult();
        }
    }
    
    function flashFriendReaction(answerType) {
        let reactionImageSrc = friendImage.src; 
        let reactionStatus = ""; 
    
        if (answerType === 'D') {
            reactionImageSrc = "friend_snake_glimpse.png";
            reactionStatus = "Uh oh... that wasn't very nice!";
            friendImage.style.transform = 'scale(1.1) rotate(-5deg)';
        } else if (answerType === 'A') {
            reactionImageSrc = "friend_happy_glimpse.png"; 
            reactionStatus = "Aww, how sweet!";
            friendImage.style.transform = 'scale(1.1) rotate(5deg)';
        } else {
             friendImage.style.transform = 'scale(1.05)';
        }
    
        const originalImageSrc = friendImage.src;
        const originalStatus = friendStatus.textContent;
        // Storing current transform to revert accurately, especially if multiple quick answers happen
        const baseTransform = friendImage.style.transform; 

        if (reactionStatus) friendStatus.textContent = reactionStatus;
        // Only change image for defined reaction images to avoid broken links
        if (reactionImageSrc !== originalImageSrc && (reactionImageSrc === "friend_snake_glimpse.png" || reactionImageSrc === "friend_happy_glimpse.png")) {
            friendImage.src = reactionImageSrc;
        }

        setTimeout(() => {
            updateFriendStatusBasedOnAnswers(); 
            // Revert transform smoothly, or to a neutral state if needed
            friendImage.style.transform = 'scale(1)'; // Revert to base scale after reaction
            // Don't revert friendImage.src here; let updateFriendStatusBasedOnAnswers or showResult handle the persistent image
        }, 700);
    }
    
    function updateFriendStatusBasedOnAnswers() {
        const currentMaxScore = Math.max(scores.A, scores.B, scores.C, scores.D);
        let dominantTrait = "NEUTRAL";

        if (currentMaxScore > 0) {
            // Simplified: just picks the first max. Could be more nuanced for ties.
            if (scores.D === currentMaxScore) dominantTrait = 'D';
            else if (scores.C === currentMaxScore) dominantTrait = 'C';
            else if (scores.A === currentMaxScore) dominantTrait = 'A';
            else if (scores.B === currentMaxScore) dominantTrait = 'B';
        }
        
        const visual = friendVisuals[dominantTrait] || friendVisuals.NEUTRAL;
        // Only update status text during the quiz, image updates at the end or with flashReaction
        friendStatus.textContent = visual.status; 
    }

    function showResult() {
        questionContainer.classList.add('hidden');
        resultArea.classList.remove('hidden');

        // Optionally stop or change background music
        // if (backgroundMusic) backgroundMusic.pause();

        let maxScore = -1; // Initialize with -1 to ensure any score is greater
        let resultKey = 'B'; // Default to Solid Backup if all scores are 0, or in an unexpected tie

        // Determine the highest score
        for (const key in scores) {
            if (scores[key] > maxScore) {
                maxScore = scores[key];
            }
        }

        // Find all keys with the max score (to handle ties)
        const topKeys = [];
        for (const key in scores) {
            if (scores[key] === maxScore) {
                topKeys.push(key);
            }
        }

        // Tie-breaking logic: D > C > A > B (as per implied severity/interest)
        if (topKeys.includes('D')) resultKey = 'D';
        else if (topKeys.includes('C')) resultKey = 'C';
        else if (topKeys.includes('A')) resultKey = 'A';
        else if (topKeys.includes('B')) resultKey = 'B';
        // If topKeys is empty (e.g. all scores 0), it defaults to B
        
        const finalResult = results[resultKey];
        resultTitle.textContent = finalResult.title;
        resultDescription.textContent = finalResult.description;
        
        updateFriendVisual(resultKey, false);
    }
    
    function updateFriendVisual(resultKey, isNeutralStart = false) {
        const visual = friendVisuals[resultKey] || friendVisuals.NEUTRAL;
        
        if (isNeutralStart) {
            friendImage.src = friendVisuals.NEUTRAL.src;
            friendStatus.textContent = friendVisuals.NEUTRAL.status;
            friendImage.style.borderColor = '#556B2F'; // Default border from CSS
            friendImage.className = ''; // Reset classes
            return;
        }
        
        friendImage.src = visual.src; // These are placeholder images
        friendStatus.textContent = visual.status;
        
        friendImage.className = '';
        if (resultKey === 'D') {
            friendImage.classList.add('wiggle-animation'); 
            friendImage.style.borderColor = 'red';
        } else if (resultKey === 'A') {
            friendImage.style.borderColor = 'gold';
        } else {
            friendImage.style.borderColor = '#556B2F';
        }
    }

    function restartQuiz() {
        startQuiz(); // This already resets scores, currentQuestionIndex and restarts music
    }
    
    questionContainer.classList.add('hidden');
    resultArea.classList.add('hidden');
    friendZone.classList.remove('hidden');
    updateFriendVisual("NEUTRAL", true);

}); 