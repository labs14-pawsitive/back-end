const supertest = require('supertest');
const router = require('./shelters');

describe('shelters router', () => {

    describe('GET /', () => {
        it('responds with 200 OK', () => {
            supertest(router).get('/')
            .expect(200)
            .expect('Content-Type', /json/i)
        });
    });

});