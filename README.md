# 💰 Split The Bill Calculator

A modern and responsive Split-The-Bill Calculator built using HTML, CSS, and JavaScript. This application helps users quickly divide a bill among multiple people while considering tips and taxes. It provides a clean user interface, useful utility features, and a mobile-friendly design.

---

## 🚀 Features

- Calculate bill amount per person
- Add predefined tip percentages
- Add custom tip percentage
- GST/Tax calculation support
- Currency selection (₹, $, €)
- Round-off option for per-person amount
- Dark/Light mode toggle
- Copy calculation results to clipboard
- Download receipt as a text file
- Share results via WhatsApp
- Expense history using Local Storage
- Responsive design for desktop, tablet, and mobile devices
- Input validation and error handling
- Interactive and user-friendly interface

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

## 📂 Project Structure

```text
split-bill-calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 📋 How to Use

1. Enter the total bill amount.
2. Enter the number of people sharing the bill.
3. Select a tip percentage or enter a custom tip.
4. Add GST/Tax percentage if applicable.
5. Choose your preferred currency.
6. Enable the round-off option if required.
7. Click **Calculate** to view the results.
8. Use additional options to:
   - Copy Results
   - Download Receipt
   - Share via WhatsApp
9. View previous calculations in the Expense History section.

---

## 📊 Calculation Formula

```javascript
tipAmount = bill * (tip / 100);

taxAmount = bill * (tax / 100);

totalAmount = bill + tipAmount + taxAmount;

perPerson = totalAmount / numberOfPeople;
```

---

## 🌐 Special Requirement

This project includes a button labeled exactly:

**Built for Digital Heroes**

which links to:

https://digitalheroesco.com

---

## 👨‍💻 Developer

**Abhinav Kumar Jaiswal**

Email: abhinavusictit@gmail.com

---

## 🎯 Learning Outcomes

Through this project, the following concepts are demonstrated:

- DOM Manipulation
- Event Handling
- Form Validation
- Responsive Web Design
- Local Storage
- File Download Functionality
- Clipboard API
- Theme Switching (Dark/Light Mode)
- JavaScript Calculations and Logic

---

## 📜 License

This project is created for educational and portfolio purposes.

© 2026 Abhinav Kumar Jaiswal
