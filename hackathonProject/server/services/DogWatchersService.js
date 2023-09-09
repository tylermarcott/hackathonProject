import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class DogWatcherService {
    async removeDogWatcher(watcherId, userInfo) {
        const dogWatcherToRemove = await dbContext.Watchers.findById(watcherId).populate('dog')
        if (!dogWatcherToRemove) throw new BadRequest('no dog watcher with id: ${watcherId}')

        if (dogWatcherToRemove.accountId != userInfo.id) throw new Forbidden("You don't own this, can't delete.")

        await dogWatcherToRemove.remove()
        // @ts-ignore
        return `you have unseen the ${dogWatcherToRemove.dog.name}`

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

    ///update and sync
    async editDogWatcher(watcherId, updates) {
        const originalWatcher = await dbContext.Watchers.findById(watcherId)

        originalWatcher.comment = updates.comment

        await originalWatcher.save()
        return originalWatcher
    }

}




export const dogWatcherService = new DogWatcherService()