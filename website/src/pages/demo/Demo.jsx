import React, { useContext } from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/mode/javascript/javascript';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { Screen, Link } from 'react-tiger-transition';
import { DemoContext } from './context';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  screen: {
    height: `calc(100% - 96px)`,
    marginTop: 96,
  },
  paper: {
    padding: 16,
    margin: 16,
    width: `calc(100% - 64px)`,
  },
  codeMirror: {
    marginTop: 16,
    marginBottom: 16,
    '& .CodeMirror': {
      borderRadius: 8,
    }
  },
  grid: {
    height: '100%',
  }
});

const codeMirrorOptions = {
  lineNumbers: true,
  theme: 'material',
  mode: 'javascript',
}

const Demo = props => {

  const classes = useStyles();

  const {
    tiger,
    tigers,
    strArgs,
    onBeforeChange,
    onChange,
    updateDemoTimeout,
    timeout
  } = useContext(DemoContext)

  return (

    <Screen className={classes.screen}>

      <Grid
        container
        justify='center'
        alignItems='center'
        className={classes.grid}
      >
        <Grid item xs={12}>
          <Container maxWidth='sm'>
            <div className={classes.paper}>

              <Button
                variant='outlined'
                fullWidth
                component={Link}
                to={`/demo/${tiger.name}/a`}
                transition={`${tiger.name}-demo`}
                timeout={timeout}
              >
                Start demo!
              </Button>

              <CodeMirror
                className={classes.codeMirror}
                value={strArgs}
                options={codeMirrorOptions}
                onBeforeChange={(editor, data, value) => {
                  onBeforeChange(value);
                }}
                onChange={(editor, data, value) => {
                  onChange(value);
                }}
              />

              <Typography>
                Check out the {
                  <MuiLink
                    component={Link}
                    to='/docs/transitions'
                    transition='glide-right'
                  >
                    Transitions API
                  </MuiLink>
                }.
              </Typography>

            </div>
          </Container>
        </Grid>
      </Grid>
    </Screen>
  )
}


export default Demo
