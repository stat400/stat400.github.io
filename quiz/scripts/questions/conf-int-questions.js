var confint_questions = [
    {
        prob: "In a sample of {f} students, the average number of calories eaten per day was {b}. If it is known the population standard deviation is {d} calories, compute the lower endpoint of a 95% two-sided confidence interval for the population mean.",
        answer: "b-e*d/sqrt(f)",
        vars: {
            "a": "randint(18,28)",
            "b": "meval(100*a)",
            "c": "randint(15,20)",
            "d": "meval(10*c)",
            "e": "@qnorm(0.975,0,1)",
            "f": "randint(30,50)"
        },
        solution: "The lower endpoint can be calculated using the formula \\(\\overline x-z_{\\alpha/2}\\frac{\\sigma}{\\sqrt{n}}.\\)"
    },
    {
        prob: "In a sample of {f} students, the average number of calories eaten per day was {b}. If it is known the population standard deviation is {d} calories, compute the lower endpoint of a 95% confidence lower bound for the population mean.",
        answer: "b-e*d/sqrt(f)",
        vars: {
            "a": "randint(18,28)",
            "b": "meval(100*a)",
            "c": "randint(15,20)",
            "d": "meval(10*c)",
            "e": "@qnorm(0.95,0,1)",
            "f": "randint(30,50)"
        },
        solution: "The lower endpoint can be calculated using the formula \\(\\overline x-z_{\\alpha}\\frac{\\sigma}{\\sqrt{n}}.\\)"
    },
    {
        prob: "At Pirdew University, a sample of {c} students found the average IQ to be {a}. If it is known the population standard deviation is {b} IQ points, compute the upper endpoint of a 90% two-sided confidence interval for the average IQ of a Pirdew student.",
        answer: "a+d*b/sqrt(c)",
        vars: {
            "a": "randint(60,85)",
            "b": "randint(13,18)",
            "c": "randint(70,100)",
            "d": "@qnorm(0.95,0,1)",
        },
        solution: "The upper endpoint can be calculated using the formula \\(\\overline x+z_{\\alpha/2}\\frac{\\sigma}{\\sqrt{n}}.\\)"
    },
    {
        prob: "At Pirdew University, a sample of {c} students found the average IQ to be {a}. If it is known the population standard deviation is {b} IQ points, compute the lower endpoint of a 90% confidence lower bound for the average IQ of a Pirdew student.",
        answer: "a-d*b/sqrt(c)",
        vars: {
            "a": "randint(60,85)",
            "b": "randint(13,18)",
            "c": "randint(70,100)",
            "d": "@qnorm(0.9,0,1)",
        },
        solution: "The lower endpoint can be calculated using the formula \\(\\overline x-z_{\\alpha}\\frac{\\sigma}{\\sqrt{n}}.\\)"
    },
    {
        prob: "A survey was taken at the local Booger Queen burger joint. There were {a} participants, and it was found the average weight was {b} pounds. If it is known the population standard deviation here is {c} pounds, find the upper endpoint of a " +
            "95% confidence upper bound for the average customer weight.",
        answer: "b+d*c/sqrt(a)",
        vars: {
            "a": "randint(30,50)",
            "b": "randint(175,225)",
            "c": "randint(20,40)",
            "d": "@qnorm(0.95,0,1)",
        },
        solution: "The upper endpoint can be calculated using the formula \\(\\overline x+z_{\\alpha}\\frac{\\sigma}{\\sqrt{n}}.\\)"
    },
    {
        prob: "In a lab, scientists pop {a} pieces of popcorn and measure how long it takes for each to pop. The average time was {b} seconds. If it is known the population variance is {c}, find the lower endpoint of a " +
            "95% two-sided confidence interval for the average number of seconds it takes for a kernel to pop.",
        answer: "b-d*sqrt(c)/sqrt(a)",
        vars: {
            "a": "randint(150,200)",
            "b": "randint(90,150)",
            "c": "randint(25,100)",
            "d": "@qnorm(0.975,0,1)",
        },
        solution: "The lower endpoint can be calculated using the formula \\(\\overline x-z_{\\alpha/2}\\frac{\\sigma}{\\sqrt{n}}.\\)"
    },
    {
        prob: "Tom, an irritated college student, collects data on the number of hours his neighbors spend partying loudly per day. Suppose the sample size is {a} days, with mean {b} hours and standard deviation {c}. Find the upper endpoint of a " +
            "90% two-sided confidence interval for the average number of hours his neighbors party per day.",
        answer: "b+d*c/sqrt(a)",
        vars: {
            "a": "randint(5,10)",
            "b": "randuni(3,6,1)",
            "c": "randuni(0.5,0.8,2)",
            "aa": "meval(a-1)",
            "d": "@qt(0.95,{aa})",
        },
        solution: "The upper endpoint can be calculated using the formula \\(\\overline x+t_{n-1,\\alpha/2}\\frac{s}{\\sqrt{n}}.\\)"
    },
    {
        prob: "To see how much chocolate he produces, Charlie samples data from {a} days. The sample average is {b} pounds, with a standard deviation of {c}. Find the lower endpoint of a 95% two-sided confidence interval for his average daily production.",
        answer: "b-d*c/sqrt(a)",
        vars: {
            "a": "randint(10,20)",
            "bb": "randint(70,130)",
            "b": "meval(10*bb)",
            "c": "randint(50,70)",
            "aa": "meval(a-1)",
            "d": "@qt(0.975,{aa})",
        },
        solution: "The lower endpoint can be calculated using the formula \\(\\overline x-t_{n-1,\\alpha/2}\\frac{s}{\\sqrt{n}}.\\)"
    },
    {
        prob: "A survey of {a} people is conducted at the Blue Tiger bar on a Friday night. Suppose the average number of drinks is {b} per person, with a standard deviation of {c}. Find the upper endpoint of a 90% confidence upper bound for the average number of drinks " +
            "per person on a Friday night here.",
        answer: "b+d*c/sqrt(a)",
        vars: {
            "a": "randint(20,25)",
            "b": "randuni(2,4,1)",
            "c": "randuni(0.5,1,1)",
            "aa": "meval(a-1)",
            "d": "@qt(0.9,{aa})",
        },
        solution: "The upper endpoint can be calculated using the formula \\(\\overline x+t_{n-1,\\alpha}\\frac{s}{\\sqrt{n}}.\\)"
    },
    {
        prob: "In {a} days, Micheal Felps consumed an average of {b} calories per day, with a standard deviation of {c}. Find the lower endpoint 90% two-sided confidence interval for the average number of calories consumed per day.",
        answer: "b-d*c/sqrt(a)",
        vars: {
            "a": "randint(5,15)",
            "bb": "randint(100,120)",
            "b": "meval(100*bb)",
            "cc": "randint(50,80)",
            "c": "meval(10*cc)",
            "aa": "meval(a-1)",
            "d": "@qt(0.95,{aa})",
        },
        solution: "The lower endpoint can be calculated using the formula \\(\\overline x-t_{n-1,\\alpha/2}\\frac{s}{\\sqrt{n}}.\\)"
    },
    {
        prob: "A survey of {a} \"fans\" of Enlightenment, a popular grunge band, was conducted. It was discovered that {b} of them had only ever heard their signature song, \"Reeks of Juvenile Sweat\". Find the upper endpoint of a 90% two-sided confidence interval " +
            "for the true proportion of \"fans\" who only know this song.",
        answer: "b/a+d*sqrt((b/a)*(1-b/a)/a)",
        vars: {
            "a": "randint(100,250)",
            "bb": "randint(30,50)",
            "b": "meval(round(bb/100*a))",
            "d": "@qnorm(0.95,0,1)",
        },
        solution: "The upper endpoint can be calculated using the formula \\(\\hat p+z_{\\alpha/2}\\sqrt{\\frac{\\hat p(1-\\hat p)}{n}}.\\)"
    },
    {
        prob: "A survey of {a} \"fans\" of Enlightenment, a popular grunge band, was conducted. It was discovered that {b} of them had only ever heard their signature song, \"Reeks of Juvenile Sweat\". Find the lower endpoint of a 90% confidence lower bound " +
            "for the true proportion of \"fans\" who only know this song.",
        answer: "b/a-d*sqrt((b/a)*(1-b/a)/a)",
        vars: {
            "a": "randint(100,250)",
            "bb": "randint(30,50)",
            "b": "meval(round(bb/100*a))",
            "d": "@qnorm(0.9,0,1)",
        },
        solution: "The lower endpoint can be calculated using the formula \\(\\hat p-z_{\\alpha}\\sqrt{\\frac{\\hat p(1-\\hat p)}{n}}.\\)"
    },
    {
        prob: "A survey of {a} fans of Enlightenment, a popular grunge band, was conducted. Of these, {b} believed the band made better music than Musicpark, another grunge band, but had never listened to a single Musicpark song. " +
            "Find the upper endpoint of a 95% two-sided confidence interval for the true proportion of such fans.",
        answer: "b/a+d*sqrt((b/a)*(1-b/a)/a)",
        vars: {
            "a": "randint(100,250)",
            "bb": "randint(70,80)",
            "b": "meval(round(bb/100*a))",
            "d": "@qnorm(0.975,0,1)",
        },
        solution: "The upper endpoint can be calculated using the formula \\(\\hat p+z_{\\alpha/2}\\sqrt{\\frac{\\hat p(1-\\hat p)}{n}}.\\)"
    },
    {
        prob: "A survey of {a} residents of the dorm FART was conducted. In response to the question \"Have you ever needed to call maintenance?\", {b} answered \"YES\". " +
            "Find the upper endpoint of a 95% confidence upper bound for the true proportion of FART residents who have needed to call maintenance.",
        answer: "b/a+d*sqrt((b/a)*(1-b/a)/a)",
        vars: {
            "a": "randint(50,70)",
            "bb": "randint(55,70)",
            "b": "meval(round(bb/100*a))",
            "d": "@qnorm(0.95,0,1)",
        },
        solution: "The upper endpoint can be calculated using the formula \\(\\hat p+z_{\\alpha}\\sqrt{\\frac{\\hat p(1-\\hat p)}{n}}.\\)"
    },
    {
        prob: "A survey of {a} residents of the dorm FART was conducted. In response to the question \"Have you ever needed to call maintenance?\", {b} answered \"YES\". " +
            "Find the lower endpoint of a 95% two-sided confidence interval for the true proportion of FART residents who have needed to call maintenance.",
        answer: "b/a-d*sqrt((b/a)*(1-b/a)/a)",
        vars: {
            "a": "randint(50,70)",
            "bb": "randint(55,70)",
            "b": "meval(round(bb/100*a))",
            "d": "@qnorm(0.975,0,1)",
        },
        solution: "The lower endpoint can be calculated using the formula \\(\\hat p-z_{\\alpha/2}\\sqrt{\\frac{\\hat p(1-\\hat p)}{n}}.\\)"
    },
    {
        prob: "A survey of {a} Americans was conducted. It was discovered {b} had received at least one dose of a COVID vaccine. Find the lower endpoint of a 90% two-sided confidence interval for the proportion of all Americans " +
            "who have received at least one dose of the vaccine.",
        answer: "b/a-d*sqrt((b/a)*(1-b/a)/a)",
        vars: {
            "a": "randint(300,500)",
            "bb": "randint(55,70)",
            "b": "meval(round(bb/100*a))",
            "d": "@qnorm(0.95,0,1)",
        },
        solution: "The lower endpoint can be calculated using the formula \\(\\hat p-z_{\\alpha/2}\\sqrt{\\frac{\\hat p(1-\\hat p)}{n}}.\\)"
    },
    {
        prob: "A survey of {a} U of I students was conducted. Of these, {b} pronounce \"syrup\" like \"SEER-up\" (aka the correct way), while the rest pronounce it \"SIR-up\". Find the upper endpoint of a 95% confidence upper bound for the proportion of U of I " +
            "students who pronounce \"syrup\" <i>correctly</i>.",
        answer: "b/a+d*sqrt((b/a)*(1-b/a)/a)",
        vars: {
            "a": "randint(150,200)",
            "bb": "randint(45,60)",
            "b": "meval(round(bb/100*a))",
            "d": "@qnorm(0.95,0,1)",
        },
        solution: "The upper endpoint can be calculated using the formula \\(\\hat p+z_{\\alpha}\\sqrt{\\frac{\\hat p(1-\\hat p)}{n}}.\\)"
    },
    {
        prob: "At a water bottling plant, Wall-E fills 500-mL bottles. A sample of {a} bottles is collected, and the sample variance is {b} mL\\(^2\\). Find the upper endpoint of a 95% two-sided confidence interval for the variance of bottle filling.",
        answer: "(a-1)*b/d",
        vars: {
            "a": "randint(50,70)",
            "b": "randuni(1,2.5,1)",
            "aa": "meval(a-1)",
            "d": "@qchisq(0.025,{aa})",
        },
        solution: "The upper endpoint can be calculated using the formula \\(\\frac{(n-1)s^2}{\\chi^2_{n-1,1-\\alpha/2}}.\\)"
    },
    {
        prob: "At a water bottling plant, Wall-E fills 500-mL bottles. A sample of {a} bottles is collected, and the sample variance is {b} mL\\(^2\\). Find the lower endpoint of a 90% confidence lower bound for the variance of bottle filling.",
        answer: "(a-1)*b/d",
        vars: {
            "a": "randint(50,70)",
            "b": "randuni(1,2.5,1)",
            "aa": "meval(a-1)",
            "d": "@qchisq(0.9,{aa})",
        },
        solution: "The lower endpoint can be calculated using the formula \\(\\frac{(n-1)s^2}{\\chi^2_{n-1,\\alpha}}.\\)"
    },
    {
        prob: "To practice for the school archery team tryouts, Katniss shoots {a} arrows at a target. The variance of the distance to the center is {b} in.\\(^2\\). Find the lower endpoint of a 90% two-sided confidence interval for the true variance.",
        answer: "(a-1)*b/d",
        vars: {
            "a": "randint(30,40)",
            "b": "randuni(2,3,1)",
            "aa": "meval(a-1)",
            "d": "@qchisq(0.95,{aa})",
        },
        solution: "The lower endpoint can be calculated using the formula \\(\\frac{(n-1)s^2}{\\chi^2_{n-1,\\alpha/2}}.\\)"
    },
    {
        prob: "Suppose Eli's Electronics manufactures thermostats. On inspection day, a manager randomly tests {a} products and measures the difference between the observed and expected temperatures, resulting in a variance of {b} \\(^\\circ\\text{F}^2.\\) " +
            "Find the lower endpoint of a 95% two-sided confidence interval for the true standard deviation.",
        answer: "sqrt((a-1)*b/d)",
        vars: {
            "a": "randint(30,40)",
            "b": "randuni(0.5,1,1)",
            "aa": "meval(a-1)",
            "d": "@qchisq(0.975,{aa})",
        },
        solution: "The lower endpoint can be calculated using the formula \\(\\sqrt{\\frac{(n-1)s^2}{\\chi^2_{n-1,\\alpha/2}}}.\\)"
    },
    {
        prob: "Suppose Eli's Electronics manufactures thermostats. On inspection day, a manager randomly tests {a} products and measures the difference between the observed and expected temperatures, resulting in a variance of {b} \\(^\\circ\\text{F}^2.\\) " +
            "Find the lower endpoint of a 95% confidence lower bound for the true standard deviation.",
        answer: "sqrt((a-1)*b/d)",
        vars: {
            "a": "randint(30,40)",
            "b": "randuni(0.5,1,1)",
            "aa": "meval(a-1)",
            "d": "@qchisq(0.95,{aa})",
        },
        solution: "The lower endpoint can be calculated using the formula \\(\\sqrt{\\frac{(n-1)s^2}{\\chi^2_{n-1,\\alpha}}}.\\)"
    },
    {
        prob: "Suppose Chloe hoards treats and gambles them with the other dogs on the block every week. In the past {a} weeks, the variance of her winnings (and losses) was {b} treats\\(^2\\). Find the upper bound of a 90% two-sided confidence interval for the " +
            "true standard deviation.",
        answer: "sqrt((a-1)*b/d)",
        vars: {
            "a": "randint(5,10)",
            "b": "randuni(3,4,1)",
            "aa": "meval(a-1)",
            "d": "@qchisq(0.05,{aa})",
        },
        solution: "The upper endpoint can be calculated using the formula \\(\\sqrt{\\frac{(n-1)s^2}{\\chi^2_{n-1,1-\\alpha/2}}}.\\)"
    },
    {
        prob: "A survey of {a} males and {b} females is conducted. On average, male responders played video games for {c} minutes a day, compared to {d} for females. If it is known the population standard deviation is {e} minutes for males and {f} for " +
            "females, find the upper endpoint of a 90% two-sided confidence interval for the true difference in average minutes per day between the two groups. ⭐",
        answer: "(c-d)+g*sqrt(e^2/a+f^2/b)",
        vars: {
            "a": "randint(100,200)",
            "b": "randint(100,200)",
            "c": "randint(300,360)",
            "d": "randint(30,60)",
            "e": "randint(60,100)",
            "f": "randint(10,20)",
            "g": "@qnorm(0.95,0,1)",
        },
        solution: "The upper endpoint can be calculated using the formula \\((\\overline x_1-\\overline x_2) + z_{\\alpha/2}\\sqrt{\\frac{\\sigma_1^2}{n_1}+\\frac{\\sigma_2^2}{n_2}}.\\)"
    },
    {
        prob: "A survey of {a} males and {b} females is conducted. On average, male responders ate {c} calories a day, compared to {d} for females. If it is known the population standard deviation is {e} minutes for males and {f} for " +
            "females, find the lower endpoint of a 95% two-sided confidence interval for the true difference in average calories per day between the two groups. ⭐",
        answer: "(c-d)-g*sqrt(e^2/a+f^2/b)",
        vars: {
            "a": "randint(100,200)",
            "b": "randint(100,200)",
            "cc": "randint(23,28)",
            "dd": "randint(18,22)",
            "c": "meval(100*cc)",
            "d": "meval(100*dd)",
            "ee": "randint(23,28)",
            "ff": "randint(18,22)",
            "e": "meval(10*ee)",
            "f": "meval(10*ff)",
            "g": "@qnorm(0.975,0,1)",
        },
        solution: "The lower endpoint can be calculated using the formula \\((\\overline x_1-\\overline x_2) - z_{\\alpha/2}\\sqrt{\\frac{\\sigma_1^2}{n_1}+\\frac{\\sigma_2^2}{n_2}}.\\)"
    },
    {
        prob: "A survey of {a} students from Albert's class and {b} from Bob's class is conducted. On average, Albert's students spent {c} hours on homework per week, compared to {d} for Bob's. The sample standard deviations are {e} and {f} hours, " +
            "respectively. Assume the population variances are equal. Find the upper endpoint of a 95% two-sided confidence interval for the true difference in average hours on homework per week between the two groups. ⭐",
        answer: "(c-d)+g*sqrt(1/a+1/b)*sqrt(((a-1)*e^2+(b-1)*f^2)/(a+b-2))",
        vars: {
            "a": "randint(30,40)",
            "b": "randint(30,40)",
            "c": "randuni(2,3,1)",
            "d": "randuni(3.5,4.5,1)",
            "e": "randuni(0.5,1,1)",
            "f": "randuni(0.6,1.2,1)",
            "df": "meval(a+b-2)",
            "g": "@qt(0.975,{df})",
        },
        solution: "The upper endpoint can be calculated using the formula \\((\\overline x_1-\\overline x_2) + t_{n_1+n_2-2,\\alpha/2}\\sqrt{s_p^2\\left(\\frac1{n_1}+\\frac1{n_2}\\right)},\\) where \\(s_p^2=\\frac{(n_1-1)s_1^2+(n_2-1)s_2^2}{n_1+n_2-2}.\\)"
    },
    {
        prob: "A survey of {a} Stats majors and {b} non-Stats majors is conducted. On average, Stats majors received a {c} in STAT 400, compared to {d} for non-Stat majors. The sample standard deviations are {e} and {f}, " +
            "respectively. Assume the population variances are equal. Find the lower endpoint of a 90% two-sided confidence interval for the true difference in average grade received between the two groups. ⭐",
        answer: "(c-d)-g*sqrt(1/a+1/b)*sqrt(((a-1)*e^2+(b-1)*f^2)/(a+b-2))",
        vars: {
            "a": "randint(30,40)",
            "b": "randint(30,40)",
            "c": "randint(95,98)",
            "d": "randint(91,93)",
            "e": "randuni(2,3,1)",
            "f": "randuni(2,3,1)",
            "df": "meval(a+b-2)",
            "g": "@qt(0.95,{df})",
        },
        solution: "The lower endpoint can be calculated using the formula \\((\\overline x_1-\\overline x_2) - t_{n_1+n_2-2,\\alpha/2}\\sqrt{s_p^2\\left(\\frac1{n_1}+\\frac1{n_2}\\right)},\\) where \\(s_p^2=\\frac{(n_1-1)s_1^2+(n_2-1)s_2^2}{n_1+n_2-2}.\\)"
    },
    {
        prob: "Chloe and Zoe have an asynchronous eating contest. In {a} sessions, Chloe eats an average of {c} treats, with a standard deviation of {e}. In {b} sessions, Zoe eats an average of {d} treats, with a standard deviation of {f}. " +
            "Assume the true variances are unequal. Find the lower endpoint of a 90% two-sided confidence interval for the true average difference in number of treats eaten per session between the dogs. (Use Welch's degrees of freedom.) ⭐",
        answer: "(c-d)-g*sqrt(e^2/a+f^2/b)",
        vars: {
            "a": "randint(6,10)",
            "b": "randint(6,10)",
            "c": "randint(40,50)",
            "d": "randint(35,45)",
            "e": "randint(5,8)",
            "f": "randint(4,8)",
            "df": "meval(floor((e^2/a+f^2/b)^2/((e^2/a)^2/(a-1)+(f^2/b)^2/(b-1))))",
            "g": "@qt(0.95,{df})",
        },
        solution: "The lower endpoint can be calculated using the formula \\((\\overline x_1-\\overline x_2) - t_{df,\\alpha/2}\\sqrt{\\frac{s_1^2}{n_1}+\\frac{s_2^2}{n_2}},\\) where \\(df=\\left\\lfloor\\frac{(s_1^2/n_1+s_2^2/n_2)^2}" +
            "{(s_1^2/n_1)^2/(n_1-1)+(s_2^2/n_2)^2/(n_2-1)}\\right\\rfloor.\\)"
    },
    {
        prob: "Suppose {a} males and {b} females responded to a survey. It was discovered that in the shower, males spent an average of {c} minutes, compared to {d} for females. Their standard deviations were {e} and {f} minutes, respectively. " +
            "Assume the population variances are unequal. Find the upper endpoint of a 95% two-sided confidence interval for the true average difference in minutes spent in the shower for the two groups. (Use Welch's degrees of freedom.) ⭐",
        answer: "(c-d)+g*sqrt(e^2/a+f^2/b)",
        vars: {
            "a": "randint(30,40)",
            "b": "randint(40,50)",
            "c": "randint(10,15)",
            "d": "randint(20,25)",
            "e": "randint(2,4)",
            "f": "randint(4,8)",
            "df": "meval(floor((e^2/a+f^2/b)^2/((e^2/a)^2/(a-1)+(f^2/b)^2/(b-1))))",
            "g": "@qt(0.975,{df})",
        },
        solution: "The upper endpoint can be calculated using the formula \\((\\overline x_1-\\overline x_2) + t_{df,\\alpha/2}\\sqrt{\\frac{s_1^2}{n_1}+\\frac{s_2^2}{n_2}},\\) where \\(df=\\left\\lfloor\\frac{(s_1^2/n_1+s_2^2/n_2)^2}" +
            "{(s_1^2/n_1)^2/(n_1-1)+(s_2^2/n_2)^2/(n_2-1)}\\right\\rfloor.\\)"
    },
    {
        prob: "A survey of {a} people was conducted, and the difference in the number of Kleenex used weekly in the summer and winter was recorded for each person. Suppose the mean was {b} Kleenexes, and the standard deviation was {c}. " +
            "Find the lower endpoint of a 90% two-sided confidence interval for the true average difference in number of Kleenex used between the two seasons. ⭐",
        answer: "b-d*c/sqrt(a)",
        vars: {
            "a": "randint(40,50)",
            "b": "randint(-15,-5)",
            "c": "randint(3,5)",
            "df": "meval(a-1)",
            "d": "@qt(0.95,{df})",
        },
        solution: "The lower endpoint can be calculated using the formula \\(\\overline x_D - t_{n-1,\\alpha/2}\\frac{s_D}{\\sqrt n}.\\)"
    },
    {
        prob: "At Pirdew University, {a} people have their IQs recorded on their first day of freshman year. This figure is tested again after graduation. The average change in IQ was {b} points, and the standard deviation of changes was {c}. " +
            "Find the lower endpoint of a 95% two-sided confidence interval for the true average change in IQ before and after attending Pirdew. ⭐",
        answer: "b-d*c/sqrt(a)",
        vars: {
            "a": "randint(70,80)",
            "b": "randint(-25,-15)",
            "c": "randint(3,7)",
            "df": "meval(a-1)",
            "d": "@qt(0.975,{df})",
        },
        solution: "The lower endpoint can be calculated using the formula \\(\\overline x_D - t_{n-1,\\alpha/2}\\frac{s_D}{\\sqrt n}.\\)"
    },
    {
        prob: "To test the efficacy of a new fertilizer, Old MacDonald grows {a} carrots with the old fertilizer on Plot A and {b} carrots with the new one on Plot B. A few months later, he finds that {c} carrots from Plot A measure at least 6 inches, " +
            "compared to {d} from Plot B. Find the upper endpoint of a 95% two-sided confidence interval for the true difference in proportions, of carrots at least six inches, between the two groups. ⭐",
        answer: "p1-p2+e*sqrt(p1*(1-p1)/a+p2*(1-p2)/b)",
        vars: {
            "a": "randint(60,70)",
            "b": "randint(70,80)",
            "c": "randint(30,40)",
            "d": "randint(45,55)",
            "e": "@qnorm(0.975,0,1)",
            "p1": "meval(c/a)",
            "p2": "meval(d/b)"
        },
        solution: "The upper endpoint can be calculated using the formula \\((\\hat p_1 - \\hat p_2) + z_{\\alpha/2}\\sqrt{\\frac{\\hat p_1(1-\\hat p_1)}{n_1}+\\frac{\\hat p_2(1-\\hat p_2)}{n_2}}.\\)"
    },
    {
        prob: "{a} men and {b} women are surveyed about their success with Friendr, an app for meeting new people. Of the participants, {c} men and {d} women reported a success. " +
            "Find the lower endpoint of a 90% two-sided confidence interval for the true difference in proportions, of people who found success, between the two groups. ⭐",
        answer: "p1-p2-e*sqrt(p1*(1-p1)/a+p2*(1-p2)/b)",
        vars: {
            "a": "randint(100,130)",
            "b": "randint(50,60)",
            "c": "randint(50,60)",
            "d": "randint(30,45)",
            "e": "@qnorm(0.95,0,1)",
            "p1": "meval(c/a)",
            "p2": "meval(d/b)"
        },
        solution: "The lower endpoint can be calculated using the formula \\((\\hat p_1 - \\hat p_2) - z_{\\alpha/2}\\sqrt{\\frac{\\hat p_1(1-\\hat p_1)}{n_1}+\\frac{\\hat p_2(1-\\hat p_2)}{n_2}}.\\)"
    },
    {
        prob: "Ash wants to form a 95% confidence interval with a margin of error {a} pounds for the average weight of a Snorlax. If the Pokédex claims the population standard deviation is {b} pounds, " +
            "find the required sample size to create such a confidence interval.",
        answer: "ceil((c*b/a)^2)",
        vars: {
            "a": "randuni(0.5,1.5,1)",
            "b": "randint(10,20)",
            "c": "@qnorm(0.975,0,1)",
        },
        solution: "The required sample size can be calculated using the formula \\(\\left\\lceil\\left(\\frac{z_{\\alpha/2}\\sigma}{\\varepsilon}\\right)^2\\right\\rceil.\\)"
    },
]

var confint_id = "cintq";
qtype_to_var[confint_id] = confint_questions;
if (devMode) {
    console.log(`Loaded ${confint_questions.length} confidence interval questions.`)
}
