import { html, LitElement } from './node_modules/lit-html-element/lit-element.js';

export class Page3Element extends LitElement {
    constructor() {
        super();
        console.log('page3 init');
    }
    connectedCallback() {
        console.log('page3 connected');
        super.connectedCallback();
    }
    render() {
        return html`
            <h1>This is a dynamic route</h1>
            <p>You are at: ${this.test}</p>
        `
    }
}
customElements.define('page-3', Page3Element);