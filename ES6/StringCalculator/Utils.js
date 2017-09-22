class Utils {
    constructor(defaultSeparator, newLineChar) {
        this.defaultSeparator = defaultSeparator;
        this.newLineChar = newLineChar;
    }

    changeToInt(numberString) {
        if (numberString === "" ||
            numberString === null) {
            return 0;
        }
        return parseInt(numberString);
    }

    isInNumberString(numberString, char) {
        return numberString.indexOf(char) >= 0;
    }

    replaceAll(numberString, delimiter) {
        let newNumberString = numberString;
        do {
            newNumberString = newNumberString.replace(delimiter, this.defaultSeparator);
        } while (this.isInNumberString(newNumberString, delimiter));
        return newNumberString;
    };

    getNumbers(numberString, delimiters) {
        let newNumberString = numberString.replace(this.newLineChar, this.defaultSeparator);
        for (let delimiter of delimiters) {
            if (delimiter === "") {
                continue;
            }
            newNumberString = this.replaceAll(newNumberString, delimiter);
        }
        return newNumberString.split(this.defaultSeparator);
    };

    sumNumbers(numbers) {
        let total = 0;
        let negativeNumbers = [];
        const Limit = 1000;
        let addToTotal = number => {
            let value = this.changeToInt(number);
            if (value < 0) {
                negativeNumbers.push(value);
            } else {
                total += value > Limit ? 0 : value;
            }
        };
        numbers.forEach(addToTotal);
        if (negativeNumbers.length > 0) {
            throw `negatives not allowed: ${negativeNumbers.join(this.defaultSeparator)}`;
        }
        return total;
    };

    appendDelimiters(numberString, delimiters, newLineCharIndex) {
        let delimiterPortion = numberString.substring(2, newLineCharIndex);
        let rawDelimiters = delimiterPortion.split("[");
        rawDelimiters.forEach(del => {
            let trimmedDelimiter = del.replace("]", "");
            delimiters.push(trimmedDelimiter);
        });
    };
}

module.exports = { Utils }
