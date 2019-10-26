import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import ReactMarkdown from 'react-markdown';
import { withRouter, Redirect } from "react-router-dom";

import { Tabs, AppBar } from '../components';
import { docs, docsPaths } from '../utils';
import { CodeRender, LinkRender } from '../renderers';

import Container from '@material-ui/core/Container';
import Tab from '@material-ui/core/Tab';

import { Screen, Route, Link, flip, glide } from 'react-tiger-transition';


const useStyles = makeStyles({
  screen: {
    height: `calc(100% - 48px)`
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
    {
      Array.isArray(doc) ?
        doc.map((d,i) => (
          <ReactMarkdown
            key={i}
            source={d}
            renderers={{
              code: CodeRender,
              link: LinkRender
            }}
          />
        ))
        :
        <ReactMarkdown
          source={doc}
          escapeHtml={false}
          renderers={{
            code: CodeRender,
            link: LinkRender
          }}
        />
    }
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

      <AppBar position="fixed" color='secondary'>
        <Container maxWidth='lg'>

          <Tabs
            secondary
            value={match ? docsPaths.indexOf(match.params.doc) : 0}
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

      <Screen display>
        {docs.map(d => (
          <Route
            className={classes.docsRoute}
            screen
            key={d.path}
            path={d.path}
          >
            <RenderDoc doc={d.doc} />
            {/*{d.path === '/docs/quick-start' &&
              <iframe
                src="https://codesandbox.io/embed/heuristic-herschel-70s21?fontsize=14"
                title="heuristic-herschel-70s21"
                allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
                width='100%'
                height='500px'
                frameBorder="0"
                sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
              >
              </iframe>
            }*/}
          </Route>
        ))}
      </Screen>

    </Screen>
  )
}


export default withRouter(Docs)
