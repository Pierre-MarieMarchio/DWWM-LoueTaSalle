import Screen from "../classes/Screen";

export default class PlacesScreen extends Screen {
  constructor() {
    super();
  }

  protected override render(): string {
    return `
        <div>
          <header-component/>
        </div>
        <div>
          <footer-component/>
        </div>
        `;
  }
}

customElements.define("places-screen", PlacesScreen);
