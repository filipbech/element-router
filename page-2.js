import { html, LitElement } from './node_modules/lit-html-element/lit-element.js';

export class Page2Element extends LitElement {
    constructor() {
        super();
        console.log('page2 init');
    }
    connectedCallback() {
        console.log('page2 connected');
        super.connectedCallback();
    }
    render() {
        return html`
            <h1>This is page 2</h1>
            <p>lorem ipsum</p>
        `
    }
}
customElements.define('page-2', Page2Element);