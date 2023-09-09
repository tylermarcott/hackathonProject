import { AppState } from "../AppState.js"
import { commentService } from "../services/CommentService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


function _drawComments() {
  let content = ``
  AppState.activeComments = AppState.comments.map(comment => comment.id == AppState.activeDog.id)
  AppState.activeComments.forEach(comment => content += comment.commentTemplate)
  setHTML('comments', content)
}


export class CommentController {
  constructor() {
    this.getComments()
    console.log('This is the comment controller')
    AppState.on('activeDog', _drawComments)
  }


  async addComment(dogId) {
    try {
      window.event.preventDefault()
      let form = window.event.target
      let formData = getFormData(form)
      const newComment = await commentService.addComment(formData, dogId)
      console.log(newComment)
    } catch (error) {
      Pop.error(error)
    }
  }

  async getComments() {
    try {
      let comments = await commentService.getComments()
      console.log(comments)
    } catch (error) {
      Pop.error(error)
    }
  }

}