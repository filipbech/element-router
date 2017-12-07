import { html, LitElement } from './node_modules/lit-html-element/lit-element.js';

export class Page404Element extends LitElement {
    constructor(){
        super();
        console.log('page404 init');
    }
    connectedCallback() {
        console.log('page404 connected');
        super.connectedCallback();
    }
    render() {
        return html`
            <h1>This is a 404 page</h1>
            <p>This page doesn't exist. This could also be a redirect by having a redirect-attribute on the route that has path="*".</p>
        `
    }
}
customElements.define('page-404', Page404Element);