import { Auth0Provider } from "@bcwdev/auth0provider"
import { dogService } from "../services/DogService.js"
import BaseController from "../utils/BaseController.js"
import { Logger } from "../utils/Logger.js"


export class DogController extends BaseController {
    constructor() {
        super('api/dogs')
        this.router

            // middleware goes here

            .get('', this.getDogs)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createDog)
        // .put('/:dogId/dogs', this.editDog)
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

    // TODO: fix this fucking shit

    // async editDog(request, response, next) {
    //     try {
    //         const updates = request.body
    //         const dogId = request.params.dogId
    //         const editedDog = await dogService.editDog(dogId, updates)
    //         response.send(editedDog)

    //     } catch (error) {
    //         next(error)
    //     }
    // }
}