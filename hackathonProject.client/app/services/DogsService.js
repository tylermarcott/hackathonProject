import { AppState } from "../AppState.js"
import { Dog } from "../models/Dog.js"
import { api } from "./AxiosService.js"
class DogsService {

  async getDogs() {
    const res = await api.get('api/dogs')
    AppState.dogs = res.data.map(dog => new Dog(dog))
    console.log(res.data, 'Got the Dogs')
  }

  async createDog(formData) {
    const res = api.post('api/dogs', formData)
    AppState.dogs.push(new Dog(res.data))
    console.log('made a new dog')
    console.log(AppState.dogs)
  }

  setActiveDog(dogId) {
    let foundDog = AppState.dogs.find(dog => dog.id == dogId)
    AppState.activeDog = foundDog
  }
}

export const dogsService = new DogsService()