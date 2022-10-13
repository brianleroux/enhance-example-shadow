export default function shade ({ html }) {
  return html`
    <h1>Hello World</h1>

    <script type=module>
      customElements.define('shady-el', class Shade extends HTMLElement {
        constructor () {
          super()
          this.attachShadow({ mode: 'open' })
          let copy = this.children[0].cloneNode(true)
          this.shadowRoot.appendChild(copy)
        }
      })
    </script>
  `
}
