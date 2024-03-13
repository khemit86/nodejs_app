const assert = require('assert');
const request  = require('supertest')
const app = require('../index');

describe('Simple Calclations',()=>{
    before(()=>{

        console.log( "This part executes once before all tests" ); 


    });

    after(()=>{
        console.log( "This part executes once after all tests" ); 

    });

    describe('Test1',()=>{
        beforeEach(()=>{
            console.log( "executes before every test" ); 

        })

        it("Its returning 5 when adding 2+3",()=>{
            assert.equal(2+3,5)

        })

        it('Its returning 6 when multiplying 2*3',()=>{

            assert.equal(2*3,6)
        })

    })


    describe('Test2',()=>{

        beforeEach(()=>{
            console.log( "executes before every test" ); 


        })

        it('Is returning 4 when adding 2+3',()=>{
            assert.equal(2+3,4)


        })

        it('Its returning 8 when multiplying 2*4',()=>{
                assert.equal(2*4,8)

        })


    })


    describe('GET /', () => {
        it('responds with "Hello World"', (done) => {
          request(app)
            .get('/')
            .expect(200)
            .expect('Hello World')
            .end((err, res) => {
              if (err) return done(err);
              done();
            });
        });
    });



})