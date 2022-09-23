import Router from 'express';
import { getWeatherHistory, addWeatherHistory } from "../controllers/weatherController.js";

const router = Router();

router.get("/", getWeatherHistory);

router.post("/", addWeatherHistory);

export default router;