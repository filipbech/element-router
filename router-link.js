import { routeTo, ROUTERS, getCurrentUrl } from './element-router.js';

export class RouterLink extends HTMLElement {
    constructor() {
        super();
        this.href = this.href || this.getAttribute('href');
        this.activeClass = this.activeClass || this.getAttribute('active-class') || 'active';

        this.innerHTML = `<a href="${this.href}">${this.innerHTML}</a>`;

        setTimeout(_ => {
            this.update();
            ROUTERS[0].addEventListener('routechange', () => {
                this.update();
            });
            this.children[0].addEventListener('click', event => {
                event.stopPropagation();
                event.preventDefault();
                routeTo(this.href);
                return false;
            });
        }, 0);
    }

    update() {
        this.children[0].className = this.href === getCurrentUrl() ? this.activeClass : '';
    }
}
customElements.define('router-link', RouterLink);