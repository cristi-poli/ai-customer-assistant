async function analyzeCustomer() {

    const name = document.getElementById("customerName").value;
    const issue = document.getElementById("customerIssue").value;
    const sentiment = document.getElementById("customerSentiment").value;

    if (name === "" || issue === "") {
        alert("Please complete all fields.");
        return;
    }

    const customer = {
        name: name,
        issue: issue,
        sentiment: sentiment
    };

    try {
        const response = await fetch("/analyze", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(customer)
        });

        const result = await response.json();

        document.getElementById("resultCustomer").textContent =
            "Customer: " + name;

        document.getElementById("resultIssue").textContent =
            "Issue: " + issue;

        document.getElementById("resultSentiment").textContent =
            "Sentiment: " + sentiment;

        document.getElementById("resultPriority").textContent =
            "Priority: " + result.priority;

        document.getElementById("resultAction").textContent =
            "Suggested action: " + result.action;

    } catch (error) {
        alert("Could not connect to the server.");
        console.error(error);
    }
}