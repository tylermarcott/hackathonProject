export class Dog {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.powers = data.powers
    this.type = data.type
    this.description = data.description
    this.profile = data.profile
    this.upvotes = data.upvotes
  }

  get dogTemplate() {
    return `
      <div data-bs-toggle="modal"  data-bs-target="#staticBackdrop2" onclick="app.DogsController.setActiveDog('${this.id}')" class="col-4 card elevation-3 p-3 g-3 dog-card">
        <div class="mx-1">
        <img
          src="https://media.istockphoto.com/id/485867757/photo/masked-superhero-dog-on-a-skateboard.jpg?s=612x612&w=0&k=20&c=UPrFZV10_a_ceQXM1z0SvZavO1kY73KTQI_tJPAf4UU="
          class="img-fluid">
        </div>
        <h1>${this.name}</h1>
        <h3>${this.powers}</h3>
        <p>${this.description}</p>
      </div>
    `
  }
  get activeTemplate() {
    return `
      <div class="col-6">
                  <img src="https://media.istockphoto.com/id/155142977/photo/superhero-dog.jpg?s=612x612&w=0&k=20&c=FAT_CltluCbS87CBYBcoIvze1Pd5rtahaZWCfbfiftI=" alt="">
                </div class="6">
                <p>${this.name}</p>
                <p>TYPE</p>
                <p>${this.powers}</p>
                <p>COMMENTS</p>
              </div>
    `
  }
}

