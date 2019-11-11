import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const useStyles = makeStyles(theme => ({
  code: {
    marginBottom: 24,
  }
}));

const imports = [
  {
    text: "Install via npm:",
    code: "npm i react-tiger-transition"
  },
  {
    text: "Install peerDependencies:",
    code: "npm i react-router-dom react-transition-group"
  },
  {
    text: "You need to import this tiny stylesheet into your app:",
    code: 'import "react-tiger-transition/styles/main.min.css";'
  },
]

const InstallationCardContent = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {imports.map(i => (
        <React.Fragment key={i.text}>
          <Typography gutterBottom>
            {i.text}
          </Typography>
          <div className={classes.code}>
            <SyntaxHighlighter language='json' style={okaidia}>
              {i.code}
            </SyntaxHighlighter>
          </div>
        </React.Fragment>
      ))}
    </React.Fragment>
  )
};

export default InstallationCardContent;
