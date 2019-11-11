import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const useStyles = makeStyles(theme => ({
  text: {
    paddingBottom: 24,
  }
}));

const code = `import { Link, glide } from 'react-tiger-transition';

// inject css
glide({
  name: "glide-right",
  direction: "right"
});

<Link
  to="/some-path"
  transition="glide-right"
/>
`;

const DemoCardContent = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography gutterBottom className={classes.text}>
        After quick initial configuration,
        it is almost the same usage as <Link href='https://github.com/ReactTraining/react-router'>react-router-dom</Link> with
        css transitions from <Link href='https://github.com/reactjs/react-transition-group'>react-transition-group</Link>.
      </Typography>
      <SyntaxHighlighter language='js' style={okaidia}>
        {code}
      </SyntaxHighlighter>
    </React.Fragment>
  )
};

export default DemoCardContent;
