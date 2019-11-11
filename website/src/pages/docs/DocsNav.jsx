import React, { useContext } from 'react';
import { withRouter, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { AppBar } from '../../components';
import { assets, docsPaths } from './assets';
import { Link } from 'react-tiger-transition';


const useStyles = makeStyles({
  appBar: {
    top: 'auto',
    bottom: 16,
  },
  tabsFlexContainer: {
    '@media (min-width: 960px)': {
      justifyContent: 'center',
    }
  },
});

const DocsNav = ({
  match,
  location,
  history,
}) => {

  const classes = useStyles();

  return (
    match && !docsPaths.includes(match.params.doc) ?
    <Redirect to='/docs/quickstart'/>
    :
    <AppBar position="fixed" className={classes.appBar}>
      <Container maxWidth='lg'>

        <Tabs
          indicatorColor='secondary'
          value={match ? docsPaths.indexOf(match.params.doc) : 0}
          variant="scrollable"
          scrollButtons="auto"
          classes={{
            flexContainer: classes.tabsFlexContainer,
          }}
        >
          {assets.map((doc, index) => (
            <Tab
              component={Link}
              key={doc.path}
              to={doc.path}
              transition={match && docsPaths.indexOf(match.params.doc) < index ?
                'flip-left' :
                'flip-right'
              }
              label={doc.text}
            />
          ))}
        </Tabs>
      </Container>
    </AppBar>
  )
}

export default withRouter(DocsNav);
