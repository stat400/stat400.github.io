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
        else if (v.startsWith("randuni")) {
            let parts = v.slice(8, v.length - 1).split(',').map(item => template(item, progDict));
            let lower = parseFloat(parts[0]);
            let upper = parseFloat(parts[1]);
            let digits = parseInt(parts[2]);
            let randomUni = randuni(lower, upper, digits)
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
    return copy;
}

function parseStats(string) {
    if (string.search(qnormReg) != -1) {
        let toParse = string.match(qnormReg)[0];
        let [mean, std, quantile] = toParse.split("(")[1].split(")")[0].split(",").map((x) => parseFloat(x));
        let parsed = jStat.normal.inv(quantile, mean, std);
        return parseStats(string.replace(qnormReg, parsed));
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
    return string;
}

function parseMEval(string, dict) {
    let mevalReg = /@meval\(.*?@\)/;
    if (string.search(mevalReg) != -1) {
        let expr = string.match(mevalReg)[0];
        expr = expr.slice(7, expr.length-2)
        let evaluated = math.evaluate(expr, dict);
        return parseMEval(string.replace(mevalReg, evaluated), dict);
    }
    return string;
}

function parseText(string, dict) {
    let subbed = template(string, dict);
    return parseMEval(subbed, dict);
}