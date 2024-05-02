import App from "./App";
import HomeScreen from "./view/screen/HomeScreen";
import ReservationScreen from "./view/screen/ReservationScreen";
import PlacesScreen from "./view/screen/PlacesScreen";


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
      this._screen = new HomeScreen();
    } else if (location.pathname === "/reservation") {
      this._screen = new ReservationScreen();
    } else {
      this._screen = new HomeScreen();
    }

    App.instance.render();
  };
}
