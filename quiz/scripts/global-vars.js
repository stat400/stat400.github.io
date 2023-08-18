var happyEmojis = ["😀", "😁", "😇", "😎", "🤑", "😄", "😊", "😍", "🥳", "🤩"];
var sadEmojis = ["😠", "😥", "😦", "😳", "🤡", "😒", "☹️", "😱", "😭", "😵"];

var qtype_to_var = {};

var tol = 1e-5;

var opts = { // katex options
    delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '$', right: '$', display: false},
        {left: '\\(', right: '\\)', display: false},
        {left: '\\[', right: '\\]', display: true}
    ],
    throwOnError : false
};