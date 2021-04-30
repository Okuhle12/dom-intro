// get a reference to the sms or call radio buttons
var billItemTypeRadioElem = document.querySelector(".billItemTypeRadio")

//get a reference to the add button
var radioBillAddBtnElem = document.querySelector(".radioBillAddBtn")

//create a variable that will keep track of the total bill

var callTotalTwoElem = document.querySelector(".callTotalTwo")

var smsTotalTwoElem = document.querySelector(".smsTotalTwo")

var totalTwoElem = document.querySelector(".totalTwo")


var callsTotalTwo = 0;
var smsTotalTwo = 0;
var totalsCost = 0;

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
function totalRadioBill (){
    
var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
// alert("anon")

  
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value;
    // billItemType will be 'call' or 'sms'
    
    if (billItemType === "call"){
        callsTotalTwo += 2.75
        totalsCost += 2.75;
        
    }
    else if (billItemType === "sms"){
        smsTotalTwo += 0.75;
        totalsCost += 0.75;
    }
    var totalsCost = callsTotalTwo + smsTotalTwo;
    
    //update the totals that is displayed on the screen.
    callTotalTwoElem.innerHTML = callsTotalTwo.toFixed(2);
    smsTotalTwoElem.innerHTML = smsTotalTwo.toFixed(2);
    totalTwoElem.innerHTML = totalCost.toFixed(2);

    


    if(totalsCost >= 50){
        totalTwoElem.classList.add("danger");
    }
    else if(totalsCost >= 30){
    totalTwoElem.classList.add("warning");
    totalTwoElem.classList.remove("danger");
    }

    else {
        totalTwoElem.classList.remove("warning");
        totalTwoElem.classList.remove("danger");
    }
}


}
radioBillAddBtnElem.addEventListener('click', totalRadioBill);


