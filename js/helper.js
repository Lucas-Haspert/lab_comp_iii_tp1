function emptyTextChecker(txtToCheck) {
    let str = new String(txtToCheck);

    // Empty text
    if (str.trim() === "") {
        return false;
    }

    return true;
}

function numberChecker(numToCheck) {
    let numToCheckParsed = Number.parseFloat(numToCheck);

    if (typeof(numToCheckParsed) === 'number') {
        return true;
    } else {
        return false;
    }
}