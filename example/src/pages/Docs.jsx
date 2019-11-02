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
            {d.path === '/docs/quick-start' && !loading && (

              <SandboxExample
                label='Quick Start'
                path='/documentation/examples/Basic'
                dependencies={{
                  "react-router-dom": "latest",
                  "react-tiger-transition": "latest",
                  "react-transition-group": "latest",
                }}
              />

            )}
          </Route>
        ))}
      </Screen>

    </Screen>
  )
}

// <div className="iframe_container">
//   <iframe
//     src="https://codesandbox.io/embed/heuristic-herschel-70s21?fontsize=14&codemirror=1"
//     title="heuristic-herschel-70s21"
//     width='100%'
//     height='100px'
//     frameBorder="0"
//     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
//   >
//   </iframe>
// </div>


export default withRouter(Docs)
