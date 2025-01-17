function processNumberList(numbers) {
    for (let index = 0; index < numbers.length; index++) {
        const number = numbers[index];
        console.log(`\nNumber: ${number}`);

        // Check if the number is even or odd
        if (number % 2 == 0) {
            console.log(`${number} is an Even number`);
        } else {
            console.log(`${number} is an Odd number`);
        }

        // Categorize the number as "small", "medium", or "large"
        function categorizeNumber(number) {
            switch (true) {
                case (number >= 1 && number <= 10):
                    console.log("Category: Small");
                    break;
                case (number >= 11 && number <= 100):
                    console.log("Category: Medium");
                    break;
                case (number >= 101):
                    console.log("Category: Large");
                    break;
                default:
                    console.log("Number out of range");
            }
        }

        categorizeNumber(number);
    }
}

numberList = [5, 12, 105, 2, 45, 75];
processNumberList(numberList);