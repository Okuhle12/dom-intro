//get a reference to the calculate button
var calculateBtnElem = document.querySelector(".calculateBtn")

//get a reference to the billTotal element
var billTotalElem = document.querySelector(".billTotal")
//get a reference to the billString
var billStringElem = document.querySelector(".billString")

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
    
    function calculateBtnClicked(){
// get the string entered in the textArea

        var billString = billStringElem.value;
        
        //split the string
        var billItems = billString.split(',');

      // a variable for the total phone bill.
       var billTotal = 0;
        
        //loop over all the bill items
        for (var i=0;i<billItems.length;i++){
         
         var billItem = billItems[i].trim();
    
            if (billItem == "call"){
                billTotal += 2.75;
            }
            else if (billItem === "sms"){
                billTotal += 0.75;
            }
        }
        //round to two decimals
        var roundedBillTotal = billTotal.toFixed(2);
        billTotalElem.innerHTML = roundedBillTotal;




         //setting color limit
    if(billTotal >= 30){
        billTotalElem.classList.add("danger");
    }
    else if(billTotal>= 20){
    billTotalElem.classList.add("warning");
    billTotalElem.classList.remove("danger");
    }

    else {
        billTotalElem.classList.remove("warning");
        billTotalElem.classList.remove("danger");
    }
}

    
    
   
    calculateBtnElem.addEventListener("click", calculateBtnClicked)





