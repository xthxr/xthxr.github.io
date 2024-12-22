document.getElementById("loanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const transactions = parseFloat(document.getElementById("transactions").value);

    document.getElementById("userName").textContent = name;
    document.getElementById("userEmail").textContent = email;
    document.getElementById("userTransactions").textContent = transactions;

    let risk = calculateRiskFactor(transactions);
    document.getElementById("riskFactor").textContent = `${risk}%`;

    document.getElementById("result").style.display = "block";
    document.querySelector(".form-container").style.display = "none";
    setTimeout(function() {
        document.getElementById("result").style.opacity = 1;
    }, 100);

    showLoanStatus(risk);
});

function calculateRiskFactor(transactions) {
    let risk = 100;


    let incomeFactor = transactions / 200;

    risk -= incomeFactor; 
    if (risk < 10) {
        risk = 10;  
    }

    return Math.round(risk);
}

function showLoanStatus(risk) {
    let statusMessage = "";
    if (risk < 50) {
        statusMessage = "Loan Approved! Your risk factor is below 50%.";
    } else {
        statusMessage = "Loan Not Approved. Your risk factor is too high.";
    }

    displayPopup(statusMessage);
}

function displayPopup(message) {
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.textContent = message;

    document.body.appendChild(popup);

    setTimeout(function() {
        popup.style.opacity = 0;
        setTimeout(function() {
            popup.remove();
        }, 300); 
    }, 3000); 
}

document.getElementById("resetBtn").addEventListener("click", function() {

    document.getElementById("loanForm").reset();
    document.getElementById("result").style.display = "none";
    document.querySelector(".form-container").style.display = "block";
});
