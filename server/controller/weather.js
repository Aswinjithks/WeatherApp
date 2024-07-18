import axios from "axios";
import { BASE_URL } from "../lib/constants.js";


export const weather = async (req, res) => {

  try {
    const cityName = req.query.city;
    if (!cityName) {
      return res.status(400).json({ error: "City is required" });
    }
    console.log("process.env.WEATHER_API_KEY", process.env.WEATHER_API_KEY);
    const weatherResponse = await axios.get(
      `${BASE_URL}/2.5/weather?q=${cityName}&appid=${process.env.WEATHER_API_KEY}`
    );
    const weatherData = weatherResponse.data;
    res.status(200).json({ data: weatherData });
  } catch (error) {
    if (error.response && error.response.data.cod === "404") {
      return res.status(404).json({ error: error.response.data.messege });
    }
    res.status(500).json({ error: "Internal Server Error" });
  }
};
