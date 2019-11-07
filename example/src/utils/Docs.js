import quickStartDocs from 'docsAssets/QuickStart.md';
import navigationDocs from 'docsAssets/Navigation.md';
import routeDocs from 'docsAssets/Route.md';
import linkDocs from 'docsAssets/Link.md';
import screenDocs from 'docsAssets/Screen.md';
import customTransitionsDocs from 'docsAssets/CustomTransitions.md';
import transitionsDocs from 'docsAssets/Transitions.md';
import tigersAPI from 'docsAssets/tigersAPI.md';

export const docs = [
  {
    path: '/docs/quickstart',
    text: 'Quickstart',
    doc: quickStartDocs,
  },
  {
    path: '/docs/navigation',
    text: 'Navigation',
    doc: navigationDocs,
  },
  {
    path: '/docs/route',
    text: 'Route',
    doc: routeDocs,
  },
  {
    path: '/docs/link',
    text: 'Link',
    doc: linkDocs,
  },
  {
    path: '/docs/screen',
    text: 'Screen',
    doc: screenDocs,
  },
  {
    path: '/docs/transitions',
    text: 'Transitions',
    doc: [transitionsDocs, customTransitionsDocs, tigersAPI],
  },
]

export const docsPaths = docs.map(d => d.path.slice(6))
export const docsPathsAbs = docs.map(d => d.path)
