const readline = require("readline");

function analyzeCustomer(customer) {
    if (customer.sentiment === "angry") {
        return {
            priority: "HIGH",
            action: "Contact the customer immediately."
        };
    } else if (customer.sentiment === "neutral") {
        return {
            priority: "NORMAL",
            action: "Review the customer request."
        };
    } else {
        return {
            priority: "LOW",
            action: "No urgent action needed."
        };
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Customer name: ", function(name) {

    rl.question("Issue: ", function(issue) {

        rl.question("Sentiment (angry / neutral / happy): ", function(sentiment) {

            const customer = {
                name: name,
                issue: issue,
                sentiment: sentiment
            };

            const result = analyzeCustomer(customer);

            console.log("-----------------------");
            console.log("Customer:", customer.name);
            console.log("Issue:", customer.issue);
            console.log("Sentiment:", customer.sentiment);
            console.log("Priority:", result.priority);
            console.log("Suggested action:", result.action);

            rl.close();
        });
    });
});