export default class Booking extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = this.render();
    }
  
    render(): string {
      return `
            
            `;
    }
  }
  
  customElements.define("booking", Booking);