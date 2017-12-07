const ROUTERS = [];
const EMPTY = {};

export const route = (url, replace = false) => {
    if (url === getCurrentUrl()) {
        return;
    }

    if (typeof url !== 'string' && url.url) {
        replace = url.replace;
        url = url.url;
    }
    history.pushState(null, null, url);

    return ROUTERS[0].routeTo(url);
};

function getCurrentUrl() {
    let url = typeof location !== 'undefined' ? location : EMPTY;
    return `${url.pathname || ''}${url.search || ''}`;
}

function segmentize(url) {
    return url.replace(/(^\/+|\/+$)/g, '').split('/');
}

export class LitElementRouter extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        if(ROUTERS.length) {
            throw new Error('only one outlet allowed');
        }
        this.routeTo(getCurrentUrl());
        ROUTERS.push(this);

    }

    routeTo(url) {
        this.url = url;
        this.render();
    }


    resolveElement(routeEle, properties = {}) {
        let returnEle;

        let elementAttr = routeEle.getAttribute('element');
        if(elementAttr) {
            returnEle = document.createElement(elementAttr);
        }

        let redirectAttr = routeEle.getAttribute('redirect');
        if(redirectAttr) {
            route(redirectAttr);
            return null;
        }

        let template = routeEle.children[0];
        if(template && template.nodeName === 'TEMPLATE') {
            return document.importNode(template.content, true);
        }

        for (let prop in properties) {
            returnEle[prop] = properties[prop];
        }
        return returnEle;
    }

    getMatchingChild(children, url) {

        const queryRegex = /(?:\?([^#]*))?(#.*)?$/;
        //const queryParams = url.match(queryRegex);
        url = url.replace(queryRegex, '');
        const urlSegments = segmentize(url);

        for (let child of children) {
            const path = child.getAttribute('path');
            if (!path || child.nodeName !== "LIT-ELEMENT-ROUTE") {
                break;
            } 

            if(path === '*') {
                return this.resolveElement(child); 
            }

            if(path === url) {
                /** Fast exit if direct match */
                return this.resolveElement(child);
            }
            const pathSegments = segmentize(path);
            const matches = {};

            let max = Math.max(urlSegments.length, pathSegments.length);
            let ret;
            for (let i = 0; i < max; i++) {
                if (pathSegments[i] && pathSegments[i].charAt(0) === ':') {
                    let param = pathSegments[i].replace(/(^\:|[+*?]+$)/g, ''),
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
                return this.resolveElement(child, matches);
            }
        }
    }

    render() {
        this.shadowRoot.innerHTML = '';
        let element = this.getMatchingChild([...this.children], this.url);
        element && this.shadowRoot.appendChild(element);
    }
}
customElements.define('lit-element-router', LitElementRouter);


export class LitElementRoute extends HTMLElement{

}

customElements.define('lit-element-route', LitElementRoute);