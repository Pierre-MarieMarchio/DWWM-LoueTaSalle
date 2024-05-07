import FormContactComponent from "../components/contact/FormContactComponent";
import Screen from "../classes/Screen";

export default class ContactScreen extends Screen {
  constructor() {
    super();

    this._props = {};
    this._props.contact = new FormContactComponent();
  }

  protected override render(): string {
    return `
          <div>
          <header-component/>
          </div>
          <div>
          <formcontact-component/>
          </div>
          <div>
          <footer-component/>
          </div>
          `;
  }
}

customElements.define("contact-screen", ContactScreen);
