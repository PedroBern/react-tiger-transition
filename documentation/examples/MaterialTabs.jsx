import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import  Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from '@material-ui/core/styles';
import {
  Navigation,
  Route,
  Screen,
  Link,
  slide
} from "react-tiger-transition";
import "react-tiger-transition/styles/main.min.css";

slide({
  name: 'slide-left',
});
slide({
  name: 'slide-right',
  direction: 'right'
});

const tabs = ["a", "b", "c", "d"];

const useStyles = makeStyles({
  root: {
    height: '100vh',
    backgroundColor: 'white'
  },
  appbar: {
    zIndex: 1000,
    height: 64,
    top: 0
  },
  views: {
    height: "calc(100% - 48px)",
    top: 'auto',
    bottom: 0
  },
  a: {
    backgroundColor: '#ffc107'
  },
  b: {
    backgroundColor: '#9c27b0'
  },
  c: {
    backgroundColor: '#00bcd4'
  },
  d: {
    backgroundColor: '#ff784e'
  },
});

export default () => {
  const classes = useStyles();
  const [value, setValue] = useState(tabs[0]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Router>
        <Navigation>

          <Route screen className={classes.appbar}>
            <AppBar>
              <Tabs
                value={value}
                onChange={handleChange}
                centered
              >
                {tabs.map(tab => (
                  <Tab
                    key={tab}
                    label={tab}
                    component={Link}
                    value={tab}
                    to='/'
                    transition={
                      value < tab
                      ? 'slide-left'
                      : 'slide-right'
                    }
                  />
                ))}
              </Tabs>
            </AppBar>
          </Route>

          {tabs.map(tab => (
            <Route
              key={tab}
              className={classes.views}
              transitionProps={{
                in: tab === value,
              }}
            >
              <Screen className={classes[tab]}/>
            </Route>
          ))}

        </Navigation>
      </Router>
    </div>
  )
}
