import { AppState } from "../AppState.js"

export class Dog {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.imgUrl = data.imgUrl
    this.powers = data.powers
    this.type = data.type
    this.description = data.description
    this.profile = data.profile
    this.upvotes = data.upvotes
  }

  get dogTemplate() {
    return `
      <div data-bs-toggle="modal"  data-bs-target="#staticBackdrop2" onclick="app.DogsController.setActiveDog('${this.id}')" class="col-4 card elevation-3 p-3 g-3 dog-card ${this.villainDesign}">
        <div class="mx-1">
        <img
          src="${this.imgUrl}"
          class="img-fluid">
        </div>
        <h1>${this.name}</h1>
      </div>
    `
  }
  get activeTemplate() {
    return `
      <div class="col-12 text-center">
        <p class="fs-3">${this.name}</p>
                  <img class="img-fluid mb-2" src="${this.imgUrl}" alt="">
                  
      </div>
      <div class="col-12 text-center">
      <button class="btn btn-danger rounded"><i class="mdi mdi-thumb-up"></i></button>
      <button class="btn btn-danger rounded"><i class="mdi mdi-thumb-down"></i></button>
      ${this.calculateDeleteButton}
      </div>
                <h2 class="text-center">${this.calculateHero}</h2>
                <h2>Powers: ${this.powers}</h2>
                 <img title="${this.profile.name}" class="profilePic" src="${this.profile.picture}"></img> 
                 <p>Posted By: ${this.profile.name}</p>
                 <form onsubmit="app.CommentController.addComment('${this.id}')">
                 <div id="comments">
                 </div>
                 <div class="col-12">
                 <input type="text" required="true" name="comment" placeholder="Leave a comment!">
                 <button type="submit"  class="addCommentButton btn btn-secondary">Comment</button>
                 </form>
                 </div>
                
              </div>
    `
  }

  get calculateHero() {
    if (this.type == true) {
      return `Hero`
    } else {
      return `Villain`
    }
  }

  get villainDesign() {
    if (this.type == false) {
      return `villain`
    }
  }

  get calculateDeleteButton() {
    if (AppState.account.id == this.profile.id) {
      return `<button onclick="app.DogsController.deleteDog('${this.id}')" class="btn btn-danger"><i class="mdi mdi-delete-circle"></i>`
    } else return ``

  }
}

