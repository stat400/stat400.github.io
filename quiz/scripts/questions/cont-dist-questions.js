cont_dist_questions = [
    {
        prob: "Let \\(Y\\) be a continuous random variable with pdf \\(f_Y(y)=c\\cdot({a}y^{c}+{b}),y\\in [0,5].\\) Find the value of \\(c\\) that makes this a valid probability distribution.",
        answer: "1/(a*pow(5,c+1)/(c+1)+5*b)",
        vars: {
            "a": "randint(2,5)",
            "b": "randint(5,10)",
            "c": "randint(2,4)",
        },
        solution: "First, find \\(\\int_{0}^{5} {a}y^{c}+{b}\\text{ d}y\\). Then, simply divide \\(1\\) by this value to find \\(c.\\)"
    },
    {
        prob: "While job hunting, Kayla receives scam emails according to a Poisson process of {a} per week. Find the probability it will take between 1 and 2 days for her to receive her first this week.",
        answer: "exp(-1/b)-exp(-2/b)",
        vars: {
            "a": "randint(3,7)",
            "b": "meval(7/a)"
        },
        solution: "This follows an exponential distribution with \\(\\theta=\\frac7{a}\\) days in between events. We can therefore find \\(\\int_1^2\\frac{a}7e^\{-{a}x/7\}\\text{ d}x,\\) which is the final answer."
    },
    {
        prob: "While job hunting, Kayla receives scam emails according to a Poisson process of {a} per week. Find the probability she will receive her {a}th in 6 to 8 days. (R/calculator recommended)",
        answer: "c-d",
        vars: {
            "a": "randint(5,9)",
            "b": "meval(7/a)",
            "c": "@pgamma(8,{a},{b})",
            "d": "@pgamma(6,{a},{b})"
        },
        solution: "This follows an gamma distribution with \\(\\alpha={a}\\) and \\(\\theta=\\frac7{a}\\) days in between events. We can use R to calculate this probability by making use of the cdf; we want " +
            "\\(F_X(8)-F_X(6),\\) which in R is \\(\\texttt\{pgamma(8,{a},scale=7/{a})-pgamma(6,{a},scale=7/{a})\}.\\) Or, if you have a decent calculator, you could simply plug in the integral directly and evaluate."
    },
    {
        prob: "Suppose the scores on a 50-point Potions exam follow a random variable \\(X\\) with \\(f_X(x)=\\frac1\{{c}\}({a}x+{b}),20\\leq x\\leq 50.\\) If Ron scored {d} points, what percentile is he in? (Round to the nearest integer.)",
        answer: "round(100*(a*(d+20)+2*b)*(d-20)/(60*(35*a+b)))",
        vars: {
            "a": "randint(2,5)",
            "b": "randint(3,6)",
            "c": "meval(1050*a+30*b)",
            "d": "randint(25,45)"
        },
        solution: "To find the percentile, we can first compute \\(\\int_\{20\}^\{{d}\} \\frac1\{{c}\}({a}x+{b})\\text{ d}x\\), either by hand or with a calculator. Since we are talking about a percentile, we then multiply this by 100 and round to the nearest integer."
    },
    {
        prob: "Suppose the scores on a 50-point Potions exam follow a random variable \\(X\\) with \\(f_X(x)=\\frac1\{{c}\}({a}x+{b}),20\\leq x\\leq 50.\\) If Ron scored in the @ord({d}@) percentile, what is his score? (Round to the nearest integer.)",
        answer: "round( (sqrt(5*(5*a^2*(21*d+400)+a*b*(3*d+200)+5*b^2))-5*b)/(5*a) )",
        vars: {
            "a": "randint(2,5)",
            "b": "randint(3,6)",
            "c": "meval(1050*a+30*b)",
            "d": "randint(10,90)"
        },
        solution: "We can first compute the cdf of \\(X\\): \\(F_X(x)=\\int_{20}^x \\frac1\{{c}\}({a}y+{b})\\text{ d}y=\\frac\{{a}x^2+@meval(2*b@)x-@meval(400*a+40*b@)\}\{@meval(2100*a+60*b@)\}, 20\\leq x \\leq 50.\\) Now, we simply need to set this equal to " +
            "\\(0.{d}\\) and solve for \\(x\\). (Use the quadratic formula or a CAS calculator.)"
    },
    {
        prob: "Suppose the time it takes for customers to shop at Mall-mart follows an exponential distribution with mean {a} minutes. If {b} customers enter at this moment, find the expected number of them still shopping after {c} minutes.",
        answer: "exp(-c/a)*b",
        vars: {
            "a": "randint(20,40)",
            "b": "randint(15,30)",
            "c": "randint(20,40)",
        },
        solution: "The number of these customers after {c} minutes can be modeled as a binomial distribution with \\(n={b}\\). The probability of success, \\(p\\), is the probability a customer is still in the store after {c} minutes; this " +
            "can be computed using the exponential pdf. Once you find it, simply use the formula for the expected value of a binomial distribution."
    },
    {
        prob: "Let the pdf of \\(X\\) be \\(f_X(x)=\\frac\{3\}\{{d}\}({a}x^2+{b}x+{c}),10\\leq x \\leq 20.\\) Find \\(\\mathbb E[X].\\)",
        answer: "5*(2250*a+140*b+9*c)/(700*a+3*(15*b+c))",
        vars: {
            "a": "randint(2,4)",
            "b": "randint(5,10)",
            "c": "randint(10,20)",
            "d": "meval(7000*a+450*b+30*c)"
        },
        solution: "Simply use the formula for the expected value of a continuous random variable: \\(\\int_{10}^{20} x\\cdot\\frac3\{{d}\}({a}x^2+{b}x+{c}) \\text{ d}x.\\)"
    },
    {
        prob: "Let the mgf of \\(Y\\) be \\(M_Y(t)=\\frac\{1\}\{(1-{a}t)^{b}\},t < \\frac1\{{a}\}.\\) Find \\(Var[Y].\\)",
        answer: "b*a^2",
        vars: {
            "a": "randuni(2,5,1)", // theta
            "b": "randint(3,8)", // alpha
        },
        solution: "Based on the mgf, we know \\(Y\\) follows a Gamma distribution with parameters \\(\\alpha={b}\\) and \\(\\theta={a}.\\) We can therefore plug these values into the variance formula for a Gamma distribution: \\(\\sigma^2=\\alpha\\theta^2.\\)"
    },
    {
        prob: "Let the mgf of \\(X\\) be \\(M_X(t)=\\exp\\{{a}t+@meval(round({b}/2,1)@)t^2\\}.\\) Find \\(SD[X].\\)",
        answer: "sqrt(b)",
        vars: {
            "a": "randint(10,20)", // mu
            "b": "randint(40,50)", // sigma^2
        },
        solution: "Based on the mgf, we know \\(X\\) follows a Normal distribution with parameters \\(\\mu={a}\\) and \\(\\sigma^2={b}.\\) We also know \\(SD[X]=\\sqrt\{Var[X]\}.\\)"
    },
    {
        prob: "Suppose the price of the cryptocurrency MemeCoin follows a normal distribution with mean {a} cents and standard deviation {b}, and that it varies daily. If Elawn buys {c} MemeCoins today, what is the probability he spends more than {f} cents?",
        answer: "1-j",
        vars: {
            "a": "randint(7,19)", // mu
            "b": "randuni(2,4,1)", // sigma
            "c": "randint(30,50)",
            "d": "meval(c*(a-b))",
            "e": "meval(c*(a+b))",
            "f": "randint({d},{e})",
            "g": "meval(f-c*a)",
            "h": "meval(round(b*c,1))",
            "i": "meval(g/h)",
            "j": "@pnorm({i},0,1)"
        },
        solution: "Let \\(C\\) be a random variable representing the amount Elawn spends today on MemeCoin. We know \\(C\\sim N({c}\\cdot{a},{c}^2\\cdot{b}^2).\\) So \\(P[C>{f}]=P[\\frac\{C-{c}\\cdot{a}\}\{{c}\\cdot {b}\}>\\frac\{{f}-{c}\\cdot{a}\}\{{c}\\cdot {b}\}]=P[Z> " +
            "\\frac\{{g}\}\{{h}\}].\\) We can simply read this value off a table or use R. (If this value does not exist on a table, you should interpolate or just use R.)"
    },
    {
        prob: "Suppose the price of the cryptocurrency MemeCoin follows a normal distribution with mean {a} cents and standard deviation {b}, and that it varies daily. If Elawn buys {c} MemeCoins every day for the next week, what is the probability he spends more than {f} cents?",
        answer: "1-j",
        vars: {
            "a": "randint(7,19)", // mu
            "b": "randuni(2,4,1)", // sigma
            "c": "randint(5,10)",
            "d": "meval(7*c*(a-round(sqrt(b))))",
            "e": "meval(7*c*(a+round(sqrt(b))))",
            "f": "randint({d},{e})",
            "g": "meval(f-7*c*a)",
            "h": "meval(round(sqrt(7)*b*c,4))",
            "i": "meval(g/h)",
            "j": "@pnorm({i},0,1)"
        },
        solution: "Let \\(C\\) be a random variable representing the amount Elawn spends throughout the next week on MemeCoin. We know \\(C\\sim N(7\\cdot{c}\\cdot{a},7\\cdot{c}^2\\cdot{b}^2).\\) So \\(P[C>{f}]=P[\\frac\{C-7\\cdot{c}\\cdot{a}\}\{\\sqrt7\\cdot{c}\\cdot {b}\}>" +
            "\\frac\{{f}-7\\cdot{c}\\cdot{a}\}\{\\sqrt7\\cdot{c}\\cdot {b}\}]=P[Z> \\frac\{{g}\}\{{h}\}].\\) We can simply read this value off a table or use R. (If this value does not exist on a table, you should interpolate or just use R.)"
    },
    {
        prob: "Let \\(X\\sim N({a},{b})\\) and \\(Y={c}X+{d}Z\\) (\\(Z\\) has a standard normal distribution). Find \\(P[Y<{g}].\\)",
        answer: "j",
        vars: {
            "a": "randint(20,30)", // mu_x
            "b": "randint(50,60)", // sigma^2_x
            "c": "randint(4,15)",
            "d": "randint(4,15)",
            "e": "meval(round(a*c-c*sqrt(b)-d))",
            "f": "meval(round(a*c+c*sqrt(b)+d))",
            "g": "randint({e},{f})",
            "h": "meval(a*c)",
            "i": "meval(sqrt(c^2*b+d^2))",
            "j": "@pnorm({g},{h},{i})",
        },
        solution: "We know \\(\\mu_Y={c}\\mu_X+{d}\\mu_Z={h}\\) and \\(\\sigma^2_Y={c}^2\\cdot\\sigma^2_X+{d}^2\\cdot\\sigma^2_Z=@meval({c}^2*{b}+{d}^2@).\\) Simply standardize this and solve it with a table or R."
    },
    {
        prob: "Suppose \\(T\\sim N({a},\\sigma^2_T)\\) and \\(P[T<{b}]={c}.\\) Find \\(\\sigma_T.\\)",
        answer: "(b-a)/d",
        vars: {
            "a": "randint(5,10)", // mu
            "b": "randint(@meval(a+2@),@meval(a+5@))",
            "c": "randuni(0.6,0.9,2)",
            "d": "@qnorm({c},0,1)",
            "e": "meval(round(d,6))"
        },
        solution: "We know \\(\\frac\{T-{a}\}\{\\sigma_T\}=Z\\), meaning \\(T=\\sigma_T Z+{a}.\\) Therefore, \\(P[T<{b}]=P[\\sigma_T Z+{a}<{b}]=P[Z<\\frac\{{b}-{a}\}\{\\sigma_T\}]={c}.\\) We can compute the right side of the inequality by using a normal table or R: " +
            "using \\(\\texttt\{qnorm({c},0,1)\}\\) in R tells us \\(P[Z<{e}]={c},\\) so we set \\(\\frac\{{b}-{a}\}\{\\sigma_T\}={e}\\) and solve for \\(\\sigma_T.\\)"
    },
    {
        prob: "Suppose \\(Y\\sim N({a},{b}).\\) Compute \\(\\mathbb E[Y^2].\\)",
        answer: "a^2+b",
        vars: {
            "a": "randint(30,50)", // mu
            "b": "randint(200,600)", // sigma^2
        },
        solution: "We know \\(Var[Y]=\\mathbb E[Y^2]-(\\mathbb E[Y])^2,\\) so \\(\\mathbb E[Y^2]=Var[Y]+(\\mathbb E[Y])^2.\\)"
    },
    {
        prob: "Suppose a random variable \\(K\\) has mgf \\(M_K(t)={a}t^4+{b}e^\{{c}t\}.\\) Compute \\(\\mathbb E[K^2].\\) (Note: there may not be any \\(K\\) with this mgf, but we are just testing your knowledge of mgf properties 😎)",
        answer: "b*c^2",
        vars: {
            "a": "randint(30,80)",
            "b": "randint(3,8)",
            "c": "randint(3,8)",
        },
        solution: "To find \\(\\mathbb E[K^2],\\) we just have to compute \\(M_K''(0).\\)"
    },
    {
        prob: "Suppose the incomes in Bikini Bottom follow a normal distribution with mean \\(\\${b}\\) and standard deviation \\(\\${d}\\). If SpongeBob's income is \\(\\${f}\\), what percentile is he in? (Round to the nearest integer.)",
        answer: "round(100*g)",
        vars: {
            "a": "randint(30,70)",
            "b": "meval(1000*a)",
            "c": "randint(5,8)",
            "d": "meval(1000*c)",
            "e": "randint(@meval(a-2*c@),@meval(a+2*c@))",
            "f": "meval(1000*e)",
            "g": "@pnorm({f},{b},{d})"
        },
        solution: "Let \\(I\\sim N({b},{d})\\) represent the incomes in Bikini Bottom. We want to find \\(P[I<{f}]=P[\\frac\{I-{b}\}\{{d}\}<\\frac\{{f}-{b}\}\{{d}\}]=P[Z<\\frac\{@meval({f}-{b}@)\}\{{d}\}].\\) We can do this either with a table or by using R. Lastly, " +
            "we should multiply by 100 because it is a percentile."
    },
    {
        prob: "Let the pdf of \\(Y\\) be \\(f_Y(y)=@@sfrac(@meval(b^3@),2@@)\\cdot y^2e^\{-{b}y\}, y>0.\\) Let \\(\\{Y_1,Y_2,\\ldots,Y_\{{c}\}\\}\\) be an iid random sample of size {c} from \\(Y.\\) Estimate " +
            "\\(P[{f}<\\overline Y<{g}]\\). (Hint: first compute \\(\\mathbb E[Y]\\) and \\(Var[Y]\\), either using a calculator or by tabular integration.)",
        answer: "i-h",
        vars: {
            "b": "randint(4,10)",
            "c": "randint(40,80)",
            "d": "randuni(-2,-0.3,2)",
            "e": "randuni(0.3,2,2)",
            "f": "meval(round(sqrt(3)*d/(b*sqrt(c))+3/b,2))",
            "g": "meval(round(sqrt(3)*e/(b*sqrt(c))+3/b,2))",
            "mu": "meval(3/b)",
            "sd": "meval(sqrt(3/(b^2*c)))",
            "h": "@pnorm({f},{mu},{sd})",
            "i": "@pnorm({g},{mu},{sd})",
        },
        solution: "We can solve this using the Central Limit Theorem: we must first compute \\(\\mathbb E[\\overline Y]\\) and \\(Var[\\overline Y]\\), which we can do using integration. \\(\\mathbb E[\\overline Y]=\\mathbb E[Y]=\\int_0^\\infty y\\cdot f_Y(y)\\text{ d}y" +
            "=@@sfrac(3,{b}@@)\\) and \\(Var[\\overline Y]=Var[Y]/n=(\\int_0^\\infty y^2\\cdot f_Y(y)\\text{ d}y - (\\frac3\{{b}\})^2)/n=@@sfrac(3,@meval(b^2*c@)@@).\\) Now, we apply the CLT by making the approximation \\(\\overline Y\\sim N(@@sfrac(3,{b}@@),@@sfrac(3,@meval(b^2*c@)@@)).\\) We can " +
            "finally compute the desired probability by standardizing \\(\\overline Y\\) and using a table or R."
    },
    {
        prob: "Let the joint pdf of \\((X,Y)\\) be \\(f_\{XY\}(x,y)=@@sfrac(3,@meval(128*(a+b)@)@@)({a}x+{b}y),0\\lt x\\lt 4,0\\lt y\\lt 2x.\\) Compute \\(\\mathbb E[X\\mid Y={c}].\\) (Hint: first compute \\(f_\{X\\mid Y\}(x \\mid y),\\) plug in " +
            "\\(y={c},\\) and compute the expectation of this function the usual way. Watch out for its support.) ⭐",
        answer: "(a*(c^2+8*c+64)+3*b*c*(c+8))/(3*(a*(c+8)+4*b*c))",
        vars: {
            "a": "randint(2,6)",
            "b": "randint(2,6)",
            "c": "randint(1,7)"
        },
        solution: "We know \\(f_\{X\\mid Y\}(x \\mid y)=\\frac\{f_\{XY\}(x,y)\}\{f_Y(y)\}.\\) We are already given \\(f_\{XY\}(x,y)\\), so we just need to compute \\(f_Y(y),\\) which we can do by integrating the \\(x\\) out of the joint pdf. " +
            "The bounds of this integral are \\(y/2\\) and \\(4\\); the resulting expression is \\(f_Y(y)=\\frac\{@meval(-3a-12b@)y^2+@meval(round(96*b,1)@)y+@meval(192*a@)\}\{@meval(1024*(a+b)@)\},0\\lt y\\lt 8.\\) Therefore, \\(f_\{X\\mid Y\}(x \\mid y)" +
            "=\\frac\{@meval(8*a@)x+@meval(8*b@)y\}\{-@meval(a+4*b@)y^2+@meval(32*b@)y+@meval(64*a@)\},0\\lt x\\lt 4,0\\lt y\\lt 2x.\\) Plugging in \\(y={c},\\) we know \\(f_\{X\\mid Y\}(x \\mid {c})=\\frac\{@meval(8*a@)x+@meval(round(8*b*c,1)@)\}\{@meval(-(a+4*b*c^2)+32*b*c+64*a@)\}," +
            "@@sfrac({c},2@@)\\lt x \\lt 4.\\) Now compute the expected value of this function."
    },
    {
        prob: "Suppose golden and pink pineapples grown in the same plantation have weights that follow a normal distribution and vary only by day (i.e., on any given day, all golden ones weigh the same, and all pink ones also do). Let \\(G\\) and \\(K\\) represent the weights (in pounds) of these, respectively, where \\(G\\sim N({a},{b}^2)\\) and \\(K\\sim N({c},{d}^2)\\). Suppose " +
            "\\(\\rho_\{GK\}={e}.\\) If a pink pineapple today weighs {f} pounds, find the probability a golden pineapple weighs less than {i} pounds.",
        answer: "j",
        vars: {
            "a": "randint(2,4)", // golden mean
            "b": "randuni(0.3,0.5,1)", // golden sd
            "c": "randint(5,7)", // pink mean
            "d": "randuni(0.3,0.5,1)", // pink sd
            "e": "randuni(0.3,0.5,2)", // correlation
            "f": "randuni(@meval(round({c}-2*{d},1)@),@meval(round({c}+2*{d},1)@),1)",
            "g": "meval(a+e*b*(f-c)/d)", // E[G | K = f]
            "h": "meval(((1-e^2)*b^2)^0.5)", // SD[G | K = f]
            "i": "randuni(@meval(round({g}-2*{h},1)@),@meval(round({g}+2*{h},1)@),1)",
            "j": "@pnorm({i},{g},{h})"
        },
        solution: "We know \\(\\mathbb E[G\\mid K = {f}]=\\mu_G +\\rho_\{GK\}\\sigma_G\\frac\{{f}-\\mu_K\}\{\\sigma_K\}=@meval(round({g},4)@)\\) and \\(Var[G\\mid K={f}]=(1-\\rho_\{GK\}^2)\\sigma_G^2=@meval(round(h^2,4)@).\\) With this, we can solve for " +
            "\\(P[G < {i}\\mid K = {f}]\\) by standarding this distribution and then using a Z-table/R."
    },
    {
        prob: "Suppose golden and pink pineapples grown in the same plantation have weights that follow a normal distribution and vary only by day (i.e., on any given day, all golden ones weigh the same, and all pink ones also do). Let \\(G\\) and \\(K\\) represent the weights (in pounds) of these, respectively, where \\(G\\sim N({a},{b}^2)\\) and \\(K\\sim N({c},{d}^2)\\). Suppose " +
            "\\(\\rho_\{GK\}={e}.\\) Find the probability {f} golden pineapples weigh less than {g} pink one(s) on any given day.",
        answer: "j",
        vars: {
            "a": "randint(2,4)", // golden mean
            "b": "randuni(0.3,0.5,1)", // golden sd
            "c": "randint(5,7)", // pink mean
            "d": "randuni(0.7,1.0,1)", // pink sd
            "e": "randuni(0.3,0.5,2)", // correlation
            "f": "randint(@meval({c}-1@),@meval({c}+1@))",
            "gi": "meval(floor(a*f/c))",
            "g": "randint({gi},@meval({gi}+1@))",
            "h": "meval(f*a-g*c)", // E[fG - gK]
            "i": "meval(sqrt(f^2*b^2+g^2*d^2-2*f*g*e*b*d))", // SD[fG - gK]
            "j": "@pnorm(0,{h},{i})"
        },
        solution: "We know \\(\\mathbb E[{f}G-{g}K]={f}\\mu_G -{g}\\mu_K={h}\\) and \\(Var[{f}G-{g}K]={f}^2\\sigma_G^2+(-{g})^2\\sigma_K^2+2\\cdot{f}\\cdot(-{g})\\cdot\\rho_\{GK\}\\sigma_G \\sigma_K=@meval(round({i}^2,4)@).\\) With this, we can solve for " +
            "\\(P[{f}G - {g}K < 0]\\) by standarding this distribution and then using a Z-table/R."
    },
];

var cdistq_id = "cdist";
qtype_to_var[cdistq_id] = cont_dist_questions;
if (devMode) {
    console.log(`Loaded ${cont_dist_questions.length} continuous distribution questions.`)
}

