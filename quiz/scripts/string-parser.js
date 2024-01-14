function template(string, obj) {
    var s = string;
    for (var prop in obj) {
      s = s.replace(new RegExp('{'+ prop +'}','g'), obj[prop]);
    }
    return s;
}

function parseVars(dict) {
    let copy = {};
    Object.assign(copy, dict);
    let progDict = {};
    for (let k in copy) {
        let v = String(copy[k]);
        if (v.startsWith("randint")) {
            let range = v.slice(8, v.length - 1).split(',').map(item => template(item, progDict)).map(item => parseMEval(item, progDict)).map(item => parseInt(item, 10));
            let randomInt = randint(...range);
            copy[k] = randomInt;
            progDict[k] = randomInt;
        }
        else if (v.startsWith("randuni")) { // e.g. randuni(0.1,0.5,2)
            let subs = parseMEval(template(v, progDict), progDict);
            let parts = subs.slice(8, subs.length - 1).split(',').map(item => template(item, progDict));
            let lower = parseFloat(parts[0]);
            let upper = parseFloat(parts[1]);
            let digits = parseInt(parts[2]);
            let randomUni = randuni(lower, upper, digits);
            copy[k] = randomUni;
            progDict[k] = randomUni;
        }
        else if (v.startsWith("randcint")) { // e.g. randcint([1,2,3])
            let parts = v.slice(10, v.length - 2).split(',').map(item => template(item, progDict)).map(item => parseInt(item));
            let randomInt = randomChoice(parts);
            copy[k] = randomInt;
            progDict[k] = randomInt;
        }
        else if (v.startsWith("meval")) {
            let expr = v.slice(6, v.length-1);
            let evaluated = math.evaluate(expr, progDict);
            copy[k] = evaluated;
            progDict[k] = evaluated;
        }
        else if (v.startsWith("@")) {
            let subbed = template(v, progDict)
            let replaced = parseFloat(parseStats(subbed));
            copy[k] = replaced;
            progDict[k] = replaced;
        }
    }
    if (devMode) {
        console.log(copy);
    }
    return copy;
}

function parseStats(string) {
    if (string.search(qnormReg) != -1) {
        let toParse = string.match(qnormReg)[0];
        let [quantile, mean, std] = toParse.split("(")[1].split(")")[0].split(",").map((x) => parseFloat(x));
        let parsed = jStat.normal.inv(quantile, mean, std);
        return parseStats(string.replace(qnormReg, parsed));
    }
    else if (string.search(pnormReg) != -1) {
        let toParse = string.match(pnormReg)[0];
        let [x, mean, std] = toParse.split("(")[1].split(")")[0].split(",").map((x) => parseFloat(x));
        let parsed = jStat.normal.cdf(x, mean, std);
        return parseStats(string.replace(pnormReg, parsed));
    }
    else if (string.search(dpoisReg) != -1) {
        let toParse = string.match(dpoisReg)[0];
        let [x, l] = toParse.split("(")[1].split(")")[0].split(",");
        x = parseInt(x);
        l = parseFloat(l);
        let parsed = jStat.poisson.pdf(x, l);
        return parseStats(string.replace(dpoisReg, parsed));
    }
    else if (string.search(ppoisReg) != -1) {
        let toParse = string.match(ppoisReg)[0];
        let [x, l] = toParse.split("(")[1].split(")")[0].split(",");
        x = parseInt(x);
        l = parseFloat(l);
        let parsed = jStat.poisson.cdf(x, l);
        return parseStats(string.replace(ppoisReg, parsed));
    }
    else if (string.search(pbinomReg) != -1) {
        let toParse = string.match(pbinomReg)[0];
        let [x, n, p] = toParse.split("(")[1].split(")")[0].split(",");
        x = parseInt(x);
        n = parseInt(n);
        p = parseFloat(p);
        let parsed = jStat.binomial.cdf(x, n, p);
        return parseStats(string.replace(pbinomReg, parsed));
    }
    else if (string.search(dnbinomReg) != -1) {
        let toParse = string.match(dnbinomReg)[0];
        let [x, n, p] = toParse.split("(")[1].split(")")[0].split(",");
        x = parseInt(x);
        n = parseInt(n);
        p = parseFloat(p);
        let parsed = jStat.negbin.pdf(x, n, p);
        return parseStats(string.replace(dnbinomReg, parsed));
    }
    else if (string.search(pnbinomReg) != -1) {
        let toParse = string.match(pnbinomReg)[0];
        let [x, n, p] = toParse.split("(")[1].split(")")[0].split(",");
        x = parseInt(x);
        n = parseInt(n);
        p = parseFloat(p);
        let parsed = jStat.negbin.cdf(x, n, p);
        return parseStats(string.replace(pnbinomReg, parsed));
    }
    else if (string.search(pgammaReg) != -1) {
        let toParse = string.match(pgammaReg)[0];
        let [x, alpha, theta] = toParse.split("(")[1].split(")")[0].split(",");
        x = parseFloat(x);
        alpha = parseInt(alpha);
        theta = parseFloat(theta);
        let parsed = jStat.gamma.cdf(x, alpha, theta);
        return parseStats(string.replace(pgammaReg, parsed));
    }
    else if (string.search(qtReg) != -1) {
        let toParse = string.match(qtReg)[0];
        let [quantile, df] = toParse.split("(")[1].split(")")[0].split(",");
        quantile = parseFloat(quantile);
        df = parseInt(df);
        let parsed = jStat.studentt.inv(quantile, df);
        return parseStats(string.replace(qtReg, parsed));
    }
    else if (string.search(ptReg) != -1) {
        let toParse = string.match(ptReg)[0];
        let [x, df] = toParse.split("(")[1].split(")")[0].split(",");
        x = parseFloat(x);
        df = parseInt(df);
        let parsed = jStat.studentt.cdf(x, df);
        return parseStats(string.replace(ptReg, parsed));
    }
    else if (string.search(qchisqReg) != -1) {
        let toParse = string.match(qchisqReg)[0];
        let [quantile, df] = toParse.split("(")[1].split(")")[0].split(",");
        quantile = parseFloat(quantile);
        df = parseInt(df);
        let parsed = jStat.chisquare.inv(quantile, df);
        return parseStats(string.replace(qchisqReg, parsed));
    }
    else if (string.search(pchisqReg) != -1) {
        let toParse = string.match(pchisqReg)[0];
        let [x, df] = toParse.split("(")[1].split(")")[0].split(",");
        x = parseFloat(x);
        df = parseInt(df);
        let parsed = jStat.chisquare.cdf(x, df);
        return parseStats(string.replace(pchisqReg, parsed));
    }
    return string;
}

function parseMEval(string, dict) {
    let mevalReg = /@meval\(.*?@\)/;
    if (string.search(mevalReg) != -1) {
        let expr = string.match(mevalReg)[0];
        expr = expr.slice(7, expr.length-2);
        let evaluated = math.evaluate(expr, dict);
        return parseMEval(string.replace(mevalReg, evaluated), dict);
    }
    return string;
}

function parseOrd(string) {
    let ordReg = /@ord\(.*?@\)/;
    if (string.search(ordReg) != -1) {
        let expr = string.match(ordReg)[0];
        expr = expr.slice(5, expr.length-2);
        let last = expr.slice(-1);
        let last_two = expr.slice(-2);
        let newStr;
        if (last_two == '11' || last_two == '12' || last_two == '13') {
            newStr = expr + "th";
        }
        else if (last == '1') {
            newStr = expr + "st";
        }
        else if (last == '2') {
            newStr = expr + "nd";
        }
        else if (last == '3') {
            newStr = expr + "rd";
        }
        else {
            newStr = expr + "th";
        }
        return parseOrd(string.replace(ordReg, newStr));
    }
    return string;
}

function simplifyFrac(string) {
    let simpFracReg = /@@sfrac\(.*?@@\)/;
    if (string.search(simpFracReg) != -1) {
        let expr = string.match(simpFracReg)[0];
        let [num, denom] = expr.slice(8, expr.length-3).split(",").map((x) => parseInt(x));
        let [n, d] = reduce(num, denom);
        if (d != 1) {
            newStr = `\\frac\{${n}\}\{${d}\}`
        }
        else {
            newStr = n.toString()
        }
        return simplifyFrac(string.replace(simpFracReg, newStr));
    }
    return string;
}

function parseText(string, dict) {
    let subbed = template(string, dict);
    subbed = parseMEval(subbed, dict);
    subbed = simplifyFrac(subbed);
    return parseOrd(subbed);
}