import App from "./classes/App";
import { routes } from "./configs/Route";

export default class Router {
  private _screen: HTMLElement = null;
  private _route: any = routes;

  get screen(): HTMLElement {
    return this._screen;
  }

  constructor() {
    window.onclick = this.handlePageClick;
    window.onload = this.navigate;
    window.onpopstate = this.navigate;
  }

  handlePageClick = (e: any) => {
    const link = e.target?.closest('[target="SPA"]');

    if (link) {
      e.preventDefault();
      history.pushState(null, "", link.href);
      this.navigate();
    }
  };

  navigate = () => {
    const curentRoute = this._route[location.pathname];
    const falseRoute = this._route["/page-not-found"];

    if (curentRoute) {
      this._screen = new curentRoute();
    } else {
      this._screen = new falseRoute();
    }
    App.instance.render();
  };
}
