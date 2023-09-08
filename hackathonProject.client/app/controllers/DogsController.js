import { dogsService } from "../services/DogsService"
import { Pop } from "../utils/Pop"

export class DogsController {
  constructor() {
    console.log('This is the thing Dogs')
  }

  // async getDogs() {
  //   try {
  //     const dogs = await dogsService.getDogs()
  //   } catch (error) {
  //     Pop.error(error)
  //   }
  // }

  // async createDog() {
  //   try {
  //     const newDog = await dogsService.createDog()
  //   } catch (error) {
  //     Pop.error(error)
  //   }
  // }
}