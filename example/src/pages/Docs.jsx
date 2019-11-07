import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import ReactMarkdown from 'react-markdown';
import { withRouter, Redirect } from "react-router-dom";
import { docs, docsPaths } from '../utils';
import { CodeRender, LinkRender } from '../renderers';
import Container from '@material-ui/core/Container';
import { Screen, Route } from 'react-tiger-transition';
import { SandboxExample } from '../components';

const useStyles = makeStyles({
  screen: {
    height: `calc(100% - 48px)`,
    top: 48,
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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [])

  return (
    <Screen className={classes.screen}>

      <Screen display>
        {docs.map(d => (
          <Route
            className={classes.screen}
            screen
            key={d.path}
            path={d.path}
          >
            <RenderDoc doc={d.doc} />
            {d.path === '/docs/quickstart' && !loading && (

              <SandboxExample
                label='Quickstart'
                path='documentation/examples/Basic.jsx'
                dependencies={{
                  "react-router-dom": "latest",
                  "react-tiger-transition": "^3.0.2",
                  "react-transition-group": "latest",
                }}
                code=''
              />

            )}
          </Route>
        ))}
      </Screen>

    </Screen>
  )
}


export default withRouter(Docs)
