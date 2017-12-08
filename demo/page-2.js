import { html, LitElement } from '../node_modules/lit-html-element/lit-element.js';

export class Page2Element extends LitElement {
    render() {
        return html`
            <h1>This is page 2</h1>
            <p>Phasellus elementum iaculis auctor. Curabitur ac dui urna. Mauris vehicula ultrices lorem quis commodo. Vestibulum tempor dapibus finibus. Nunc varius nunc at libero vehicula, in sodales lectus semper. Aliquam sed egestas nunc. In sit amet lectus arcu. Nullam non tellus vel turpis hendrerit convallis. Donec laoreet tellus sed massa vehicula molestie. Nullam cursus nulla et mauris commodo convallis. Maecenas nec malesuada justo. Suspendisse non dui turpis. Aliquam erat volutpat. In hac habitasse platea dictumst. Aliquam magna metus, consequat et dolor ac, tempus elementum risus.</p>
            <p>Pellentesque sagittis non velit in finibus. Praesent a sollicitudin massa. Aliquam viverra ante massa, nec suscipit sem posuere vitae. Morbi ut massa ac arcu dictum imperdiet. Vivamus viverra ac neque non facilisis. Aliquam volutpat ullamcorper mi, lobortis consequat nibh blandit nec. Aliquam in erat ullamcorper leo laoreet suscipit et vitae lacus. Sed porta neque eu diam porttitor, volutpat iaculis quam posuere. Praesent egestas sapien ut accumsan consequat. Cras ultricies erat quis risus volutpat imperdiet. Nam consectetur vestibulum molestie. Duis molestie diam eget urna commodo elementum. Quisque ultricies nulla at erat placerat, a pretium orci dictum. Donec id commodo dolor. Donec luctus vestibulum turpis, a aliquam est laoreet id.</p>
        `
    }
}
customElements.define('page-2', Page2Element);