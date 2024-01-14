var point_est_questions = [
    {
        prob: "Suppose bike accidents occur at the intersection of Wright & Green according to a Poisson process of \\(\\lambda\\) accidents per week. To estimate \\(\\lambda,\\) Josh collects a sample of 10 weeks' worth of data. The numbers are the following: " +
            "\\({a},{b},{c},{d},{e},{f},{g},{h},{i},{j}.\\) Use a maximum likelihood estimator to find \\(\\hat \\lambda.\\)",
        answer: "round((a+b+c+d+e+f+g+h+i+j)/10,1)",
        vars: {
            "a": "randint(5,11)",
            "b": "randint(5,11)",
            "c": "randint(5,11)",
            "d": "randint(5,11)",
            "e": "randint(5,11)",
            "f": "randint(5,11)",
            "g": "randint(5,11)",
            "h": "randint(5,11)",
            "i": "randint(5,11)",
            "j": "randint(5,11)"
        },
        solution: "We know the MLE \\(\\hat\\lambda\\) of a Poisson distribution is \\(\\overline X,\\) the sample mean, so we can just find the mean of the 10 numbers."
    },
    {
        prob: "Suppose Michael receives cavities according to a Poisson process of \\(\\lambda\\) times per year. To estimate \\(\\lambda,\\) he reviews his dental records from the past 7 years and finds that he has had the following number of cavities for each year: " +
            "\\({a},{b},{c},{d},{e},{f},{g}.\\) Use a method of moments estimator to find \\(\\tilde \\lambda.\\)",
        answer: "(a+b+c+d+e+f+g)/7",
        vars: {
            "a": "randint(0,4)",
            "b": "randint(0,4)",
            "c": "randint(0,4)",
            "d": "randint(0,4)",
            "e": "randint(0,4)",
            "f": "randint(0,4)",
            "g": "randint(0,4)"
        },
        solution: "We know the MoM \\(\\tilde\\lambda\\) of a Poisson distribution is \\(\\overline X,\\) the sample mean, so we can just find the mean of the 7 numbers."
    },
    {
        prob: "Ron buys a magic coin that comes up heads \\(p\\%\\) of the time. Suppose he wants to estimate \\(p\\), so he flips it {a} times. If he counts a total of {b} heads, find \\(\\hat p\\) using the MLE criterion. Round your answer to the nearest integer.",
        answer: "round(100*b/a)",
        vars: {
            "a": "randint(1000,1500)",
            "b": "randint(300,900)"
        },
        solution: "If \\(X_1,\\ldots,X_n\\sim \\text\{Bernoulli\}(p)\\) and are iid, the MLE \\(\\hat p\\) is the number of successes divided by \\(n\\). Don't forget to convert this to a percent and round."
    },
    {
        prob: "Suppose the fish in Homer Lake have lengths that follow a (continuous) uniform distribution with lower bound \\({a}\\) and upper bound \\(\\theta\\). If Alex catches 7 fish with lengths \\({c},\\) \\({d}\\), \\({e}\\), \\({f}\\), " +
            "\\({g}\\), \\({h},\\) and \\({i},\\) use a MoM estimator to find \\(\\tilde\\theta.\\)",
        answer: "2*(c+d+e+f+g+h+i)/7-a",
        vars: {
            "a": "randint(3,6)",
            "b": "meval(3*a)",
            "c": "randuni({a},{b},1)",
            "d": "randuni({a},{b},1)",
            "e": "randuni({a},{b},1)",
            "f": "randuni({a},{b},1)",
            "g": "randuni({a},{b},1)",
            "h": "randuni({a},{b},1)",
            "i": "randuni({a},{b},1)",
        },
        solution: "If \\(X\\sim\\text{Unif}({a},\\theta),\\) then \\(\\mathbb E[X]=\\frac\{\\theta+{a}\}\{2\}.\\) We can set this equal to \\(\\overline X\\) and solve for \\(\\tilde\\theta\\) now. Side note: using an MoM estimator for a uniform distribution can " +
            "result in a garbage estimate where a data point in the sample is greater than \\(\\tilde\\theta.\\)"
    },
    {
        prob: "A mystery \\(K-\\)sided die is rolled 10 times. If the numbers that come up are \\({a},{b},{c},{d},{e},{f},{g},\\) and \\({h},\\) use the MLE criterion to find \\(\\hat K.\\)",
        answer: "max(a,b,c,d,e,f,g,h)",
        vars: {
            "a": "randint(6,20)",
            "b": "randint(6,20)",
            "c": "randint(6,20)",
            "d": "randint(6,20)",
            "e": "randint(6,20)",
            "f": "randint(6,20)",
            "g": "randint(6,20)",
            "h": "randint(6,20)",
        },
        solution: "Let \\(X\\) represent the value that comes up. Then \\(X\\) follows a discrete uniform distribution with lower bound 1 and upper bound \\(K\\), with \\(f_X(x)=\\frac 1K, x\\in\\{1,2,\\ldots,K\\}.\\) For an iid sample \\(\\{X_i\\}_\{i=1\}^n,\\) " +
            "the likelihood function is \\(L=\\frac1\{K^n\}\\) and the log-likelihood function is \\(\\ell=-n\\ln K.\\) Since the derivative of this w.r.t. \\(K\\) is \\(-\\frac nK,\\) which is negative for all \\(n,K>0,\\) " +
            "we know \\(L\\) is constantly decreasing with \\(K\\), so we should minimize \\(\\hat K\\) to maximize " +
            "\\(L.\\) We are also operating under the constraint that \\(K\\) is greater than or equal to every point in the sample, so we should set \\(\\hat K=\\max\\{X_i\\}_\{i=1\}^n.\\) (This is just an intuitive explanation. On a homework or exam, you should probably " +
            "use indicator functions.)"
    },
    {
        prob: "Suppose the lightbulbs at the dollar store have a lifetime following an exponential distribution with mean \\(\\theta\\) hours. A sample of five bulbs found their lifetimes to be \\({a},{b},{c},{d},\\) and \\({e}\\) hours. Use the MLE criteria " +
            "to find \\(\\hat\\theta.\\) (<i>Of course</i> we can model the lifetimes of these using an exponential distribution — they are dollar store lightbulbs, after all. 😎)",
        answer: "mean(a,b,c,d,e)",
        vars: {
            "a": "randuni(15,30,1)",
            "b": "randuni(15,30,1)",
            "c": "randuni(15,30,1)",
            "d": "randuni(15,30,1)",
            "e": "randuni(15,30,1)",
        },
        solution: "The MLE \\(\\hat\\theta\\) of an exponential distribution with mean \\(\\theta\\) is \\(\\overline X,\\) so we can simply find the mean of these numbers."
    },
    {
        prob: "Let \\(f(x;p)=p^\{-2\}xe^\{-x/p\},x>0,p>0\\). A sample of six numbers from this distribution is \\({a},{b},{c},{d},{e}\\) and \\({f}.\\) Use the MLE criteria " +
            "to find \\(\\hat p\\) for this sample.",
        answer: "mean(a,b,c,d,e,f)/2",
        vars: {
            "p": "randint(3,6)",
            "q": "meval(round(p*0.75,1))",
            "r": "meval(round(3*p,1))",
            "a": "randuni({q},{r},1)",
            "b": "randuni({q},{r},1)",
            "c": "randuni({q},{r},1)",
            "d": "randuni({q},{r},1)",
            "e": "randuni({q},{r},1)",
            "f": "randuni({q},{r},1)",
        },
        solution: "The MLE \\(\\hat p\\) of this distribution is \\(\\frac\{\\overline X\}2,\\) so find this using the given sample. Of course, you need to actually derive the MLE expression first."
    },
    {
        prob: "Let \\(f(x;p)=p^\{-2\}xe^\{-x/p\},x>0,p>0\\). A sample of six numbers from this distribution is \\({a},{b},{c},{d},{e}\\) and \\({f}.\\) Use the MoM criteria " +
            "to find \\(\\tilde p\\) for this sample.",
        answer: "mean(a,b,c,d,e,f)/2",
        vars: {
            "p": "randint(3,6)",
            "q": "meval(round(p*0.75,1))",
            "r": "meval(round(3*p,1))",
            "a": "randuni({q},{r},1)",
            "b": "randuni({q},{r},1)",
            "c": "randuni({q},{r},1)",
            "d": "randuni({q},{r},1)",
            "e": "randuni({q},{r},1)",
            "f": "randuni({q},{r},1)",
        },
        solution: "The MoM \\(\\tilde p\\) of this distribution is \\(\\frac\{\\overline X\}2,\\) so find this using the given sample. Of course, you need to actually derive the MoM expression first. (Hint: use tabular integration to find \\(\\mathbb E[X].\\))"
    },
    {
        prob: "Let \\(f(y;\\theta)=2\\theta^2y^3e^\{-\\theta y^2\},y>0,\\theta>0\\). A sample of four numbers from this distribution is \\({a},{b},{c}\\) and \\({d}.\\) Use the MLE criteria " +
            "to find \\(\\hat \\theta\\) for this sample.",
        answer: "8/(a^2+b^2+c^2+d^2)",
        vars: {
            "p": "randint(3,6)",
            "q": "meval(round(1.5/p,2))",
            "r": "meval(round(3/p,2))",
            "a": "randuni({q},{r},2)",
            "b": "randuni({q},{r},2)",
            "c": "randuni({q},{r},2)",
            "d": "randuni({q},{r},2)"
        },
        solution: "The MLE \\(\\hat \\theta\\) of this distribution is \\(\\frac \{2n\}\{\\sum_\{i=1\}^n x_i^2\},\\) so find this using the given sample. Of course, you need to actually derive the MLE expression first."
    },
    {
        prob: "Consider a random variable \\(X\\) with the following pmf: <table><tr><th> \\(x\\) </th> <th> \\(f(x)\\) </th></tr> <tr><td>\\(0\\)</td><td>\\(3\\theta/5\\)</td></tr> " +
            "<tr><td>\\(1\\)</td><td>\\(2\\theta/5\\)</td></tr> <tr><td>\\(2\\)</td><td>\\((3-3\\theta)/5\\)</td></tr> <tr><td>\\(3\\)</td><td>\\((2-2\\theta)/5\\)</td></tr> </table> " +
            "A sample of 10 numbers from this distribution contains {a} \\(0\\)(s), {b} \\(1\\)(s), {c} \\(2\\)(s), and @meval(10-{a}-{b}-{c}@) \\(3\\)(s). Use the MLE criteria " +
            "to find \\(\\hat \\theta\\) for this sample.",
        answer: "(a+b)/10",
        vars: {
            "a": "randint(1,3)",
            "b": "randint(0,4)",
            "c": "randint(1,3)",
        },
        solution: "Let \\(n_j\\) represent the number of elements in the sample equal to \\(j.\\) Then \\(L=(3\\theta/5)^\{n_0\}\\cdot(2\\theta/5)^\{n_1\}\\cdot((3-3\\theta)/5)^\{n_2\}\\cdot((2-2\\theta)/5)^\{n_3\}\\) and " +
            "\\(\\ell=n_0\\ln(3\\theta/5)+n_1\\ln(2\\theta/5)+n_2\\ln((3-3\\theta)/5)+n_3\\ln((2-2\\theta)/5).\\) When we take the derivative of this w.r.t. \\(\\theta\\), set it equal to 0, and solve for \\(\\theta\\), we get " +
            "\\(\\hat\\theta=\\frac\{n_0+n_1\}\{n_0+n_1+n_2+n_3\}\\)."
    },
    {
        prob: "Consider a random variable \\(X\\) with the following pmf: <table><tr><th> \\(x\\) </th> <th> \\(f(x)\\) </th></tr> <tr><td>\\(0\\)</td><td>\\(3\\theta/5\\)</td></tr> " +
            "<tr><td>\\(1\\)</td><td>\\(2\\theta/5\\)</td></tr> <tr><td>\\(2\\)</td><td>\\((3-3\\theta)/5\\)</td></tr> <tr><td>\\(3\\)</td><td>\\((2-2\\theta)/5\\)</td></tr> </table> " +
            "A sample of 10 numbers from this distribution contains {a} \\(0\\)(s), {b} \\(1\\)(s), {c} \\(2\\)(s), and {d} \\(3\\)(s). Use the MoM criteria " +
            "to find \\(\\tilde \\theta\\) for this sample.",
        answer: "(12-5*(b+2*c+3*d)/10)/10",
        vars: {
            "a": "randint(1,3)",
            "b": "randint(0,4)",
            "c": "randint(1,3)",
            "d": "meval(10-a-b-c)"
        },
        solution: "To find \\(\\mathbb E[X],\\) simply do \\(\\sum_{x=0}^3 x\\cdot f_X(x)=\\frac\{12-10\\theta\}\{5\}.\\) When we set this equal to \\(\\overline X\\) and solve for \\(\\theta,\\) we get \\(\\tilde\\theta=\\frac\{12-5\\overline X\}\{10\}.\\) " +
            "Now compute this using the sample."
    },
    {
        prob: "Consider a random variable \\(X\\) with the following pdf: \\(f(x;p)=\\frac\{2p-x\}\{2p^2\},0\\lt x\\lt 2p, p\\gt 0.\\) " +
            "A sample of six numbers from this distribution contains \\({a},{b},{c},{d},{e},\\) and \\({f}\\). Use the MoM criteria " +
            "to find \\(\\tilde p\\) for this sample.",
        answer: "3*mean(a,b,c,d,e,f)/2",
        vars: {
            "a": "randuni(2,7,1)",
            "b": "randuni(2,7,1)",
            "c": "randuni(2,7,1)",
            "d": "randuni(2,7,1)",
            "e": "randuni(2,7,1)",
            "f": "randuni(2,7,1)"
        },
        solution: "To find \\(\\mathbb E[X],\\) simply do \\(\\int_0^\{2p\} x\\cdot f(x)\\text\{ d\}x=\\frac\{2p\}\{3\}.\\) When we set this equal to \\(\\overline X\\) and solve for \\(p,\\) we get \\(\\tilde p=\\frac\{3\\overline X\}\{2\}.\\) " +
            "Now compute this using the sample."
    },
    {
        prob: "Consider a random variable \\(X\\) with the following pdf: \\(f(x;t)=8\\cdot\\frac\{3t-4x\}\{9t^2\},0\\lt x\\lt \\frac{3t}{4}, t\\gt 0.\\) " +
            "A sample of five numbers from this distribution contains \\({a},{b},{c},{d},\\) and \\({e}\\). Use the MoM criteria " +
            "to find \\(\\tilde t\\) for this sample.",
        answer: "4*mean(a,b,c,d,e)",
        vars: {
            "a": "randuni(2,7,1)",
            "b": "randuni(2,7,1)",
            "c": "randuni(2,7,1)",
            "d": "randuni(2,7,1)",
            "e": "randuni(2,7,1)",
        },
        solution: "To find \\(\\mathbb E[X],\\) simply do \\(\\int_0^\{3t/4\} x\\cdot f(x)\\text\{ d\}x=\\frac\{t\}\{4\}.\\) When we set this equal to \\(\\overline X\\) and solve for \\(t,\\) we get \\(\\tilde t=4\\overline X.\\) " +
            "Now compute this using the sample."
    },
    {
        prob: "Consider a random variable \\(X\\) with the following pdf: \\(f(x;q)=\\frac\{20q-8x\}\{25q^2\},0\\lt x\\lt \\frac{5q}{2}, q\\gt 0.\\) " +
            "A sample of five numbers from this distribution contains \\({a},{b},{c},{d},\\) and \\({e}\\). Use the MoM criteria " +
            "to find \\(\\tilde q\\) for this sample.",
        answer: "6*mean(a,b,c,d,e)/5",
        vars: {
            "a": "randuni(2,7,1)",
            "b": "randuni(2,7,1)",
            "c": "randuni(2,7,1)",
            "d": "randuni(2,7,1)",
            "e": "randuni(2,7,1)",
        },
        solution: "To find \\(\\mathbb E[X],\\) simply do \\(\\int_0^\{5q/2\} x\\cdot f(x)\\text\{ d\}x=\\frac\{5q\}\{6\}.\\) When we set this equal to \\(\\overline X\\) and solve for \\(q,\\) we get \\(\\tilde q=\\frac{6\\overline X}{5}.\\) " +
            "Now compute this using the sample."
    },
    {
        prob: "Suppose the number of students who show up to class follows a binomial distribution with size \\(N\\) and probability \\(p.\\) On ten days, Albert counts the number of students in class and ends up with the following list: {a}, {b}, {c}, {d}, {e}, " +
            "{f}, {g}, {h}, {i}, {j}. Use the MoM criteria to estimate \\(p\\) based on this sample. (Albert does not know \\(N,\\) his class size, because his dog Chloe ate his roster.)",
        answer: "m+1-n/m",
        vars: {
            "a": "randint(140,160)",
            "b": "randint(140,160)",
            "c": "randint(140,160)",
            "d": "randint(140,160)",
            "e": "randint(140,160)",
            "f": "randint(140,160)",
            "g": "randint(140,160)",
            "h": "randint(140,160)",
            "i": "randint(140,160)",
            "j": "randint(140,160)",
            "m": "meval(mean(a,b,c,d,e,f,g,h,i,j))",
            "n": "meval(mean(a^2,b^2,c^2,d^2,e^2,f^2,g^2,h^2,i^2,j^2))"
        },
        solution: "If \\(X\\sim \\text{Binomial}(N,p),\\) we know \\(\\mathbb E[X]=Np\\) and \\(\\mathbb E[X^2]=(\\mathbb E[X])^2+Var[X]=N^2p^2+Np(1-p).\\) We are therefore left with the equations \\(\\mathbb E[X]=Np=\\overline X\\) and " +
            "\\(\\mathbb E[X^2]=Np(Np+1-p)=\\overline {X^2}.\\) Solving for \\(\\tilde p\\) gives us \\(\\tilde p=\\overline X + 1 - \\frac{\\overline {X^2}}{\\overline X}.\\) Note that you can sometimes get negative estimates when using MoM for a binomial distribution."
    },
    {
        prob: "Let the pdf of \\(X\\) be \\(f(x;m)=\\frac{2m^2}{x^3},x\\geq m, m \\gt 0.\\) A sample of size 8 from this distribution is \\(\\{{a},{b},{c},{d},{e},{f},{g},{h}\\}\\). Use the MLE criteria to find \\(\\hat m\\) based on this sample.",
        answer: "min(a,b,c,d,e,f,g,h)",
        vars: {
            "a": "randuni(4,7,1)",
            "b": "randuni(4,7,1)",
            "c": "randuni(4,7,1)",
            "d": "randuni(4,7,1)",
            "e": "randuni(4,7,1)",
            "f": "randuni(4,7,1)",
            "g": "randuni(4,7,1)",
            "h": "randuni(4,7,1)"
        },
        solution: "The likelihood function is \\(L=\\frac{2^nm^{2n}}{\\prod_{i=1}^n x_i^3}\\) and the log-likelihood function is \\(\\ell=n\\ln2+2n\\ln m-3\\sum_{i=1}^n \\ln x_i.\\) The derivative of this w.r.t. \\(m\\) is \\(\\frac{2n}m,\\) which is always positive for " +
            "\\(n,m>0.\\) This means \\(L\\) is always increasing with \\(m,\\) so we should maximize \\(\\hat m\\) to maximize \\(L.\\) We are also operating under the constraint that \\(m\\) is less than or equal to every point in the sample, so we should set " +
            "\\(\\hat m=\\min\\{X_i\\}_\{i=1\}^n.\\) (This is just an intuitive explanation. On a homework or exam, you should probably use indicator functions.)"
    },
    {
        prob: "Let the pdf of \\(X\\) be \\(f(x;m)=\\frac{2m^2}{x^3},x\\geq m, m \\gt 0.\\) A sample of size 8 from this distribution is \\(\\{{a},{b},{c},{d},{e},{f},{g},{h}\\}\\). Use the MoM criteria to find \\(\\tilde m\\) based on this sample.",
        answer: "mean(a,b,c,d,e,f,g,h)/2",
        vars: {
            "a": "randuni(4,7,1)",
            "b": "randuni(4,7,1)",
            "c": "randuni(4,7,1)",
            "d": "randuni(4,7,1)",
            "e": "randuni(4,7,1)",
            "f": "randuni(4,7,1)",
            "g": "randuni(4,7,1)",
            "h": "randuni(4,7,1)"
        },
        solution: "The expected value of \\(X\\) is \\(\\int_m^{\\infty} x\\cdot f(x)\\text{ d}x=2m.\\) Setting this equal to \\(\\overline X\\) and solving for \\(m,\\) we have \\(\\tilde m=\\frac{\\overline X}{2}.\\) Now compute this using the sample."
    },
    {
        prob: "Each day, Luis records the number of 3-point attempts needed for a successful basket. Suppose this data follows a geometric distribution with probability \\(p\\). If his records for the past week contain the numbers {a}, {b}, {c}, {d}, {e}, " +
            "{f}, {g}, estimate \\(p\\) using the MLE criteria.",
        answer: "1/mean(a,b,c,d,e,f,g)",
        vars: {
            "a": "randint(4,10)",
            "b": "randint(4,10)",
            "c": "randint(4,10)",
            "d": "randint(4,10)",
            "e": "randint(4,10)",
            "f": "randint(4,10)",
            "g": "randint(4,10)",
        },
        solution: "The MLE for a geometric distribution is \\(\\hat p =\\frac1{\\overline X},\\) so compute this using the sample. If you are unsure where this came from, try deriving it. (Hint: the pmf is \\(f(x;p)=p(1-p)^{x-1}.\\))"
    },
    {
        prob: "Each day, Katniss records the number of attempts needed for a bullseye. Suppose this data follows a geometric distribution with probability \\(p\\). If her records for the past week contain the numbers {a}, {b}, {c}, {d}, {e}, " +
            "{f}, {g}, estimate \\(p\\) using the MoM criteria.",
        answer: "1/mean(a,b,c,d,e,f,g)",
        vars: {
            "a": "randint(2,7)",
            "b": "randint(2,7)",
            "c": "randint(2,7)",
            "d": "randint(2,7)",
            "e": "randint(2,7)",
            "f": "randint(2,7)",
            "g": "randint(2,7)",
        },
        solution: "The MoM for a geometric distribution is \\(\\tilde p =\\frac1{\\overline X},\\) so compute this using the sample. If you are unsure where this came from, try deriving it. (Hint: the mean is \\(\\mathbb E[X]=\\frac 1p.\\) Can you derive this?)"
    },
    {
        prob: "Suppose Ollivander's wands have lengths that follow a normal distribution with mean \\(\\mu\\) and variance \\(\\sigma^2.\\) If he samples six and sees they have lengths {a}, {b}, {c}, {d}, {e}, and {f}, find the MoM estimator \\(\\tilde{\\sigma}^2.\\)",
        answer: "h-g^2",
        vars: {
            "a": "randuni(10,14,1)",
            "b": "randuni(10,14,1)",
            "c": "randuni(10,14,1)",
            "d": "randuni(10,14,1)",
            "e": "randuni(10,14,1)",
            "f": "randuni(10,14,1)",
            "g": "meval(mean(a,b,c,d,e,f))",
            "h": "meval(mean(a^2,b^2,c^2,d^2,e^2,f^2))"
        },
        solution: "A normal distribution has mean \\(\\mathbb E[X]=\\mu\\) and variance \\(Var[X]=\\sigma^2\\), so its second moment is \\(\\mathbb E[X^2]=(\\mathbb E[X])^2+Var[X]=\\mu^2+\\sigma^2.\\) We therefore have the equations \\(\\mu=\\overline X\\) and " +
            "\\(\\mu^2+\\sigma^2=\\overline {X^2}.\\) Solving for \\(\\sigma^2\\), we have \\(\\tilde\\sigma^2=\\overline{X^2}-\\overline X^2.\\)"
    },
    {
        prob: "Suppose the heights in the NBA follow a normal distribution with mean \\(\\mu\\) inches and variance \\(\\sigma^2.\\) If Phil samples eight players and sees they have heights {a}, {b}, {c}, {d}, {e}, {f}, {g}, and {h}, find the MLE estimator " +
            "\\(\\hat{\\mu}.\\)",
        answer: "mean(a,b,c,d,e,f,g,h)",
        vars: {
            "a": "randuni(75,84,1)",
            "b": "randuni(75,84,1)",
            "c": "randuni(75,84,1)",
            "d": "randuni(75,84,1)",
            "e": "randuni(75,84,1)",
            "f": "randuni(75,84,1)",
            "g": "randuni(75,84,1)",
            "h": "randuni(75,84,1)"
        },
        solution: "The MLE for the mean of a normal distribution is \\(\\hat\\mu=\\overline X,\\) so compute this using the sample. If you are unsure where this came from, try deriving it (and also \\(\\hat\\sigma^2\\))."
    },
]

var pestq_id = "pestq";
qtype_to_var[pestq_id] = point_est_questions;
if (devMode) {
    console.log(`Loaded ${point_est_questions.length} point estimation questions.`)
}

