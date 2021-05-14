
var billTypeTextElem = document.querySelector(".billTypeText")

var Elem = document.querySelector(".addToBillBtn")



var callTotalOneElem = document.querySelector(".callTotalOne")

var smsTotalOneElem = document.querySelector(".smsTotalOne")

var totalOneElem = document.querySelector(".totalOne")



var textTotalAddBtn = document.querySelector(".addToBillBtn");



var callsTotal = 0;
var smsTotal = 0;

var instanceText =  billText()

function textBillTotal(){
   
   instanceText.textBillTotal(billTypeTextElem.value)
 
    callTotalOneElem.innerHTML = instanceText.callsTotals().toFixed(2);
    smsTotalOneElem.innerHTML = instanceText.smsTotals().toFixed(2);
    totalOneElem.innerHTML = instanceText.totalAll().toFixed(2);
    

   
    totalOneElem.classList.remove("warning");
    totalOneElem.classList.remove("danger");
    totalOneElem.classList.add(instanceText.classNames())


    
}



textTotalAddBtn.addEventListener('click', textBillTotal);
