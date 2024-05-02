export default class Index extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = this.render();
    }
  
    render(): string {
      return `
      <a href="/" target="SPA">Home</a>
      <a href="/lieux" target="SPA">Places</a>
      <a href="/contact" target="SPA">Contact</a>
      <a href="/reservation" target="SPA">Reservation</a>
  
      <div id="app" class="container py-4 px-3 mx-auto">
        <h1>Hello, Bootstrap and Webpack!</h1>
      </div>
            `;
    }
  }
  
  customElements.define("index", Index);