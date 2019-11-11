import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Logo, Card } from '../../components';

import { Screen } from 'react-tiger-transition'

import DemoCardContent from './DemoCardContent';
import UsageCardContent from './UsageCardContent';
import InstallationCardContent from './InstallationCardContent';

const useStyles = makeStyles(theme => ({
  screen: {
    height: `calc(100% - 48px)`,
    top: 48,
    backgroundColor: 'white'
  },
  gridContainer: {
    [theme.breakpoints.up('md')]: {
      height: `calc(100% - 144px)`
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      marginTop: 32,
      marginBottom: 32,
    }
  },
  gridContainer2: {
    maxWidth: 600,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 16,
      paddingRight: 16,
    },
  },
  gridContainer3: {
    paddingTop: 32,
    paddingBottom: 32,
    '& .MuiGrid-item': {
      marginLeft: 16,
      marginRight: 16,
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: 56,
    },
  },
  gridContainer4: {
    height: '100%',

    '& .MuiGrid-item': {
      [theme.breakpoints.up('md')]: {
        height: '100%'
      },
    }
  },
  text: {
    lineHeight: 1.1,
    background: theme.custom.gradient,
    WebkitBackgroundClip: 'text',
    textFillColor: 'transparent',
  },
}));

const badges = [
  {
    href: 'https://codecov.io/gh/pedrobern/react-tiger-transition/',
    alt: 'Codecov Coverage',
    src: 'https://img.shields.io/codecov/c/github/pedrobern/react-tiger-transition/master.svg?style=flat-square',
  },
  {
    href: 'https://travis-ci.com/PedroBern/react-tiger-transition',
    alt: 'Build Status',
    src: 'https://travis-ci.com/PedroBern/react-tiger-transition.svg?branch=master',
  },
  {
    href: 'https://github.com/PedroBern/react-tiger-transition',
    alt: 'Dependencies',
    src: 'https://david-dm.org/pedrobern/react-tiger-transition.svg',
  },
];

const cards = [
  {
    title: 'Installation',
    link: '/docs/quickstart',
    linkText: 'Read the quickstart',
    component: <InstallationCardContent />
  },
  {
    title: 'Usage',
    link: '/examples',
    linkText: 'Explore the examples',
    component: <UsageCardContent />
  },
  {
    title: 'Transitions',
    link: '/demo',
    linkText: 'Play with the demo',
    component: <DemoCardContent />
  },
];

const Home = props => {
  const classes = useStyles();

  return (
    <Screen className={classes.screen}>

        <Grid
          className={classes.gridContainer}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Logo />
          </Grid>
          <Grid item>
            <Grid
              className={classes.gridContainer2}
              container
              direction="column"
              alignItems="flex-start"
              justify="center"
            >
              <Grid item>
                <Typography
                  variant='h3'
                  classes={{
                    h3: classes.text
                  }}
                  gutterBottom
                >
                  React Tiger Transition
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant='h5'
                  classes={{
                    h5: classes.text
                  }}
                >
                  Easy page transitions for react-router.
                  Built with react-transition-group.
                  Use the provided transitions or create your own.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          className={classes.gridContainer3}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          {badges.map(badge => (
            <Grid item key={badge.alt}>
              <a href={badge.href}>
                <img alt={badge.alt} src={badge.src} />
              </a>
            </Grid>
          ))}
        </Grid>

        <Container maxWidth='lg' className={classes.gridContainer4}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={2}
          >
            {cards.map(card => (
              <Grid item xs={12} md={4} key={card.title}>
                <Card
                  title={card.title}
                  link={card.link}
                  linkText={card.linkText}
                >
                  {card.component}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

    </Screen>
  )

}

export default Home
