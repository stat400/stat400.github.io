var test_questions = [
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

var testq_id = "testq";
qtype_to_var[testq_id] = test_questions;