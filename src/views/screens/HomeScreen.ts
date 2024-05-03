import HeaderComponent from "../components/common/HeaderComponent";
import FooterComponent from "../components/common/FooterComponent";

export default class HomeScreen extends HTMLElement {
  private _props: any;

  constructor() {
    super();
    console.log("ici 1");

    this._props = {};
    this._props.header = new HeaderComponent();

    console.log("ici 2");

    this.innerHTML = this.render();
  }

  render(): string {
    return `
          <div>
          <header-component/>
          </div>
        
        `;
  }
}

customElements.define("home-screen", HomeScreen);
