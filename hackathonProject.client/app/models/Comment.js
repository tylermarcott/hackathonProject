export class Comment {
  constructor(data) {
    this.id = data.id
    this.comment = data.comment
    this.accountId = data.accountId
    this.dogId = data.dogId

  }

  get commentTemplate() {
    return `<div col-12><p>${this.comment}</p></div>`
  }
}