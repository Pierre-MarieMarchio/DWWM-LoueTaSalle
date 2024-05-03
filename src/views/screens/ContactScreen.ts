import HeaderComponent from "../components/common/HeaderComponent";
// import header formulaire de contact task 036
// import formulaire de contact task 026
import Suggestion from "../components/common/SuggestionComponent";
import FooterComponent from "../components/common/FooterComponent";

export default class ContactScreen extends HTMLElement {
  private _props: any;

  constructor() {
    super();

    console.log("on commence");
    this._props = {};
    this._props.header = new HeaderComponent();
    console.log("header affiché ?");

    this._props = {};
    this._props.suggestion = new Suggestion();
    console.log("suggestion affiché ?");

    this._props = {};
    this._props.footer = new FooterComponent();
    console.log("footer affiché ?");

    this.innerHTML = this.render();
  }

  render(): string {
    return `
          <div>
          <header-component/>
          <suggestion/>
          <footer-component/>
          </div>
          `;
  }
}

customElements.define("contact-screen", ContactScreen);
