import Screen from "../../classes/Screen";

export default class PlaceScreen extends Screen {
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

customElements.define("place-screen", PlaceScreen);
