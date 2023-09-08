import { dbContext } from "../db/DbContext.js"


class DogService {

    async getDogs(query) {
        const dogs = await dbContext.Dogs.find(query).populate('profile')
        return dogs
    }

    async createDog(body) {
        const newDog = await dbContext.Dogs.create(body)
        return newDog
    }

    async editDog(dogId, udpated) {
        const editDog = await dbContext.Dogs.findById()
    }

}



export const dogService = new DogService()