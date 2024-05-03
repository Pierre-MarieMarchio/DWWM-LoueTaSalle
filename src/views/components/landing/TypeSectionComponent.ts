export default class TypeSectionComponent extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = this.render();
    }

    render(): string {
        return `
      <div class="my-5 py-3">
      <h3 class="text-center my-3">Qu'elle type de salle cherchez-vous</h3>
      <div class="flex row row-cols-2 row-cols-md-3 row-cols-lg-6 g-2 g-lg-3 my-4">
        <div class="col">
          <div class="square-card">
            <div class="card">
              <a href="#">
                <div class="card-body">
                  <i class="fa-solid fa-volcano"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="square-card">
            <div class="card">
              <a href="#">
                <div class="card-body">
                  <i class="fa-solid fa-volcano"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="square-card">
            <div class="card">
              <a href="#">
                <div class="card-body">
                  <i class="fa-solid fa-volcano"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="square-card">
            <div class="card">
              <a href="#">
                <div class="card-body">
                  <i class="fa-solid fa-volcano"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="square-card">
            <div class="card">
              <a href="#">
                <div class="card-body">
                  <i class="fa-solid fa-volcano"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="square-card">
            <div class="card">
              <a href="#">
                <div class="card-body">
                  <i class="fa-solid fa-volcano"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
            `;
    }
}

customElements.define("type-section-component", TypeSectionComponent);