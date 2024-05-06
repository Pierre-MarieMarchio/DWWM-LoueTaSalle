import HeaderComponent from "../views/components/common/HeaderComponent";
import Suggestion from "../views/components/common/SuggestionComponent";
import FooterComponent from "../views/components/common/FooterComponent";

export default class Screen extends HTMLElement {

    protected _props: any 

  constructor() {
    super();
    this._props = {};
    this._props.header = new HeaderComponent();
    this._props.suggestion = new Suggestion();
    this._props.footer = new FooterComponent();

    this.innerHTML = this.render();
  }

  protected render(): string {
    return ``;
  }

}
