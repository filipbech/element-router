import { html, LitElement } from '../node_modules/lit-html-element/lit-element.js';

export class Page3Element extends LitElement {
    render() {
        return html`
            <h1>This is a dynamic route</h1>
            <p>You are at: ${this.test}</p>
        `
    }
}
customElements.define('page-3', Page3Element);