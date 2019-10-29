export const buildTransitionIn = ({
  transition = () => {},
  replaceBackground = null,
} = {}) => ({
  onEnter: () => {
    if (replaceBackground) replaceBackground.fake();
  },
  onEntering: (node) => {
    transition(node);
  },
  onEntered: () => {
    if (replaceBackground) replaceBackground.original();
  },
});

export const buildTransitionOut = ({
  transition = () => {},
  replaceBackground = null,
} = {}) => ({
  onExit: () => {
    if (replaceBackground) replaceBackground.fake();
  },
  onExiting: (node) => {
    transition(node);
  },
  onExited: () => {
    if (replaceBackground) replaceBackground.original();
  },
});
