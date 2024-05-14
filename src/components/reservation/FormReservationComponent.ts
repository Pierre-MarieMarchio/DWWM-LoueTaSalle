import Components from "../../classes/Components";
import ReservationService from "../../services/Reservation.Services";

export default class FormReservation extends Components {
  private _formdata: any;
  private _form: HTMLFormElement;
  private _reservationService: ReservationService;

  constructor() {
    super()
    this._form = this.querySelector("#reservationForm");
    this._form.onsubmit = this.handleReservationSubmit;
    this._reservationService = new ReservationService(null, this._form);
  }

  handleReservationSubmit = (e: SubmitEvent): void => {
    e.preventDefault();
    let entries = Object.fromEntries(new FormData(this._form));
    this._formdata = entries;
    this._reservationService.formdata = this._formdata;
    this._reservationService.validateForm();
    //TODO if validateform true then make it to local storage else error message
    this._reservationService.creatReservation();
  }

  protected override render(): string {
    return `
    <div class="container">
    <form novalidate id="reservationForm">
      <fieldset>
        <legend class="mt-3">Vos coordonnées</legend>
        <div>Déja inscrit ? Cliquez ici pour vous connecter !</div>
        <div class="row">
          <div class="col mb-3">
            <input
              type="text"
              name="lastName"
              class="form-control"
              placeholder="Nom *"
            />
          </div>
          <div class="col mb-3">
            <input
              type="text"
              name="email"
              class="form-control"
              placeholder="Adresse email *"
            />
          </div>
        </div>
        <div class="row">
          <div class="col mb-3">
            <input
              type="text"
              name="firstName"
              class="form-control"
              placeholder="Prénom *"
            />
          </div>
          <div class="col mb-3">
            <input
              type="text"
              name="cellphone"
              class="form-control"
              placeholder="06 00 00 00 00"
            />
          </div>
        </div>
        <legend>Votre événement</legend>
        <div>
          Décrivez nous votre demande puis sélectionnez les types de
          prestataires que vous recherchez
        </div>
        <div class="col mb-3">
          <select name="eventNature" class="form-select" aria-label="Default select example">
            <option selected>Nature de votre événement</option>
            <option value="1">Afterwork</option>
            <option value="2">Babyshower</option>
            <option value="3">Anniversaire</option>
            <option value="4">Mariage</option>
            <option value="5">Brunch</option>
            <option value="6">Cocktail</option>
            <option value="7">Fete de Noel</option>
            <option value="8">Conférence</option>
            <option value="9">Cowerking</option>
            <option value="10">Exposition</option>
            <option value="11">Formation</option>
            <option value="12">Séminaire</option>
            <option value="13">Vente aux enchères</option>
            <option value="14">Brunch</option>
          </select>
        </div>
        <div class="row">
          <div class="col mb-3">
            <input
              type="text"
              name="eventDate"
              class="form-control"
              placeholder="Date de votre événement *"
            />
          </div>
          <div class="col mb-3">
            <input
              type="time"
              name="eventHour"
              class="form-control"
              placeholder="Heure de début *"
            />
          </div>
        </div>
        <div class="row">
          <div class="col mb-3">
            <select name="eventDistrict" class="form-select" aria-label="Default select example">
              <option selected>Département de recherche *</option>
              <option value="1">Ain</option>
              <option value="2">Nord</option>
              <option value="3">Paris</option>
            </select>
          </div>
          <div class="col mb-3">
            <input
              type="text"
              name="eventPeople"
              class="form-control"
              placeholder="Nombre de participants *"
            />
          </div>
        </div>
        <div class="col mb-3">
          <select name="eventAgeAverage" class="form-select" aria-label="Default select example">
            <option selected>Moyenne d'âge *</option>
            <option value="1">--</option>
            <option value="2">18-20</option>
            <option value="3">20-25</option>
            <option value="3">25-30</option>
            <option value="3">30-35</option>
            <option value="3">35-40</option>
            <option value="3">40-45</option>
            <option value="3">45-50</option>
            <option value="3">+ de 50</option>
          </select>
        </div>
        <div class="row">
          <div class="col">
            <div class="col mb-3">
              <input
                type="text"
                name="eventPreferredCity"
                class="form-control"
                placeholder="Ville(s) préférée(s)"
              />
            </div>
            <div class="col mb-3">
              <select name="eventVenue" class="form-select" aria-label="Default select example">
                <option selected>Type de lieux</option>
                <option value="1">Hôtel 2**</option>
                <option value="2">Hôtel 3***</option>
                <option value="3">Hôtel 4****</option>
                <option value="3">Hôtel 5*****</option>
                <option value="3">Restaurant</option>
                <option value="3">Salle de réception</option>
              </select>
            </div>
            <div class="col mb-3">
              <select name="eventType" class="form-select" aria-label="Default select example">
                <option selected>Configuration *</option>
                <option value="1">Indifférent</option>
                <option value="2">Banquet</option>
                <option value="3">Cocktail</option>
              </select>
            </div>
            <div class="col mb-3">
              <select name="eventCaterer" class="form-select" aria-label="Default select example">
                <option selected>Besoin d'un traiteur ? *</option>
                <option value="1">Oui</option>
                <option value="2">Non</option>
              </select>
            </div>
            <div class="col mb-3">
              <select name="eventQuotation" class="form-select" aria-label="Default select example">
                <option selected>Combien de devis souhaitez-vous ?</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="2">3</option>
                <option value="2">4</option>
                <option value="2">5</option>
              </select>
            </div>
            <div class="col mb-3">
              <input
                type="text"
                name="eventBudget"
                class="form-control"
                placeholder="Budget global estimé €"
              />
            </div>
            <div class="col mb-3">
              <div class="row">
                <div class="col">
                  <select
                    class="form-select"
                    name="eventAccomodation"
                    aria-label="Default select example"
                  >
                    <option selected>Hébergement</option>
                    <option value="1">Non</option>
                    <option value="2">Oui</option>
                  </select>
                </div>
                <div class="col">
                  <input
                    type="text"
                    name="eventBedding"
                    class="form-control"
                    placeholder="Nombre de couchages..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col d-flex align-items-stretch">
            <textarea
              class="form-control"
              name="eventDetails"
              id="validationTextarea"
              placeholder="Détail de votre demande"
              required
            ></textarea>
          </div>
        </div>
        <div class="mb-3 form-check">
          <input
            type="checkbox"
            name="cguChecked"
            class="form-check-input"
            id="exampleCheck1"
          />
          <label class="form-check-label" for="exampleCheck1"
            >J’accepte les conditions générales d'utilisation</label
          >
        </div>
        <div class="d-flex justify-content-center mb-3">
          <input type="submit" class="btn btn-primary" value="Envoyer ma demande"/>
            
          
        </div>
      </fieldset>
    </form>
  </div>
            `;
  }
}

customElements.define("formreservation-component", FormReservation);
