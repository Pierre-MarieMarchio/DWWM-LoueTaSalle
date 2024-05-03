import HeaderComponent from "../components/common/HeaderComponent";
// import étapes de réservation task-035
// import formulaire de réservation task-024/25
import SuggestionComponent from "../components/common/SuggestionComponent";
import FooterComponent from "../components/common/FooterComponent";


export default class ReservationScreen extends HTMLElement {
  private _props: any;

  constructor() {
    super();

    console.log("on commence");
    this._props = {};
    this._props.header = new HeaderComponent();
    console.log("Header affiché ?");

    this._props.suggestion = new SuggestionComponent();
    console.log("Suggestion affiché ?");

    this._props.footer = new FooterComponent();
    console.log("Footer affiché ?");

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
customElements.define("reservation-screen", ReservationScreen);