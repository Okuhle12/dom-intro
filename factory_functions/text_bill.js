
function billText(){

    var totalCalls = 0;
    var totalSms = 0;
    var allTotal = 0;
    
    function callsTotals(){
        return totalCalls
    }

    function smsTotals(){
        return totalSms
    }

    function totalAll(){
        return totalSms + totalCalls
    }


    function textBillTotal(billTypeText){
        // get the value entered in the billType textfield
        var billTypeEntered = billTypeText.trim();
        
        // update the correct total
        if (billTypeEntered === "call"){
            totalCalls += 2.75
            
        }
        else if (billTypeEntered === "sms"){
            totalSms += 0.75;
        }
        
    }

    function classNames(){

        if(totalAll() >= 50){
             
            return 'danger'
        }
        else if (totalAll() >= 30 && totalAll() < 50){
            return 'warning'

        }
    }   

    return{
    textBillTotal,
    callsTotals,
    smsTotals,
    totalAll,
    classNames
 
    }

    


}
