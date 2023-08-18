cont_dist_questions = [
    {
        prob: "Find the value at quantile {a} of the normal distribution with mean {b} and variance {c}.",
        answer: "@qnorm({b},{d},{e})",
        vars: {
            "a": "randint(10,90)",
            "b": "randuni(-1,1,1)",
            "c": "randuni(1,2,1)",
            "d": "meval(sqrt(c))",
            "e": "meval(a/100)"
        },
        solution: "{ans}"
    },
    {
        prob: "Let \\(q\\) the value at quantile {a} of the normal distribution with mean {b} and variance {c}. What is \\(2q\\)?",
        answer: "{g}",
        vars: {
            "a": "randint(10,90)",
            "b": "randuni(-1,1,1)",
            "c": "randuni(1,2,1)",
            "d": "meval(sqrt(c))",
            "e": "meval(a/100)",
            "f": "@qnorm({b},{d},{e})",
            "g": "meval(2*f)"
        },
        solution: "From R, we know qnorm({a}/100,{b},{e}^0.5) is {f}, so the answer is \\(2\\times{f}\\approx{ans}\\)."
    },
];

var cdistq_id = "cdist";
qtype_to_var[cdistq_id] = cont_dist_questions;