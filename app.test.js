const request = require("supertest");
const app = require("./app.js");
const apiEndpoints = require("./apiEndpoints");

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

});