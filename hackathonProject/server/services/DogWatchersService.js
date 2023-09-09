import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class DogWatcherService {
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