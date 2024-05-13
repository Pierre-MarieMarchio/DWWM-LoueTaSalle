import Components from "../../classes/Components";

export default class FormContactComponent extends Components {
  private _formdataContact: any;
  constructor() {
    super();
    this.innerHTML = this.render();
    this._formdataContact = this.handleContactSubmit();
  }

  handleContactSubmit = (): any => {
    const formcontact = this.querySelector("form");
    formcontact.addEventListener("submit", (e: MouseEvent) => {
      e.preventDefault();
      let form = e.target as HTMLFormElement;
      let entries = Object.fromEntries(new FormData(form));
      console.log("jnj");
      console.log(entries);
      // return entries;
    });
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
                  name="Nom"
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
