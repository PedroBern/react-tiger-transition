import React from 'react';
import { withRouter, matchPath } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Tab from '@material-ui/core/Tab';
import MuiLink from '@material-ui/core/Link';
import { AppBar, Tabs } from '../components';
import { Screen, Link } from 'react-tiger-transition';
import { docsRoutePath } from '../pages/docs';
import { demoNavRoutePath } from '../pages/demo';

const useStyles = makeStyles({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  tabsFlexContainer: {
    justifyContent: 'center',
  },
});

const evalPath = (path, page, defaultPath) => (
  path.indexOf(page) !== -1 ? path : defaultPath
);

const paths = [
  {
    path: '/',
    text: 'home',
    config: { exact: true }
  },
  {
    path: path => evalPath(path, 'docs', '/docs/quickstart'),
    text: 'docs',
    config: docsRoutePath,
    to: '/docs/quickstart'
  },
  {
    path: path => evalPath(path,'demo', '/demo/glide'),
    text: 'demo',
    config: demoNavRoutePath,
    to: '/demo/glide'
  },
  {
    path: '/examples',
    text: 'examples',
    config: { exact: true }
  },
  {
    external: true,
    path: 'https://github.com/pedrobern/react-tiger-transition',
    text: 'github',
  },
]

const Nav = ({match, location, history}) => {

  const classes = useStyles();

  const value = match ?
    paths.findIndex(el => matchPath(match.url, {
      path: el.path,
      ...el.config
    }))
  :
    0;

  return (
    <AppBar position="fixed" color='secondary' className={classes.appBar}>
      <Container maxWidth='lg'>
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          value={value}
          textColor="inherit"
          classes={{
            flexContainer: classes.tabsFlexContainer,
          }}
        >
          {paths.map((p, index) => (
            p.external ?
              <Tab
                component={MuiLink}
                key={p.text}
                href={p.path}
                label={p.text}
              />
            :
              <Tab
                component={Link}
                key={p.text}
                to={
                  typeof p.path === 'function' && match
                  ? p.path(match.url)
                  : p.to || p.path
                }
                transition={
                  value < index
                  ? 'glide-left'
                  : 'glide-right'
                }
                label={p.text}
              />
          ))}
        </Tabs>
      </Container>
    </AppBar>
  )
}

export const navRoutePath = {
  path: [
    docsRoutePath.path,
    demoNavRoutePath.path,
    '/examples'
  ],
  exact: true
};

export default withRouter(Nav);
