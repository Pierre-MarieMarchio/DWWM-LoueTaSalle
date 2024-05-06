import Components from "../../classes/Components";

export default class TestimonialsCarouselComponent extends Components {
  protected override render(): string {
    return `
    <section class="" id="testimonials">
    <div id="carousel-Testimonials" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item t-carousel-item active">
          <div class="text-center">
            <h2 class="cf-Monsserat">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quos inventore mollitia deleniti
              dolorem tempora recusandae tenetur, voluptate, dolor quae debitis vitae hic aut aspernatur soluta
              commodi officia, eius dolore.
            </h2>
            <img class="rounded-circle img-testimonials" src="./assets/img/place-holder.webp" alt="image" />
            <em class="cf-em-Testimonials">Machin, Machin</em>
          </div>
        </div>
        <div class="carousel-item t-carousel-item">
          <div class="text-center">
            <h2 class="cf-Monsserat">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi officiis voluptate nostrum temporibus
              recusandae soluta, qui nobis placeat dicta rem molestiae animi, odit facere reprehenderit quod quam
              culpa laborum architecto.
            </h2>
            <img class="rounded-circle img-testimonials" src="./assets/img/place-holder.webp" alt="lady-profile" />
            <em>machin machin</em>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carousel-Testimonials"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carousel-Testimonials"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>

    `;
  }
}

customElements.define("testimonials-carousel-component", TestimonialsCarouselComponent);
