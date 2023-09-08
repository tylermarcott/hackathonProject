import { dogService } from "../services/DogService.js"
import BaseController from "../utils/BaseController.js"


export class DogController extends BaseController {
    constructor() {
        super('api/dogs')
        this.router

            // middleware goes here


            .post('', this.createDog)
            .get('', this.getDogs)
    }
    async getDogs(req, res, next) {
        try {
            const dogs = await dogService.getDogs()
            res.send(dogs)
        } catch (error) {
            next(error)
        }
    }

    async createDog(request, response, next) {
        try {
            const body = request.body
            body.reporterId = request.userInfo.id
            const dog = await dogService.createDog(body)
            response.send(dog)
        } catch (error) {
            next(error)
        }
    }
}