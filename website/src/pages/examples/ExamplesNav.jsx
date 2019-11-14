import React, { useContext } from 'react';
import { withRouter, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { AppBar } from '../../components';
import { assets, examplesPaths } from './assets';
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

const ExamplesNav = ({
  match,
  location,
  history,
}) => {

  const classes = useStyles();

  return (
    match && !examplesPaths.includes(match.params.example) ?
    <Redirect to='/examples/101'/>
    :
    <AppBar position="fixed" className={classes.appBar}>
      <Container maxWidth='lg'>

        <Tabs
          indicatorColor='secondary'
          value={match ? examplesPaths.indexOf(match.params.example) : 0}
          variant="scrollable"
          scrollButtons="auto"
          classes={{
            flexContainer: classes.tabsFlexContainer,
          }}
        >
          {assets.map((example, index) => (
            <Tab
              component={Link}
              key={example.path}
              to={example.path}
              transition="fade"
              label={example.label}
            />
          ))}
        </Tabs>
      </Container>
    </AppBar>
  )
}

export default withRouter(ExamplesNav);
