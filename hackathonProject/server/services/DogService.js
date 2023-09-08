import { dbContext } from "../db/DbContext.js"


class DogService {
    async getDogs(query) {
        const dogs = await dbContext.Dogs.find(query).populate('Account')
        return dogs
    }

    async createDog(body) {
        const newDog = await dbContext.Dogs.create(body)
        return newDog
    }

}



export const dogService = new DogService()