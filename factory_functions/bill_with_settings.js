function billWithSettings() {
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;
    var callCostTotal = 0
    var smsCostTotal = 0

    function setCallCost(callCost) {
        theCallCost = callCost;

    }

    function getCallCost() {
        return theCallCost;

    }

    function setSmsCost(smsCost) {
        theSmsCost = smsCost;

    }

    function getSmsCost() {
        return theSmsCost;

    }

    //setwarming levels
    function setWarningLevel(warningLevel) {
        theWarningLevel = warningLevel;

    }

    function getWarningLevel() {
        return theWarningLevel;


    }
    function setCriticalLevel(criticalLevel) {
        theCriticalLevel = criticalLevel;

    }

    function getCriticalLevel() {
        return theCriticalLevel;


    }

    function makeCall() {
        if (!hasReachedCriticalLevel()) {
            callCostTotal += theCallCost

        }
    }

    function overallBill(bill) {
        if (bill === "call") {
            makeCall()
        }
        else if (bill === "sms") {
            sendSms()
        }

    }

    function getTotalCost() {
        return callCostTotal + smsCostTotal

    }

    function getTotalCallCost() {
        return callCostTotal
    }

    function getTotalSmsCost() {
        return smsCostTotal;
    }

    function sendSms() {

        if (!hasReachedCriticalLevel()) {
            smsCostTotal += theSmsCost;
        }

    }


    function hasReachedCriticalLevel() {
        return getTotalCost() > getWarningLevel() && getTotalCost() >= getCriticalLevel();

    }


    function totalClassName() {

        if (hasReachedCriticalLevel()) {
            return 'danger'
        }
        if (getTotalCost() >= getWarningLevel() && getTotalCost() < getCriticalLevel()) {
            return 'warning'
        }
    }



    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        totalClassName,
        overallBill

    }
}


