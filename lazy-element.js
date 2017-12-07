import { html, LitElement } from './node_modules/lit-html-element/lit-element.js';

export class LazyElement extends LitElement {
    constructor() {
        super();
        console.log('lazy init');
    }
    connectedCallback() {
        console.log('lazy connected');
        super.connectedCallback();
    }
    render() {
        return html`
            <h1>This is a lazy route</h1>
            <p>Im really lazy</p>
        `
    }
}
customElements.define('lazy-element', LazyElement);