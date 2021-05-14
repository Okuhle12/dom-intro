
describe('Calculate bill', function(){
    
    it('It should be able to take a string of a call and return total phone bill when calculate button is pressed', function(){
    
        let calculateB = calculateBill();
        assert.equal(2.75,calculateB.calculateBtnClicked('call'));

        
    });
    it('It should be able to take a string of an SMS and return total phone bill when calculate button is pressed', function(){

        let calculateB = calculateBill();
        assert.equal(0.75,calculateB.calculateBtnClicked('sms'));

        
    });
    it('It should be able to return warning when the total bill reaches 20', function(){

        let calculateB = calculateBill();        
        assert.equal(20,calculateB.levelNames('sms,call,call, call,call,call,call,call'));
       assert.equal('warning',levelNames())
        
    });
    it('It should be able to return danger when the total bill exceeds 30', function(){

        let calculateB = calculateBill();
        assert.equal(40, calculateB.levelNames('sms,call,call, call,call,call,call,call,sms,call,call, call,call,call,call,call'));
       assert.equal('danger',levelNames())
        
    });
});







