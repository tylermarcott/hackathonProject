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

    async editDog(dogId, updates) {
        const originalDog = await dbContext.Dogs.findById(dogId)

        if (!originalDog) throw new Error('Unable to find dog at the following id: ${dogId}')

        originalDog.description = updates.description

        await originalDog.save()
        return originalDog
    }

}



export const dogService = new DogService()