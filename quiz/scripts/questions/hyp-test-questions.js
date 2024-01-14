var hyp_test_questions = [
    {
        prob: "Steve believes he can dig out an average sea-level high chunk to bedrock level in {a} minutes. His friend Alex does not believe this, so she makes him mine {b} of these. If the average time is {c} minutes and the standard deviation is {d}, " +
            "determine the p-value of this test.",
        answer: "2*(1-e)",
        vars: {
            "a": "randuni(39,41,1)",
            "b": "randint(7,10)",
            "c": "randuni(42,44,1)",
            "d": "randuni(2,4,1)",
            "df": "meval(b-1)",
            "t": "meval((c-a)/(d/sqrt(b)))",
            "e": "@pt({t}, {df})",
        },
        solution: "The p-value is two times the area to the right of the test statistic in this case. The test statistic can be calculated using the formula \\(\\frac{\\overline x - \\mu}{s/\\sqrt n}\\sim t_{n-1}.\\) " +
            "To find the area to the right of the test statistic, do \\(\\texttt{1-pt(({c}-{a})/({d}/sqrt({b})), {b}-1)}\\) in R."
    },
    {
        prob: "Steve believes he can dig out an average sea-level high chunk to bedrock level in {a} minutes. His friend Alex does not believe this, so she makes him mine {b} of these. If the average time is {c} minutes and the standard deviation is {d}, " +
            "determine the difference between test statistic and the positive critical value of the test. Assume \\(\\alpha=0.05.\\) (In this case, the difference is positive if \\(H_0\\) is rejected.)",
        answer: "t-e",
        vars: {
            "a": "randuni(39,41,1)",
            "b": "randint(7,10)",
            "c": "randuni(42,44,1)",
            "d": "randuni(2,4,1)",
            "df": "meval(b-1)",
            "t": "meval((c-a)/(d/sqrt(b)))",
            "e": "@qt(0.975, {df})",
        },
        solution: "The test statistic can be calculated using the formula \\(\\frac{\\overline x - \\mu}{s/\\sqrt n}\\sim t_{n-1}.\\) The positive critical value is \\(t_{n-1,\\alpha/2}\\) and can be found using R."
    },
    {
        prob: "Mario believes he can complete a lap of Rainbow Road in {a} seconds, but Luigi insists it will take longer. To test this, Mario completes {b} laps with an average time of {c} seconds and a standard deviation of {d}. " +
            "Find the p-value of this test.",
        answer: "1-e",
        vars: {
            "a": "randint(60,70)", // mu
            "b": "randint(5,8)", // n
            "c": "randint(65,75)", // xbar
            "d": "randint(5,10)", // s
            "df": "meval(b-1)",
            "t": "meval((c-a)/(d/sqrt(b)))", // test statistic
            "e": "@pt({t}, {df})",
        },
        solution: "The p-value is the area to the right of the test statistic. The test statistic can be calculated using the formula \\(\\frac{\\overline x - \\mu}{s/\\sqrt n}\\sim t_{n-1}.\\) " +
            "To find the area to the right of the test statistic, do \\(\\texttt{1-pt(({c}-{a})/({d}/sqrt({b})), {b}-1)}\\) in R."
    },
    {
        prob: "Mario believes he can complete a lap of Rainbow Road in {a} seconds, but Luigi insists it will take longer. To test this, Mario completes {b} laps with an average time of {c} seconds and a standard deviation of {d}. " +
            "If \\(\\alpha=0.1,\\) determine the difference between the test statistic and the critical value of this test. (In this case, the difference is positive if \\(H_0\\) is rejected.)",
        answer: "t-e",
        vars: {
            "a": "randint(60,70)", // mu
            "b": "randint(5,8)", // n
            "c": "randint(65,75)", // xbar
            "d": "randint(5,10)", // s
            "df": "meval(b-1)",
            "t": "meval((c-a)/(d/sqrt(b)))", // test statistic
            "e": "@qt(0.9, {df})",
        },
        solution: "The test statistic can be calculated using the formula \\(\\frac{\\overline x - \\mu}{s/\\sqrt n}\\sim t_{n-1}.\\) The critical value is \\(t_{n-1,\\alpha}\\) and can be found using R."
    },
    {
        prob: "Kung Pao Tea claims its stores in the country Bevvyland earn an average of {a} dollars in revenue per month, with a standard deviation of {d}. You think the actual revenue is higher and they are simply trying to evade taxes, so you collect " +
            "data from {b} stores. In your sample, the average revenue is {c}. If \\(\\alpha=0.05,\\) determine the difference between the test statistic and the critical value of this test. (In this case, the difference is positive if \\(H_0\\) is rejected.)",
        answer: "t-e",
        vars: {
            "aa": "randint(43,45)",
            "a": "meval(1000*aa)", // mu
            "b": "randint(15,20)", // n
            "cc": "randint(40,42)",
            "c": "meval(1000*cc)", // xbar
            "dd": "randint(80,90)",
            "d": "meval(100*dd)", // sigma
            "t": "meval((c-a)/(d/sqrt(b)))", // test statistic
            "e": "@qnorm(0.95,0,1)",
        },
        solution: "The test statistic can be calculated using the formula \\(\\frac{\\overline x - \\mu}{\\sigma/\\sqrt n}\\sim Z.\\) The critical value is \\(z_{\\alpha}\\) and can be found using R."
    },
    {
        prob: "Kung Pao Tea claims its stores in the country Bevvyland earn an average of {a} dollars in revenue per month, with a standard deviation of {d}. You think the actual revenue is higher and they are simply trying to evade taxes, so you collect " +
            "data from {b} stores. In your sample, the average revenue is {c}. Determine the p-value of this test.",
        answer: "1-e",
        vars: {
            "aa": "randint(43,45)",
            "a": "meval(1000*aa)", // mu
            "b": "randint(15,20)", // n
            "cc": "randint(40,42)",
            "c": "meval(1000*cc)", // xbar
            "dd": "randint(80,90)",
            "d": "meval(100*dd)", // sigma
            "t": "meval((c-a)/(d/sqrt(b)))", // test statistic
            "e": "@pnorm({t},0,1)",
        },
        solution: "The p-value is the area to the right of the test statistic. The test statistic can be calculated using the formula \\(\\frac{\\overline x - \\mu}{\\sigma/\\sqrt n}\\sim Z.\\) " +
        "To find the area to the right of the test statistic, do \\(\\texttt{1-pnorm(({c}-{a})/({d}/sqrt({b})))}\\) in R."
    },
    {
        prob: "A giant peach orchard claims its peaches are normally distributed with a mean weight of {a} pounds with a standard deviation of {d}. James believes the real figure is lower, so he picks {b} peaches. The average weight in his sample is {c} pounds. " +
            "Determine the p-value of this test.",
        answer: "e",
        vars: {
            "a": "randuni(11,13,1)", // mu
            "b": "randint(5,8)", // n
            "c": "randuni(11,13,1)", // xbar
            "d": "randuni(1.5,2.5,1)", // sigma
            "t": "meval((c-a)/(d/sqrt(b)))", // test statistic
            "e": "@pnorm({t},0,1)",
        },
        solution: "The p-value is the area to the left of the test statistic. The test statistic can be calculated using the formula \\(\\frac{\\overline x - \\mu}{\\sigma/\\sqrt n}\\sim Z.\\) " +
        "To find the area to the left of the test statistic, do \\(\\texttt{pnorm(({c}-{a})/({d}/sqrt({b})))}\\) in R."
    },
    {
        prob: "A giant peach orchard claims its peaches are normally distributed with a mean weight of {a} pounds with a standard deviation of {d}. James believes the real figure is lower, so he picks {b} peaches. The average weight in his sample is {c} pounds. " +
            "If \\(\\alpha=0.05,\\) determine the difference between the test statistic and the critical value of this test. (In this case, the difference is negative if \\(H_0\\) is rejected.)",
        answer: "t-e",
        vars: {
            "a": "randuni(11,13,1)", // mu
            "b": "randint(5,8)", // n
            "c": "randuni(11,13,1)", // xbar
            "d": "randuni(1.5,2.5,1)", // sigma
            "t": "meval((c-a)/(d/sqrt(b)))", // test statistic
            "e": "@qnorm(0.05,0,1)",
        },
        solution: "The test statistic can be calculated using the formula \\(\\frac{\\overline x - \\mu}{\\sigma/\\sqrt n}\\sim Z.\\) The critical value is \\(z_{1-\\alpha}\\) and can be found using R."
    },
    {
        prob: "Suppose fuzzbeed.com claims {a}% of people have a hitchhiker's thumb. Bob does not believe this, so he surveys {b} people and finds that {c} participants have a hitchhiker's thumb. " +
            "If \\(\\alpha=0.05,\\) determine the difference between the test statistic and the negative critical value of this test.",
        answer: "t-e",
        vars: {
            "a": "randuni(30,35,1)", // p (x100)
            "b": "randint(55,60)", // n
            "cc": "randuni(0.25,0.4,2)", 
            "c": "meval(round(cc*b))", // y
            "ph": "meval(c/b)",
            "p": "meval(a/100)",
            "t": "meval((ph-p)/sqrt(p*(1-p)/b))", // test statistic
            "e": "@qnorm(0.025,0,1)",
        },
        solution: "The test statistic can be calculated using the formula \\(\\frac{\\hat p - p}{\\sqrt{p(1-p)/n}}\\sim Z.\\) The negative critical value is \\(z_{1-\\alpha/2}\\) and can be found using R."
    },
    {
        prob: "Suppose fuzzbeed.com claims {a}% of people have a hitchhiker's thumb. Bob does not believe this, so he surveys {b} people and finds that {c} participants have a hitchhiker's thumb. " +
            "Determine the p-value of this test.",
        answer: "2*e",
        vars: {
            "a": "randuni(30,35,1)", // p (x100)
            "b": "randint(55,60)", // n
            "cc": "randuni(0.25,0.4,2)", 
            "c": "meval(round(cc*b))", // y
            "ph": "meval(c/b)",
            "p": "meval(a/100)",
            "t": "meval(-abs((ph-p)/sqrt(p*(1-p)/b)))", // negative test statistic
            "e": "@pnorm({t},0,1)",
        },
        solution: "The p-value is 2 times the area to the left of the test statistic if the test statistic is negative, or 2 times the area to the right if it is positive. The test statistic can be calculated using the formula " +
            "\\(\\frac{\\hat p - p}{\\sqrt{p(1-p)/n}}\\sim Z.\\)"
    },
    {
        prob: "The manager of a lightsaber factory tells Luke that {a}% of all lightsabers are red. Luke believes the real proportion is smaller, so he samples {b} of them and finds that {c} are red. Compute the p-value of this test.",
        answer: "e",
        vars: {
            "a": "randuni(40,50,1)", // p (x100)
            "b": "randint(100,120)", // n
            "cc": "randuni(0.3,0.4,2)", 
            "c": "meval(round(cc*b))", // y
            "ph": "meval(c/b)",
            "p": "meval(a/100)",
            "t": "meval((ph-p)/sqrt(p*(1-p)/b))", // test statistic
            "e": "@pnorm({t},0,1)",
            "f": "meval(round(10*a))"
        },
        solution: "The p-value is the area to the left of the test statistic. The test statistic can be calculated using the formula \\(\\frac{\\hat p - p}{\\sqrt{p(1-p)/n}}\\sim Z.\\)" +
            "To find the area to the left of the test statistic, do \\(\\texttt{pnorm(({c}/{b}-0.{f})/sqrt(0.{f}*(1-0.{f})/{b}))}\\) in R."
    },
    {
        prob: "The manager of a lightsaber factory tells Luke that {a}% of all lightsabers are red. Luke believes the real proportion is smaller, so he samples {b} of them and finds that {c} are red. If \\(\\alpha=0.1,\\) " +
            "determine the difference between the test statistic and the critical value of this test. (In this case, the difference is negative if \\(H_0\\) is rejected.)",
        answer: "t-e",
        vars: {
            "a": "randuni(40,50,1)", // p (x100)
            "b": "randint(100,120)", // n
            "cc": "randuni(0.3,0.4,2)", 
            "c": "meval(round(cc*b))", // y
            "ph": "meval(c/b)",
            "p": "meval(a/100)",
            "t": "meval((ph-p)/sqrt(p*(1-p)/b))", // test statistic
            "e": "@qnorm(0.1,0,1)" // p-value
        },
        solution: "The test statistic can be calculated using the formula \\(\\frac{\\hat p - p}{\\sqrt{p(1-p)/n}}\\sim Z.\\) The critical value is \\(z_{1-\\alpha}\\) and can be found using R."
    },
    {
        prob: "Katniss claims she can shoot arrows such that the standard deviation of their distances to the center of a target is {a} inches. To win her love, Peeta assures her the real standard deviation is lower, so she shoots {b} arrows and " +
            "finds that the sample standard deviation is {c}. If \\(\\alpha=0.1,\\) determine the difference between the test statistic and the critical value of this test. (In this case, the difference is negative if \\(H_0\\) is rejected.)",
        answer: "t-e",
        vars: {
            "a": "randuni(3,4,2)", // sigma
            "b": "randint(10,15)", // n
            "c": "randuni(2.5,3.5,2)", // s
            "t": "meval((b-1)*c^2/a^2)", // test statistic
            "df": "meval(b-1)",
            "e": "@qchisq(0.1,{df})" // p-value
        },
        solution: "The test statistic can be calculated using the formula \\(\\frac{(n-1)s^2}{\\sigma^2}\\sim \\chi^2_{n-1}.\\) The critical value is \\(z_{1-\\alpha}\\) and can be found using R."
    },
    {
        prob: "Katniss claims she can shoot arrows such that the standard deviation of their distances to the center of a target is {a} inches. To win her love, Peeta assures her the real standard deviation is lower, so she shoots {b} arrows and " +
            "finds that the sample standard deviation is {c}. Determine the p-value of this test.",
        answer: "e",
        vars: {
            "a": "randuni(3,4,2)", // sigma
            "b": "randint(10,15)", // n
            "c": "randuni(2.5,3.5,2)", // s
            "t": "meval((b-1)*c^2/a^2)", // test statistic
            "df": "meval(b-1)",
            "e": "@pchisq({t},{df})" // p-value
        },
        solution: "The p-value is the area to the left of the test statistic. The test statistic can be calculated using the formula \\(\\frac{(n-1)s^2}{\\sigma^2}\\sim \\chi^2_{n-1}.\\)" +
            "To find the area to the left of the test statistic, do \\(\\texttt{pchisq(({b}-1)*{c}\\char`\\^2/{a}\\char`\\^2,{b}-1)}\\) in R."
    },
    {
        prob: "The engineer of a potato cuber brags his creation is so precise, it can cut potatoes into chunks with a variance of no more than {a} grams\\(^2.\\) His main rival believes this is baloney, so he measures the masses of {b} chunks. The sample " +
            "variance turns out to be {c} grams\\(^2.\\) Determine the p-value of this test.",
        answer: "1-e",
        vars: {
            "a": "randuni(2,2.5,2)", // sigma^2
            "b": "randint(20,30)", // n
            "c": "randuni(1.5,2,2)", // s^2
            "t": "meval((b-1)*c/a)", // test statistic
            "df": "meval(b-1)",
            "e": "@pchisq({t},{df})" // p-value
        },
        solution: "The p-value is the area to the right of the test statistic. The test statistic can be calculated using the formula \\(\\frac{(n-1)s^2}{\\sigma^2}\\sim \\chi^2_{n-1}.\\)" +
            "To find the area to the right of the test statistic, do \\(\\texttt{1-pchisq(({b}-1)*{c}/{a},{b}-1)}\\) in R."
    },
    {
        prob: "The engineer of a potato cuber brags his creation is so precise, it can cut potatoes into chunks with a variance of no more than {a} grams\\(^2.\\) His main rival believes this is baloney, so he measures the masses of {b} chunks. The sample " +
            "variance turns out to be {c} grams\\(^2.\\) If \\(\\alpha=0.05,\\) determine the difference between the test statistic and the critical value of this test. (In this case, the difference is positive if \\(H_0\\) is rejected.)",
        answer: "t-e",
        vars: {
            "a": "randuni(2,2.5,2)", // sigma^2
            "b": "randint(20,30)", // n
            "c": "randuni(1.5,2,2)", // s^2
            "t": "meval((b-1)*c/a)", // test statistic
            "df": "meval(b-1)",
            "e": "@qchisq(0.95,{df})" // p-value
        },
        solution: "The test statistic can be calculated using the formula \\(\\frac{(n-1)s^2}{\\sigma^2}\\sim \\chi^2_{n-1}.\\) The critical value is \\(z_{\\alpha}\\) and can be found using R."
    },
    {
        prob: "The creator of the newest protein shake fad diet claims her users have lost 10% of their body weight, with a standard deviation of {a}%. To see whether the reported standard deviation is accurate, you survey {b} dieters. " +
            "The sample standard deviation is {c}%. If \\(\\alpha=0.1,\\) determine the difference between the test statistic and the larger critical value of this test. (If this is positive, then \\(H_0\\) is rejected.)",
        answer: "t-e",
        vars: {
            "a": "randuni(1.6,1.8,2)", // sigma
            "b": "randint(10,15)", // n
            "c": "randuni(2,2.2,2)", // s
            "t": "meval((b-1)*c^2/a^2)", // test statistic
            "df": "meval(b-1)",
            "e": "@qchisq(0.95,{df})" // p-value
        },
        solution: "The test statistic can be calculated using the formula \\(\\frac{(n-1)s^2}{\\sigma^2}\\sim \\chi^2_{n-1}.\\) The critical value is \\(z_{\\alpha/2}\\) and can be found using R."
    },
    {
        prob: "The creator of the newest protein shake fad diet claims her users have lost 10% of their body weight, with a standard deviation of {a}%. To see whether the reported standard deviation is accurate, you survey {b} dieters. " +
            "The sample standard deviation is {c}%. Determine the p-value of this test.",
        answer: "2*(1-e)",
        vars: {
            "a": "randuni(1.6,1.8,2)", // sigma
            "b": "randint(10,15)", // n
            "c": "randuni(2,2.2,2)", // s
            "t": "meval((b-1)*c^2/a^2)", // test statistic
            "df": "meval(b-1)",
            "e": "@pchisq({t},{df})" // p-value
        },
        solution: "The p-value is two times the area to the right of the test statistic in this case. The test statistic can be calculated using the formula \\(\\frac{(n-1)s^2}{\\sigma^2}\\sim \\chi^2_{n-1}.\\)" +
            "To find the area to the right of the test statistic, do \\(\\texttt{1-pchisq(({b}-1)*{c}\\char`\\^2/{a}\\char`\\^2,{b}-1)}\\) in R."
    },
]

var htestq_id = "htestq";
qtype_to_var[htestq_id] = hyp_test_questions;
if (devMode) {
    console.log(`Loaded ${hyp_test_questions.length} hypothesis testing questions.`)
}
