import { dbContext } from "../db/DbContext.js"
// REVIEW texting needed
class CommentsService {
    async createComment(body) {
        const comments = await dbContext.Comments.create(body)
        await comments.populate('profile dog watcher')
    }
    async getComments(dogId) {
        const comments = await dbContext.Comments.find({ dogId }).populate('profile')
        return comments
    }


}

export const commentsService = new CommentsService()