
describe('The bill with settings factory function', function(){
    


describe('Set value', function(){
    
    it('Should be able to set the call cost', function(){
        let settingsBill= billWithSettings();
        settingsBill.setCriticalLevel(15);
        
        settingsBill.setCallCost(1.85);
        
        assert.equal(1.85, settingsBill.getCallCost());

         
        let settingsBill2= billWithSettings();
        
        settingsBill2.setCallCost(2.75);
        
        assert.equal(2.75, settingsBill2.getCallCost());

    
        let settingsBill3= billWithSettings();
        
        settingsBill3.setCallCost(3.55);
        
        assert.equal(3.55, settingsBill3.getCallCost());


        

    });
    it('Should be able to set the sms cost', function(){
        let settingsBill= billWithSettings();
        
        settingsBill.setSmsCost(0.55);
        
        assert.equal(0.55, settingsBill.getSmsCost());

         
        let settingsBill2= billWithSettings();
        
        settingsBill2.setSmsCost(1.15);
        
        assert.equal(1.15, settingsBill2.getSmsCost());

    
        let settingsBill3= billWithSettings();
        
        settingsBill3.setSmsCost(2.15);
        
        assert.equal(2.15, settingsBill3.getSmsCost());


});
it('Should be able to set the call and sms cost', function(){
    let settingsBill= billWithSettings();
    
    settingsBill.setCallCost(1.85);
    settingsBill.setSmsCost(0.55);

    assert.equal(1.85, settingsBill.getCallCost());
    assert.equal(0.55, settingsBill.getSmsCost());
    
    let settingsBill2= billWithSettings();
    
    settingsBill2.setCallCost(2.95);
    settingsBill2.setSmsCost(0.75);

    assert.equal(2.95, settingsBill2.getCallCost());
    assert.equal(0.75, settingsBill2.getSmsCost());
    
});
it('Should be able to set the warning level', function(){
    let settingsBill= billWithSettings();
    
    settingsBill.setWarningLevel(20);
    

    assert.equal(20, settingsBill.getWarningLevel());
});
it('Should be able to set the critical level', function(){
    let settingsBill= billWithSettings();
    
    settingsBill.setCriticalLevel(30);
    

    assert.equal(30, settingsBill.getCriticalLevel());
});
it('Should be able to set the critical level and warning level', function(){
    let settingsBill= billWithSettings();
    
    settingsBill.setCriticalLevel(25);
    settingsBill.setWarningLevel(15);


    assert.equal(15, settingsBill.getWarningLevel());
    assert.equal(25, settingsBill.getCriticalLevel());
});
describe('Use values', function(){
    it('Should be able to use the call cost set', function(){

    let settingsBill= billWithSettings();
    settingsBill.setCriticalLevel(15);
     
        
    settingsBill.setCallCost(2.00);
    settingsBill.setSmsCost(1.25);
        
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();

    assert.equal(6.00, settingsBill.getTotalCost());
    assert.equal(6.00, settingsBill.getTotalCallCost());
    assert.equal(0.00, settingsBill.getTotalSmsCost());
    });

    it('Should be able to use the call cost set', function(){

        let settingsBill= billWithSettings();
        settingsBill.setCriticalLevel(15);
         
            
        settingsBill.setCallCost(2.15);
        settingsBill.setSmsCost(1.25);
            
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
    

    
        assert.equal(8.6, settingsBill.getTotalCost());
        assert.equal(8.6, settingsBill.getTotalCallCost());
        assert.equal(0.00, settingsBill.getTotalSmsCost());




});
 
it('Should be able to use the call cost set for 2 calls at 1.36 each', function(){

    let settingsBill= billWithSettings();
    settingsBill.setCriticalLevel(15);
     
        
    settingsBill.setCallCost(1.36);
    settingsBill.setSmsCost(0.85);
        
    settingsBill.makeCall();
    settingsBill.makeCall();
    

    assert.equal(2.72, settingsBill.getTotalCost());
    assert.equal(2.72, settingsBill.getTotalCallCost());
    assert.equal(0.00, settingsBill.getTotalSmsCost());  
});
});
it("Should be able to send 2 sms's at 0.83 each", function(){

    let settingsBill= billWithSettings();
    settingsBill.setCriticalLevel(15);
     
        
    settingsBill.setCallCost(1.36);
    settingsBill.setSmsCost(0.83);
        
    settingsBill.sendSms();
    settingsBill.sendSms();
    
    

    assert.equal(1.66, settingsBill.getTotalCost());
    assert.equal(0.00, settingsBill.getTotalCallCost());
    assert.equal(1.66, settingsBill.getTotalSmsCost());
});
it("Should be able to send 2 sms's at 0.83 each & make 1 call at 1.33 ", function(){

    let settingsBill= billWithSettings();
    settingsBill.setCriticalLevel(15);
     
        
    settingsBill.setCallCost(1.33);
    settingsBill.setSmsCost(0.83);
        
    settingsBill.sendSms();
    settingsBill.sendSms();
    settingsBill.makeCall();
    
    
    

    assert.equal(2.99, settingsBill.getTotalCost());
    assert.equal(1.33, settingsBill.getTotalCallCost());
    assert.equal(1.66, settingsBill.getTotalSmsCost());
});

});



describe('Warning & critical level', function(){
    it("it should return a class name of 'warning' if warning level is reached", function(){

    let settingsBill= billWithSettings();
    settingsBill.setCriticalLevel(15);
     
        
    settingsBill.setCallCost(2.00);
    settingsBill.setSmsCost(1.25);
    settingsBill.setWarningLevel(6);
    settingsBill.setCriticalLevel(15);
        
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
   

    assert.equal('warning', settingsBill.totalClassName());
    
    });
    it("it should return a class name of 'critical' if critical level has been reached", function(){

        let settingsBill= billWithSettings();
         
            
        settingsBill.setCallCost(3.00);
        settingsBill.setSmsCost(1.50);
        settingsBill.setWarningLevel(5);
        settingsBill.setCriticalLevel(10);
            
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
       
       
    
        assert.equal('critical', settingsBill.totalClassName());
       
    
});
it("it should stop the Total call cost from increasing when the critical level has been reached", function(){

    let settingsBill= billWithSettings();
    
     
        
    settingsBill.setCallCost(3.00);
    settingsBill.setSmsCost(1.50);
    settingsBill.setCriticalLevel(15);
        
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    
   

    assert.equal('critical', settingsBill.totalClassName());
    assert.equal('critical', settingsBill.totalClassName());

});
it("it should allow the total to increase after reaching the critical level & then upping the critical level", function(){

    let settingsBill= billWithSettings();
    
     
        
    settingsBill.setCallCost(3.00);
    settingsBill.setSmsCost(1.50);
    settingsBill.setWarningLevel(10)
    settingsBill.setCriticalLevel(15);
        
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    
   

    assert.equal('critical', settingsBill.totalClassName());
    assert.equal(15, settingsBill.getTotalCallCost());

    settingsBill.setCriticalLevel(20);
    assert.equal('warning', settingsBill.totalClassName());
    settingsBill.makeCall;
    settingsBill.makeCall;
    assert.equal(15, settingsBill.getTotalCallCost());

});
});
});

