function randomChoice(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function roundFloat(x, d) {
    if (d < 1) {
        return x;
    }
    return Math.round(x * Math.pow(10, d)) / Math.pow(10, d);
}

function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
}

function randuni(a, b, d) {
    return roundFloat((b-a) * Math.random() + a, d);
}

function reduce(numerator, denominator) { // https://stackoverflow.com/questions/4652468/is-there-a-javascript-function-that-reduces-a-fraction
    var gcd = function gcd(a,b) {
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerator, denominator);
    return [numerator/gcd, denominator/gcd];
}

function smartRound(float) {
    if (roundFloat(float, 10) % 1 == 0) {
        return Math.round(float);
    } else {
        return roundFloat(float, 4);
    }
}

function isClose(userAnswer, answer) {
    if (answer == 0) {
        return userAnswer < tol;
    }
    return Math.abs((userAnswer - answer) / answer) < tol;
}

function isCorrect(userAnswer, answer) {
    if (userAnswer.includes("/")) { // parse fractions
        var parts = userAnswer.split('/').map(c => Number(c));
        if (parts.length != 2) {
            return false;
        }
        if (isNaN(parts[0]) || isNaN(parts[1])) {
            return false;
        }
        return isClose(parts[0]/parts[1], answer);
    }
    userAnswer = Number(userAnswer);
    if (isNaN(userAnswer)) {
        return false;
    }
    return isClose(userAnswer, answer)
}