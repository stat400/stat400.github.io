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
        prob: "Suppose \\(\\mathbb E[X]={a}\\) and \\(Var[X]={b}\\). Let \\(Y={c}X+{d}\\). Find \\(\\mathbb E[Y].\\)",
        answer: "a*c+d",
        vars: {
            "a": "randint(25,75)",
            "b": "randint(10,20)",
            "c": "randint(5,10)",
            "d": "randint(25,35)"
        },
        solution: "If \\(Y=a\\cdot X+b\\), then \\(\\mathbb E[Y]=a\\cdot \\mathbb E[X]+b.\\)"
    },
    {
        prob: "Suppose \\(\\mathbb E[X]={a}\\) and \\(Var[X]={b}\\). Let \\(Y={c}X+{d}\\). Find \\(Var[Y].\\)",
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
    {
        prob: "Let \\(f_X(x)=c\\cdot({a}x+{b}),x=1,2,\\ldots,10.\\) Find the value of \\(c\\) that makes this a valid probability distribution.",
        answer: "1/(55*a+10*b)",
        vars: {
            "a": "randint(3,5)",
            "b": "randint(6,10)",
        },
        solution: "We know \\(c\\cdot[({a}\\cdot1+{b})+({a}\\cdot2+{b})+\\ldots +({a}\\cdot10+{b})]=1\\), so we can just solve for \\(c\\)."
    },
    {
        prob: "Let \\(f_X(x)=c\\cdot\\left(\\frac\{{a}\}\{{b}\}\\right)^x,x=2,3,4,\\ldots.\\) Find the value of \\(c\\) that makes this a valid probability distribution.",
        answer: "1/(pow(a/b,2)/(1-a/b))",
        vars: {
            "a": "randcint([3,5,7])",
            "b": "randcint([8,11,13,16,17])",
        },
        solution: "The sum of an infinite geometric series is \\(\\frac a\{1-r\}\\), where \\(a\\) is the first term and \\(r\\) is the common ratio. Once you compute the sum of this series, you know its sum times \\(c\\) must equal 1."
    },
    {
        prob: "Let \\(f_X(x)=c\\cdot\\frac\{{a}^x\}\{x!\},x=2,3,4,\\ldots.\\) Find the value of \\(c\\) that makes this a valid probability distribution.",
        answer: "1/(exp(a)-a-1)",
        vars: {
            "a": "randint(2,5)",
        },
        solution: "The pmf closely resembles the Taylor expansion for \\(e^{a},\\) the only difference being that the support of \\(X\\) begins at 2 instead of 0. If \\(S=\\frac\{{a}^2\}\{2!\}+\\frac\{{a}^3\}\{3!\}+\\ldots\\), " +
            "then \\(S+1+{a}=1+{a}+\\frac\{{a}^2\}\{2!\}+\\frac\{{a}^3\}\{3!\}+\\ldots=e^{a}.\\) From here, we can solve for \\(S\\) and then \\(c\\)."
    },
    {
        prob: "Let \\(f_X(x)=\\frac1\{e^\{{a}\}-{b}\}\\cdot\\frac\{{a}^x\}\{x!\},x=3,4,5,\\ldots.\\) Find \\(\\mathbb E[X].\\)",
        answer: "1/(exp(a)-b)*a*(exp(a)-1-a)",
        vars: {
            "a": "randint(2,5)",
            "b": "meval(round(1+a+a^2/2,1))"
        },
        solution: "If we first expand the formula for the expected value, we have \\(\\mathbb E[X]=\\frac1\{e^\{{a}\}-{b}\}\\cdot(3\\cdot\\frac\{{a}^3\}\{3!\}+4\\cdot\\frac\{{a}^4\}\{4!\}+\\ldots)=" +
            "\\frac1\{e^\{{a}\}-{b}\}\\cdot(\\frac\{{a}^3\}\{2!\}+\\frac\{{a}^4\}\{3!\}+\\ldots)=\\frac1\{e^\{{a}\}-{b}\}\\cdot{a}\\cdot(\\frac\{{a}^2\}\{2!\}+\\frac\{{a}^3\}\{3!\}+\\ldots).\\) " +
            "Notice that the expression inside the parentheses is remarkably similar to the Taylor expansion of \\(e^{a}\\). What must be done to complete this?"
    },
    {
        prob: "Let \\(f_X(x)=\\frac\{{c}\}\{{d}\}\\cdot\\left(\\frac\{{a}\}\{{b}\}\\right)^x,x=2,3,4,\\ldots.\\) Find the value of \\(\\mathbb E[X].\\)",
        answer: "b/(b-a)*c/d*(2*pow(a/b,2)+pow(a/b,3)/(1-a/b))",
        vars: {
            "a": "randcint([3,5,7])",
            "b": "randcint([8,11,13,16,17])",
            "c": "meval(b*(b-a))",
            "d": "meval(a*a)"
        },
        solution: "If we first expand the formula for the expected value, we have \\(\\mathbb E[X]=\\frac\{{c}\}\{{d}\}\\cdot(2\\cdot(\\frac\{{a}\}\{{b}\})^2+3\\cdot(\\frac\{{a}\}\{{b}\})^3+4\\cdot(\\frac\{{a}\}\{{b}\})^4+\\ldots).\\) " +
            "Multiplying by \\(\\frac\{{a}\}\{{b}\}\\), we have \\(\\frac\{{a}\}\{{b}\}\\cdot\\mathbb E[X]=\\frac\{{c}\}\{{d}\}\\cdot(2\\cdot(\\frac\{{a}\}\{{b}\})^3+3\\cdot(\\frac\{{a}\}\{{b}\})^4+4\\cdot(\\frac\{{a}\}\{{b}\})^5+\\ldots).\\) " +
            "When we subtract the second equation from the first, we have \\(\\frac\{@meval({b}-{a}@)\}\{{b}\}\\cdot\\mathbb E[X]=\\frac\{{c}\}\{{d}\}\\cdot(2\\cdot(\\frac\{{a}\}\{{b}\})^2+(\\frac\{{a}\}\{{b}\})^3+(\\frac\{{a}\}\{{b}\})^4+(\\frac\{{a}\}\{{b}\})^5+\\ldots).\\) " +
            "Notice that everything besides the first term within the parentheses is an infinite geometric series. So compute its sum and put everything together."
    },
    {
        prob: "Suppose I roll a fair {a}-sided die until a 2 comes up. If I have already rolled it {b} times, what is the expected number of rolls I still need to make?",
        answer: "a",
        vars: {
            "a": "randint(6,12)",
            "b": "randint(2,5)"
        },
        solution: "The geometric distribution is memoryless, so the expected number of rolls I still need to make, does not depend on how many rolls I have already made."
    },
    {
        prob: "At a certain hospital, births occur according to a Poisson process with a rate of {a} per day. Find the probability none occur within the next {b} minutes, if it is already known none will occur in the next {c} minutes.",
        answer: "exp(-a*(b-c)/1440)",
        vars: {
            "a": "randint(15,25)",
            "b": "randint(40,60)",
            "c": "randint(20,30)",
        },
        solution: "If we first scale the rate, we can say births occur according to a Poisson process with a rate of \\({a}/1440\\) per minute. Let \\(X\\) be a Poisson distribution with a rate equal to \\({a}/1440\\cdot{b}-{a}/1440\\cdot{c}=@meval({a}*({b}-{c})@)/1440.\\) " +
        "We are looking for \\(P[X=0],\\) which we can find using the Poisson pmf formula. (If you aren't sure this method is correct, you can try a similar one using conditional probability as well!)"
    },
    {
        prob: "Let the mgf of \\(X\\) be \\(M_X(t)={a}\\cdot e^\{{e}t\}+{b}\\cdot e^\{{f}t\}+{c}\\cdot e^\{{g}t\}+{d}\\cdot e^\{{h}t\}\\). Compute \\(Var[X].\\)",
        answer: "(a*e^2+b*f^2+c*g^2+d*h^2)-(a*e+b*f+c*g+d*h)^2",
        vars: {
            "a": "randuni(0.01,0.4,2)",
            "b": "randuni(0.01,0.4,2)",
            "c": "randuni(0.01,0.29,2)",
            "d": "meval(round(1-a-b-c,2))",
            "e": "randint(2,4)",
            "f": "randint(@meval(e+1@),@meval(e+3@))",
            "g": "randint(@meval(f+1@),@meval(f+3@))",
            "h": "randint(@meval(g+1@),@meval(g+3@))"
        },
        solution: "Based on the given mgf, we can find the pmf \\(f_X(x)\\): <ul><li>\\(x={e}\\) with probability {a}</li> <li>\\(x={f}\\) with probability {b}</li> <li>\\(x={g}\\) with probability {c}</li> " +
            "<li>\\(x={h}\\) with probability {d}</li></ul> <p>From here, we can simply compute the variance, which is \\(\\mathbb E[X^2]-(\\mathbb E[X])^2.\\)</p>"
    },
    {
        prob: "Let the mgf of \\(X\\) be \\(M_X(t)=({b}e^t+@meval(round(1-{b},2)@))^\{{c}\}\\). Compute \\(\\mathbb E[X].\\)",
        answer: "b*c",
        vars: {
            "a": "randuni(0.01,0.19,2)",
            "b": "meval(round(5*a,2))",
            "c": "randint(5,10)",
        },
        solution: "Based on the given mgf, we can deduce that \\(X\\) follows a binomial distribution with \\(p={b}\\) and \\(n={c}.\\) What is the expected value of a binomial distribution with these parameters?"
    },
    {
        prob: "Let the mgf of \\(X\\) be \\(M_X(t)=\\left(\\frac\{{b}e^t\}\{1-@meval(round(1-{b},2)@)e^t\}\\right)^\{{c}\},t<-\\ln(@meval(round(1-{b},2)@))\\). Compute \\(Var[X].\\)",
        answer: "c*(1-b)/b^2",
        vars: {
            "a": "randuni(0.01,0.19,2)",
            "b": "meval(round(5*a,2))",
            "c": "randint(5,10)",
        },
        solution: "Based on the given mgf, we can deduce that \\(X\\) follows a negative binomial distribution with \\(p={b}\\) and \\(r={c}.\\) What is the variance of a negative binomial distribution with these parameters?"
    },
    {
        prob: "Let \\(f_\{X,Y\}(x,y)=c({a}x+{b}y), x=1,2,\\ldots,{c}; y=1,2,\\ldots,{d}.\\) Find the value of \\(c\\) that makes this a valid probability distribution.",
        answer: "2/(a*c*d*(c+1)+b*c*d*(d+1))",
        vars: {
            "a": "randint(2,6)",
            "b": "randint(2,6)",
            "c": "randint(4,7)",
            "d": "randint(4,7)",
        },
        solution: "Simply compute the sum of all \\({a}x+{b}y, x=1,2,\\ldots,{c}; y=1,2,\\ldots,{d}.\\) Then take the reciprocal because this must be a valid probability distribution. (You may find a calculator helpful in summing everything together.)"
    },
    {
        prob: "Let \\(f_\{X,Y\}(x,y)=\\frac1\{{e}\}({a}x+{b}y), x=1,2,\\ldots,{c}; y=1,2,\\ldots,{d}.\\) Find \\(Cov[X,Y]\\).",
        answer: "(a*(2*c+1)+b*(2*d+1))*(c+1)*(d+1)/(6*(a*(c+1)+b*(d+1)))-((2*a*(2*c+1)+3*b*(d+1))*(c+1)/(6*(a*(c+1)+b*(d+1))))*((3*a*(c+1)+2*b*(2*d+1))*(d+1)/(6*(a*(c+1)+b*(d+1))))",
        vars: {
            "a": "randint(2,6)",
            "b": "randint(2,6)",
            "c": "randint(4,7)",
            "d": "randint(4,7)",
            "e": "meval(round((a*c*d*(c+1)+b*c*d*(d+1))/2,1))"
        },
        solution: "First compute \\(\\mathbb E[XY]=\\sum_x\\sum_yxy\\cdot f_\{X,Y\}(x,y).\\) Then compute \\(f_X(x)=\\sum_y f_\{X,Y\}(x,y)\\) and use this to find \\(\\mathbb E[X].\\) Similarly, compute \\(\\mathbb E[Y]\\). Lastly, we know " +
            "\\(Cov[X,Y]=\\mathbb E[XY]-\\mathbb E[X]\\mathbb E[Y].\\)"
    },
    {
        prob: "On a given day, suppose Professor Snape gives Harry detention with probability {a}. Find the probability he receives at most {b} in the next 30 days, assuming the chance for each day is independent. (R recommended)",
        answer: "c",
        vars: {
            "a": "randuni(0.1,0.2,2)",
            "b": "randint(3,6)",
            "c": "@pbinom({b},30,{a})",
        },
        solution: "Let \\(H\\) be a random variable representing the number of detentions Harry receives from Professor Snape. Then \\(H\\sim \\text\{Binom\}(30,{a}).\\) We must find \\(P[H\\leq {b}]=F_H({b}),\\) which we can easily do in R: " +
            "\\(\\texttt\{pbinom({b},30,{a}).\}\\)"
    },
    {
        prob: "On a given day, suppose Professor Snape takes points from Gryffindor according to a Poisson process of {a} points per day. Find the probability he takes at least {b} points in five days. (R recommended)",
        answer: "1-e",
        vars: {
            "a": "randint(10,15)",
            "b": "randint(@meval(5*a-4@),@meval(5*a+4@))",
            "c": "meval(5*a)",
            "d": "meval(b-1)",
            "e": "@ppois({d},{c})"
        },
        solution: "Let \\(S\\) be a random variable representing the number of points Professor Snape takes from Gryffindor in five days. Then \\(S\\sim \\text\{Poisson\}({c}).\\) We must find \\(P[S\\geq {b}]=1-P[S\\lt {b}]=1-F_S(@meval(b-1@)),\\) which we can easily do in R: " +
            "\\(\\texttt\{1-ppois(@meval(b-1@),{c}).\}\\)"
    },
    {
        prob: "Suppose professional basketball player Shack shoots free throws until he makes {a}. If each shot has probability {b} of going in, what is the probability he will attempt no more than {d}? (R recommended)",
        answer: "f",
        vars: {
            "a": "randint(10,15)",
            "b": "randuni(0.25,0.4,2)",
            "c": "meval(round(a/b))",
            "d": "randint(@meval(c-5@),@meval(c+5@))",
            "e": "meval(d-a)",
            "f": "@pnbinom({e},{a},{b})"
        },
        solution: "Let \\(F\\) be a random variable representing the number of free throws Shack will attempt. Then \\(F\\sim \\text\{NB\}({a},{b}).\\) We must find \\(P[F\\leq {d}]=F_F({d}),\\) which we can easily do in R: " +
            "\\(\\texttt\{pnbinom({d}-{a},{a},{b}).\}\\) <b>Very</b> important: notice that the first argument is \\({d}-{a}\\), which is the number of failures rather than the number of trials. This is standard in R. If you do " +
            "not like this, you can also solve this with the binomial cdf. The complement of the event is that Shack makes fewer than {a} free throws in his first {d} attempts. So if we let \\(G\\) be the number of free throws he makes " +
            "in his first {d} attempts, then \\(G\\sim \\text\{Binom\}({d},{b}).\\) We must compute \\(1-P[G\\lt {a}]=1-F_G(@meval(a-1@)),\\) which we can do in R: \\(\\texttt\{1-pbinom(@meval(a-1@),{d},{b}).\}\\)"
    },
];

var ddistq_id = "ddist";
qtype_to_var[ddistq_id] = disc_dist_questions;
if (devMode) {
    console.log(`Loaded ${disc_dist_questions.length} discrete distribution questions.`)
}
