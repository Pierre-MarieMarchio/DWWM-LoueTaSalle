export default class CustumerReviewList extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = this.render();
    }

    render(): string {
        return `
        <section class="custumer-review-list-component">
        <div class="row">
          <div class="col-12">
            <h5 class="font-weight-bold">Les avis clients (2)</h5>
          </div>
        </div>
  
        <div class="row border">
          <div class="col-4 border-end my-auto text-center">
            <p class="font-weight-bold mb-0">5</p>
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
            ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </div>
  
          <div class="col-8 my-2 ms-4 w-auto">
            <ul class="list-unstyled m-0">
              <li class="ml-2">
                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
                ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> Qualité de la prestation
              </li>
              <li>
                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
                ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> Professionnalisme du prestataire
              </li>
              <li>
                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
                ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> Rapport qualité/prix
              </li>
              <li>
                <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
                ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> Temps de réponse
              </li>
            </ul>
          </div>
        </div>
  
        <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-2 p-0 text-center align-self-center">
                <button class="btn btn-primary rounded-circle" type="">SB</button>
              </div>
              <div class="col-4 pt-3 p-0">
                <h5 class="m-0">Sarah</h5>
                <h6 class="m-0 text-body-secondary">Je recommande !</h6>
                <ul class="list-unstyled m-0">
                  <li>
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
                    ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                  </li>
                </ul>
              </div>
              <div class="col-6 border-end m-0 p-0">
                <ul class="list-unstyled m-0 p-0">
                  <li class="ml-2">
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
                    ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> Qualité de la prestation
                  </li>
                  <li>
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
                    ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> Professionnalisme du prestataire
                  </li>
                </ul>
              </div>
  
              <div class="col-6 m-0 p-0 ps-3">
                <ul class="list-unstyled m-0 p-0">
                  <li>
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
                    ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> Rapport qualité/prix
                  </li>
                  <li>
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
                    ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> Temps de réponse
                  </li>
                </ul>
              </div>
  
              <p class="card-text mt-2 mb-2">
                Lieu magnifique pour tout évènement.<br />
                Les propriétaires sont très disponibles et agréables.
              </p>
              <p class="text-body-secondary">Avis déposé en juin 2023</p>
            </div>
          </div>
        </div>
  
        <div class="col-2 mx-auto mt-3">
          <button type="button" class="btn btn-outline-primary">Afficher d'autres avis</button>
        </div>
      </section>
            `;
    }
}

customElements.define("custumer-review-list", CustumerReviewList);