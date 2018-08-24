// Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none"; //should only be displayed when there is more than 2 people sharing the bill

// Clicking the button calls our custom function
document.getElementById("calculate").onclick = function() { calculateTip(); };

function calculateTip() {
  
  // Store the date of inputs
  var billAmount = document.getElementById("billAmount").value;
  var serviceQuality = document.getElementById("serviceQuality").value;
  var numPeople = document.getElementById("totalPeople").value;

  // Quick validation requested fields are filled adequately
  if(billAmount === "" || serviceQuality == 0) {
    return window.alert("Please enter some values to get this baby up and running!");
  } // prevent the function from continuing

  // Check the field totalPeople
  if(numPeople === "" || numPeople <= 1) {
    numPeople = 1;

    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  // Calculate the tip amount
  var total = (billAmount*serviceQuality)/numPeople;
  total = Math.round(total*100)/100;
  total = total.toFixed(2);

  // Display Total
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}