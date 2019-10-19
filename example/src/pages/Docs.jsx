import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import ReactMarkdown from 'react-markdown';
import { withRouter, Redirect } from "react-router-dom";

import { Tabs, AppBar } from '../components';
import { CodeRender, LinkRender, docs, docsPaths } from '../utils';

import Container from '@material-ui/core/Container';
import Tab from '@material-ui/core/Tab';

import { Screen, Route, Link, flip, glide } from 'react-tiger-transition';


const useStyles = makeStyles({
  screen: {
    backgroundColor: 'white',
  },
  docsRoute: {
    top: 48,
    height: `calc(100% - 48px)`
  },
  tabsFlexContainer: {
    '@media (min-width: 960px)': {
      justifyContent: 'center',
    }
  },
});

const RenderDoc = ({doc}) => (
  <div className='markdown-body'>
    <ReactMarkdown
      source={doc}
      renderers={{
        code: CodeRender,
        link: LinkRender
      }}
    />
  </div>
)

const Docs = ({
  match,
  location,
  history,
}) => {
  const classes = useStyles();

  return (
    match && !docsPaths.includes(match.params.doc) ?
    <Redirect to='/docs/quick-start'/>
    :
    <Screen className={classes.screen}>

      <AppBar position="fixed">
        <Container maxWidth='lg'>

          <Tabs
            value={match ? docsPaths.indexOf(match.params.doc) : 0}
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            classes={{
              flexContainer: classes.tabsFlexContainer,
            }}
          >
            {docs.map((d, index) => (
              <Tab
                component={Link}
                key={d.path}
                to={d.path}
                transition={() => flip({
                  duration: 300,
                  direction:
                    docsPaths.indexOf(match.params.doc) < index ?
                    'left' :
                    'right'
                })}
                label={d.text}
              />
            ))}
          </Tabs>
        </Container>
      </AppBar>

      <Screen container>
        {docs.map(d => (
          <Route
            className={classes.docsRoute}
            screen
            key={d.path}
            path={d.path}
          >
            <RenderDoc doc={d.doc} />
          </Route>
        ))}
      </Screen>

    </Screen>
  )
}


export default withRouter(Docs)
