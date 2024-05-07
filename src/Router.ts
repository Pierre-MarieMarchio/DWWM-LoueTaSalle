import App from "./classes/App";
import {routes} from "./configs/Route";

export default class Router {
  private _screen: any = null;
  private _route = routes;

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
    const curentRoute = this._route[location.pathname];

    if (curentRoute) {

    }else {
      
    }
    
    App.instance.render();
  };
}
