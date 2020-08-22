const assert = require('assert');

describe('files to be tested',()=>{
    context('functions to be tesed',()=>{
       before(()=>{
           console.log('=======before========');
       })
       after(()=>{
        console.log('=======after========');
       })

       beforeEach(()=>{
           console.log('Before Each');
       })

       afterEach(()=>{
           console.log('After each');
       })
        it('should do something',()=>{
            assert.equal(1,1);
        })
        it('should do something else',()=>{
            assert.deepEqual({name:'joe'},{name:'joe'})
        })
        it('pending test')

        
    })

    context('another function',()=>{
        it('pending test',()=>{
            console.log('pending test in another fucntion');
        })
    })

})