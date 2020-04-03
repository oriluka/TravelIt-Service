const request = require('supertest');
const app = require('../server/server.js');

var testServer;
/// Test Database end points

test('Testing Host endpoints', async () => {
  // Set up server to test
  beforeAll(async (done) => {
    testServer = app.listen(4644, () => {
      global.agent = request.agent(testServer);
      done();
    });
  });

  afterAll(async (done) => {
    return testServer && testServer.close(done);
  });
  var params = {
    zip: "15806",
    name: "oriluka",
    image: "https://sdc-mtservice.s3.amazonaws.com/hosts/400 (4).jpeg",
    city: "Evelinestad",
    state: "NY",
    body: "Hey",

    interaction: "What",
    superhost: "Superhost",
    verified: "Verified",
    monthJoined: "November",
    yearJoined: "2017",
    review: 367,
    rules: {
      checkin: "10AM - 4PM",
      checkout: "11AM",
      body: "Is"
    },
    location: {
      body: "Up",
      gettingAround: "Rental car is advisable."
    }
  }

  test('Host post endpoint should create a new host', async (done) => {

    const res = await request(app).post('/host').query(params);
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
    done();
  });

  test('Host get endpoint should retreive the newly created host. Check if new host was created', async (dibe) => {
    const paramGet = {name: "oriluka"}
    const res = await request(app).get('/host').query(paramGet);
    expect(res.status).toBe(200);
    expect(res.body).toBe(params);
    done();
  });

  test('Host put endpoint should edit the new host', async (done) => {
    const res = await request(app).put('/host' + '?name=oriluka').send({ city: 'AWESOME', state: 'BESTSTATE'})
    expect(res.status).toBe(200);
    expect(res.body).toBe(params);
    done();
  });

  editedParams = params;
  editedParams.city = 'AWESOME';
  editedParams.state = 'BESTSTATE';

  test('Host get endpoint should get the updated host. Check if update works', async (done) => {
    const res = await request(app).get('/host').query({name: 'oriluka'});
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined(editedParams);
    done();
  });

  test('Host delete endpoint should delete the host', async (done) => {
    const res = await request(app).delete('/host').send({name: 'oriluka'});
    expect(res.status).toBe(200);
    done();
  });

  test('Host get endpoint should fail at returning the host', async (done) => {
    const res = await request(app).get('/host').query({name: 'oriluka'});
    expect(res.status).toBe(400);
    done();
  });

});