import Components from "../../classes/Components";
import ContactService from "../../services/Contact.Services";

export default class FormContactComponent extends Components {
  private _formdataContact: any;
  private _formContact: HTMLFormElement;
  private _contactService: ContactService;
  constructor() {
    super();
    this._formContact = this.querySelector("form");
    this._formContact.onsubmit = this.handleContactSubmit;
    this._contactService = new ContactService(null, this._formContact);
  }

  handleContactSubmit = (e: SubmitEvent): void => {
    e.preventDefault();
    let entries = Object.fromEntries(new FormData(this._formContact));
    this._formdataContact = entries;
    this._contactService.formdataContact = this._formdataContact;
    this._contactService.validateForm();
    //TODO if validateform true then make it to local storage else error message
    this._contactService.createContactForm();
  };
  protected override render(): string {
    return `
    <div class="container">
      <form>
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
                  type="lastname"
                  name="lastname"
                  id="disabledTextInput"
                  class="form-control"
                  placeholder="Nom *"
                />
              </div>
              <div class="col mb-3">
                <input
                  type="name"
                  name="firstname"
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
