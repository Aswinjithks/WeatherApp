import axios from "axios";
import { weather } from "../weather";

jest.mock("axios");

describe("weather function", () => {
  it("should return weather data for a valid city", async () => {
    const mockWeatherData = {
      name: "ValidCity",
      weather: [{ description: "sunny" }],
      main: { temp: 25 },
    };
    axios.get.mockResolvedValueOnce({ data: mockWeatherData });

    const req = { query: { city: "ValidCity" } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await weather(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ data: mockWeatherData });
  });

  it("should return a 400 error for missing city parameter", async () => {
    const req = { query: {} };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await weather(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: "City parameter is required",
    });
  });

  it("should return a 404 error for a non-existent city", async () => {
    const axiosError = {
      response: {
        data: { cod: "404", message: "City not found" },
      },
    };
    axios.get.mockRejectedValueOnce(axiosError);

    const req = { query: { city: "NonExistentCity" } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await weather(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
  });

  it("should return a 500 error for other internal errors", async () => {
    const axiosError = { message: "Internal Server Error" };
    axios.get.mockRejectedValueOnce(axiosError);

    const req = { query: { city: "SomeCity" } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await weather(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Internal Server Error" });
  });
});
