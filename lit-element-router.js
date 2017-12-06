import { html, LitElement } from './node_modules/lit-html-element/lit-element.js';

const ROUTERS = [];
const EMPTY = {};

export const route = (url, replace = false) => {
    if (typeof url !== 'string' && url.url) {
        replace = url.replace;
        url = url.url;
    }

    setUrl(url, replace ? 'replace' : 'push');

    return ROUTERS[0].routeTo(url);
    console.log('route to: ', url);
};

window['route'] = route;


function setUrl(url, type = 'push') {
    if (typeof history !== 'undefined' && history[type + 'State']) {
        history[type + 'State'](null, null, url);
    }
}

function getCurrentUrl() {
    let url = typeof location !== 'undefined' ? location : EMPTY;
    return `${url.pathname || ''}${url.search || ''}`;
}

function segmentize(url) {
    return url.replace(/(^\/+|\/+$)/g, '').split('/');
}


const d = document.createElement('page-1');

export class LitElementRouter extends LitElement {
    
    constructor() {
        super();
        if(ROUTERS.length) {
            throw new Error('only one outlet allowed');
        }
        this.url = location.href.replace(location.origin, '');
        ROUTERS.push(this);
    }

    routeTo(url) {
        console.log('now route to: ', url);
        this.url = url;
        this.invalidate();
    }


    cloneWithProperties(element, properties = {}) {
        const clone = element.cloneNode();
        for (let prop in properties) {
            clone[prop] = properties[prop];
        }
        console.log(clone);
        return clone;
    }

    getMatchingChild(children, url) {

        /* For later - getting queryParams */
        const queryRegex = /(?:\?([^#]*))?(#.*)?$/;
        //const queryParams = url.match(queryRegex);
        url = url.replace(queryRegex, '');
        const urlSegments = segmentize(url);

        for (let child of children) {
            const path = child.getAttribute('path');
            if(path === url) {
                /** Fast exit if direct match */
                return this.cloneWithProperties(child);
            }
            const pathSegments = segmentize(path);
            const matches = {};

            let max = Math.max(urlSegments.length, pathSegments.length);
            let ret;
            for (let i = 0; i < max; i++) {
                if (pathSegments[i] && pathSegments[i].charAt(0) === ':') {
                    let param = pathSegments[i].replace(/(^\:|[+*?]+$)/g, '');
                        flags = (pathSegments[i].match(/[+*?]+$/) || EMPTY)[0] || '',
                        plus = ~flags.indexOf('+'),
                        star = ~flags.indexOf('*'),
                        val = urlSegments[i] || '';
                    if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
                        ret = false;
                        break;
                    }
                    matches[param] = decodeURIComponent(val);
                    if (plus || star) {
                        matches[param] = urlSegments.slice(i).map(decodeURIComponent).join('/');
                        break;
                    }
                }
                else if (pathSegments[i] !== urlSegments[i]) {
                    ret = false;
                    break;
                }
                ret = true;
                
            }
            if(ret) {
                return this.cloneWithProperties(child, matches);
            }
        }
    }

    render() {
        return html`${this.getMatchingChild([...this.children], this.url)}`;
    }
}
customElements.define('lit-element-router', LitElementRouter);


export class LitElementRoute extends HTMLElement{

}

customElements.define('lit-element-route', LitElementRoute);