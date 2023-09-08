import { AppState } from "../AppState.js"
import { Dog } from "../models/Dog.js"
import { api } from "./AxiosService.js"
class DogsService {

  async getDogs() {
    const res = api.get('api/dogs')
    AppState.dogs.map(dog => new Dog(dog))
    console.log(res.data, 'Got the Dogs')
  }

  async createDog(formData) {
    const res = api.post('api/dogs', formData)
    AppState.dogs.push(new Dog(res.data))
    console.log('made a new dog')
  }
}

export const dogsService = new DogsService()