import Components from "../../classes/Components";

export default class SuggestionsComponent extends Components {
    protected override render(): string {
        return `
        <div class="col-3">
      <h5 class="text-center text-primary fw-semibold">Nos suggestions</h5>
      <div class="card" style="width: 18rem">
        <i class="bi bi-heart position-absolute top-20 end-0"></i>
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h6 class="card-title fw-semibold">Ritz Plazza</h6>
          <p class="card-text">Bobigny - Seine-Saint-Denis (93)</p>

          <div class="row">
            <div class="col-6">
              <a href="#" class="btn btn-primary fw-semibold">Contacter</a>
            </div>
            <div class="col-6 d-flex align-items-center">
              <p class="text-center mx-auto mb-0">
                <i class="bi bi-star-fill text-primary"></i>
                <span class="fw-semibold">5.0 </span><span class="text-secondary">(4)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
        `;
    }
}

customElements.define("suggestions-component", SuggestionsComponent);