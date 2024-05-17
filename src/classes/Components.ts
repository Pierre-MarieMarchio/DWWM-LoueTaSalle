export default abstract class Components extends HTMLElement {

    constructor() {
        super();

        this.innerHTML = this.render();

    }

    protected render(): string {
        return'';
    };

}