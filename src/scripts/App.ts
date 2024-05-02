import Router from "./Router";

export default class App {
  private static _instance: any = null;
  static get instance() {
    return new App();
  }

  private _router: any = null;
  get router(): any {
    return this._router;
  }

  constructor() {
    if (App._instance != null && App._instance instanceof App) {
      return App._instance;
    }

    App._instance = this;
    this._router = new Router();
  }

  render() {
    const page = document.getElementById("app") as HTMLElement;

    page.firstElementChild?.remove();
    page.append(this.router.screen);
  }
}
