var assert = require("chai").assert;
var Calculator = require("./../calculator").Calculator;
var calculator = new Calculator();
    describe("add", () => {
        it("should be defined", () => {
            assert.isDefined(calculator.add);
        });

        describe("single numbers", () => {
            [{
                    number: "",
                    expected: 0
                }, {
                    number: "1",
                    expected: 1
                }, {
                    number: "2",
                    expected: 2
                }
            ]
            .forEach(data => {
                it("should return zero given empty string", () => {
                    // Arrange
                    // Act
                    let sum = calculator.add(data.number);
                    // Assert
                    assert.deepEqual(sum, data.expected);
                });
            })
        });

        describe("multiple numbers", () => {
            it("should return 3 given string '1,2'", () => {
                // Arrange
                let numbers = "1,2";
                // Act
                let sum = calculator.add(numbers);
                // Assert
                let expected = 3;
                assert.deepEqual(sum, expected);
            })
            it("should return 6 given string '1,2,3'", () => {
                // Arrange
                let numbers = "1,2,3";
                // Act
                let sum = calculator.add(numbers);
                // Assert
                let expected = 6;
                assert.deepEqual(sum, expected);
            })
            it("should return 6 given string '1\n2,3'", () => {
                // Arrange
                let numbers = "1\n2,3";
                // Act
                let sum = calculator.add(numbers);
                // Assert
                let expected = 6;
                assert.deepEqual(sum, expected);
            })
            it("should return 3 given string '//;\n1;2'", () => {
                // Arrange
                let numbers = "//;\n1;2";
                // Act
                let sum = calculator.add(numbers);
                // Assert
                let expected = 3;
                assert.deepEqual(sum, expected);
            })
            it("should throw 'negatives not allowed' given '1,-2,3'", () => {
                // Arrange
                let numbers = "1,-2,3";
                // Act
                // Assert
                assert.throws(() => calculator.add(numbers), "negatives not allowed: -2");
            });
            it("should throw 'negatives not allowed' given '1,-2,-3'", () => {
                // Arrange
                let numbers = "1,-2,-3";
                // Act
                // Assert
                assert.throws(() => calculator.add(numbers), "negatives not allowed: -2,-3");
            });
            it("should return 2 given '2,1001'", () => {
                // Arrange
                let numbers = "2,1001";
                // Act
                let sum = calculator.add(numbers);
                // Assert
                let expected = 2;
                assert.deepEqual(sum, expected);
            });
            it("should return 6 given '//[***]\n1***2***3'", () => {
                // Arrange
                let numbers = "//[***]\n1***2***3";
                // Act
                let sum = calculator.add(numbers);
                // Assert
                let expected = 6;
                assert.deepEqual(sum, expected);
            });
            it("should return 6 given '//[***]\n1***2***3'", () => {
                // Arrange
                let numbers = "//[*][%]\n1*2%3";
                // Act
                let sum = calculator.add(numbers);
                // Assert
                let expected = 6;
                assert.deepEqual(sum, expected);
            });
        })
    });
