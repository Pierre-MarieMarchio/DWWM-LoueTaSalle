import HeaderComponent from "../components/common/HeaderComponent";
import FooterComponent from "../components/common/FooterComponent";

export default class PlacesScreen extends HTMLElement {

    private _props: any;

  constructor() {
    super();

    this._props = {};
    this._props.header = new HeaderComponent();
    this._props.footer = new FooterComponent();

    this.innerHTML = this.render();
  }

  render(): string {
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
