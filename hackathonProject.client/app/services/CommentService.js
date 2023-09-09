import { AppState } from "../AppState.js"
import { Comment } from "../models/Comment.js"
import { api } from "./AxiosService.js"

class CommentService {

  async addComment(formData, dogId) {
    formData.dogId = dogId
    console.log('This is the Form Data:', formData)
    const res = await api.post('api/dogwatchers', formData)
    console.log(res.data)
  }

  async getComments() {
    const res = await api.get('api/dogwatchers')

    console.log(res.data)
    AppState.comments = res.data.map(comment => new Comment(comment))
    console.log(AppState.comments)
  }


}




export const commentService = new CommentService