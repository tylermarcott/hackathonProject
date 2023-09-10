import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"


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

        originalDog.description = updates.description || originalDog.description
        originalDog.imgUrl = updates.imgUrl || ''

        await originalDog.save()
        return originalDog
    }

    async deleteDog(accountId, dogId) {
        const deletedDog = await dbContext.Dogs.findById(dogId)
        if (deletedDog.accountId == accountId) {
            await deletedDog.delete()
            return `deleted the Dog with id: ${dogId}`
        }
        else {
            return new BadRequest('You are not the poster of this dog spotting')
        }
    }
}



export const dogService = new DogService()