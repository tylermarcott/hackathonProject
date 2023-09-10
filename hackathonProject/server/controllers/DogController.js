import { Auth0Provider } from "@bcwdev/auth0provider"
import { dogService } from "../services/DogService.js"
import BaseController from "../utils/BaseController.js"
import { Logger } from "../utils/Logger.js"
import { dogWatcherService } from "../services/DogWatchersService.js"


export class DogController extends BaseController {
    constructor() {
        super('api/dogs')
        this.router

            // middleware goes here

            .get('', this.getDogs)
            .get('/:dogId/dogwatchers', this.getDogWatcher)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createDog)
            .put('/:dogId', this.editDog)
            .delete('/:dogId', this.deleteDog)
    }

    // TODO: put populate account back in once we get this fixed.
    async getDogs(req, res, next) {
        try {
            const query = req.query
            const dogs = await dogService.getDogs(query)
            res.send(dogs)
        } catch (error) {
            next(error)
        }
    }

    async createDog(request, response, next) {
        try {
            const body = request.body
            body.accountId = request.userInfo.id
            const dog = await dogService.createDog(body)
            response.send(dog)
        } catch (error) {
            next(error)
        }
    }

    async getDogWatcher(req, res, next) {
        try {
            const dogId = req.params.dogId
            const watcher = await dogWatcherService.getDogWatcher(dogId)
            res.send(watcher)
        } catch (error) {
            next(error)
        }
    }


    async editDog(request, response, next) {
        try {
            const updates = request.body
            const dogId = request.params.dogId
            const editedDog = await dogService.editDog(dogId, updates)
            response.send(editedDog)

        } catch (error) {
            next(error)
        }
    }

    async deleteDog(req, res, next) {
        try {
            const body = req.body
            body.accountId = req.userInfo.id
            const dogId = req.params.dogId
            const deletedDogMessage = await dogService.deleteDog(body.accountId, dogId)
            res.send(deletedDogMessage)
        } catch (error) {
            next(error)
        }
    }
}