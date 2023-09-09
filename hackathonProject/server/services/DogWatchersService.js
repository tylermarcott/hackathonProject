import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

// TODO Testing needed.
class DogWatcherService {
    async removeDogWatcher(watcherId, userInfo) {
        const dogWatcherToRemove = await dbContext.Watchers.findById(watcherId).populate('')
        if (!dogWatcherToRemove) throw new BadRequest('no Dog Watcher with this id: {watcherId}')

        if (dogWatcherToRemove.accountId != userInfo.id) throw new Forbidden("You don't own this!")

        await dogWatcherToRemove.remove()
        return `you have unseen the ${dogWatcherToRemove.dog.name}`
        // FIXME
    }
    async getDogWatcher(query) {
        const watcher = await dbContext.Watchers.find(query).populate('profile dog')
        return watcher
    }
    async createDogWatcher(body) {
        const watcher = await dbContext.Watchers.create(body)
        await watcher.populate('dog profile')

        return watcher
    }

}




export const dogWatcherService = new DogWatcherService()