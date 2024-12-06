import { mount } from 'svelte';
import './app.css';
import App from './App.svelte';
export class App2 extends HTMLElement {
  connectedCallback() {
    mount(App, {
      target: this,
    });
  }
}

customElements.define('app2-element', App2);
