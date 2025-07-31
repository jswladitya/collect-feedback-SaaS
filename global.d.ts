// global.d.ts

declare namespace JSX {
  interface IntrinsicElements {
    'my-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      'project-id'?: string;
    };
  }
}