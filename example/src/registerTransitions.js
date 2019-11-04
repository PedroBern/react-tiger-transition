import { glide } from 'react-tiger-transition/css-tigers';
import { shuffle } from 'react-tiger-transition/css-tigers';
import { flip } from 'react-tiger-transition/css-tigers';

glide({
  name: 'glide-left',
  opacity: 0.3,
  easing: 'easeOutQuad'
});

glide({
  name: 'glide-right',
  direction: 'right',
  opacity: 0.3,
  easing: 'easeOutQuad'
})

shuffle({
  name: 'shuffle-bottom',
  direction: 'bottom',
  duration: 500,
  opacity: 1,
  zIndex: 200,
  easing: 'easeOutCubic'
});

shuffle({
  name: 'shuffle-secondary-bottom',
  direction: 'bottom',
  duration: 500,
  opacity: 1,
  zIndex: 100,
  easing: 'easeOutCubic'
})

flip({
  name: 'flip-left',
  duration: 300
});

flip({
  name: 'flip-right',
  duration: 300,
  direction: 'right'
})
