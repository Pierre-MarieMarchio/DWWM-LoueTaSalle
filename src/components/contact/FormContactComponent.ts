import Components from "../../classes/Components";
import ContactService from "../../services/Contact.Services";

export default class FormContactComponent extends Components {
  private _formdataContact: any;
  private _form: HTMLFormElement;
  private _contactService: ContactService;

  constructor() {
    super();
    this._form = this.querySelector("#contactForm");
    this._form.onsubmit = this.handleContactSubmit;
    this._contactService = new ContactService(null, "Contact", this._form);
  }

  handleContactSubmit = (e: SubmitEvent): void => {
    e.preventDefault();
    
    console.log(this._form);

    let entries = Object.fromEntries(new FormData(this._form));
    this._formdataContact = entries;
    this._contactService.formdata = this._formdataContact;
    this._contactService.validateForm();

    if (this._contactService.formIsValid) {
      console.log("c'est bon");

      this._contactService.create();
    } else {
      console.error("Reservation not good");
    }
  };
  protected override render(): string {
    return `
    <div class="container">
      <form novalidate id="contactForm">
        <fieldset desabled>
          <legend bg-primary>Formulaire de contact</legend>
          <div class="row">
            <div class="col">
              <div class="col mb-3">
                <input
                  type="text"
                  name="company"
                  id="disabledTextInput"
                  class="form-control"
                  placeholder="Société"
                />
              </div>
              <div class="col mb-3">
                <input
                  type="lastName"
                  name="lastName"
                  id="disabledTextInput"
                  class="form-control"
                  placeholder="Nom *"
                />
              </div>
              <div class="col mb-3">
                <input
                  type="firstName"
                  name="firstName"
                  id="disabledTextInput"
                  class="form-control"
                  placeholder="Prénom *"
                />
              </div>
              <div class="col mb-3">
                <input
                  type="text"
                  name="country"
                  id="disabledTextInput"
                  class="form-control"
                  placeholder="Pays *"
                />
              </div>
              <div class="col mb-3">
                <input
                  type="text"
                  name="city"
                  id="disabledTextInput"
                  class="form-control"
                  placeholder="Ville *"
                />
              </div>
              <div class="col mb-3">
                <input
                  type="text"
                  name="number"
                  id="disabledTextInput"
                  class="form-control"
                  placeholder="06 00 00 00 00"
                />
              </div>
              <div class="col mb-3">
                <input
                  type="text"
                  name="mail"
                  id="disabledTextInput"
                  class="form-control"
                  placeholder="Adresse email *"
                />
              </div>
            </div>
            <div class="col mb-3 d-flex align-items-stretch">
              <textarea
                class="form-control"
                id="validationTextarea"
                name="validationTextarea"
                placeholder="Votre demande *"
                required
              ></textarea>
            </div>
          </div>
          <div class="col mb-3">* Champs obligatoires</div>
          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary">
              Envoyer ma demande
            </button>
          </div>
        </fieldset>
      </form>
    </div>`;
  }
}

customElements.define("formcontact-component", FormContactComponent);
