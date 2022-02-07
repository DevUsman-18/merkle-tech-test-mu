
function reverseString(string) {
    if (typeof string !== "string") {
        return "please input a string!";
    } else if (string === "" || string.length === 1){
        return string;
    } else {
        console.log("reverse", reverseString(string.substring(1)) + string.charAt(0));
        return reverseString(string.substring(1)) + string.charAt(0);
    }
}

// reverseString("abcb");
// reverseString("test");
// reverseString("racecar");