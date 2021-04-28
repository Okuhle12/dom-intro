// get a reference to the textbox where the bill type is to be entered
var billTypeTextElem = document.querySelector(".billTypeText")
//get a reference to the add button
var Elem = document.querySelector(".addToBillBtn")

//create a variable that will keep track of the total bill

var callTotalOneElem = document.querySelector(".callTotalOne")

var smsTotalOneElem = document.querySelector(".smsTotalOne")

var totalOneElem = document.querySelector(".totalOne")


//add an event listener for when the add button is pressed
var textTotalAddBtn = document.querySelector(".addToBillBtn");

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

// these variables are global and defined outside of the Add button event listener.
var callsTotal = 0;
var smsTotal = 0;

function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeTextElem.value.trim();
    
    // update the correct total
    if (billTypeEntered === "call"){
        callsTotal += 2.75
        
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }

   
    var totalCost = callsTotal + smsTotal;
    
    //update the totals that is displayed on the screen.
    callTotalOneElem.innerHTML = callsTotal.toFixed(2);
    smsTotalOneElem.innerHTML = smsTotal.toFixed(2);
    totalOneElem.innerHTML = totalCost.toFixed(2);

    


    if(totalCost >= 50){
        totalOneElem.classList.add("danger");
    }
    else if(totalCost >= 30){
    totalOneElem.classList.add("warning");
    totalOneElem.classList.remove("danger");
    }

    else {
        totalOneElem.classList.remove("warning");
        totalOneElem.classList.remove("danger");
    }
}



textTotalAddBtn.addEventListener('click', textBillTotal);
