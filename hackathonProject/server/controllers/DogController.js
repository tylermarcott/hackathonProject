import { dbContext } from "../db/DbContext.js"
import { dogService } from "../services/DogService.js"
import BaseController from "../utils/BaseController.js"


export class DogController extends BaseController {
    constructor() {
        super('api/dogs')
        this.router
            .post('', this.createDog)
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