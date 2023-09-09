import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { commentsService } from "../services/CommentsService.js";

// TODO Testing needed.

export class CommentsController extends BaseController {
    constructor() {
        super('api/comments')
        this.router
            .get('', this.getComments)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createComment)

    }
    async createComment(request, response, next) {
        try {
            const body = request.body
            body.accountId = request.userInfo.id
            const comment = await commentsService.createComment(body)
            response.send(comment)
        } catch (error) {
            next(error)
        }
    }
    async getComments(request, response, next) {
        try {
            const comments = await commentsService.getComments(request.params.dogId)
            response.send(comments)
        } catch (error) {
            next(error)
        }
    }


}

