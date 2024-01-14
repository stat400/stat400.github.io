var prob_questions = [
    {
        prob: "If I roll two fair 6-sided dice, what is the probability their sum is at most 4?",
        answer: "6/36",
        solution: "Out of the 36 possible outcomes, there are six with a sum at most 4: \\((1,1),(1,2),(1,3),(2,1),(2,2),(3,1)\\)."
    },
    {
        prob: "If I roll {a} fair 6-sided dice, what is the probability their product is even?",
        answer: "1-1/b",
        vars: {
            "a": "randint(2,10)",
            "b": "meval(pow(2,a))",
            "c": "meval(b-1)"
        },
        solution: "To get an even product, at least one value must be even. Equivalently, all values must be odd to get an odd product. We can therefore find the probability the product is odd, and subtract this from 1. Each die has a \\(3/6=1/2\\) chance of rolling an odd number, so the " +
            "probability all are odd is \\((1/2)^{a}=1/{b}\\). The probability of having an even product is therefore \\(1-1/{b}={c}/{b}\\)."
    },
    {
        prob: "If I roll {a} fair 6-sided dice, what is the probability their product is prime?",
        answer: "3*a/pow(6,a)",
        vars: {
            "a": "randint(2,5)",
            "b": "meval(pow(6,a))"
        },
        solution: "There are \\(6^{a}={b}\\) outcomes in total. One of the dice must have a prime number, while the rest must all contain 1. (Can you see why?) Now try to find the total number of ways to get a prime product, and simply divide by the number of outcomes."
    },
    {
        prob: "If I roll a fair {a}-sided die, what is the probability the number on the top is a perfect square?",
        answer: "b",
        vars: {
            "a": "randint(4,20)",
            "b": "meval(floor(sqrt(a))/a)"
        },
        solution: "Just count the perfect squares less than or equal to {a}."
    },
    {
        prob: "Two fair 6-sided dice are rolled. What is the probability that a number Albert chooses between 2 and 12 (inclusive, with equal weight) is at least the sum of the two dice?",
        answer: "6/11",
        solution: "For each number from 2 to 12, figure out the probability the sum of the dice is at least that number. So for 2, the probability is 1; for 3, it is 35/36; ... ; for 12, it is 1/36. Then add these numbers together and multiply the total by 1/11, since each number " +
            "between 2 and 12 is equally likely to be chosen."
    },
    {
        prob: "Two fair 6-sided dice are rolled. What is the probability that each die has a Fibonacci number, given the sum is a Fibonacci number?",
        answer: "7/12",
        solution: "There are 12 ways to roll a Fibonacci sum: \\((1,1),(1,2),(2,1),(1,4),(4,1),(2,3),(3,2),(2,6),(3,5),(4,4),\\\\(5,3),(6,2)\\). Of these, 7 consist of only Fibonacci numbers."
    },
    {
        prob: "A card is randomly drawn from a standard deck of 52 cards. What is the probability it is the Ace of Spades?",
        answer: "1/52",
        solution: "This should be simple :)."
    },
    {
        prob: "Three cards are randomly drawn without replacement from a standard deck of 52 cards. What is the probability they are all spades?",
        answer: "286/22100",
        solution: "There are \\(\\binom\{13\}\{3\}=286\\) ways to choose 3 different spades from 13 overall. Furthermore, there are \\(\\binom\{52\}\{3\}=22100\\) ways to choose 3 cards from 52 overall. The probability of choosing 3 spades from 52 cards is therefore \\(286/22100\\)."
    },
    {
        prob: "Four cards are randomly drawn without replacement from a standard deck of 52 cards. What is the probability exactly 2 are of the same suit (and the remaining two are of different suits)? ⭐",
        answer: "158184/270725",
        solution: "There are \\(\\binom\{13\}\{2\}=78\\) ways to choose 2 cards of one suit, and \\(4\\) possible suits to choose these from. There are \\(\\binom32=3\\) ways to choose two suits from the three remaining ones, and \\(13\\times13\\) ways to pick one card from each " +
            "of these. Overall, there are \\(\\binom\{52\}\{4\}=270725\\) possible ways to choose 4 cards from 52. (Can you piece everything together?)"
    },
    {
        prob: "Five cards are randomly drawn without replacement from a standard deck of 52 cards. What is the probability 4 have the same rank (number), given at least 3 do?",
        answer: "624/59280",
        solution: "We can first find the probablilty at least 3 cards have the same rank. To achieve this outcome, we can either have exactly 3 be of the same rank, or exactly 4. The probability of the first outcome is " +
            "\\(13\\cdot\\binom43\\times\\binom\{48\}2/\\binom\{52\}5=58656/2598960\\). That of the second outcome is \\(13\\cdot\\binom44\\times48/\\binom\{52\}5=624/2598960\\). The overall probability is therefore " +
            "\\(624/(624 + 58656)=624/59280\\)."
    },
    {
        prob: "Let \\(P[A]={a},P[B]={b},P[A\\cap B]={e}\\). Find \\(P[A\\cup B].\\)",
        answer: "a+b-e",
        vars: {
            "a": "randuni(0.1,0.9,1)", // P[A]
            "b": "randuni(0.1,0.9,1)", // P[B]
            "c": "meval(min(a,b))",
            "d": "meval(max(0,a+b-1))",
            "e": "randuni({d},{c},1)", // P[A n B]
        },
        solution: "We know \\(P[A\\cup B]=P[A]+P[B]-P[A\\cap B].\\)"
    },
    {
        prob: "Let \\(P[A]={a},P[B]={b},P[A\\cap B]={e}\\). Find \\(P[A\\mid B].\\)",
        answer: "e/b",
        vars: {
            "a": "randuni(0.1,0.9,1)", // P[A]
            "b": "randuni(0.1,0.9,1)", // P[B]
            "c": "meval(min(a,b))",
            "d": "meval(max(0,a+b-1))",
            "e": "randuni({d},{c},1)", // P[A n B]
        },
        solution: "We know \\(P[A\\mid B]=P[A\\cap B]/P[B].\\)"
    },
    {
        prob: "Let \\(P[A]={a},P[B]={b},P[A\\cap B]={e}\\). Find \\(P[B\\mid A].\\)",
        answer: "e/a",
        vars: {
            "a": "randuni(0.1,0.9,1)", // P[A]
            "b": "randuni(0.1,0.9,1)", // P[B]
            "c": "meval(min(a,b))",
            "d": "meval(max(0,a+b-1))",
            "e": "randuni({d},{c},1)", // P[A n B]
        },
        solution: "We know \\(P[B\\mid A]=P[A\\cap B]/P[A].\\)"
    },
    {
        prob: "Let \\(P[A]={a},P[B]={b},P[A\\cap B]={e}\\). Find \\(P[(A\\cup B)'].\\)",
        answer: "1-(a+b-e)",
        vars: {
            "a": "randuni(0.1,0.9,1)", // P[A]
            "b": "randuni(0.1,0.9,1)", // P[B]
            "c": "meval(min(a,b))",
            "d": "meval(max(0,a+b-1))",
            "e": "randuni({d},{c},1)", // P[A n B]
        },
        solution: "We know \\(P[A\\cup B]=P[A]+P[B]-P[A\\cap B].\\) and \\(P[(A\\cup B)']=1-P[A\\cup B].\\)"
    },
    {
        prob: "Let \\(P[A]={a},P[B]={b},P[A\\cap B]={e}\\). Find \\(P[A'\\mid B'].\\)",
        answer: "h/g",
        vars: {
            "a": "randuni(0.1,0.9,1)", // P[A]
            "b": "randuni(0.1,0.9,1)", // P[B]
            "c": "meval(min(a,b))",
            "d": "meval(max(0,a+b-1))",
            "e": "randuni({d},{c},1)", // P[A n B]
            "f": "meval(1-a)", // P[A']
            "g": "meval(1-b)", // P[B']
            "h": "meval(1-(a+b-e))", // P[A' n B']
        },
        solution: "We know \\(P[A'\\mid B']=P[A'\\cap B']/P[B'], P[B']=1-P[B]\\), and \\(P[A'\\cap B']=P[(A\\cup B)']=1-P[A\\cup B]\\)."
    },
    {
        prob: "Let \\(P[A]={a},P[B]={b},P[A\\cap B]={e}\\). Find \\(P[B'\\mid A'].\\)",
        answer: "h/f",
        vars: {
            "a": "randuni(0.1,0.9,1)", // P[A]
            "b": "randuni(0.1,0.9,1)", // P[B]
            "c": "meval(min(a,b))",
            "d": "meval(max(0,a+b-1))",
            "e": "randuni({d},{c},1)", // P[A n B]
            "f": "meval(1-a)", // P[A']
            "g": "meval(1-b)", // P[B']
            "h": "meval(1-(a+b-e))",  // P[A' n B']
        },
        solution: "We know \\(P[B'\\mid A']=P[A'\\cap B']/P[A'], P[A']=1-P[A]\\), and \\(P[A'\\cap B']=P[(A\\cup B)']=1-P[A\\cup B]\\)."
    },
    {
        prob: "Let \\(P[A]={a},P[B]={b},P[A\\cap B]={e}\\). Find \\(P[A\\mid B'].\\)",
        answer: "g/f",
        vars: {
            "a": "randuni(0.1,0.9,1)", // P[A]
            "b": "randuni(0.1,0.9,1)", // P[B]
            "c": "meval(min(a,b))",
            "d": "meval(max(0,a+b-1))",
            "e": "randuni({d},{c},1)", // P[A n B]
            "f": "meval(1-b)", // P[B']
            "g": "meval(a-e)", // P[A n B']
        },
        solution: "We know \\(P[A\\mid B']=P[A\\cap B']/P[B'], P[B']=1-P[B]\\), and \\(P[A\\cap B']=P[A]-P[A\\cap B]\\)."
    },
    {
        prob: "Let \\(P[A]={a},P[B]={b},P[A\\cap B]={e}\\). Find \\(P[B\\mid A'].\\)",
        answer: "g/f",
        vars: {
            "a": "randuni(0.1,0.9,1)", // P[A]
            "b": "randuni(0.1,0.9,1)", // P[B]
            "c": "meval(min(a,b))",
            "d": "meval(max(0,a+b-1))",
            "e": "randuni({d},{c},1)", // P[A n B]
            "f": "meval(1-a)", // P[A']
            "g": "meval(b-e)", // P[A' n B]
        },
        solution: "We know \\(P[B\\mid A']=P[A'\\cap B]/P[A'], P[A']=1-P[A]\\), and \\(P[A'\\cap B]=P[B]-P[A\\cap B]\\)."
    },
    {
        prob: "Suppose events \\(A\\) and \\(B\\) are independent and \\(P[A]={a},P[B]={b}\\). Find \\(P[A\\cap B]\\).",
        answer: "a*b",
        vars: {
            "a": "randuni(0.1,0.9,1)", // P[A]
            "b": "randuni(0.1,0.9,1)", // P[B]
        },
        solution: "If events \\(A\\) and \\(B\\) are independent, then \\(P[A\\cap B]=P[A]\\cdot P[B]\\)."
    },
    {
        prob: "Suppose events \\(A\\) and \\(B\\) are independent and \\(P[A]={a},P[B]={b}\\). Find \\(P[A\\cup B]\\).",
        answer: "a+b-a*b",
        vars: {
            "a": "randuni(0.1,0.9,1)", // P[A]
            "b": "randuni(0.1,0.9,1)", // P[B]
        },
        solution: "If events \\(A\\) and \\(B\\) are independent, then \\(P[A\\cap B]=P[A]\\cdot P[B]\\). Also, \\(P[A\\cup B]=P[A]+P[B]-P[A\\cap B]\\)."
    },
    {
        prob: "Suppose events \\(A\\) and \\(B\\) are independent and \\(P[A]={a},P[B]={b}\\). Find \\(P[A'\\cap B']\\).",
        answer: "1-(a+b-a*b)",
        vars: {
            "a": "randuni(0.1,0.9,1)", // P[A]
            "b": "randuni(0.1,0.9,1)", // P[B]
        },
        solution: "If events \\(A\\) and \\(B\\) are independent, then \\(P[A\\cap B]=P[A]\\cdot P[B]\\). Also, \\(P[A'\\cap B']=P[(A\\cup B)']=1-P[A\\cup B]\\) and \\(P[A\\cup B]=P[A]+P[B]-P[A\\cap B]\\)."
    },
    {
        prob: "A fair {a}-sided die and {c}-sided die are rolled. Find the probability the number on the {a}-sided die is larger than that on the {c}-sided die.",
        answer: "a*(a-1)/(2*a*c)",
        vars: {
            "a": "randint(4,8)",
            "b": "meval(a+1)",
            "c": "randint({b},10)",
            "d": "meval(a*c)"
        },
        solution: "There are {d} total outcomes. How many of these involve the first die having a larger number than the second?"
    },
    {
        prob: "A fair 6-sided die and 8-sided die are rolled. Find the probability the product of the two dice is 24.",
        answer: "3/48",
        solution: "There are 48 total outcomes. Of these, the ones that yield a product of 24 are \\((3,8),(4,6),(6,4)\\)."
    },
    {
        prob: "A fair 6-sided die and 8-sided die are rolled. Find the probability their numbers are relatively prime.",
        answer: "32/48",
        solution: "There are 48 total outcomes. How many of these involve numbers relatively prime with each other (i.e., their gcd is 1)? Hint: it may be easier in this case to count those in which the numbers are not relatively prime."
    },
    {
        prob: "A sack has {b} marbles: {a} red, {a} yellow, {a} green, and {a} blue. If I pick 4 without replacement, what is the probability I get one of each color?",
        answer: "d/c",
        vars: {
            "a": "randint(3,8)",
            "b": "meval(4*a)",
            "c": "meval(combinations(b,4))",
            "d": "meval(pow(a,4))"
        },
        solution: "There are \\({a}^4={d}\\) ways to draw one of each color, and \\(\\binom\{{b}\}4={c}\\) ways to draw 4 marbles overall."
    },
    {
        prob: "A sack has {b} marbles: {a} red, {a} yellow, {a} green, and {a} blue. If I pick 3 without replacement, what is the probability I get exactly two colors?",
        answer: "a*(a-1)/2*4*a*3/c",
        vars: {
            "a": "randint(3,8)",
            "b": "meval(4*a)",
            "c": "meval(combinations(b,3))",
            "d": "meval(3*a)"
        },
        solution: "There are \\(\\binom\{{a}\}2\\) ways to draw two marbles of one color and 4 colors for this. I can pick one of the {d} remaining marbles for the other color. Additionally, there are \\(\\binom\{{b}\}3={c}\\) ways to draw 3 marbles overall."
    },
    {
        prob: "A sack has {b} marbles: {a} red, {a} yellow, {a} green, and {a} blue. If I pick 2 without replacement, what is the probability they are the same color?",
        answer: "4*a*(a-1)/2/c",
        vars: {
            "a": "randint(3,8)",
            "b": "meval(4*a)",
            "c": "meval(combinations(b,2))",
        },
        solution: "There are \\(\\binom\{{a}\}2\\) ways to draw two marbles of one color and 4 colors for this. Additionally, there are \\(\\binom\{{b}\}2={c}\\) ways to draw 2 marbles overall."
    },
    {
        prob: "A sack has {b} marbles: {a} red, {a} yellow, {a} green, and {a} blue. If I pick 8 without replacement, what is the probability I do not get the same amount of any color?",
        answer: "e/f",
        vars: {
            "a": "randint(5,8)",
            "b": "meval(4*a)",
            "c": "meval(a*combinations(a,2)*combinations(a,5))",
            "d": "meval(a*combinations(a,3)*combinations(a,4))",
            "e": "meval(24*(c+d))",
            "f": "meval(combinations(b,8))"
        },
        solution: "There are two possible cases: we get none of color 1, one of color 2, two of color 3, and five of color 4; or we get none of color 1, one of color 2, three of color 3, and four of color 4. For the first case, there are " +
            "\\(\\binom\{{a}\}0\\binom\{{a}\}1\\binom\{{a}\}2\\binom\{{a}\}5={c}\\) ways to choose the marbles and \\(4!=24\\) ways to assign the (distinct) quantities to the different colors. For the second case, there are " +
            "\\(\\binom\{{a}\}0\\binom\{{a}\}1\\binom\{{a}\}3\\binom\{{a}\}4={d}\\) ways to choose the marbles and \\(4!=24\\) ways to assign the (distinct) quantities to the different colors. So there are \\({e}\\) ways in total to not have the same amount of any color. " +
            "Finally, there are \\(\\binom\{{b}\}8={f}\\) ways to choose 8 marbles from a total of {b}."
    },
    {
        prob: "SpongeBob and Patrick play Eels and Escalators, and the winner of the match is the first to win 3 games. SpongeBob has a {a} chance of winning a game, " +
            "compared to Patrick's {b}. Given that Patrick won the first game, what is the probability Patrick wins the match? ⭐",
        answer: "(b*b*b+b*b*b*a*2+b*b*b*a*a*3)/(b*b*b+b*b*b*a*2+b*b*b*a*a*3+b*a*a*a+b*b*a*a*a*3)",
        vars: {
            "a": "randuni(0.2,0.8,1)",
            "b": "meval(round(1-a,1))"
        },
        solution: "Suppose Patrick wins the first game. For Patrick to win the match, the following are his possible win/loss sequences: WWW, WWLW, WLWW, WLLWW, WLWLW, WWLLW. For him to lose the match, " +
            "the following are his possible win/loss sequences: WLLL, WWLLL, WLWLL, WLLWL. We can find the probability of each of the 10 cases. The probability Patrick wins the match will be the sum of the " +
            "probabilities of winning the entire match, divided by the total probability of these 10 cases."
    },
    {
        prob: "Emily plays a game where she rolls a fair {a}-sided die until 3 distinct numbers come up. Find the probability it takes exactly {b} rolls. ⭐",
        answer: "f",
        vars: {
            "a": "randint(5,10)",
            "b": "randint(4,{a})",
            "c": "meval(b-2)",
            "d": "meval(a-1)",
            "e": "meval(a-2)",
            "f": "meval((pow(2,c)-1)*pow(1/a,b)*a*d*e)"
        },
        solution: "Let A be the first number that comes up, C be the last, and B be the other. We know there must only be one C in the sequence of rolls (at the very end), and A must be the first. So the {c} " +
            "rolls in between may contain any mix of As and Bs in any order, as long as at least one B is present. There are \\(2^{c}-1\\) ways to arrange the middle values. Each of A, B, and C have a \\(1/{a}\\) " +
            "chance of being rolled, so we multiply the previous number by \\((1/{a})^\{{b}\}\\). Finally, there are \\({a}\\cdot{d}\\cdot{e}\\) ways to choose A, B, and C."
    },
    {
        prob: "Consider three uniform random number generators with real outputs: one generates numbers between 0 and {a}, one between 0 and {b}, and one between 0 and {c}. Albert promises to cancel " +
            "Homework #2 if their sum is less than {e}. Find the probability the assignment is cancelled. (Disclaimer: Albert would never let fate decide whether to cancel an assignment.) ⭐",
        answer: "pow(e,3)/6/(a*b*c)",
        vars: {
            "a": "randint(1,4)",
            "b": "randint(1,4)",
            "c": "randint(1,4)",
            "d": "meval(min(a,b,c))",
            "e": "randint(1,{d})"
        },
        solution: "We can plot the output in 3D space: let \\(x\\) represent the output of the first generator, \\(y\\) be the second, and \\(z\\) be the third. The sample space is a rectangular prism bounded by " +
            "\\(0\\leq x\\leq {a},0\\leq y\\leq {b},0\\leq z\\leq {c}\\). We want the volume of the tetrahedron bounded by the planes \\(x=0,y=0,z=0,\\) and \\(x+y+z<{e}\\). This is simply \\({e}^3/6\\). " +
            "The probability the assignment is cancelled is the ratio of the volume of this tetrahedron to that of the rectangular prism."
    },
    {
        prob: "In an infinite apple orchard, {b}% of all apples are green. If I pick {c}, what is the probability at most one is green?",
        answer: "pow(1-a/10,c)+c*a/10*pow(1-a/10,c-1)",
        vars: {
            "a": "randint(1,9)",
            "b": "meval(10*a)",
            "c": "randint(3,5)",
        },
        solution: "We can have either 0 or 1 green apple. The probability none are green is \\(@meval(round(1-{a}/10,1)@)^{c}\\), and the probability one is green is \\(\\binom\{{c}\}1 (@meval(round({a}/10,1)@))(@meval(round(1-{a}/10,1)@))^@meval({c}-1@)\\)."
    },
    {
        prob: "In an infinite apple orchard, {b}% of all apples are green. What is the probability that I first pick {d} green ones, and then {c} non-green ones?",
        answer: "pow(a/10,d)*pow(1-a/10,c)",
        vars: {
            "a": "randint(1,9)",
            "b": "meval(10*a)",
            "c": "randint(3,5)",
            "d": "randint(2,4)"
        },
        solution: "The probability the first {d} are green is \\(@meval(round({a}/10,1)@)^{d}\\), and the probability the next {c} are not is \\(@meval(round(1-{a}/10,1)@)^{c}\\). (What do you do with these two probabilities?)"
    },
    {
        prob: "In an infinite apple orchard, {b}% of all apples are green. If I pick {c}, what is the probability none are green, given at most 1 is green?",
        answer: "pow(1-a/10,c)/(pow(1-a/10,c)+c*a/10*pow(1-a/10,c-1))",
        vars: {
            "a": "randint(1,9)",
            "b": "meval(10*a)",
            "c": "randint(3,5)",
            "d": "randint(2,4)"
        },
        solution: "The probability none are green is \\(@meval(round(1-{a}/10,1)@)^{c}\\), and the probability one is green is \\(\\binom\{{c}\}1(@meval(round({a}/10,1)@))(@meval(round(1-{a}/10,1)@))^@meval({c}-1@)\\). We can find the " +
            "probability at most 1 is green by adding these two values. (What should we do at the end?)"
    },
    {
        prob: "An urn has {a} red and {b} green marbles. If I pick {d} with replacement, find the probability there are {c} of each color.",
        answer: "combinations(d,c)*pow(a/(a+b),c)*pow(b/(a+b),c)",
        vars: {
            "a": "randint(10,19)",
            "b": "randint(10,19)",
            "c": "randint(3,5)",
            "d": "meval(2*c)"
        },
        solution: "The probability of getting {c} red marbles is \\((\\frac\{{a}\}\{{a}+{b}\})^{c}\\), and the probability of getting {c} green marbles is \\((\\frac\{{b}\}\{{a}+{b}\})^{c}\\). Furthermore, there are \\(\\binom\{d\}{c}\\) ways to order the marbles."
    },
    {
        prob: "An urn has {a} red and {b} green marbles. If I pick {e} with replacement, find the probability there are {c} reds and {d} greens.",
        answer: "combinations(e,c)*pow(a/(a+b),c)*pow(b/(a+b),d)",
        vars: {
            "a": "randint(10,12)",
            "b": "randint(15,19)",
            "c": "randint(3,5)",
            "d": "randint(6,8)",
            "e": "meval(c+d)"
        },
        solution: "The probability of getting {c} red marbles is \\((\\frac\{{a}\}\{{a}+{b}\})^{c}\\), and the probability of getting {c} green marbles is \\((\\frac\{{b}\}\{{a}+{b}\})^{d}\\). Furthermore, there are \\(\\binom\{{e}\}{c}\\) ways to order the marbles."
    },
    {
        prob: "An urn has {a} red and {b} green marbles. If I pick {e} without replacement, find the probability there are {c} reds and {d} greens.",
        answer: "combinations(a,c)*combinations(b,d)/combinations(f,e)",
        vars: {
            "a": "randint(15,19)",
            "b": "randint(15,19)",
            "c": "randint(6,8)",
            "d": "randint(6,8)",
            "e": "meval(c+d)",
            "f": "meval(a+b)"
        },
        solution: "There are \\(\\binom\{{a}\}\{{c}\}\\) ways to pick {c} reds from {a}, and \\(\\binom\{{b}\}\{{d}\}\\) ways to pick {d} greens from {b}. Furthermore, there are \\(\\binom\{{f}\}\{{e}\}\\) ways to pick {e} marbles from {f}."
    },
    {
        prob: "An urn has {a} red, {b} green, and {c} blue marbles. If I pick {h} without replacement, find the probability there are {d} reds, {e} greens, and {f} blues.",
        answer: "combinations(a,d)*combinations(b,e)*combinations(c,f)/combinations(g,h)",
        vars: {
            "a": "randint(15,19)",
            "b": "randint(15,19)",
            "c": "randint(15,19)",
            "d": "randint(6,8)",
            "e": "randint(6,8)",
            "f": "randint(6,8)",
            "g": "meval(a+b+c)",
            "h": "meval(d+e+f)"
        },
        solution: "There are \\(\\binom\{{a}\}\{{d}\}\\) ways to pick {d} reds from {a}, \\(\\binom\{{b}\}\{{e}\}\\) ways to pick {e} greens from {b}, and \\(\\binom\{{c}\}\{{f}\}\\) ways to pick {f} blues from {c}. " +
            "Furthermore, there are \\(\\binom\{{g}\}\{{h}\}\\) ways to pick {h} marbles from {g}."
    },
    {
        prob: "An urn has {a} red, {b} green, and {c} blue marbles. If I pick {h} with replacement, find the probability there are {d} reds, {e} greens, and {f} blues.",
        answer: "factorial(h)/(factorial(d)*factorial(e)*factorial(f))*pow(a/g,d)*pow(b/g,e)*pow(c/g,f)",
        vars: {
            "a": "randint(15,19)",
            "b": "randint(15,19)",
            "c": "randint(15,19)",
            "d": "randint(6,8)",
            "e": "randint(6,8)",
            "f": "randint(6,8)",
            "g": "meval(a+b+c)",
            "h": "meval(d+e+f)"
        },
        solution: "The probability of getting {d} red marbles is \\((\\frac\{{a}\}\{{a}+{b}+{c}\})^{d}\\), that of getting {e} green marbles is \\((\\frac\{{b}\}\{{a}+{b}+{c}\})^{e}\\), and that of getting {f} blue marbles " +
            "is \\((\\frac\{{c}\}\{{a}+{b}+{c}\})^{f}\\). Furthermore, there are \\(\\frac\{{h}!\}\{{d}!{e}!{f}!\}\\) ways to order this outcome."
    },
    {
        prob: "An infinite apple orchard has @meval(10*{a}@)% blue, @meval(10*{c}@)% green, and @meval(10*{d}@)% yellow apples. If I pick @meval({e}+{f}+{g}@) at random, what " +
            "is the probability I end up with {e} blues, {f} greens, and {g} yellows?",
        answer: "factorial(e+f+g)/(factorial(e)*factorial(f)*factorial(g))*pow(a/10,e)*pow(c/10,f)*pow(d/10,g)",
        vars: {
            "a": "randint(1,6)", // blue proportion
            "b": "meval(9-a)",
            "c": "randint(1,{b})", // green proportion
            "d": "meval(10-a-c)", // yellow proportion,
            "e": "randint(3,6)",
            "f": "randint(3,6)",
            "g": "randint(3,6)",
        },
        solution: "The probability of getting {e} blue apples is \\(0.{a}^\{{e}\}\\), that of getting {f} green apples is \\(0.{c}^\{{f}\}\\), and that of getting {g} yellow apples " +
        "is \\(0.{d}^\{{g}\}\\). Furthermore, there are \\(\\frac\{@meval({e}+{f}+{g}@)!\}\{{e}!{f}!{g}!\}\\) ways to order this outcome."
    },
    {
        prob: "An infinite apple orchard has @meval(10*{a}@)% blue, @meval(10*{c}@)% green, and @meval(10*{d}@)% yellow apples. If I pick {e} at random, what " +
            "is the probability (exactly) {g} are green?",
        answer: "combinations(e,g)*pow(c/10,g)*pow(1-c/10,e-g)",
        vars: {
            "a": "randint(1,6)", // blue proportion
            "b": "meval(9-a)",
            "c": "randint(1,{b})", // green proportion
            "d": "meval(10-a-c)", // yellow proportion,
            "e": "randint(6,10)",
            "f": "meval(e-1)",
            "g": "randint(2,{f})"
        },
        solution: "The probability of getting {g} green apples is \\(0.{c}^\{{g}\}\\), and the probability of getting @meval({e}-{g}@) non-green apples is \\(0.@meval(10-{c}@)^\{@meval({e}-{g}@)\}\\). " +
        "Furthermore, there are \\(\\binom\{{e}\}\{{g}\}\\) ways to order this outcome."
    },
    {
        prob: "An infinite apple orchard has @meval(10*{a}@)% blue, @meval(10*{c}@)% green, and @meval(10*{d}@)% yellow apples. If I keep picking until I get {e} greens, what " +
            "is the probability it takes exactly {f} tries?",
        answer: "combinations(f-1,e-1)*pow(c/10,e)*pow(1-c/10,f-e)",
        vars: {
            "a": "randint(1,6)", // blue proportion
            "b": "meval(9-a)",
            "c": "randint(1,{b})", // green proportion
            "d": "meval(10-a-c)", // yellow proportion,
            "e": "randint(2,5)",
            "f": "meval(e+2)",
            "g": "randint({f},10)"
        },
        solution: "In the first @meval({f}-1@) tries, we must get exactly @meval({e}-1@) green(s). The probability of this is \\(\\binom\{@meval({f}-1@)\}\{@meval({e}-1@)\}(@meval({c}/10@))^@meval({e}-1@)(@meval(({a}+{d})/10@))^@meval({f}-{e}@)\\). " +
        "We then simply multiply this by the probability of getting a green apple (this represents the {f}th try)."
    },
    {
        prob: "Consider an infinite pile of coins in which @meval(10*{a}@)% are counterfeit. If Al Capone takes 5 at random, find the probability exactly 3 are counterfeit, given at least 2 are.",
        answer: "combinations(5,3)*pow(a/10,3)*pow(1-a/10,2)/(1-pow(1-a/10,5)-5*a/10*pow(1-a/10,4))",
        vars: {
            "a": "randint(1,4)", // counterfeit proportion
        },
        solution: "The probability exactly 3 are counterfeit is \\(\\binom53(0.{a})^3(0.@meval(10-{a}@))^2\\). The probability at least 2 are counterfeit is \\(1-(0.@meval(10-{a}@))^5-\\binom51(0.{a})^1(0.@meval(10-{a}@))^4.\\) " +
            "(What should we do with these two numbers?)"
    },
    {
        prob: "The probability David takes the bus when it is raining is {a}. The probability he takes the bus when it is clear is {b}. Suppose it rains on @meval(10*{c}@)% of all days. Find the probability is it raining, given that David " +
            "is not taking the bus.",
        answer: "e/(e+h)",
        vars: {
            "a": "randuni(0.6,0.9,2)", // P[bus | raining]
            "b": "randuni(0.4,0.7,2)", // P[bus | not raining]
            "c": "randint(1,4)", // raining prob * 10
            "d": "meval(c/10*a)", // P[bus n raining]
            "e": "meval(c/10-d)", // P[not bus n raining]
            "f": "meval(10-c)", // not raining prob * 10
            "g": "meval(f/10*b)", // P[bus n not raining]
            "h": "meval(f/10-g)", // P[not bus n not raining]
        },
        solution: "Let \\(B\\) be the event of David taking the bus, and \\(R\\) be the event of it raining. With the given numbers, we can first find <ul> <li>\\(P[R^C]=1-P[R]\\)</li> <li>\\(P[B\\cap R]=P[B \\mid R]\\cdot P[R]\\)</li>" +
        "<li>\\(P[B^C \\cap R]=P[R]-P[B\\cap R]\\)</li> <li>\\(P[B\\cap R^C]=P[B\\mid R^C]\\cdot P[R^C]\\)</li> <li>\\(P[B^C\\cap R^C]=P[R^C]-P[B\\cap R^C]\\)</li> <li>\\(P[B]=P[B\\cap R]+P[B\\cap R^C]\\)</li> <li>\\(P[B^C]=P[B^C\\cap R]+P[B^C\\cap R^C]\\)</li></ul>" +
        "<p>From here, we know \\(P[R\\mid B^C]=P[R\\cap B^C]/P[B^C].\\)</p>"
    },
    {
        prob: "The probability David takes the bus when it is raining is {a}. The probability he takes the bus when it is clear is {b}. Suppose it rains on @meval(10*{c}@)% of all days. Find the probability is it not raining, given that David " +
            "is not taking the bus.",
        answer: "h/(e+h)",
        vars: {
            "a": "randuni(0.6,0.9,2)", // P[bus | raining]
            "b": "randuni(0.4,0.7,2)", // P[bus | not raining]
            "c": "randint(1,4)", // raining prob * 10
            "d": "meval(c/10*a)", // P[bus n raining]
            "e": "meval(c/10-d)", // P[not bus n raining]
            "f": "meval(10-c)", // not raining prob * 10
            "g": "meval(f/10*b)", // P[bus n not raining]
            "h": "meval(f/10-g)", // P[not bus n not raining]
        },
        solution: "Let \\(B\\) be the event of David taking the bus, and \\(R\\) be the event of it raining. With the given numbers, we can first find <ul> <li>\\(P[R^C]=1-P[R]\\)</li> <li>\\(P[B\\cap R]=P[B \\mid R]\\cdot P[R]\\)</li>" +
        "<li>\\(P[B^C \\cap R]=P[R]-P[B\\cap R]\\)</li> <li>\\(P[B\\cap R^C]=P[B\\mid R^C]\\cdot P[R^C]\\)</li> <li>\\(P[B^C\\cap R^C]=P[R^C]-P[B\\cap R^C]\\)</li> <li>\\(P[B]=P[B\\cap R]+P[B\\cap R^C]\\)</li> <li>\\(P[B^C]=P[B^C\\cap R]+P[B^C\\cap R^C]\\)</li></ul>" +
        "<p>From here, we know \\(P[R^C\\mid B^C]=P[R^C\\cap B^C]/P[B^C].\\)</p>"
    },
    {
        prob: "The probability David takes the bus when it is raining is {a}. The probability he takes the bus when it is clear is {b}. Suppose it rains on @meval(10*{c}@)% of all days. Find the probability is it raining, given that David " +
            "is taking the bus.",
        answer: "d/(d+g)",
        vars: {
            "a": "randuni(0.6,0.9,2)", // P[bus | raining]
            "b": "randuni(0.4,0.7,2)", // P[bus | not raining]
            "c": "randint(1,4)", // raining prob * 10
            "d": "meval(c/10*a)", // P[bus n raining]
            "e": "meval(c/10-d)", // P[not bus n raining]
            "f": "meval(10-c)", // not raining prob * 10
            "g": "meval(f/10*b)", // P[bus n not raining]
            "h": "meval(f/10-g)", // P[not bus n not raining]
        },
        solution: "Let \\(B\\) be the event of David taking the bus, and \\(R\\) be the event of it raining. With the given numbers, we can first find <ul> <li>\\(P[R^C]=1-P[R]\\)</li> <li>\\(P[B\\cap R]=P[B \\mid R]\\cdot P[R]\\)</li>" +
        "<li>\\(P[B^C \\cap R]=P[R]-P[B\\cap R]\\)</li> <li>\\(P[B\\cap R^C]=P[B\\mid R^C]\\cdot P[R^C]\\)</li> <li>\\(P[B^C\\cap R^C]=P[R^C]-P[B\\cap R^C]\\)</li> <li>\\(P[B]=P[B\\cap R]+P[B\\cap R^C]\\)</li> <li>\\(P[B^C]=P[B^C\\cap R]+P[B^C\\cap R^C]\\)</li></ul>" +
        "<p>From here, we know \\(P[R\\mid B]=P[R\\cap B]/P[B].\\)</p>"
    },
    {
        prob: "The probability David takes the bus when it is raining is {a}. The probability he takes the bus when it is clear is {b}. Suppose it rains on @meval(10*{c}@)% of all days. Find the probability is it not raining, given that David " +
            "is taking the bus.",
        answer: "g/(d+g)",
        vars: {
            "a": "randuni(0.6,0.9,2)", // P[bus | raining]
            "b": "randuni(0.4,0.7,2)", // P[bus | not raining]
            "c": "randint(1,4)", // raining prob * 10
            "d": "meval(c/10*a)", // P[bus n raining]
            "e": "meval(c/10-d)", // P[not bus n raining]
            "f": "meval(10-c)", // not raining prob * 10
            "g": "meval(f/10*b)", // P[bus n not raining]
            "h": "meval(f/10-g)", // P[not bus n not raining]
        },
        solution: "Let \\(B\\) be the event of David taking the bus, and \\(R\\) be the event of it raining. With the given numbers, we can first find <ul> <li>\\(P[R^C]=1-P[R]\\)</li> <li>\\(P[B\\cap R]=P[B \\mid R]\\cdot P[R]\\)</li>" +
        "<li>\\(P[B^C \\cap R]=P[R]-P[B\\cap R]\\)</li> <li>\\(P[B\\cap R^C]=P[B\\mid R^C]\\cdot P[R^C]\\)</li> <li>\\(P[B^C\\cap R^C]=P[R^C]-P[B\\cap R^C]\\)</li> <li>\\(P[B]=P[B\\cap R]+P[B\\cap R^C]\\)</li> <li>\\(P[B^C]=P[B^C\\cap R]+P[B^C\\cap R^C]\\)</li></ul>" +
        "<p>From here, we know \\(P[R^C\\mid B]=P[R^C\\cap B]/P[B].\\)</p>"
    },
    {
        prob: "Alice, Bob, Carl, and Dan each pick a random integer (with equal probability) between 0 and 5, inclusive. Find the probability their sum is 8. ⭐",
        answer: "125/pow(6,4)",
        solution: "The answer is the number of ways their numbers can sum to 8, divided by the total number of possible outcomes. The latter is simply \\(6^4\\). To calculate the former, find all distinct cases of four numbers between 0 and 5 that sum to 8. " +
            "(Hint: there should be 11 cases in total. Don't forget to count how many ways you can order each one as well.) "
    },
    {
        prob: "Suppose I draw cards from a standard deck of 52 cards, without replacement, until I get a spade. Find the probability I draw {a} cards in total.",
        answer: "combinations(39,a-1)/combinations(52,a-1)*13/(53-a)",
        vars: {
            "a": "randint(3,8)"  
        },
        solution: "The first @meval({a}-1@) cards must not be spades; there are \\(\\binom\{39\}\{@meval({a}-1@)\}\\) ways to choose @meval({a}-1@) cards from 39 non-spades, out of a total of \\(\\binom\{52\}\{@meval({a}-1@)\}\\) " +
            "ways to choose @meval({a}-1@) cards from 52. Finally, the last card must be a spade. The probability of drawing one is \\(13/@meval(53-{a}@)\\)."
    },
    {
        prob: "Suppose I draw cards from a standard deck of 52 cards, with replacement, until I get a spade. Find the probability I draw {a} cards in total.",
        answer: "pow(3/4,a-1)/4",
        vars: {
            "a": "randint(3,8)"  
        },
        solution: "The first @meval({a}-1@) cards must not be spades; the probability of this occurring is \\((3/4)^@meval(a-1@)\\). " +
            "Finally, the last card must be a spade. The probability of drawing one is \\(1/4\\)."
    },
]

var probq_id = "prob";
qtype_to_var[probq_id] = prob_questions;
if (devMode) {
    console.log(`Loaded ${prob_questions.length} probability questions.`)
}
