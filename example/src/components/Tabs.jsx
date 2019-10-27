import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';

import { color } from './themeColor';

const useStyles = makeStyles({
  indicator: props => ({
    backgroundColor: props.secondary ? 'black' : color
  })
});

function MyTabs({classes, secondary, ...other}) {
  const styles = useStyles({secondary});
  return (
    <Tabs {...other} classes={{
      indicator: styles.indicator,
      ...classes
    }}/>
  );
}

MyTabs.defaultProps = {
  secondary: false,
}

export default MyTabs;
