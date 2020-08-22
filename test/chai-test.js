const chai = require('chai');
const expect= chai.expect;
//expect(42).to.equal(42);

describe('some scenarios',()=>{
    it('first test',function(){

        expect(42).to.equal(42);
        expect('foo').to.be.a('string');
        expect('foo').to.exist;
        expect(4>1).to.be.false;
        expect(4>1).to.be.true;
        expect('barr').to.have.length(4);

    })
})