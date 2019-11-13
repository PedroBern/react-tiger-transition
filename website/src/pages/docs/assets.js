import quickStartDocs from 'docsAssets/QuickStart.md';
import navigationDocs from 'docsAssets/Navigation.md';
import routeDocs from 'docsAssets/Route.md';
import linkDocs from 'docsAssets/Link.md';
import screenDocs from 'docsAssets/Screen.md';
import customTransitionsDocs from 'docsAssets/CustomTransitions.md';
import transitionsDocs from 'docsAssets/Transitions.md';
import tigersAPI from 'docsAssets/tigersAPI.md';

export const assets = [
  {
    path: '/docs/quickstart',
    text: 'Quickstart',
    md: quickStartDocs,
    sandbox: {
      label: 'Quickstart',
      path: 'documentation/examples/101.jsx',
    }
  },
  {
    path: '/docs/navigation',
    text: 'Navigation',
    md: navigationDocs,
  },
  {
    path: '/docs/route',
    text: 'Route',
    md: routeDocs,
  },
  {
    path: '/docs/link',
    text: 'Link',
    md: linkDocs,
  },
  {
    path: '/docs/screen',
    text: 'Screen',
    md: screenDocs,
  },
  {
    path: '/docs/transitions',
    text: 'Transitions',
    md: [transitionsDocs, customTransitionsDocs, tigersAPI],
  },
]

export const docsPaths = assets.map(d => d.path.slice(6))

// used by LinkRender
export const docsPathsAbs = assets.map(d => d.path)
