import Screen from "../classes/Screen";

export default class PageNotFoundScreen extends Screen {
  constructor() {
    super();
  }

  protected override render(): string {
    return `
        <div>
            <h1>ERROR 404 PAGE NOT FOUND</h1>
            <p>take a cookie</p>
        </div>
        `;
  }
}

customElements.define("page-not-found-screen", PageNotFoundScreen);
