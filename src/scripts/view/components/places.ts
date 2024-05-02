export default class Places extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = this.render();
    }
  
    render(): string {
      return `
            
            `;
    }
  }
  
  customElements.define("places", Places);