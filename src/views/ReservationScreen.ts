import FormReservationComponent from "../components/reservation/FormReservationComponent";
import ReservationStepsComponent from "../components/reservation/ReservationStepsComponent";
import Screen from "../classes/Screen";

export default class ReservationScreen extends Screen {
  constructor() {
    super();

    this._props.formreservation = new FormReservationComponent();
    this._props.reservationsteps = new ReservationStepsComponent();

    this.innerHTML = this.render();
  }

  protected override render(): string {
    return `
    <div>
      <header-component/>
    </div>
    <div>
      <reservation-steps-component/>
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

customElements.define("reservation-screen", ReservationScreen);
