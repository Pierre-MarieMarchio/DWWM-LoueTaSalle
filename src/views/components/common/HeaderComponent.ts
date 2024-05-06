import Alert from "bootstrap/js/dist/alert";

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from "bootstrap";
export default class HeaderComponent extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = this.render();
  }

  render(): string {
    return `
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" id="title-navbar" href="#"
            ><img src="../assets/svg/logo-svg.svg" alt="logo" height="100px"
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" target="SPA" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link text-light" target="SPA" href="/">Accueil</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" target="SPA" href="/lieux">Nos lieux</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" target="SPA" href="/reservation">Réservation</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" target="SPA" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
            `;
  }
}

customElements.define("header-component", HeaderComponent);
