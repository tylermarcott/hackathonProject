import { AppState } from "../AppState.js"
import { Dog } from "../models/Dog.js"
import { Pop } from "../utils/Pop.js"

import { api } from "./AxiosService.js"
class DogsService {

  async getDogs() {
    const res = await api.get('api/dogs')
    AppState.dogs = res.data.map(dog => new Dog(dog))
    console.log(res.data, 'Got the Dogs')
  }

  async createDog(formData) {
    const res = await api.post('api/dogs', formData)
    const newDog = AppState.dogs.push(new Dog(res.data))
    // AppState.activeDog = newDog
    AppState.emit('dogs')
    console.log('made a new dog')
    console.log(newDog)
  }

  setActiveDog(dogId) {
    let foundDog = AppState.dogs.find(dog => dog.id == dogId)
    AppState.activeDog = foundDog
  }

  async deleteDog(dogId) {
    if (Pop.confirm) {
      const res = await api.delete(`api/dogs/${dogId}`)
      const newDogs = AppState.dogs.filter(dog => dog.id !== dogId)
      AppState.dogs = newDogs
      AppState.activeDog = null

      console.log(res.data)
    }

  }
}

export const dogsService = new DogsService()