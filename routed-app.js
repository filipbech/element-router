import { html, LitElement } from './node_modules/lit-html-element/lit-element.js';
import { LitElementRouter, route } from './lit-element-router.js';
import { Page1Element } from './page-1.js';
import { Page2Element } from './page-2.js';
import { Page3Element } from './page-3.js';
import { Page404Element } from './page-404.js';

export class RoutedApp extends LitElement {
    render() {
        return html`
            <h1>Here is our app</h1>
            <button on-click=${e => route('/')}>page1</button> 
            <button on-click=${e => route('/about')}>page2</button>
            <button on-click=${e => route('/about/us')}>page4 - redirect to 2</button>
            <button on-click=${e => route('/page/123')}>page3 (123)</button>
            <button on-click=${e => route('/just-template')}>just a template</button>
            <button on-click=${e => route('/fglsdklfjdsdkf')}>catch all example</button>
            <lit-element-router>
                <lit-element-route path="/" element="page-1"></lit-element-route>
                <lit-element-route path="/page/:test" element="page-3"></lit-element-route>
                <lit-element-route path="/about" element="page-2"></lit-element-route>
                <lit-element-route path="/about/us" redirect="/about"></lit-element-route>
                <lit-element-route path="/just-template">
                    <template>
                        <style>h1 { color:red; }</style>
                        <h1>What im in a template</h1>
                    </template>
                </lit-element-route>
                <lit-element-route path="*" element="page-404"></lit-element-route>
            </lit-element-router>
        `
    }
}
customElements.define('routed-app', RoutedApp);

