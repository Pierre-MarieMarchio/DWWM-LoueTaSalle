export default class App {
  private static _instance: any = null;

  static get instance() {
    return new App();
  }
  static getinstance() {
    return new App();
  }

  constructor() {
    if (App._instance != null && App._instance instanceof App) {
      return App._instance;
    }

    App._instance = this;

    window.onclick = this.handlePageClick;
  }

  handlePageClick = (e: any) => {
    const link = e.target?.closest('[target="SPA"]');

    if (link) {
      e.preventDefault();
      history.pushState(null, "", link.href);
      this.navigate(e);
    }

    
  };

  navigate = (e: any) => {
    const page = document.getElementById("app") as HTMLElement;

    page.firstChild.remove();
    const currentPage: HTMLDivElement = document.createElement("div");
    currentPage.innerText = location.pathname;
    page.append(currentPage);
  };
}
