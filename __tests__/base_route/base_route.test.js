import { testApiServer, disconnect } from "../utils";
import { status } from "../../src/utils";

const entryRoute = "/";

// Base Route Test
describe("Base Route Test ", () => {
  it("should return welcome user Welcome to Ohmswich server", async () => {
    const response = await testApiServer().get(entryRoute);
    expect(response.status).toBe(status.success);
    expect(response.body.message).toBe("Welcome to Ohmswich server");
  });

  it("should return 404 for a non-found route", async () => {
    const response = await testApiServer().get("/badRoute");
    expect(response.status).toBe(status.notfound);
  });
  afterAll(async () => {
    await disconnect();
  });
});
