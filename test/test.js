const assert = require('assert');

describe('files to be tested',()=>{
    context('functions to be tesed',()=>{
       before(()=>{
           console.log('=======before========');
       })
       after(()=>{
        console.log('=======after========');
       })
        it('should do something',()=>{
            assert.equal(1,1);
        })
        it('should do something else',()=>{
            assert.deepEqual({name:'joe'},{name:'joe'})
        })
        it('pending test')
    })

})