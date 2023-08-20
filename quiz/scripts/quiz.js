function generateQuiz(questions, quizContainer, resultsContainer, solutionContainer, submitButton) {
    
    function parseQuestion(dict) {
        let parsed_vars = "vars" in dict ? parseVars(dict["vars"]) : {}; // turn variables with random values into numeric values
        let parsed_prob = parseText(dict["prob"], parsed_vars); // parse vars inside question

        let raw_ans = template(dict["answer"], parsed_vars); // substitute variables in the answer for their generated values
        raw_ans = parseStats(raw_ans); // parse distributions in question if they exist
        raw_ans = math.evaluate(raw_ans, parsed_vars); // generate the numeric answer by parsing the variable expression 
        let answer = [raw_ans, smartRound(raw_ans)];

        let soln_dict = Object.assign({}, parsed_vars, {ans: answer[1]});
        let parsed_soln = "solution" in dict ? parseText(dict["solution"], soln_dict) : "No solution attached!"; // parse vars inside answer
        return {
            question: parsed_prob,
            correctAnswers: answer,
            soln: parsed_soln
        }
    }

	function showQuestions(question, quizContainer) {
        // add an html text box
        var answer = '<label>'
                + '<input type="text" name="question" class="abox" placeholder="Your answer here" style="width: 90%">'
            + '</label>'
    
        // combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = '<div class="question">' + question.question + '</div>'
                                + '<div class="answers">' + answer + '</div>'
        solutionContainer.innerHTML = "<p>" + question.soln + "</p>"
    }

	function showResults(question, quizContainer, resultsContainer) {
        // gather answer containers from our quiz
        let answerContainer = quizContainer.querySelectorAll('.answers')[0]
    
        // find user's answer
        let userAnswer = (answerContainer.querySelector('input[name=question]') || {}).value;

        let msg;
        let resultsColor;

        // if answer is correct
        if (isCorrect(userAnswer, question.correctAnswers[0]) || isCorrect(userAnswer, question.correctAnswers[1])) {
            // color the answer green
            resultsColor = '#63F49B';
            msg = "Correct! " + randomChoice(happyEmojis);
        }
        // if answer is wrong or blank
        else {
            // color the answer red
            resultsColor = '#ff5d5d';
            msg = "Incorrect " + randomChoice(sadEmojis);
        }
    
        // show feedback
        resultsContainer.innerHTML = msg;
        resultsContainer.style.backgroundColor = resultsColor;
    }

    let question = randomChoice(questions);
    let qDict = parseQuestion(question);

	// show the questions
	showQuestions(qDict, quizContainer)

	// when user clicks submit, show results
	submitButton.onclick = function() {
		showResults(qDict, quizContainer, resultsContainer);
	}
}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var solutionContainer = document.getElementById('solns');

var solutionButton = document.getElementById('soln-col');
var questionChoiceDropdown = document.getElementById('qtype');

function resetBox(element) {
    element.innerHTML = "";
    element.style.backgroundColor = "#FFFFFF";
}

var questions = prob_questions;

function makeQuiz() {
    generateQuiz(questions, quizContainer, resultsContainer, solutionContainer, submitButton);
    collapse(solutionButton);
    resetBox(resultsContainer);
    renderMathInElement(document.body, opts); // render KaTeX for every question
}

function chooseQType() {
    var qt_choice = questionChoiceDropdown.value;
    questions = qtype_to_var[qt_choice];
    makeQuiz();
}
questionChoiceDropdown.onchange = chooseQType;

makeQuiz();
document.getElementById("new-q").onclick = makeQuiz;



// node quiz.js