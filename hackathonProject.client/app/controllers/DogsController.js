import { AppState } from "../AppState.js"
import { dogsService } from "../services/DogsService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"





export class DogsController {
  constructor() {
    AppState.on('account', this.getDogs)
    console.log('This is the thing Dogs')
  }

  async getDogs() {
    try {
      const dogs = await dogsService.getDogs()
    } catch (error) {
      Pop.error(error)
    }
  }

  async createDog() {
    try {
      window.event.preventDefault()
      let form = window.event.target
      let formData = getFormData(form)
      const newDog = await dogsService.createDog(formData)
      console.log(newDog)
    } catch (error) {
      Pop.error(error)
    }
  }
}