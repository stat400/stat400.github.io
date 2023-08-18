disc_dist_questions = [
    {
        prob: "Mary rolls a fair {a}-sided die until a 2 comes up. Find the expected number of rolls.",
        answer: "a",
        vars: {
            "a": "randint(4,12)",
        },
        solution: "The mean of a geometric distribution is equal to \\(\\frac1p\\), which is {ans}."
    },
    {
        prob: "Mary rolls a fair {a}-sided die until a 2 comes up. Find the variance in the number of rolls.",
        answer: "(a-1)*a",
        vars: {
            "a": "randint(4,12)",
        },
        solution: "The variance of a geometric distribution is equal to \\(\\frac\{1-p\}\{p^2\}\\), which is {ans}."
    },
    {
        prob: "Joe rolls a fair {a}-sided die until a 2 comes up {b} times. Find the expected number of rolls.",
        answer: "a*b",
        vars: {
            "a": "randint(4,12)",
            "b": "randint(2,5)"
        },
        solution: "The mean of a negative binomial distribution is equal to \\(\\frac\{r\}\{p\}\\), which is {ans}."
    },
    {
        prob: "Joe rolls a fair {a}-sided die until a 2 comes up {b} times. Find the variance in the number of rolls.",
        answer: "b*(a-1)*a",
        vars: {
            "a": "randint(4,12)",
            "b": "randint(2,5)"
        },
        solution: "The variance of a negative binomial distribution is equal to \\(\\frac\{r(1-p)\}\{p^2\}\\), which is {ans}."
    },
    {
        prob: "Dylan has a coin that lands on heads @meval(10*{a}@)% of the time. If he flips it {b} times, find the expected number of heads.",
        answer: "a/10*b",
        vars: {
            "a": "randint(1,9)",
            "b": "randint(10,20)"
        },
        solution: "The mean of a binomial distribution is equal to \\(np\\), which is {ans}."
    },
    {
        prob: "Dylan has a coin that lands on heads @meval(10*{a}@)% of the time. If he flips it {b} times, find the variance in the number of heads.",
        answer: "(1-a/10)*a/10*b",
        vars: {
            "a": "randint(1,9)",
            "b": "randint(10,20)"
        },
        solution: "The variance of a binomial distribution is equal to \\(np(1-p)\\), which is {ans}."
    },
    {
        prob: "Bob conducts an experiment in which he flips a fair coin {a} times. Suppose that after {d} flips, he has observed {h} heads. What is the expected number of heads at the end of the experiment?",
        answer: "h+(a-d)/2",
        vars: {
            "a": "randint(100,200)", // num flips in total
            "b": "meval(floor(a/8))",
            "c": "meval(floor(a/4))",
            "d": "randint({b},{c})", // num flips so far
            "e": "meval(floor(d/2))",
            "f": "meval(e-5)",
            "g": "meval(e+5)",
            "h": "randint({f},{g})" // num heads so far
        },
        solution: "The expected number of heads at the end is the number of observed heads so far, plus the expected number of heads from the remaining @meval({a}-{d}@) flips."
    },
    {
        prob: "Suppose Mario can make the Mushroom Gorge gap jump shortcut @meval(10*{a}@)% of the time. When he makes it, his lap time is 40 seconds. When he fails, his lap time is 55 seconds. If he does not attempt it, " +
            "his lap time is 45 seconds. Furthermore, if he fails, he will fall off, lose his mushrooms, and no longer be able to attempt it on that lap or subsequent ones. Find his expected finishing time, in seconds, for a " +
            "3-lap race. (Assume he starts with 3 mushrooms and only uses them for the shortcut, and he will attempt it if and only if he has a mushroom. The shortcut only requires one mushroom per lap.)",
        answer: "pow(a/10,3)*120+pow(a/10,2)*(1-a/10)*135+a/10*(1-a/10)*140+(1-a/10)*145",
        vars: {
            "a": "randint(3,7)",
        },
        solution: "To find the expected finishing time, we can first compute the pmf. Mario can make the gap jump every lap with probability \\(0.{a}^3\\) — his finishing time is 120 seconds here. He might fail on lap 3 with " +
            "probability \\((0.{a})^2(0.@meval(10-{a}@))\\) — his finishing time would be 135 seconds. He might fail on lap 2 with probability \\((0.{a})(0.@meval(10-{a}@))\\) — his finishing time would be 140 seconds. Lastly, " +
            "he might fail on lap 1 with probability \\(0.@meval(10-{a}@)\\) — his finishing time would be 145 seconds. Now apply the formula for the expected value to this pmf."
    },
    {
        prob: "Let \\(f_X(x)=c\\cdot\\frac\{F_x\}\{2^x\},x=1,2,3,...\\), where \\(F_x\\) denotes the \\(x\\)th Fibonacci number, starting at \\(F_1=1\\) and \\(F_2=1\\). Find the value of \\(c\\) that makes this a valid probability distribution. ⭐",
        answer: "1/2",
        solution: "To compute \\(c\\), we must (as always) first find the sum of the series if we don't consider \\(c\\). Let \\(S=\\frac1\{2^1\}+\\frac1\{2^2\}+\\frac2\{2^3\}+\\frac3\{2^4\}+...\\). We can then expand \\(2S\\) and subtract \\(S\\) from it. " +
            "The resulting difference will closely resemble a (non-integer) multiple of \\(S\\). So we are left with the algebraic equation \\(2S-S=...\\), where the right hand side has a constant term and a multiple of \\(S\\). Once you solve for \\(S\\), " +
            "you can compute \\(c\\) using the identity \\(c\\cdot S=1.\\)"
    },
    {
        prob: "An infinite apple orchard has @meval(10*{a}@)% Fuji, @meval(10*{c}@)% Gala, and @meval(10*{d}@)% Red Delicious (sorry, Red <i>Disgusting</i>) apples. If I pick {e} at random, what " +
            "is the expected number of Fuji apples?",
        answer: "a/10*e",
        vars: {
            "a": "randint(1,6)", // blue proportion
            "b": "meval(9-a)",
            "c": "randint(1,{b})", // green proportion
            "d": "meval(10-a-c)", // yellow proportion,
            "e": "randint(20,30)",
        },
        solution: "The expected number of Fujis is the number of apples picked, times the proportion of Fujis in the orchard."
    },
    {
        prob: "An urn has {a} red, {b} green, and {c} blue marbles. If I pick {d} without replacement, find the expected number of green marbles.",
        answer: "b*d/e",
        vars: {
            "a": "randint(15,19)",
            "b": "randint(15,19)",
            "c": "randint(15,19)",
            "d": "randint(10,20)",
            "e": "meval(a+b+c)",
        },
        solution: "The mean of a hypergeometric distribution is \\(\\frac\{nk\}N\\), where \\(n\\) is the number of marbles selected, \\(k\\) is the number of green marbles, and \\(N\\) is the total number of marbles."
    },
    {
        prob: "Albert tells his students to read the syllabus according to a Poisson process of {a} times per week. Find the probability he tells them to read it {d} times in the next 2 weeks.",
        answer: "pow(2*a,d)*exp(-2*a)/factorial(d)",
        vars: {
            "a": "randint(3,6)",
            "b": "meval(2*a-2)",
            "c": "meval(2*a+2)",
            "d": "randint({b},{c})",
        },
        solution: "We first scale the rate: \\(\\lambda={a}\\) times per week is equivalent to \\(\\lambda=@meval(2*{a}@)\\) times per two weeks. We can then plug this, along with \\(x={d},\\) into the Poisson pmf: " +
            "\\(f_X(x)=\\frac\{\\lambda^xe^\{-\\lambda\}\}\{x!\}.\\)"
    },
    {
        prob: "Albert tells his students to read the syllabus according to a Poisson process of {a} times per week. Find the variance in the number of times he tells them to read it in the next {b} weeks.",
        answer: "a*b",
        vars: {
            "a": "randint(3,6)",
            "b": "randint(2,5)",
        },
        solution: "We first scale the rate: \\(\\lambda={a}\\) times per week is equivalent to \\(\\lambda=@meval({a}*{b}@)\\) times per {b} weeks. From here, we know the variance of a Poisson distribution is equal to its rate \\(\\lambda.\\)"
    },
    {
        prob: "Suppose there are {a} discrete distribution questions on this site. What is the expected number of questions you must cycle through <i>before</i> you see your favorite one? (This quiz presents questions " +
            "based on a uniform distribution.)",
        answer: "a-1",
        vars: {
            "a": "randint(25,75)"
        },
        solution: "The mean of a geometric distribution is \\(\\frac1p.\\) However, this question asks for the expected number of <i>failures</i>, not total trials. (What should we do with the mean?) "
    },
    {
        prob: "Suppose \\(E[X]={a}\\) and \\(Var[X]={b}\\). Let \\(Y={c}X+{d}\\). Find \\(E[Y].\\)",
        answer: "a*c+d",
        vars: {
            "a": "randint(25,75)",
            "b": "randint(10,20)",
            "c": "randint(5,10)",
            "d": "randint(25,35)"
        },
        solution: "If \\(Y=a\\cdot X+b\\), then \\(E[Y]=a\\cdot E[X]+b.\\)"
    },
    {
        prob: "Suppose \\(E[X]={a}\\) and \\(Var[X]={b}\\). Let \\(Y={c}X+{d}\\). Find \\(Var[Y].\\)",
        answer: "pow(c,2)*b",
        vars: {
            "a": "randint(25,75)",
            "b": "randint(10,20)",
            "c": "randint(5,10)",
            "d": "randint(25,35)"
        },
        solution: "If \\(Y=a\\cdot X+b\\), then \\(Var[Y]=a^2\\cdot Var[X].\\)"
    },
    {
        prob: "Suppose \\(Var[X]={a}\\), \\(Var[Y]={b}\\), and \\(Cov[X,Y]={c}\\). Find \\(Var[{d}X+{e}Y].\\)",
        answer: "pow(d,2)*a+pow(e,2)*b+2*d*e*c",
        vars: {
            "a": "randint(20,40)",
            "b": "randint(20,40)",
            "c": "randint(-20,20)",
            "d": "randint(5,10)",
            "e": "randint(5,10)"
        },
        solution: "We know \\(Var[aX+bY]=a^2\\cdot Var[X]+b^2\\cdot Var[Y]+2ab\\cdot Cov[X,Y].\\)"
    },
    {
        prob: "Suppose \\(Var[X]={a}\\), \\(Var[Y]={b}\\), and \\(Cov[X,Y]={c}\\). Find \\(Cov[{d}X+{e}Y,{f}X+{g}Y].\\)",
        answer: "d*f*a+e*g*b+(d*g+e*f)*c",
        vars: {
            "a": "randint(20,40)",
            "b": "randint(20,40)",
            "c": "randint(-20,20)",
            "d": "randint(5,10)",
            "e": "randint(5,10)",
            "f": "randint(5,10)",
            "g": "randint(5,10)",
        },
        solution: "We know \\(Cov[aX+bY,cX+dY]=ac\\cdot Var[X]+bd\\cdot Var[Y]+(ad+bc)\\cdot Cov[X,Y].\\)"
    },
    {
        prob: "Let \\(C\\) and \\(S\\) represent the points per game for basketball players Cobe and Shack, respectively. Suppose \\(C\\sim\\text{Poisson}({a})\\) and \\(S\\sim\\text{Poisson}({b})\\). Assuming \\(C\\) and \\(S\\) " +
            "are independent, find the probability they score {f} points total in a single game.",
        answer: "g",
        vars: {
            "a": "randint(20,40)",
            "b": "randint(20,40)",
            "c": "meval(a+b)",
            "d": "meval(c-10)",
            "e": "meval(c+10)",
            "f": "randint({d},{e})",
            "g": "@dpois({f},{c})"
        },
        solution: "Since \\(C\\) and \\(S\\) are independent, we know \\(C+S\\sim\\text{Poisson}({a}+{b})\\). From here, we can apply the Poisson pmf for \\(\\lambda=@meval({a}+{b}@)\\) and \\(x={f}.\\)"
    },
    {
        prob: "Let \\(C\\) and \\(S\\) represent the points per game for basketball players Cobe and Shack, respectively. Suppose \\(C\\sim\\text{Poisson}({a})\\) and \\(S\\sim\\text{Poisson}({b})\\). Assuming \\(C\\) and \\(S\\) " +
            "are independent, find the probability they score between {g} and {h} (inclusive) points total in a single game.",
        answer: "k-j",
        vars: {
            "a": "randint(20,40)",
            "b": "randint(20,40)",
            "c": "meval(a+b)",
            "d": "meval(c-10)",
            "e": "meval(c+10)",
            "f": "meval(c+1)",
            "g": "randint({d},{c})", // lower bound
            "h": "randint({f},{e})", // upper bound
            "i": "meval(g-1)",
            "j": "@ppois({i},{c})",
            "k": "@ppois({h},{c})"
        },
        solution: "Since \\(C\\) and \\(S\\) are independent, we know \\(C+S\\sim\\text{Poisson}({a}+{b})\\). Let \\(Y=C+S\\) and \\(F_Y(y)\\) be the cdf of \\(Y\\). From here, we can use R to compute \\(F_Y({h})-F_Y({g}-1).\\)"
    },
];

var ddistq_id = "ddist";
qtype_to_var[ddistq_id] = disc_dist_questions;
console.log(`Loaded ${disc_dist_questions.length} discrete distribution questions.`)