
var billItemTypeRadioElem = document.querySelector(".billItemTypeRadio")

var radioBillAddBtnElem = document.querySelector(".radioBillAddBtn")



var callTotalTwoElem = document.querySelector(".callTotalTwo")

var smsTotalTwoElem = document.querySelector(".smsTotalTwo")

var totalTwoElem = document.querySelector(".totalTwo")


var callsTotalTwo = 0;
var smsTotalTwo = 0;
var totalsCost = 0;

var instanceRadio = buttonRadioBill()


function totalRadioBill (){
    
var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  
if (checkedRadioBtn){
   
    instanceRadio.totalRadioBill(checkedRadioBtn.value)
    
    
    callTotalTwoElem.innerHTML = instanceRadio.callsTotalss().toFixed(2);
    smsTotalTwoElem.innerHTML = instanceRadio.smsTotalss().toFixed(2);
    totalTwoElem.innerHTML = instanceRadio.totalAlls().toFixed(2);


    totalTwoElem.classList.remove("warning");
    totalTwoElem.classList.remove("danger");
    totalTwoElem.classList.add(instanceRadio.classNamess())
    
}


}
radioBillAddBtnElem.addEventListener('click', totalRadioBill);


