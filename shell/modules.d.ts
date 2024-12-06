declare module '@scope/nav';

declare module '@scope/svelte' {
  namespace JSX {
    interface IntrinsicElements {
      'app2-element': JSX.IntrinsicElements['div'];
    }
  }
}
