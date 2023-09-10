export class Comment {
  constructor(data) {
    this.id = data._id
    this.comment = data.comment
    this.accountId = data.accountId
    this.dogId = data.dogId
    this.profile = data.profile

  }

  get commentTemplate() {
    return `<div col-12><img class="comment-picture" src="${this.profile.picture}"><p>${this.comment}</p></div>`
  }
}