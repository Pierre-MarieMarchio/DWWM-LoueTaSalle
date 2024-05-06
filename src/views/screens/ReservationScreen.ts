import HeaderComponent from "../components/common/HeaderComponent";
import FooterComponent from "../components/common/FooterComponent";
import SuggestionComponent from "../components/common/SuggestionComponent";
import FormReservationComponent from "../components/reservation/FormReservationComponent";

export default class ResevationScreen extends HTMLElement {
  private _props: any;

  constructor() {
    super();

    this._props = {};
    this._props.header = new HeaderComponent();
    this._props.footer = new FooterComponent();
    this._props.suggestion = new SuggestionComponent();
    this._props.suggestion = new FormReservationComponent();

    this.innerHTML = this.render();
  }

  render(): string {
    return `
    <div>
     <header-component/>
    </div>
    <div>
    <formreservation-component/>
   </div>
    <div>
      <footer-component/>
    </div>
    `;
  }
}

customElements.define("resevation-screen", ResevationScreen);
