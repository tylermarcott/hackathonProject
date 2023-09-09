import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { dogWatcherService } from "../services/DogWatchersService.js";


export class DogWatchersController extends BaseController {
    constructor() {
        super('api/dogwatchers')
        this.router

            .get('', this.getDogWatcher)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createDogWatcher)
            .delete('', this.removeDogWatcher)
    }
    async removeDogWatcher(request, response, next) {
        try {
            const watcherId = request.params.watcherId
            const message = await dogWatcherService.removeDogWatcher
            (watcherId, request.userInfo)
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

    async getDogWatcher(req, res, next) {
        try {
            const query = req.query
            const watcher = await dogWatcherService.getDogWatcher(query)
            res.send(watcher)
        } catch (error) {
            next(error)
        }
    }
}