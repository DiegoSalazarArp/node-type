import { Router } from 'express'
import { WeatherController } from '../controllers/weather'

export const weatherRouter = Router()

weatherRouter.get('/', WeatherController.getAll)
weatherRouter.get('/type/:type', WeatherController.getByType)
weatherRouter.post('/create', WeatherController.newWeather)
