const request = require("supertest");
const app = require("./app");
const apiEndpoints = require("./apiEndpoints");
const jumplingsArray = [
  { id: 1, name: "Luigi" },
  { id: 3, name: "Mario" }
];

describe("app.js", () => {
  it("should return 1 when 1", () => {
    expect(1).toBe(1);
  });

  it("GET / all API endpoints", async () => {
    const response = await request(app)
      .get("/")
      .expect(200);
    expect(response.body).toEqual(apiEndpoints);
  });

  it("GET / should return 200 OK and all Jumplings", async () => {
    const response = await request(app)
      .get("/jumplings")
      .expect(200);
    expect(response.body).toStrictEqual(jumplingsArray);
  });

  it("GET / should return 200 OK and Jumpling of ID 3", async () => {
    const response = await request(app)
      .get("/jumplings/3")
      .expect(200);
    const targetJumpling = [{ id: 3, name: "Mario" }];
    expect(response.body).toStrictEqual(targetJumpling);
  });
});

describe("jumplings.js", () => {
  // it("POST / should add Jumpling to array and return Jumpling added", async () => {
  //   const response = await request(app)
  //     .put("/jumplings/")
  //     .expect(201);
  //   const newJumpling = { id: 2, name: "Princess" };
  //   expect(response.body).toStrictEqual(newJumpling);
  // });

  it("GET / should return Jumpling with id", async () => {
    const response = await request(app)
      .get("/jumplings/3")
      .expect(200);
    const retrieveJumpling = [{ id: 3, name: "Mario" }];
    expect(response.body).toStrictEqual(retrieveJumpling);
  });

  // it("PUT / should return updated Jumpling with id", async () => {
  //   const response = await request(app)
  //     .get("/jumplings/3")
  //     .expect(200);
  //   const retrieveJumpling = [{ id: 3, name: "Mario" }];
  //   expect(response.body).toStrictEqual(retrieveJumpling);
  // });
  it("DELETE / should return deleted Jumpling", async () => {
    const response = await request(app)
      .delete("/jumplings/3")
      .expect(200);
    const retrieveJumpling = [{ id: 3, name: "Mario" }];
    expect(response.body).toStrictEqual(retrieveJumpling);
  });
});
