import express from "express";
import { weather } from "../controller/weather.js";

const router = express.Router();

router.get("/weather", weather);

export default router;
