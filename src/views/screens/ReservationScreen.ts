export default class ResevationScreen extends HTMLElement {
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
customElements.define("resevation-screen", ResevationScreen);