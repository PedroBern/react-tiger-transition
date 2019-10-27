import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import ReactMarkdown from 'react-markdown';
import { withRouter, Redirect } from "react-router-dom";
import { docs, docsPaths } from '../utils';
import { CodeRender, LinkRender } from '../renderers';
import Container from '@material-ui/core/Container';
import { Screen, Route } from 'react-tiger-transition';


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
          </Route>
        ))}
      </Screen>

    </Screen>
  )
}


export default withRouter(Docs)
