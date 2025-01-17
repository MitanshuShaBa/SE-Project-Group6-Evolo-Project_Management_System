require("dotenv").config();
const request = require("supertest");
const app = require("../index");
const mongoose = require("mongoose");

beforeAll(async () => await mongoose.connect(process.env.DB_URL));

afterAll(async () => await mongoose.connection.close());

describe("Test the root path", () => {
  test("It should response the GET method", (done) => {
    request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test the auth path", () => {
  test("It should response the POST method", (done) => {
    request(app)
      .post("/auth/signin")
      .send({
        name: "Mitanshu",
        email: "mresham@ncsu.edu",
        password: "Mitanshu123",
      })
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test the organisation path", () => {
  test("It should make an organisation", (done) => {
    request(app)
      .post("/organisation/create")
      .send({
        name: "Test Organisation",
      })
      .set({
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODY5ZGQzNDY5MGM4MGNjYmM1OTY1ZCIsImVtYWlsIjoibXJlc2hhbUBuY3N1LmVkdSIsImlhdCI6MTY3MDA0MTYxMiwiZXhwIjoxNzAxNTk5MjEyfQ.HpkHvjPWbH4hEcQYRZ3L_x-DFwtOHiG0N7DseB4t8_E `,
      })
      .then((response) => {
        expect(response.statusCode).toBe(201);
        done();
      });
  });
  test("It should update an organisation", (done) => {
    request(app)
      .post("/organisation/create")
      .send({
        name: "Test Organisation",
      })
      .set({
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODY5ZGQzNDY5MGM4MGNjYmM1OTY1ZCIsImVtYWlsIjoibXJlc2hhbUBuY3N1LmVkdSIsImlhdCI6MTY3MDA0MTYxMiwiZXhwIjoxNzAxNTk5MjEyfQ.HpkHvjPWbH4hEcQYRZ3L_x-DFwtOHiG0N7DseB4t8_E `,
      })
      .expect(201)
      .end((_err, res) => {
        request(app)
          .patch("/organisation/" + res.body._id)
          .send({
            name: "Test Organisation Change",
          })
          .set({
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODY5ZGQzNDY5MGM4MGNjYmM1OTY1ZCIsImVtYWlsIjoibXJlc2hhbUBuY3N1LmVkdSIsImlhdCI6MTY3MDA0MTYxMiwiZXhwIjoxNzAxNTk5MjEyfQ.HpkHvjPWbH4hEcQYRZ3L_x-DFwtOHiG0N7DseB4t8_E `,
          })
          .expect(200)
          .expect((res) => res.name === "Test Organisation Change")
          .end(done);
      });
  });
  test("It should delete an organisation", (done) => {
    request(app)
      .post("/organisation/create")
      .send({
        name: "Test Organisation",
      })
      .set({
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODY5ZGQzNDY5MGM4MGNjYmM1OTY1ZCIsImVtYWlsIjoibXJlc2hhbUBuY3N1LmVkdSIsImlhdCI6MTY3MDA0MTYxMiwiZXhwIjoxNzAxNTk5MjEyfQ.HpkHvjPWbH4hEcQYRZ3L_x-DFwtOHiG0N7DseB4t8_E `,
      })
      .expect(201)
      .end((_err, res) => {
        request(app)
          .delete("/organisation/" + res.body._id)
          .set({
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODY5ZGQzNDY5MGM4MGNjYmM1OTY1ZCIsImVtYWlsIjoibXJlc2hhbUBuY3N1LmVkdSIsImlhdCI6MTY3MDA0MTYxMiwiZXhwIjoxNzAxNTk5MjEyfQ.HpkHvjPWbH4hEcQYRZ3L_x-DFwtOHiG0N7DseB4t8_E `,
          })
          .expect(200)
          .end(done);
      });
  });
});

describe("Test the project path", () => {
  test("It should make an project", (done) => {
    request(app)
      .post("/organisation/create")
      .send({
        name: "Test Organisation",
      })
      .set({
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODY5ZGQzNDY5MGM4MGNjYmM1OTY1ZCIsImVtYWlsIjoibXJlc2hhbUBuY3N1LmVkdSIsImlhdCI6MTY3MDA0MTYxMiwiZXhwIjoxNzAxNTk5MjEyfQ.HpkHvjPWbH4hEcQYRZ3L_x-DFwtOHiG0N7DseB4t8_E `,
      })
      .expect(201)
      .end((_err, res) => {
        request(app)
          .post("/project/create")
          .send({
            name: "Test Project",
            organisation: res.body._id,
          })
          .set({
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODY5ZGQzNDY5MGM4MGNjYmM1OTY1ZCIsImVtYWlsIjoibXJlc2hhbUBuY3N1LmVkdSIsImlhdCI6MTY3MDA0MTYxMiwiZXhwIjoxNzAxNTk5MjEyfQ.HpkHvjPWbH4hEcQYRZ3L_x-DFwtOHiG0N7DseB4t8_E `,
          })
          .expect(201)
          .expect((res) => res.name === "Test Project")
          .end(done);
      });
  });
  test("It should update an project", (done) => {
    request(app)
      .post("/organisation/create")
      .send({
        name: "Test Organisation",
      })
      .set({
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODY5ZGQzNDY5MGM4MGNjYmM1OTY1ZCIsImVtYWlsIjoibXJlc2hhbUBuY3N1LmVkdSIsImlhdCI6MTY3MDA0MTYxMiwiZXhwIjoxNzAxNTk5MjEyfQ.HpkHvjPWbH4hEcQYRZ3L_x-DFwtOHiG0N7DseB4t8_E `,
      })
      .expect(201)
      .end((_err, res) => {
        request(app)
          .post("/project/create")
          .send({
            name: "Test Project",
            organisation: res.body._id,
          })
          .set({
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODY5ZGQzNDY5MGM4MGNjYmM1OTY1ZCIsImVtYWlsIjoibXJlc2hhbUBuY3N1LmVkdSIsImlhdCI6MTY3MDA0MTYxMiwiZXhwIjoxNzAxNTk5MjEyfQ.HpkHvjPWbH4hEcQYRZ3L_x-DFwtOHiG0N7DseB4t8_E `,
          })
          .expect(201)
          .expect((res) => res.name === "Test Project")
          .end((_err, res) => {
            request(app)
              .patch("/project/" + res.body._id)
              .send({
                name: "Test Project Change",
              })
              .set({
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODY5ZGQzNDY5MGM4MGNjYmM1OTY1ZCIsImVtYWlsIjoibXJlc2hhbUBuY3N1LmVkdSIsImlhdCI6MTY3MDA0MTYxMiwiZXhwIjoxNzAxNTk5MjEyfQ.HpkHvjPWbH4hEcQYRZ3L_x-DFwtOHiG0N7DseB4t8_E `,
              })
              .expect(200)
              .expect((res) => res.name === "Test Project Change")
              .end(done);
          });
      });
  });
  test("It should delete an project", (done) => {
    request(app)
      .post("/organisation/create")
      .send({
        name: "Test Organisation",
      })
      .set({
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODY5ZGQzNDY5MGM4MGNjYmM1OTY1ZCIsImVtYWlsIjoibXJlc2hhbUBuY3N1LmVkdSIsImlhdCI6MTY3MDA0MTYxMiwiZXhwIjoxNzAxNTk5MjEyfQ.HpkHvjPWbH4hEcQYRZ3L_x-DFwtOHiG0N7DseB4t8_E `,
      })
      .expect(201)
      .end((_err, res) => {
        request(app)
          .post("/project/create")
          .send({
            name: "Test Project",
            organisation: res.body._id,
          })
          .set({
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODY5ZGQzNDY5MGM4MGNjYmM1OTY1ZCIsImVtYWlsIjoibXJlc2hhbUBuY3N1LmVkdSIsImlhdCI6MTY3MDA0MTYxMiwiZXhwIjoxNzAxNTk5MjEyfQ.HpkHvjPWbH4hEcQYRZ3L_x-DFwtOHiG0N7DseB4t8_E `,
          })
          .expect(201)
          .expect((res) => res.name === "Test Project")
          .end((_err, res) => {
            request(app)
              .delete("/project/" + res.body._id)
              .set({
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODY5ZGQzNDY5MGM4MGNjYmM1OTY1ZCIsImVtYWlsIjoibXJlc2hhbUBuY3N1LmVkdSIsImlhdCI6MTY3MDA0MTYxMiwiZXhwIjoxNzAxNTk5MjEyfQ.HpkHvjPWbH4hEcQYRZ3L_x-DFwtOHiG0N7DseB4t8_E `,
              })
              .expect(200)
              .end(done);
          });
      });
  });
});
