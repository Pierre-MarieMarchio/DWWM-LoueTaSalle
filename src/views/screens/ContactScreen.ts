import HeaderComponent from "../components/common/HeaderComponent";
import Suggestion from "../components/common/SuggestionComponent";
import FooterComponent from "../components/common/FooterComponent";

export default class ContactScreen extends HTMLElement {
  private _props: any;

  constructor() {
    super();

 
    this._props = {};
    this._props.header = new HeaderComponent();
    this._props.suggestion = new Suggestion();
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

customElements.define("contact-screen", ContactScreen);
