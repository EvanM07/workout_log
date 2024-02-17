const form = document.getElementById("inputForm");
const dateField = document.getElementById("dateField");
const numberField = document.getElementById("numberField");
const storedInfo = document.getElementById("storedInfo");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const date = dateField.value;
  const number = numberField.value;
  localStorage.setItem("storedDate", date);
  localStorage.setItem("storedNumber", number);
  displayStoredInfo();
});

function displayStoredInfo() {
  const storedDate = localStorage.getItem("storedDate");
  const storedNumber = localStorage.getItem("storedNumber");
  if (storedDate && storedNumber) {
    storedInfo.innerHTML = `Date: ${storedDate}, Number: ${storedNumber}`;
  } else {
    storedInfo.innerHTML = "No stored information";
  }
}

displayStoredInfo();
