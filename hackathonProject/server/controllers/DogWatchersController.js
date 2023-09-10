import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { dogWatcherService } from "../services/DogWatchersService.js";


export class DogWatchersController extends BaseController {
    constructor() {
        super('api/dogwatchers')
        this.router


            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createDogWatcher)
            .put('/:dogWatcherId', this.editDogWatcher)
            .delete('/:dogWatcherId', this.removeDogWatcher)
    }
    async removeDogWatcher(request, response, next) {
        try {
            const dogWatcherId = request.params.dogWatcherId
            const message = await dogWatcherService.removeDogWatcher
                (dogWatcherId, request.userInfo)
            response.send(message)
        } catch (error) {
            next(error)
        }

    }
    async createDogWatcher(request, response, next) {
        try {
            const body = request.body
            body.accountId = request.userInfo.id
            const watcher = await dogWatcherService.createDogWatcher(body)
            response.send(watcher)
        } catch (error) {
            next(error)
        }
    }


    async editDogWatcher(request, response, next) {
        try {
            const updates = request.body
            const watcherId = request.params.dogWatcherId
            const editedDog = await dogWatcherService.editDogWatcher(watcherId, updates)
            response.send(editedDog)
        } catch (error) {
            next(error)
        }
    }
}