import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';

const useStyles = makeStyles({
  indicator: indicatorTop => indicatorTop ? {
    backgroundColor: 'black',
    top: 0,
  } : { backgroundColor: 'black' }
});

function MyTabs({classes, indicatorTop, ...other}) {
  const styles = useStyles(indicatorTop);
  return (
    <Tabs {...other} classes={{
      indicator: styles.indicator,
      ...classes
    }}/>
  );
}

MyTabs.defaultProps = {
  indicatorTop: false
}

export default MyTabs;
