
var calculateBtnElem = document.querySelector(".calculateBtn")

var billTotalElem = document.querySelector(".billTotal")

var billStringElem = document.querySelector(".billString")

var instanceCalc =  calculateBill()

    
    function calculateBtnClicked(){
   
        billTotalElem.innerHTML = instanceCalc.calculateBtnClicked(billStringElem.value);
       billTotalElem.classList.remove("warning");
        billTotalElem.classList.remove("danger");
       
        billTotalElem.classList.add(instanceCalc.levelNames())

}
 
    calculateBtnElem.addEventListener("click", calculateBtnClicked)





