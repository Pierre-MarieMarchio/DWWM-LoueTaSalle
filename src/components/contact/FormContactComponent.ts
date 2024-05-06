import Components from "../../classes/Components";

export default class FormContactComponent extends Components {
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
                  id="disabledTextInput"
                  class="form-control"
                  placeholder="Société"
                />
              </div>
              <div class="col mb-3">
                <input
                  type="text"
                  id="disabledTextInput"
                  class="form-control"
                  placeholder="Nom *"
                />
              </div>
              <div class="col mb-3">
                <input
                  type="text"
                  id="disabledTextInput"
                  class="form-control"
                  placeholder="Prénom *"
                />
              </div>
              <div class="col mb-3">
                <input
                  type="text"
                  id="disabledTextInput"
                  class="form-control"
                  placeholder="Pays *"
                />
              </div>
              <div class="col mb-3">
                <input
                  type="text"
                  id="disabledTextInput"
                  class="form-control"
                  placeholder="Ville *"
                />
              </div>
              <div class="col mb-3">
                <input
                  type="text"
                  id="disabledTextInput"
                  class="form-control"
                  placeholder="06 00 00 00 00"
                />
              </div>
              <div class="col mb-3">
                <input
                  type="text"
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
