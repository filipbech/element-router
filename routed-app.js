import { html, LitElement } from './node_modules/lit-html-element/lit-element.js';
import { LitElementRouter, route } from './lit-element-router.js';
import { Page1Element } from './page-1.js';
import { Page2Element } from './page-2.js';
import { Page3Element } from './page-3.js';

export class RoutedApp extends LitElement {
    render() {
        return html`
            <h1>Here is our app</h1>
            <button on-click=${e => route('/')}>page1</button> 
            <button on-click=${e => route('/about')}>page2</button>
            <button on-click=${e => route('/page/123')}>page3 (123)</button>
            <lit-element-router>
                <page-1 path="/"></page-1>
                <page-3 path="/page/:test"></page-3>
                <page-2 path="/about"></page-2>
            </lit-element-router>
        `
    }
}
customElements.define('routed-app', RoutedApp);

