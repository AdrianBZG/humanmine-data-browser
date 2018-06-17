//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Fetch', () => {
  describe('/GET listing of ontology terms of HumanMine primary classes', () => {	  
	  it('it should GET the listing of ontology terms inside class Protein in HumanMine', (done) => {
        chai.request(server)
            .get('/fetch/ontologyterms/humanmine/Protein')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
				res.body.length.should.be.at.least(1);
				done();
            });
      });
	  
	  it('it should GET the listing of ontology terms inside class Gene in HumanMine', (done) => {
        chai.request(server)
            .get('/fetch/ontologyterms/humanmine/Gene')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
				res.body.length.should.be.at.least(1);
				done();
            });
      });
	  
	  it('it should GET the listing of dataset names inside class Protein in HumanMine', (done) => {
        chai.request(server)
            .get('/fetch/datasets/humanmine/Protein')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
				res.body.length.should.be.at.least(1);
				done();
            });
      });
	  
	  it('it should GET the listing of dataset names inside class Gene in HumanMine', (done) => {
        chai.request(server)
            .get('/fetch/datasets/humanmine/Gene')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
				res.body.length.should.be.at.least(1);
				done();
            });
      });
  });

});