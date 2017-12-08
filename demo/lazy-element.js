export class LazyElement extends HTMLElement {
    connectedCallback() {
        console.log('lazy-element inited');
        this.innerHTML = `
            <h1>This is a lazy route</h1>
            <p>Im really lazy</p>
        `
    }
}
customElements.define('lazy-element', LazyElement);