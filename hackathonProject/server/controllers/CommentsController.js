import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { commentsService } from "../services/CommentsService.js";

// TODO Testing needed.

export class CommentsController extends BaseController {
    constructor() {
        super('api/birds')
        this.router
            .get('', this.getComments)
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.createComment)


    }
    createComment(arg0, createComment) {

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

