import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';

import { color } from './themeColor';

const useStyles = makeStyles({
  indicator: props => props.indicatorTop ? {
    backgroundColor: props.secondary ? color : 'black',
    top: 0,
  } : { backgroundColor: props.secondary ? color : 'black' }
});

function MyTabs({classes, indicatorTop, secondary, ...other}) {
  const styles = useStyles({indicatorTop, secondary});
  return (
    <Tabs {...other} classes={{
      indicator: styles.indicator,
      ...classes
    }}/>
  );
}

MyTabs.defaultProps = {
  indicatorTop: false,
  secondary: false,
}

export default MyTabs;
