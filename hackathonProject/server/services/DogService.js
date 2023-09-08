import { dbContext } from "../db/DbContext.js"


class DogService {
    async getDogs() {
        const dogs = await dbContext.Dogs.find().populate('Account')
        return dogs
    }
    async createDog(body) {
        const newDog = await dbContext.Dogs.create(body)
        return newDog
    }

}



export const dogService = new DogService()