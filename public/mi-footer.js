customElements.define("mi-footer", class extends HTMLElement {
  connectedCallback() {
    this.textContent = "Copyright © 2019 Jesus Sebastian Paez Paredes.";
  }
}, { extends: "footer" });