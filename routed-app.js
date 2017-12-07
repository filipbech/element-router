import { html, LitElement } from './node_modules/lit-html-element/lit-element.js';
import { ElementRouter, routeTo } from './element-router.js';
import { Page1Element } from './page-1.js';
import { Page2Element } from './page-2.js';
import { Page3Element } from './page-3.js';
import { Page404Element } from './page-404.js';

export class RoutedApp extends LitElement {
    render() {
        return html`
            <h1>Here is our app</h1>
            <button on-click=${e => routeTo('/')}>page1</button> 
            <button on-click=${e => routeTo('/about')}>page2</button>
            <button on-click=${e => routeTo('/about/us')}>page4 - redirect to 2</button>
            <button on-click=${e => routeTo('/page/123')}>page3 (123)</button>
            <button on-click=${e => routeTo('/lazy')}>Lazy</button>
            <button on-click=${e => routeTo('/just-template')}>just a template</button>
            <button on-click=${e => routeTo('/fglsdklfjdsdkf')}>catch all example</button>
            <element-router>
                <element-route path="/" element="page-1"></element-route>
                <element-route path="/page/:test" element="page-3"></element-route>
                <element-route path="/about" element="page-2"></element-route>
                <element-route path="/lazy" import="./lazy-element.js" element="lazy-element"></element-route>
                <element-route path="/about/us" redirect="/about"></element-route>
                <element-route path="/just-template">
                    <template>
                        <style>h1 { color:red; }</style>
                        <h1>What im in a template</h1>
                    </template>
                </element-route>
                <element-route path="*" element="page-404"></element-route>
            </element-router>
        `
    }
}
customElements.define('routed-app', RoutedApp);

