import Screen from "../classes/Screen";
import SortLocationsComponent from "../components/places/SortLocationsComponent";
import SuggestionsComponent from "../components/places/SuggestionsComponent";
import ListVenuesComponent from "../components/places/ListVenuesComponent";

export default class PlacesScreen extends Screen {
  constructor() {
    super();

    this._props.sortlocations = new SortLocationsComponent();
    this._props.suggestions = new SuggestionsComponent();
    this._props.listvenues = new ListVenuesComponent();
  }

  protected override render(): string {
    return `
        <div>
          <header-component/>
        </div>
        <div>
          <sort-locations-menu/>
        </div>
        <div>
          <suggestions-component/>
        </div>
        <div>
          <list-venues-component/>
        </div>
        <div>
          <footer-component/>
        </div>
        `;
  }
}

customElements.define("places-screen", PlacesScreen);
