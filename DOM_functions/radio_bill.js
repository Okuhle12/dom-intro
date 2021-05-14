function buttonRadioBill(){


  var totalCallss = 0;
  var smsTotalTwoo = 0;
  var callsTotalTwoo = 0;
  var totalsCosts = 0;
  


     
    function callsTotalss(){
        
        return callsTotalTwoo
    }
     


      
    function smsTotalss(){
        return smsTotalTwoo
    }


    function totalAlls(){
        return smsTotalTwoo +  callsTotalTwoo
    }

    function classNamess(){

        if(totalAlls() >= 50){
             
            return 'danger'
        }
        else if (totalAlls() >= 30 && totalAlls() < 50){
            return 'warning'

        }
    }   


    

        function totalRadioBill (checkedRadioButton){
        
            var billItemType = checkedRadioButton;
            // billItemType will be 'call' or 'sms'
            
            if (billItemType === "call"){
                callsTotalTwoo += 2.75
                totalsCosts += 2.75;
                
            }
            else if (billItemType === "sms"){
                smsTotalTwoo += 0.75;
                totalsCosts += 0.75;
            }
        }
    

return {
   callsTotalss,
    smsTotalss,
    callsTotalss,
    totalRadioBill,
    classNamess,
    totalAlls,
    
    
}

}