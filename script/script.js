$(document).ready(show_cupcakes);

var cup_cakes = [
  { name: "Chocolate", calories: "high", weight: "200gm" },
  { name: "Carrot", calories: "medium", weight: "150gm" },
  { name: "Banana", calories: "high", weight: "200gm" },
  { name: "Strawberry", calories: "low", weight: "160gm" },
  { name: "Peanut", calories: "medium", weight: "200gm" },
];

function show_cupcakes() {
  //write code that shows the cupcakes in the table as per the instructions
  let tbody = document.querySelector("#cupcake-table");
  cup_cakes.forEach((element) => {
    let newRow = document.createElement("tr");
    tbody.append(newRow);

    let td1 = document.createElement("td");
    td1.innerHTML = element.name;
    newRow.append(td1);

    let td2 = document.createElement("td");
    td2.innerHTML = element.calories;
    td2.style.background = colorizeTheSecondeTD(element.calories);
    newRow.append(td2);

    let td3 = document.createElement("td");
    td3.innerHTML = element.weight;
    newRow.append(td3);
  });
}
function colorizeTheSecondeTD(calory) {
  if (calory == "high") {
    return "red";
  } else if (calory == "medium") {
    return "orange";
  } else {
    return "green";
  }
}
let form = document.querySelector("#form");
form.addEventListener("submit", validate);
function validate(e) {
  //write code that validates the form
  e.preventDefault();
  let customerName = e.target.customerName;
  let count = e.target.count;
  let type = e.target.typeSelect;
  let delivery = e.target.deliverySelect;
  let allergies = e.target.allergiesSelect;
  let counter = 0;
  //Customer name validation
  if (customerName.value.length >= 5 && customerName.value.length <= 15) {
    okayMessage(customerName);
    counter++;
  } else {
    errorMessage(
      customerName,
      "The name must be between 5 and 16 characters long"
    );
  }
  //count validation
  if (count.value >= 1 && count.value <= 15) {
    okayMessage(count);
    counter++;
  } else {
    errorMessage(count, "The count must be between 1 and 15");
  }
  //count validation
  if (count.value >= 1 && count.value <= 15) {
    okayMessage(count);
    counter++;
  } else {
    errorMessage(count, "The count must be between 1 and 15");
  }
  if (type.value == "None") {
    errorMessage(type, "None is not accepted");
  } else {
    okayMessage(type);
    counter++;
  }
  if (delivery.value == "None") {
    errorMessage(delivery, "None is not accepted");
  } else if (delivery.value == "4:00 PM" && type.value == "Chocolate") {
    errorMessage(delivery, "This type of cake cannot be delivered at 4 PM.");
  } else {
    okayMessage(delivery);
    counter++;
  }
  if (type.value == "Chocolate" && allergies.value == "Dairy Free") {
    errorMessage(allergies, "This type of cake is not dairy free");
  } else if (type.value == "Pecan" && allergies.value == "Nut Free") {
    errorMessage(allergies, "The pecan cake is not nut free");
  } else {
    okayMessage(allergies);
    counter++;
  }
  if(counter==6){
    localStorage.setItem("user", customerName.value);
    alert("Thank you we received your order")
  }
}

function okayMessage(element) {
  element.nextElementSibling.textContent = "Okay";
  element.nextElementSibling.style.color = "green";
  element.style.border = "2px solid green";
}
function errorMessage(element, message) {
  element.nextElementSibling.textContent = message;
  element.nextElementSibling.style.color = "red";
  element.style.border = "2px solid red";
}

function show_storage() {
  //write code that shows the name from local storage
  let userName = localStorage.getItem("user");
  if (userName) {
    document.querySelector(
      "#welcome"
    ).innerHTML = `Welcome ${userName.toUpperCase()}`;
  }
}
