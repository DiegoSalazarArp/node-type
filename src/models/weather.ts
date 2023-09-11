import { WeatherInterface } from '../types'
import { readJSON } from '../utils'

const weather: WeatherInterface[] = readJSON('../data.json')

export class WeatherModel {
  static async getAll() {
    return weather
  }

  static async getByType({ type }: { type: string }) {
    return weather.filter((w: WeatherInterface) => w.weather === type)
  }

  static async newWeather({ newWeather }: { newWeather: WeatherInterface }) {
    // agregar nuevo weather al data.json
    const newWeatherObj = {
      ...newWeather,
      id: weather.length + 1,
      date: new Date().toISOString()
    }

    weather.push(newWeatherObj)

    return weather
  }
}
