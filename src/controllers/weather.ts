import { WeatherModel } from '../models/weather'
import { Request, Response } from 'express'

export class WeatherController {
  static async getAll(_req: Request, res: Response) {
    const weather = await WeatherModel.getAll()
    res.json(weather)
  }

  static async getByType(req: Request, res: Response) {
    const { type } = req.params
    const weather = await WeatherModel.getByType({ type })
    console.log(weather)

    if (weather.length === 0)
      return res.status(400).json({ error: 'Weather not found' })
    res.json(weather)
  }

  static async newWeather(req: Request, res: Response) {
    const newWeatherReq = req.body

    const newWeather = await WeatherModel.newWeather({
      newWeather: newWeatherReq
    })
    res.json(newWeather)
  }
}
