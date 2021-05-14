
describe('Calculate bill', function(){
    
    it('It should be able to take a string of a call and return total phone bill when calculate button is pressed', function(){
    
        assert.equal(2.75, calculateBtnClicked('call'));

        
    });
    it('It should be able to take a string of an SMS and return total phone bill when calculate button is pressed', function(){

        
        assert.equal(0.75,calculateBtnClicked('sms'));

        
    });
    it('It should be able to return warning when the total bill reaches 20', function(){

        
        assert.equal(20,calculateBtnClicked('sms,call,call, call,call,call,call,call'));
       assert.equal('warning',levelNames())
        
    });
    it('It should be able to return danger when the total bill exceeds 30', function(){

        
        assert.equal(40,calculateBtnClicked('sms,call,call, call,call,call,call,call,sms,call,call, call,call,call,call,call'));
       assert.equal('danger',levelNames())
        
    });
});







