import quickStartDocs from '../../../docs/QuickStart.md';
import navigationDocs from '../../../docs/Navigation.md';
import routeDocs from '../../../docs/Route.md';
import linkDocs from '../../../docs/Link.md';
import screenDocs from '../../../docs/Screen.md';
import customTransitionsDocs from '../../../docs/CustomTransitions.md';
import transitionsDocs from '../../../docs/Transitions.md';
import transitionsAPI from './buildTransitionsAPI';

export const docs = [
  {
    path: '/docs/quick-start',
    text: 'Quick Start',
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
    doc: [transitionsDocs, customTransitionsDocs, transitionsAPI],
  },
]

export const docsPaths = docs.map(d => d.path.slice(6))
export const docsPathsAbs = docs.map(d => d.path)
