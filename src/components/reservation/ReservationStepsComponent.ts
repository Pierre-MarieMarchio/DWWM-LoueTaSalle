import Components from "../../classes/Components";

export default class ReservationSteps extends Components {
    protected override render(): string {
        return `
        <div class="row">
    <div class="col-4">
      <i class="bi bi-pencil bg-primary rounded-circle d-flex mx-auto align-items-center justify-content-center mb-1"
        style="width: 50px; height: 50px;"></i>
      <h5 class="text-center">1.</h5>
      <h6 class="text-primary text-center">Remplissez le formulaire</h6>
      <p class="text-center">Sélection des lieux réalisée à partir des caractéristiques communiquées dans le formulaire.
      </p>
    </div>
    <div class="col-4">
      <i class="bi bi-send bg-primary rounded-circle d-flex mx-auto align-items-center justify-content-center"
        style="width: 50px; height: 50px;"></i>
      <h5 class="text-center">2.</h5>
      <h6 class="text-primary text-center">Transmission de la demande</h6>
      <p class="text-center">Nous transmettons votre demande à l'ensemble des lieux de la sélection. Vous recevrez un
        email reprenant la liste des lieux choisis.</p>
    </div>
    <div class="col-4">
      <i class="bi bi-journal-check bg-primary rounded-circle d-flex mx-auto align-items-center justify-content-center"
        style="width: 50px; height: 50px;"></i>
      <h5 class="text-center">3.</h5>
      <h6 class="text-primary text-center">Mise en relation</h6>
      <p class="text-center">Les lieux vous contacteront directement par retour mail ou par téléphone. Vous pouvez
        également les joindre grâce à l'email récapitulant leurs coordonnées.</p>
    </div>
  </div>
        `;
    }
}

customElements.define("reservation-steps-component", ReservationSteps);