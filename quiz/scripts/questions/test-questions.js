var test_questions = [
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
]

var testq_id = "testq";
qtype_to_var[testq_id] = test_questions;