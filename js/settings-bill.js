
var billItemTypeWithSettingsElem = document.querySelector(".billItemTypeWithSettings")


var callTotalSettingsField = document.querySelector(".callTotalSettings")
var smsTotalSettingsField= document.querySelector(".smsTotalSettings")
var totalSettingsField = document.querySelector(".totalSettings")

var callCostSettingsElem = document.querySelector(".callCostSetting");
var smsCostSettingsElem = document.querySelector(".smsCostSetting");
var warningLevelSettingsElem = document.querySelector(".warningLevelSetting");
var criticalLevelSettingsElem = document.querySelector(".criticalLevelSetting");



var settingsBillAddBtnElem = document.querySelector(".settingsBillAddBtn")


var updateSettings = document.querySelector(".updateSettings")


var instanceSettingsBill = billWithSettings()

function costUpdateSetting() {

  
if (callCostSettingsElem.value && smsCostSettingsElem.value) {

 Number(instanceSettingsBill.setCallCost(Number(callCostSettingsElem.value)));

 Number(instanceSettingsBill.setSmsCost(Number(smsCostSettingsElem.value)));
 Number(instanceSettingsBill.setWarningLevel(warningLevelSettingsElem.value));
 Number(instanceSettingsBill.setCriticalLevel(criticalLevelSettingsElem.value));
   
 colors()
 
}
}
updateSettings.addEventListener('click', costUpdateSetting)



function settingBill (){
var checkedSettingBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");

    if(checkedSettingBtn){
        instanceSettingsBill.overallBill(checkedSettingBtn.value);


    }
    
       colors()
    callTotalSettingsField.innerHTML = instanceSettingsBill.getTotalCallCost().toFixed(2);
    smsTotalSettingsField.innerHTML = instanceSettingsBill.getTotalSmsCost().toFixed(2);
    totalSettingsField.innerHTML = instanceSettingsBill.getTotalCost().toFixed(2);
        
        


   

    
}

function colors(){
totalSettingsField.classList.remove("warning");
totalSettingsField.classList.remove("danger");
totalSettingsField.classList.add(instanceSettingsBill.totalClassName());

}

settingsBillAddBtnElem.addEventListener('click',settingBill)





    
