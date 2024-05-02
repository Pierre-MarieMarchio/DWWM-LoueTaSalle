export default class PlacesScreen extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = this.render();
    }

    render(): string {
        return `
        <div>
        ${this.constructor.name}
        </div>
        `;
    }

}


customElements.define("place-screen", PlacesScreen);
