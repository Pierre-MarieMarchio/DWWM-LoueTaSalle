import HeaderComponent from "../components/common/HeaderComponent";
import Suggestion from "../components/common/SuggestionComponent";
import FooterComponent from "../components/common/FooterComponent";

export default abstract class Screen extends HTMLElement {

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
