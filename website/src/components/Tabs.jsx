import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';

const useStyles = makeStyles(theme => ({
  indicator: props => ({
    backgroundColor: props.secondary ? 'black' : theme.custom.color
  })
}));

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
