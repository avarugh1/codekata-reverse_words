function reverseWords(str) {
    let newString = "";
    let subString = "";

    for(let c of str){
        if(c !== " "){
            subString += c; // accumulate substring
        }else{ // found whitespace
            subString = subString.split("").reverse().join(""); // reverse current substring
            newString += subString; // concat to final string
            newString += c; // add the whitespace 
            subString = ""; // clear out the accumulated substring
        }
    }
    newString += subString.split("").reverse().join(""); // handle case for last word
    return newString
}

console.log(reverseWords('a b c d'));
console.log(reverseWords('double  spaced  words'));
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
console.log(reverseWords('apple'));