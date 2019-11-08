import { amber, deepOrange, grey, blueGrey } from '@material-ui/core/colors';

// orange
export const color = amber[700];

// almost black
export const colorSecondary = blueGrey[900];

// gradient from dark yellow to dark orange
export const gradient = `linear-gradient(120deg, ${amber[700]} 0%, ${deepOrange[500]} 100%)`;

// gradient from two dark tones
export const gradientSecondary = `linear-gradient(45deg, ${grey[800]} 30%, ${blueGrey[900]} 90%)`;
