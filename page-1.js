import { html, LitElement } from './node_modules/lit-html-element/lit-element.js';

export class Page1Element extends LitElement {
    constructor(){
        super();
        console.log('page1 init');
    }
    connectedCallback() {
        console.log('page1 connected');
        super.connectedCallback();
    }
    render() {
        return html`
            <h1>This is page 1</h1>
            <p>lorem ipsum</p>
        `
    }
}
customElements.define('page-1', Page1Element);