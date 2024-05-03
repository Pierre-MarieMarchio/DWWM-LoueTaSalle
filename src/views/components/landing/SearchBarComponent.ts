export default class SearchBarComponent extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = this.render();
  }

  render(): string {
    return `
    <div class="my-5 py-3">
      <form class="d-flex my-2 my-lg-0">
      <div class="form-group flex-fill mr-2">
        <label for="eventType" class="sr-only">Type d'événement</label>
        <select id="eventType" class="form-control">
          <option value="">Choisir un type d'événement</option>
          <option value="concert">Concert</option>
          <option value="soiree">Soirée</option>
          <option value="projection">Projection</option>
        </select>
      </div>
      <div class="form-group flex-fill mr-2">
        <label for="location" class="sr-only">Lieu</label>
        <select id="location" class="form-control">
          <option value="">Choisir un lieu</option>
          <option value="paris">Paris</option>
          <option value="lyon">Lyon</option>
          <option value="marseille">Marseille</option>
        </select>
      </div>
      <div class="form-group flex-fill mr-0">
        <label for="receptionType" class="sr-only">Type de réception</label>
        <select id="receptionType" class="form-control">
          <option value="">Choisir un type de réception</option>
          <option value="assis">Assis</option>
          <option value="debout">Debout</option>
          <option value="cocktail">Cocktail</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary ml-2">Rechercher</button>
    </form>
    </div>
    
    
            `;
  }
}

customElements.define("search-bar-component", SearchBarComponent);
