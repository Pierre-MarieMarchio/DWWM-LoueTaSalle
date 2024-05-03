export default class SortLocationsMenu extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = this.render();
    }
  
    render(): string {
      return `
      <div class="container-sortLocationMenu bg-secondary">
      <div class="number-search py-4 px-3 mx-5">LOCATION DE SALLE</div>
      <div class="row py-4 px-3 mx-5">
        <div class="col">
          <select class="form-select" aria-label="Default select example">
            <option selected>Prestataire</option>
            <option value="1">Lieux</option>
          </select>
        </div>
        <div class="col">
          <select class="form-select" aria-label="Default select example">
            <option selected>Evénement</option>
            <option value="1">Afterwork</option>
            <option value="2">Babyshower</option>
            <option value="3">Anniversaire</option>
            <option value="4">Mariage</option>
            <option value="5">Brunch</option>
            <option value="6">Cocktail</option>
            <option value="7">Fete de Noel</option>
            <option value="8">Conférence</option>
            <option value="9">Cowerking</option>
            <option value="10">Exposition</option>
            <option value="11">Formation</option>
            <option value="12">Séminaire</option>
            <option value="13">Vente aux enchères</option>
            <option value="14">Brunch</option>
          </select>
        </div>
        <div class="col">
          <select class="form-select" aria-label="Default select example">
            <option selected>Où ?</option>
            <option value="1">Paris</option>
            <option value="2">Lyon</option>
            <option value="3">Marseille</option>
          </select>
        </div>
        <div class="col">
          <select class="form-select" aria-label="Default select example">
            <option selected>Distance maximum</option>
            <option value="1">10-50km</option>
            <option value="2">50-100km</option>
            <option value="3">100-200km</option>
          </select>
        </div>
        <div class="col">
          <select class="form-select" aria-label="Default select example">
            <option selected>Type de lieux</option>
            <option value="1">Hôtel 2**</option>
            <option value="2">Hôtel 3***</option>
            <option value="3">Hôtel 4****</option>
            <option value="3">Hôtel 5*****</option>
            <option value="3">Restaurant</option>
            <option value="3">Salle de réception</option>
          </select>
        </div>
        <div class="col input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Nombre des invités"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
      <div class="row pb-4 px-3 mx-5">
        <div class="col">
          <select class="form-select" aria-label="Default select example">
            <option selected>Formule</option>
            <option value="1">Privatisation totale</option>
            <option value="2">Simple location de salle</option>
            <option value="3">Offre forfaitaire</option>
          </select>
        </div>
        <div class="col">
          <select class="form-select" aria-label="Default select example">
            <option selected>Configuration</option>
            <option value="1">Indifférent</option>
            <option value="2">Banquet</option>
            <option value="3">Cocktail</option>
          </select>
        </div>
        <div class="col input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Nombre des invités"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="col">
          <select class="form-select" aria-label="Default select example">
            <option selected>Environement</option>
            <option value="1">Montagne</option>
            <option value="2">Ville</option>
            <option value="3">Mer</option>
            <option value="3">Campagne</option>
          </select>
        </div>
        <div class="col">
          <select class="form-select" aria-label="Default select example">
            <option selected>Loisirs</option>
            <option value="1">Golf</option>
            <option value="2">Hammam</option>
            <option value="3">Jaccuzzi</option>
            <option value="3">Jardin</option>
            <option value="3">Piscine</option>
          </select>
        </div>
        <div class="col text-center">
          <button type="button" class="btn btn-primary btn-block col">
            Effacer
          </button>
        </div>
      </div>
    </div>
            `;
    }
  }
  
  customElements.define("sort-locations-menu", SortLocationsMenu);