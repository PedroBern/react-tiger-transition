export const imports = {
  'docs/Link.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-link" */ 'docs/Link.mdx'
    ),
  'docs/Route.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-route" */ 'docs/Route.mdx'
    ),
}
