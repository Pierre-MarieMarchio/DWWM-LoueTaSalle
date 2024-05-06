import Screen from "../../classes/Screen";

import SearchBarComponent from "../../components/landing/SearchBarComponent";
import TypeSectionComponent from "../../components/landing/TypeSectionComponent";
import LocationSectionComponent from "../../components/landing/LocationSectionComponent";
import LocationCitySectionComponent from "../../components/landing/LocationCitySectionComponent";
import TestimonialsCarouselComponent from "../../components/landing/TestimonialsCarouselComponent";

export default class HomeScreen extends Screen {
  constructor() {
    super();

    this._props = {};

    this._props.searchBar = new SearchBarComponent();
    this._props.typeSection = new TypeSectionComponent();
    this._props.locationSection = new LocationSectionComponent();
    this._props.locationCitySection = new LocationCitySectionComponent();
    this._props.testimonialsCarousel = new TestimonialsCarouselComponent();
  }

  protected override render(): string {
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
