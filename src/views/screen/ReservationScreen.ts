export default class ResevationScreen extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = this.render();
  }

  render(): string {
    return `
    <div>
    <header-component/>
    </div>
    <div>
      <formReservation-Component/>
    </div>
    <div>
    <footer-component/>
    </div>
    `;
  }
}
customElements.define("resevation-screen", ResevationScreen);
