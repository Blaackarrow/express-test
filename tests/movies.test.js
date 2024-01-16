const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
    it("should return all movies", async () => {
        const response = await request(app).get("/api/movies");
        console.log('response', response);
        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.status).toEqual(200);
    });
    it("GET /api/movies/n1", async () => {
        const response = await request(app).get("/api/movies/1");
        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.status).toEqual(200);
    });

    it("GET /api/movies/0", async () => {
        const response = await request(app).get("/api/movies/0");
        expect(response.status).toEqual(404);
    });
});