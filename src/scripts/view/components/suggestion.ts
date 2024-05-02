export default class Suggestion extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = this.render();
    }
  
    render(): string {
      return `
      <section class="">
      <h3 class="text-center my-3">Nos suggestions</h3>
      <div class="flex row row-cols-1 row-cols-md-3">
        <div class="col">
          <div class="card m-2">
            <img src="../assets/img/place-holder.webp" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Nom Lieux</h5>
              <p class="card-text">Adresse lieux</p>
              <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="btn btn-primary">contacter</a>
                <div class="d-flex align-items-center">
                  <i class="fa-solid fa-star"></i>
                  <p id="id-note-lieux" class="mb-0">note</p>
                  <p id="id-note-nbAvis" class="mb-0">(0)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card m-2">
              <img src="../assets/img/place-holder.webp" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Nom Lieux</h5>
                <p class="card-text">Adresse lieux</p>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="btn btn-primary">contacter</a>
                  <div class="d-flex align-items-center">
                    <i class="fa-solid fa-star"></i>
                    <p id="id-note-lieux" class="mb-0">note</p>
                    <p id="id-note-nbAvis" class="mb-0">(0)</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="col">
          <div class="card m-2">
              <img src="../assets/img/place-holder.webp" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Nom Lieux</h5>
                <p class="card-text">Adresse lieux</p>
                <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="btn btn-primary">contacter</a>
                  <div class="d-flex align-items-center">
                    <i class="fa-solid fa-star"></i>
                    <p id="id-note-lieux" class="mb-0">note</p>
                    <p id="id-note-nbAvis" class="mb-0">(0)</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
            `;
    }
  }
  
  customElements.define("suggestion", Suggestion);