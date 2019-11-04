export const getEasing = (easing) => {
  switch (easing) {
    case 'easeInSine': {
      return 'cubic-bezier(0.47, 0, 0.745, 0.715)';
    }
    case 'easeOutSine': {
      return 'cubic-bezier(0.39, 0.575, 0.565, 1)';
    }
    case 'easeInOutSine': {
      return 'cubic-bezier(0.445, 0.05, 0.55, 0.95)';
    }
    case 'easeInCubic': {
      return 'cubic-bezier(0.55, 0.055, 0.675, 0.19)';
    }
    case 'easeOutCubic': {
      return 'cubic-bezier(0.215, 0.61, 0.355, 1)';
    }
    case 'easeInOutCubic': {
      return 'cubic-bezier(0.645, 0.045, 0.355, 1)';
    }
    case 'easeInQuint': {
      return 'cubic-bezier(0.755, 0.05, 0.855, 0.06)';
    }
    case 'easeOutQuint': {
      return 'cubic-bezier(0.23, 1, 0.32, 1)';
    }
    case 'easeInOutQuint': {
      return 'cubic-bezier(0.86, 0, 0.07, 1)';
    }
    case 'easeInCirc': {
      return 'cubic-bezier((0.6, 0.04, 0.98, 0.335)';
    }
    case 'easeOutCirc': {
      return 'cubic-bezier(0.075, 0.82, 0.165, 1)';
    }
    case 'easeInOutCirc': {
      return 'cubic-bezier(0.785, 0.135, 0.15, 0.86)';
    }
    case 'easeInQuad': {
      return 'cubic-bezier(0.55, 0.085, 0.68, 0.53)';
    }
    case 'easeOutQuad': {
      return 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    }
    case 'easeInOutQuad': {
      return 'cubic-bezier(0.455, 0.03, 0.515, 0.955)';
    }
    case 'easeInQuart': {
      return 'cubic-bezier(0.895, 0.03, 0.685, 0.22)';
    }
    case 'easeOutQuart': {
      return 'cubic-bezier(0.165, 0.84, 0.44, 1)';
    }
    case 'easeInOutQuart': {
      return 'cubic-bezier(0.77, 0, 0.175, 1)';
    }
    case 'easeInExpo': {
      return 'cubic-bezier(0.95, 0.05, 0.795, 0.035)';
    }
    case 'easeOutExpo': {
      return 'cubic-bezier(0.19, 1, 0.22, 1)';
    }
    case 'easeInOutExpo': {
      return 'cubic-bezier(1, 0, 0, 1)';
    }
    case 'easeInBack': {
      return 'cubic-bezier(0.6, -0.28, 0.735, 0.045)';
    }
    case 'easeOutBack': {
      return 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    }
    case 'easeInOutBack': {
      return 'cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    }
    default: {
      return easing;
    }

  }
};
