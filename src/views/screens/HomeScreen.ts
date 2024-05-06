import HeaderComponent from "../components/common/HeaderComponent";
import FooterComponent from "../components/common/FooterComponent";
import SearchBarComponent from "../components/landing/SearchBarComponent";
import SuggestionComponent from "../components/common/SuggestionComponent";
import TypeSectionComponent from "../components/landing/TypeSectionComponent";
import LocationSectionComponent from "../components/landing/LocationSectionComponent";
import LocationCitySectionComponent from "../components/landing/LocationCitySectionComponent";
import TestimonialsCarouselComponent from "../components/landing/TestimonialsCarouselComponent";


export default class HomeScreen extends HTMLElement {
  private _props: any;

  constructor() {
    super();

    this._props = {};
    this._props.header = new HeaderComponent();
    this._props.footer = new FooterComponent();
    this._props.searchBar = new SearchBarComponent();
    this._props.suggestion = new SuggestionComponent();
    this._props.typeSection = new TypeSectionComponent();
    this._props.locationSection = new LocationSectionComponent();
    this._props.locationCitySection = new LocationCitySectionComponent();
    this._props.testimonialsCarousel = new TestimonialsCarouselComponent();

    this.innerHTML = this.render();
  }

  render(): string {
    return `
        <div>
          <header-component/>
        </div>

        <main class="container my-5">

          <section class="my-5">
            <search-bar-component />
          </section>  

          <section class="my-5">
          <suggestion-component/>
          </section>

          <section class="my-5">
          <type-section-component/>
          </section>

          <section class="my-5">
          <location-section-component/>
          </section>

          <section class="my-5">
          <location-city-section-component/>
          </section>

          <testimonials-carousel-component/>
            
          
        </main>

        <div>
          <footer-component/>
        </div>
        `;
  }
}

customElements.define("home-screen", HomeScreen);
