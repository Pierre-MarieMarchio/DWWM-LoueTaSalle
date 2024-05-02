export default class Contact extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = this.render();
    }
  
    render(): string {
      return `
            
            `;
    }
  }
  
  customElements.define("contact", Contact);