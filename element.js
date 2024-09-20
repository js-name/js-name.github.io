customElements.define(
  "js-name",
  class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = "JavaScript";
    }
  }
);
