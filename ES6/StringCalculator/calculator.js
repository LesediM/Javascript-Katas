var Utils = require("./Utils").Utils;

const defaultSeparator = ",";
const newLineChar = "\n";

class Calculator {
    constructor() {}

    add(numberString) {
        let utils = new Utils(defaultSeparator, newLineChar);
        let delimiters = [];

        if (numberString.substring(0, 2) === "//") {
            let newLineCharIndex = numberString.indexOf(newLineChar);
            utils.appendDelimiters(numberString, delimiters, newLineCharIndex);
            numberString = numberString.substring(newLineCharIndex);
        }

        if (utils.isInNumberString(numberString, defaultSeparator) ||
            delimiters.length > 0) {
            let numbers = utils.getNumbers(numberString, delimiters);
            return utils.sumNumbers(numbers);
        }
        return utils.changeToInt(numberString);
    };
}

module.exports = { Calculator }