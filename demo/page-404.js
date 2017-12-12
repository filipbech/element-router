export class Page404Element extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h1>This is a 404 page</h1>
            <p>This page doesn't exist. This could also be a redirect by having a redirect-attribute on the route that has path="*".</p>
        `
    }
}
customElements.define('page-404', Page404Element);
