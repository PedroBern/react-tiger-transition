import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const useStyles = makeStyles(theme => ({
  text: {
    paddingBottom: 24,
  }
}));

const code = `<Link
  to="/some-path"
  transition="my-transition"
/>
`;

const DemoCardContent = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography gutterBottom className={classes.text}>
        After quick initial configuration,
        it is almost the same usage as react-router-dom with
        css transitions from react-transition-group.
      </Typography>
      <SyntaxHighlighter language='js' style={okaidia}>
        {code}
      </SyntaxHighlighter>
    </React.Fragment>
  )
};

export default DemoCardContent;
