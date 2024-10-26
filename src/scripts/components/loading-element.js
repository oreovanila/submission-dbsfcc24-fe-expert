class LoadingElement extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'closed' });
    this._display = this.getAttribute('display');
    this._style = document.createElement('style');

    this._style.textContent = `
      .loading_element {
        width: 100%;
        text-align: center;
        margin: 0; 
        font-size: 20px;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
      ${this._style.outerHTML}
      <div class="loading_element">Loading . . . </div>
    `;
  }
}

customElements.define('loading-element', LoadingElement);
