const desc = document.getElementById("desc");
const amount = document.getElementById("amount");
const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");
const transactionList = document.getElementById("transactionList");
const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");
const balance = document.getElementById("balance");

let income = [];
let expense = [];

function addTransaction(type) {
  const newDesc = desc.value;
  const newAmount = Number(amount.value);

  const newTransfer = {
    description: newDesc,
    amount: newAmount,
    type: type,
  };

  if (type === "inkomst") {
    income.push(newTransfer);
  } else if (type === "utgift") {
    expense.push(newTransfer);
  }

  //test i konsol:
  console.log(newTransfer);

  //tömning av inmatning:
  desc.value = "";
  amount.value = "";

  renderTransaction();
  updateBalance();
}

function renderTransaction() {
  incomeList.innerHTML = "";
  expenseList.innerHTML = "";

  for (let transfer of income) {
    const li = document.createElement("li");
    li.textContent = `${transfer.description} - ${transfer.amount} kr (Inkomst)`;
    incomeList.appendChild(li);
  }
  for (let transfer of expense) {
    const li = document.createElement("li");
    li.textContent = `${transfer.description} - ${transfer.amount} kr (Utgift)`;
    expenseList.appendChild(li);
  }
}

//totalen:
function updateBalance() {
  let totalIncome = 0;
  for (let number of income) {
    totalIncome += number.amount;
  }

  let totalExpense = 0;
  for (let number of expense) {
    totalExpense += number.amount;
  }

  const totalBalance = totalIncome - totalExpense;
  balance.innerHTML = totalBalance;
}

incomeBtn.addEventListener("click", () => {
  addTransaction("inkomst");
});

expenseBtn.addEventListener("click", () => {
  addTransaction("utgift");
});