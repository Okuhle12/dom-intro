describe('Text bill', function(){
    
    it('It should be able to take a string of a call and be able to  update the appropriate total and global total when the add buttonis pressed', function(){
        let textBill= billText();

        textBill.textBillTotal('call');
        textBill.textBillTotal('call');
        textBill.textBillTotal('call');
        textBill.textBillTotal('call');

        
        
        assert.equal(11.00, textBill.callsTotals());
        
        
    });
    it('It should be able to take a string of a sms and be able to  update the appropriate total and global total when the add buttonis pressed', function(){
        let textBill= billText();

        textBill.textBillTotal('sms');
        textBill.textBillTotal('sms');
        textBill.textBillTotal('sms');
        
        
        
        assert.equal(2.25, textBill.smsTotals());
});

it('It should return the total for both calls and sms and update the global total', function(){
    let textBill= billText();

    textBill.textBillTotal('call');
    textBill.textBillTotal('call');
    
    textBill.textBillTotal('sms');
   
    


    assert.equal(0.75, textBill.smsTotals());
    assert.equal(5.50, textBill.callsTotals());
    assert.equal(6.25, textBill.totalAll());




});



describe('Warning and danger levels', function(){
    
    it("It should return 'warning' when global total is greater than 30 and less than 50", function(){
        let textBill= billText();

        textBill.textBillTotal('call');
        textBill.textBillTotal('call');
        textBill.textBillTotal('call');
        textBill.textBillTotal('call');
        textBill.textBillTotal('call');
        textBill.textBillTotal('call');
        textBill.textBillTotal('call');
        textBill.textBillTotal('call');
        textBill.textBillTotal('call');
        textBill.textBillTotal('call');
        textBill.textBillTotal('call');
        textBill.textBillTotal('call');

        assert.equal('warning', textBill.classNames());
        assert.equal(33.00, textBill.totalAll());

});
 
it("It should return 'danger' when global total is greater than 50", function(){
    let textBill= billText();

    textBill.textBillTotal('call');
    textBill.textBillTotal('call');
    textBill.textBillTotal('call');
    textBill.textBillTotal('call');
    textBill.textBillTotal('call');
    textBill.textBillTotal('call');
    textBill.textBillTotal('call');
    textBill.textBillTotal('call');
    textBill.textBillTotal('call');
    textBill.textBillTotal('call');
    textBill.textBillTotal('sms');
    textBill.textBillTotal('sms');
    textBill.textBillTotal('sms');
    textBill.textBillTotal('sms');
    textBill.textBillTotal('sms');
    textBill.textBillTotal('sms');
    textBill.textBillTotal('call');
    textBill.textBillTotal('call');
    textBill.textBillTotal('call');
    textBill.textBillTotal('call');
    textBill.textBillTotal('call');
    textBill.textBillTotal('call');
    textBill.textBillTotal('call');
    textBill.textBillTotal('call');
    textBill.textBillTotal('call');
    textBill.textBillTotal('call');

    assert.equal('danger', textBill.classNames());
    assert.equal(59.50, textBill.totalAll());
});
});
});


