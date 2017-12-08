export class Page3Element extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h1>This is a dynamic route</h1>
            <p>You are at: ${this.test}</p>
        `
    }
}
customElements.define('page-3', Page3Element);