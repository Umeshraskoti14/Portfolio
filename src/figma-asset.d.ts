// Allow importing Figma asset references as string URLs.
// These module specifiers are used by the Figma-to-Code integration.

declare module 'figma:asset/*' {
  const src: string;
  export default src;
}
