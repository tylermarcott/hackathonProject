import { dogsService } from "../services/DogsService.js"
import { Pop } from "../utils/Pop.js"





export class DogsController {
  constructor() {
    console.log('This is the thing Dogs')
  }

  async getDogs() {
    try {
      // const dogs = await dogsService.getDogs()
    } catch (error) {

    }
  }

  async createDog() {
    try {
      const newDog = await dogsService.createDog()
    } catch (error) {
      Pop.error(error)
    }
  }
}