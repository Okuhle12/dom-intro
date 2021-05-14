function calculateBill(){
    var billType;

    function calculateBtnClicked(billString){  
        console.log(billString)
        var billItems = billString.split(',');
        console.log(billItems)
       
        billType = billString;
        var billTotal = 0;
        
        for (var i=0;i<billItems.length;i++){
            
            var billItem = billItems[i].trim();
    
            if (billItem == "call"){
                billTotal += 2.75;
            }
            else if (billItem === "sms"){
                billTotal += 0.75;
            }
            
        }
        return billTotal.toFixed(2);
    }


        
    //billTotal += 2.75;
    //setting color limit
    function levelNames(){

   
    if(calculateBtnClicked(billType)>= 30){
        return "danger";
    }
    else if(calculateBtnClicked(billType) >= 20 && calculateBtnClicked(billType) < 30){
     return "warning";
   
    }
    return calculateBtnClicked(billType);

}


return{
    calculateBtnClicked,
    levelNames
}
}




     
        



