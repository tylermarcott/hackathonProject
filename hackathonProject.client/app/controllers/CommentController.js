import { AppState } from "../AppState.js"
import { commentService } from "../services/CommentService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


function _drawComments() {
  let content = ``
  // AppState.activeComments = AppState.comments.filter(comment => comment.dogId == AppState.activeDog.id)
  AppState.comments.forEach(comment => content += comment.commentTemplate)
  console.log(AppState.activeComments)
  setHTML('comments', content)
}


export class CommentController {
  constructor() {
    console.log('This is the comment controller')
    AppState.on('activeDog', this.getComments)
    AppState.on('comments', _drawComments)
  }


  async addComment(dogId) {
    try {
      window.event.preventDefault()
      let form = window.event.target
      let formData = getFormData(form)
      const newComment = await commentService.addComment(formData, dogId)
      console.log(newComment)
      // @ts-ignore
      form.reset()
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