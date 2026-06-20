const billAmount = document.getElementById("billAmount");
const peopleCount = document.getElementById("peopleCount");
const tipPercent = document.getElementById("tipPercent");
const customTip = document.getElementById("customTip");
const taxPercent = document.getElementById("taxPercent");
const currency = document.getElementById("currency");
const roundOff = document.getElementById("roundOff");

const error = document.getElementById("error");

const originalBill = document.getElementById("originalBill");
const tipAmountText = document.getElementById("tipAmount");
const taxAmountText = document.getElementById("taxAmount");
const totalAmountText = document.getElementById("totalAmount");
const perPersonText = document.getElementById("perPerson");

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");
const downloadBtn = document.getElementById("downloadBtn");
const shareBtn = document.getElementById("shareBtn");

let latestResult = "";

loadHistory();

calculateBtn.addEventListener("click", () => {

    const bill = parseFloat(billAmount.value);
    const people = parseInt(peopleCount.value);

    if (!bill || bill <= 0) {
        error.textContent = "Please enter a valid bill amount.";
        return;
    }

    if (!people || people <= 0) {
        error.textContent = "Please enter a valid number of people.";
        return;
    }

    error.textContent = "";

    const tip =
        customTip.value !== ""
            ? parseFloat(customTip.value)
            : parseFloat(tipPercent.value);

    const tax = parseFloat(taxPercent.value) || 0;

    const tipAmount = bill * tip / 100;
    const taxAmount = bill * tax / 100;

    const totalAmount = bill + tipAmount + taxAmount;

    let perPerson = totalAmount / people;

    if (roundOff.checked) {
        perPerson = Math.ceil(perPerson);
    }

    const symbol = currency.value;

    originalBill.textContent = symbol + bill.toFixed(2);
    tipAmountText.textContent = symbol + tipAmount.toFixed(2);
    taxAmountText.textContent = symbol + taxAmount.toFixed(2);
    totalAmountText.textContent = symbol + totalAmount.toFixed(2);
    perPersonText.textContent = symbol + perPerson.toFixed(2);

    latestResult =
`Bill: ${symbol}${bill.toFixed(2)}
Tip: ${symbol}${tipAmount.toFixed(2)}
Tax: ${symbol}${taxAmount.toFixed(2)}
Total: ${symbol}${totalAmount.toFixed(2)}
Per Person: ${symbol}${perPerson.toFixed(2)}`;

    saveHistory(
        `${symbol}${totalAmount.toFixed(2)} | ${people} people | ${symbol}${perPerson.toFixed(2)} each`
    );
});

resetBtn.addEventListener("click", () => {
    billAmount.value = "";
    peopleCount.value = "";
    customTip.value = "";
    taxPercent.value = "";

    originalBill.textContent = "0";
    tipAmountText.textContent = "0";
    taxAmountText.textContent = "0";
    totalAmountText.textContent = "0";
    perPersonText.textContent = "0";

    error.textContent = "";
});

copyBtn.addEventListener("click", () => {

    if (!latestResult) {
        alert("Calculate first.");
        return;
    }

    navigator.clipboard.writeText(latestResult);
    alert("Result copied!");
});

downloadBtn.addEventListener("click", () => {

    if (!latestResult) {
        alert("Calculate first.");
        return;
    }

    const blob = new Blob([latestResult], {
        type: "text/plain"
    });

    const a = document.createElement("a");

    a.href = URL.createObjectURL(blob);
    a.download = "receipt.txt";
    a.click();
});

shareBtn.addEventListener("click", () => {

    if (!latestResult) {
        alert("Calculate first.");
        return;
    }

    const url =
        "https://wa.me/?text=" +
        encodeURIComponent(latestResult);

    window.open(url, "_blank");
});

document
.getElementById("themeToggle")
.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const btn =
        document.getElementById("themeToggle");

    if(document.body.classList.contains("dark")){
        btn.textContent = "☀️ Light Mode";
    }else{
        btn.textContent = "🌙 Dark Mode";
    }
});

function saveHistory(item){

    let history =
        JSON.parse(localStorage.getItem("billHistory")) || [];

    history.unshift(item);

    if(history.length > 10){
        history.pop();
    }

    localStorage.setItem(
        "billHistory",
        JSON.stringify(history)
    );

    loadHistory();
}

function loadHistory(){

    let history =
        JSON.parse(localStorage.getItem("billHistory")) || [];

    const historyList =
        document.getElementById("historyList");

    historyList.innerHTML = "";

    history.forEach(item => {

        const li = document.createElement("li");

        li.textContent = item;

        historyList.appendChild(li);
    });
}