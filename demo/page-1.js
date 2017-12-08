export class Page1Element extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h1>This is page 1</h1>
            <p>Phasellus at ex vel mauris pellentesque dapibus at vitae neque. Aliquam erat volutpat. Cras sed mi dignissim, porta justo a, egestas enim. Cras ut nunc vel erat aliquam tempor sit amet a diam. Maecenas commodo porttitor metus, eu placerat tortor viverra in. Morbi nec sem at nisl placerat condimentum ac pretium urna. Duis porttitor urna non quam ornare, vel lobortis leo cursus. Phasellus mollis ex vitae lacus molestie aliquet vitae a est. Curabitur vehicula egestas risus sed imperdiet. Duis vitae convallis velit. Aliquam sit amet dictum orci, ac pretium ligula. Cras a imperdiet elit. In ullamcorper magna risus, sit amet facilisis sapien aliquet in. Morbi vel quam id ipsum lobortis convallis in pellentesque erat.</p>
            <p>Ut eleifend ligula vel est iaculis, quis vulputate felis elementum. Fusce hendrerit fringilla tortor, sed varius ligula ornare et. Nulla pellentesque maximus urna, sit amet viverra nunc condimentum mattis. Phasellus cursus sit amet nibh nec tempus. In id enim vel justo porttitor lobortis at ac ante. Morbi in magna elit. Maecenas rhoncus lacus sed varius ultrices. Vestibulum bibendum, eros et condimentum pharetra, risus nunc imperdiet turpis, nec viverra arcu libero vitae risus. Quisque id semper erat. Fusce eget erat elit. Nullam hendrerit velit id finibus imperdiet. Pellentesque tristique justo feugiat, aliquam enim vehicula, euismod justo. Ut sed lacinia leo, in tempus nibh. Cras sed sodales ex. Vivamus tempus lorem sed luctus convallis.</p>
        `
    }
}
customElements.define('page-1', Page1Element);