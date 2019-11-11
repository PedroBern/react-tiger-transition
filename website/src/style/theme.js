import { createMuiTheme } from '@material-ui/core/styles';

import { amber, deepOrange, grey, blueGrey, orange } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[700],
    },
    secondary: {
      main: blueGrey[900],
    }
  },
  custom: {
    gradient: `linear-gradient(120deg, ${amber[700]} 0%, ${deepOrange[500]} 100%)`,
    gradientSecondary: `linear-gradient(45deg, ${grey[800]} 30%, ${blueGrey[900]} 90%)`,
    color: amber[700],
    colorSecondary: blueGrey[900],
  }
});
