import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { withRouter, Redirect } from "react-router-dom";
import { assets, docsPaths } from './assets';
import Container from '@material-ui/core/Container';
import { Screen, Route } from 'react-tiger-transition';
import { SandboxExample } from '../../components';
import RenderDoc from './RenderDoc';

const useStyles = makeStyles({
  screen: {
    height: `calc(100% - 48px)`,
    top: 48,
  },
});

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
        {assets.map(doc => (
          <Route
            className={classes.screen}
            screen
            key={doc.path}
            path={doc.path}
          >

            <RenderDoc md={doc.md} />

            {doc.sandbox && !loading && (
              <SandboxExample {...doc.sandbox} />
            )}

          </Route>
        ))}
      </Screen>

    </Screen>
  )
}


export default withRouter(Docs)
