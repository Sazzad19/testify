const request = require('supertest');
const express = require('express');
const app = express();
let Assessment = require('../models').Assessment
let Question = require('../models').Question

let assessment = {
    id: 2,
    name: 'john',
  }
let question = {
    id: 2,
    name: 'question',
  }  
jest.spyOn(Assessment, 'create').mockImplementation(() =>  new Promise((resolve, reject)=> resolve(assessment)))
jest.spyOn(Question, 'create').mockImplementation(() =>  new Promise((resolve, reject)=> resolve(question)))
jest.spyOn(Assessment, 'update').mockImplementation(() =>  new Promise((resolve, reject)=> resolve(assessment)))

describe('Assessment test suit', () => {
    it('should respond to users route', (done) => {
        // request(app)
        // .get('assessment/create')
        // .expect(200)
        // .end(function(err, res) {
        //   if (err) throw err;
        //   done();
        // });
      request(app)
      .post('/assessment/create')
      .send({name: 'john'}) // x-www-form-urlencoded upload
      .set('Accept', 'application/json')
    //   .expect('Content-Type', /json/)
      .expect(function(res) {
        console.log("ECONNREFUSED", res)
        res.body.id = '1';
        res.body.name = res.body.name.toLowerCase();
      })
      .expect(200, {
        id: '1',
        name: 'john'
      }, done);
    });
  
})