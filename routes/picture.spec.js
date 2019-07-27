const supertest = require('supertest');
const router = require('./picture');

describe('pictures router', () => {

    describe('GET /', () => {
        it('responds with 200 OK', () => {
            supertest(router).get('/')
            .expect(200)
            .expect('Content-Type', /json/i)
        });
    });

});