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
      <div onclick="app.DogsController.setActiveDog('${this.id}')" class="col-4 card elevation-3 p-3 g-3 dog-card">
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
    <button type="button" class="btn btn-primary create-button elevation-2" data-bs-toggle="modal"
    data-bs-target="#staticBackdrop2">
    Create Super Dog <i class="mdi mdi-dog"></i>
  </button>


  <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body row">
          <form onsubmit="app.DogsController.createDog()">
            <input class="col-12 mb-3" required="true" minlength="2" maxlength="30" name="name" type="text"
              placeholder="Name">
            <input class="col-1 mb-3" required="true" name="type" type="checkbox" placeholder="type">Hero?
            <input class="col-12 mb-3" required="true" name="description" type="textarea" maxlength="300"
              placeholder="Dog Description">
            <input class="col-12 mb-3" required="true" name="imgUrl" type="text" placeholder="Image Link">
          </form>
        </div>
        
      </div>
    </div>
  </div>
    `
  }
}

