import { dogService } from "../services/DogService.js"
import BaseController from "../utils/BaseController.js"
import { Logger } from "../utils/Logger.js"


export class DogController extends BaseController {
    constructor() {
        super('api/dogs')
        this.router

            // middleware goes here


            .post('', this.createDog)
            .get('', this.getDogs)
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
}