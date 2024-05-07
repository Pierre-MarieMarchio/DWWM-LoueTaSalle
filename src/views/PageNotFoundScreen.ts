import Screen from "../classes/Screen";

export default class PageNotFound extends Screen {

    constructor() {
        super();


    };

    protected override render():string {

        return`
            <h1>ERROR 404 PAGE NOT FOUND</h1>
            <p>take a cookie</p>
        `;
    };

}