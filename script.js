// Event listener for form submission
document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values from form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const transactions = parseFloat(document.getElementById("transactions").value);

    // Set values in result container
    document.getElementById("userName").textContent = name;
    document.getElementById("userEmail").textContent = email;
    document.getElementById("userTransactions").textContent = transactions;

    // Calculate risk factor
    let risk = calculateRiskFactor(transactions);
    document.getElementById("riskFactor").textContent = `${risk}%`;

    // Show result and hide form with transition
    document.getElementById("result").style.display = "block";
    document.querySelector(".form-container").style.display = "none";
    setTimeout(function() {
        document.getElementById("result").style.opacity = 1;
    }, 100);

    // Show popup notification for Loan Approval
    showLoanStatus(risk);
});

// Function to calculate risk factor based on monthly income
function calculateRiskFactor(transactions) {
    let risk = 100; // Base risk factor is 100%

    // Risk decreases as transactions increase (the more income, the lower the risk)
    let incomeFactor = transactions / 1000; // You can adjust this factor to fine-tune the risk curve

    // Subtract the income factor from the baseline risk factor
    risk -= incomeFactor;

    // Set a minimum risk floor of 10% (it cannot go below this value)
    if (risk < 10) {
        risk = 10;
    }

    return Math.round(risk); // Return the risk factor as an integer
}

// Function to show Loan Status (Approved/Not Approved)
function showLoanStatus(risk) {
    let statusMessage = "";
    if (risk < 50) {
        statusMessage = "Loan Approved! Your risk factor is below 50%.";
    } else {
        statusMessage = "Loan Not Approved. Your risk factor is too high.";
    }

    // Show the popup
    displayPopup(statusMessage);
}

// Function to display the popup notification
function displayPopup(message) {
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.textContent = message;

    // Append the popup to the body
    document.body.appendChild(popup);

    // Fade-out effect after 3 seconds
    setTimeout(function() {
        popup.style.opacity = 0;
        setTimeout(function() {
            popup.remove();
        }, 300); // Remove the popup after fade-out
    }, 3000); // Display for 3 seconds
}

// Event listener for reset button
document.getElementById("resetBtn").addEventListener("click", function() {
    // Reset form and hide result
    document.getElementById("loanForm").reset();
    document.getElementById("result").style.display = "none";
    document.querySelector(".form-container").style.display = "block";
});
