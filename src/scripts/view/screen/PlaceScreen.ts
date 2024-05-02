export default class PlaceScreen extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = this.render();
  }

  render(): string {
    return `
          <div>
          ${this.constructor.name}
          </div>
          `;
  }
}

customElements.define("place-screen", PlaceScreen);
