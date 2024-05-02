export default class ContactScreen extends HTMLElement {
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

customElements.define("contact-screen", ContactScreen);
