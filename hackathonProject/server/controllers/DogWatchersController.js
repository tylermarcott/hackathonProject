import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { dogWatcherService } from "../services/DogWatchersService.js";


export class DogWatchersController extends BaseController {
    constructor() {
        super('api/dogwatchers')
        this.router

            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createDogWatcher)
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
}