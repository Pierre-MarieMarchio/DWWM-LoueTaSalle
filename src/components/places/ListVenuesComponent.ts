import Components from "../../classes/Components";

export default class ListVenues extends Components {
  protected override render(): string {
    return `
      <section class="List-Venues-component">
      <div class="container-listVenues">
        <ul class="list-group list-group-flush">
          <li class="list-group-item d-flex align-items-center">
            <div>
              <img class="img-fluid" src="../assets/img/place-holder.webp" />
            </div>
            <div class="px-3">
              <div class="d-flex justify-content-between">
                <h2>Demeure de caractère / Domaine</h2>
                <a href="#"><i class="fa-regular fa-heart"></i></a>
              </div>
              <h3>Agde - Hérault (34)</h3>
              <p>Demeure de caractère / Domaine</p>
              <p>
                Mariages, anniversaires, baptêmes... Notre domaine à Agde offre une salle idéale pour accueillir votre
                événement, avec une attention particulière portée aux repas et ...
              </p>
              <div class="row">
                <div class="col"><i class="fa-solid fa-user"></i><span> 40-400</span></div>
                <div class="col"><i class="fa-solid fa-bed"></i> <span> 59 max</span></div>
                <div class="col"><i class="fa-solid fa-utensils"></i></div>
              </div>
              <div class="py-3"><i class="fa-solid fa-euro-sign"></i><span>Forfait dès 89 € / pers.</span></div>
              <div class="py-3 d-flex justify-content-between align-items-center">
                <button type="button" class="btn btn-primary">Contacter</button>
                <div class="d-flex align-items-center">
                  <i class="fa-solid fa-star"></i>
                  <p id="id-note-lieux" class="mb-0">5.0</p>
                  <p id="id-note-nbAvis" class="mb-0">(2)</p>
                </div>
              </div>
            </div>
          </li>
          <li class="list-group-item d-flex align-items-center">
            <div>
              <img class="img-fluid" src="../assets/img/place-holder.webp" />
            </div>
            <div class="px-3">
              <div class="d-flex justify-content-between">
                <h2>Demeure de caractère / Domaine</h2>
                <a href="#"><i class="fa-regular fa-heart"></i></a>
              </div>
              <h3>Agde - Hérault (34)</h3>
              <p>Demeure de caractère / Domaine</p>
              <p>
                Mariages, anniversaires, baptêmes... Notre domaine à Agde offre une salle idéale pour accueillir votre
                événement, avec une attention particulière portée aux repas et ...
              </p>
              <div class="row">
                <div class="col"><i class="fa-solid fa-user"></i><span> 40-400</span></div>
                <div class="col"><i class="fa-solid fa-bed"></i> <span> 59 max</span></div>
                <div class="col"><i class="fa-solid fa-utensils"></i></div>
              </div>
              <div class="py-3"><i class="fa-solid fa-euro-sign"></i><span>Forfait dès 89 € / pers.</span></div>
              <div class="py-3 d-flex justify-content-between align-items-center">
                <button type="button" class="btn btn-primary">Contacter</button>
                <div class="d-flex align-items-center">
                  <i class="fa-solid fa-star"></i>
                  <p id="id-note-lieux" class="mb-0">5.0</p>
                  <p id="id-note-nbAvis" class="mb-0">(2)</p>
                </div>
              </div>
            </div>
          </li>
          <li class="list-group-item d-flex align-items-center">
            <div>
              <img class="img-fluid" src="../assets/img/place-holder.webp" />
            </div>
            <div class="px-3">
              <div class="d-flex justify-content-between">
                <h2>Demeure de caractère / Domaine</h2>
                <a href="#"><i class="fa-regular fa-heart"></i></a>
              </div>
              <h3>Agde - Hérault (34)</h3>
              <p>Demeure de caractère / Domaine</p>
              <p>
                Mariages, anniversaires, baptêmes... Notre domaine à Agde offre une salle idéale pour accueillir votre
                événement, avec une attention particulière portée aux repas et ...
              </p>
              <div class="row">
                <div class="col"><i class="fa-solid fa-user"></i><span> 40-400</span></div>
                <div class="col"><i class="fa-solid fa-bed"></i> <span> 59 max</span></div>
                <div class="col"><i class="fa-solid fa-utensils"></i></div>
              </div>
              <div class="py-3"><i class="fa-solid fa-euro-sign"></i><span>Forfait dès 89 € / pers.</span></div>
              <div class="py-3 d-flex justify-content-between align-items-center">
                <button type="button" class="btn btn-primary">Contacter</button>
                <div class="d-flex align-items-center">
                  <i class="fa-solid fa-star"></i>
                  <p id="id-note-lieux" class="mb-0">5.0</p>
                  <p id="id-note-nbAvis" class="mb-0">(2)</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
            `;
  }
}

customElements.define("list-venues-component", ListVenues);
