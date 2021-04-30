// get a reference to the sms or call radio buttons
var billItemTypeWithSettingsElem = document.querySelector(".billItemTypeWithSettings")

// get refences to all the settings fields
var callTotalSettingsField = document.querySelector(".callTotalSettings")
var smsTotalSettingsField= document.querySelector(".smsTotalSettings")
var totalSettingsField = document.querySelector(".totalSettings")

var callCostSettingsElem = document.querySelector(".callCostSetting");
var smsCostSettingsElem = document.querySelector(".smsCostSetting");
var warningLevelSettingsElem = document.querySelector(".warningLevelSetting");
var criticalLevelSettingsElem = document.querySelector(".criticalLevelSetting");


//get a reference to the add button
var settingsBillAddBtnElem = document.querySelector(".settingsBillAddBtn")


//get a reference to the 'Update settings' button
var updateSettings = document.querySelector(".updateSettings")

// create a variables that will keep track of all the settings
// var callCostSettingsElem = document.querySelector(".callCostSetting")
// var smsCostSettingsElem = document.querySelector(".smsCostSetting")
// var warningLevelSettingsElem = document.querySelector(".warningLevelSetting")
// var criticalLevelSettingsElem = document.querySelector(".criticalLevelSetting")

// create a variables that will keep track of all three totals.ost
var callTotal = 0;
var smsTotal = 0;
var totalBillType = 0;


var callCost = 0;
var smsCost = 0;
var warmingLevel =0;
var criticalLevel =0;

// create an function for update button 


function costUpdateSetting() {

  
if (callCostSettingsElem.value && smsCostSettingsElem.value) {

callCost = Number(callCostSettingsElem.value);

smsCost = Number (smsCostSettingsElem.value)
warmingLevel = Number (warningLevelSettingsElem.value)
criticalLevel = Number (criticalLevelSettingsElem.value)

    className();
}
}

function settingBill (){
var checkedSettingBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
//this wil make sure that my function don't add any calls or sms's when the critical level is reached
if( totalBillType < criticalLevel){
    if(checkedSettingBtn){

    
        var billItemTypeWithSettings = checkedSettingBtn.value;
        // billItemType will be 'call' or 'sms'
        
        (billItemTypeWithSettings === "call")
            callTotal += callCost 
           
            
        }
        else if (billItemTypeWithSettings === "sms"){
            smsTotal += smsCost
            
        }
    }



if (callCostSettingsElem.value && smsCostSettingsElem.value) {
    
    totalBillType = callTotal + smsTotal;
    
    
    //update the totals that is displayed on the screen.
    callTotalSettingsField.innerHTML = callTotal.toFixed(2);
    smsTotalSettingsField.innerHTML = smsTotal.toFixed(2);
    totalSettingsField.innerHTML = totalBillType.toFixed(2);

   
    

//call the classList function
    className();
}

}
updateSettings.addEventListener('click', costUpdateSetting)
settingsBillAddBtnElem.addEventListener('click',settingBill)

function className() {

    if (totalBillType >= criticalLevel){
        totalSettingsField.classList.remove("warning");
        totalSettingsField.classList.add("danger");

        } else if(totalBillType >= warmingLevel){
        totalSettingsField.classList.remove("danger");
        totalSettingsField.classList.add("warning");
        
    } else {
        totalSettingsField.classList.remove("warning");
        totalSettingsField.classList.remove("danger");
    }
}




    
