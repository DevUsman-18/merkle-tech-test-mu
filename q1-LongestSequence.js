
function longestSequence(string) {
    if (!string || !string.length) return;

    const lowerStr = string.toLowerCase();

    let count =  0;
    let resultsToReturn = {};

    for (let i = 1; i < lowerStr.length; i++) {
        if (lowerStr[i] === lowerStr[i + 1] || lowerStr[i] === lowerStr[i - 1] ) {
            count++;
            resultsToReturn[lowerStr[i]] = count;
        }
    }

    console.log(resultsToReturn);
    return resultsToReturn;
}

longestSequence("dghhhmhmx");
longestSequence("dhkkhhKKKt");
longestSequence("aBbBadddadd");