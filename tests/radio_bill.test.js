describe('Radio bill button ', function(){
    it('It should be able to select a string of a call and return total phone bill and update global total when an add button is pressed', function(){

    let radioBillButton= buttonRadioBill();
    
        
    radioBillButton.totalRadioBill('call');
    radioBillButton.totalRadioBill('call');
    radioBillButton.totalRadioBill('call');

    assert.equal(8.25, radioBillButton.callsTotalss());
    
    });
    it('It should be able to select a string of an sms and return total phone bill and update global total when an add button is pressed', function(){

        let radioBillButton= buttonRadioBill();
        
            
        radioBillButton.totalRadioBill('sms');
        radioBillButton.totalRadioBill('sms');
        radioBillButton.totalRadioBill('sms');
    
        assert.equal(2.25, radioBillButton.smsTotalss());
        
        });
        it('It should return the total for each call and sms and be able to update the global total when the add button is pressed', function(){

            let radioBillButton= buttonRadioBill();
            
                
            radioBillButton.totalRadioBill('call');
            radioBillButton.totalRadioBill('call');
            radioBillButton.totalRadioBill('call');
            radioBillButton.totalRadioBill('call');
            radioBillButton.totalRadioBill('sms');
            radioBillButton.totalRadioBill('sms');
        
            assert.equal(1.50, radioBillButton.smsTotalss());
            assert.equal(11.00, radioBillButton.callsTotalss());
            
            });
    
    
            describe('warning and danger level', function(){
                it("It should return 'warning' when global total is greater than 30 and less than 50", function(){
            
                let radioBillButton= buttonRadioBill();
                
                    
                radioBillButton.totalRadioBill('call');
                radioBillButton.totalRadioBill('call');
                radioBillButton.totalRadioBill('call');
                radioBillButton.totalRadioBill('call');
                radioBillButton.totalRadioBill('call');
                radioBillButton.totalRadioBill('call');
                    
                radioBillButton.totalRadioBill('call');
                radioBillButton.totalRadioBill('sms');
                radioBillButton.totalRadioBill('sms');
                radioBillButton.totalRadioBill('sms');
                radioBillButton.totalRadioBill('sms');
                radioBillButton.totalRadioBill('sms');
                radioBillButton.totalRadioBill('call');
                radioBillButton.totalRadioBill('call');
                radioBillButton.totalRadioBill('call');
                radioBillButton.totalRadioBill('call');
                radioBillButton.totalRadioBill('call');
                radioBillButton.totalRadioBill('call');
            
                assert.equal('warning', radioBillButton.classNamess());
                assert.equal(39.5, radioBillButton.totalAlls());
                
           });
           it("It should return 'danger' when global total is greater than 30 and less than 50", function(){
            
            let radioBillButton= buttonRadioBill();
            
                
            radioBillButton.totalRadioBill('call');
            radioBillButton.totalRadioBill('call');
            radioBillButton.totalRadioBill('call');
            radioBillButton.totalRadioBill('call');
            radioBillButton.totalRadioBill('call');
            radioBillButton.totalRadioBill('call');
                
            radioBillButton.totalRadioBill('call');
            radioBillButton.totalRadioBill('sms');
            radioBillButton.totalRadioBill('sms');
            radioBillButton.totalRadioBill('sms');
            radioBillButton.totalRadioBill('sms');
            radioBillButton.totalRadioBill('sms');
            radioBillButton.totalRadioBill('call');
            radioBillButton.totalRadioBill('call');
            radioBillButton.totalRadioBill('call');
            radioBillButton.totalRadioBill('call');
            radioBillButton.totalRadioBill('call');
            radioBillButton.totalRadioBill('call');
            radioBillButton.totalRadioBill('call');
            radioBillButton.totalRadioBill('call');
            radioBillButton.totalRadioBill('call');
            radioBillButton.totalRadioBill('call');
            radioBillButton.totalRadioBill('call');
            radioBillButton.totalRadioBill('call');
            radioBillButton.totalRadioBill('call');
            radioBillButton.totalRadioBill('call');
            radioBillButton.totalRadioBill('call');
            radioBillButton.totalRadioBill('call');
            radioBillButton.totalRadioBill('call');
            radioBillButton.totalRadioBill('call');
        
            assert.equal('danger', radioBillButton.classNamess());
            assert.equal(72.5, radioBillButton.totalAlls());
            });
        });

});