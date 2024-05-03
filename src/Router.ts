import App from "./classes/App";

// Screen Import

import HomeScreen from "./views/screen/HomeScreen";
import ContactScreen from "./views/screen/ContactScreen";
import ReservationScreen from "./views/screen/ReservationScreen";
import PlacesScreen from "./views/screen/PlacesScreen";
import PlaceScreen from "./views/screen/PlaceScreen";

export default class Router {
  private _screen: any = null;
  get screen(): any {
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
    const page = document.getElementById("app") as HTMLElement;

    if (location.pathname === "/") {
      this._screen = new HomeScreen();
    } else if (location.pathname === "/lieux") {
      this._screen = new PlacesScreen();
    } else if (location.pathname === "/contact") {
      this._screen = new ContactScreen();
    } else if (location.pathname === "/reservation") {
      this._screen = new ReservationScreen();
    } else if (location.pathname === "/details") {
      this._screen = new PlaceScreen();
    } else {
      this._screen = new HomeScreen();
    }

    App.instance.render();
  };
}
