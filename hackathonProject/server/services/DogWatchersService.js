import { dbContext } from "../db/DbContext.js"

// TODO Testing needed.
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

}




export const dogWatcherService = new DogWatcherService()