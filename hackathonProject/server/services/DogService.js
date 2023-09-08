import { dbContext } from "../db/DbContext.js"


class DogService {
    async createDog(body) {
        const newDog = await dbContext.Dogs.create(body)
        return newDog
    }

}



export const dogService = new DogService()