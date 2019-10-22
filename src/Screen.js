import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter, matchPath } from 'react-router-dom';

import { computeClassName } from './utils';


const ScreenBase = React.forwardRef(({
  className,
  children,
  ...other
}, ref) => (
  <div
    ref={ref}
    className={className}
    {...other}
  >
    {children}
  </div>
));


const Display = withRouter(({
  match,
  location,
  history,
  children,
}) => {

  const [isFirstRender, setIsFirstRender] = useState(true);
  const [baseMatch, setBaseMatch] = useState(match)

  useEffect(() => {
    setIsFirstRender(false);
  }, [])

  const onDisplayPath =
    matchPath(location.pathname, {...baseMatch}) !== null ?
    true :
    false;

  const cancelAnimation = isFirstRender || !onDisplayPath;

  const computeChildren = useMemo(() => {
    let clonedChildren = [];
    let element;
    React.Children.forEach(children, child => {
      if (React.isValidElement(child)) {
        element = child;
        clonedChildren.push(React.cloneElement(element, {cancelAnimation}));
      }
    });
    return clonedChildren;
  }, [children])

  return useMemo(() => (
    <React.Fragment>
      {computeChildren}
    </React.Fragment>
  ), [computeChildren, cancelAnimation])
})


/**
 * @description
 * A div with some default css applied to it. Designed to be child of [`<route />`](/docs/route),
 * or parent if passed the `display` prop.
 *
 * @afterProps
 * \*Ref and other props are passed to div container.
 *
 * @example
 * import { Screen } from 'react-tiger-transition';
 *
 * <Screen>
 *  <MyPage />
 * </Screen>
 *
 */
const Screen = React.forwardRef(({
  className,
  disableStyle,
  container,
  display,
  children,
  ...other
}, ref) => {

  const _className = computeClassName(
    disableStyle,
    className,
    `react-tiger-transition--${container || display ? 'container' : 'screen'}`
  )

  const props = {
    className: _className,
    ref,
    ...other
  }

  return display ?
    <ScreenBase {...props}>
      <Display children={children} />
    </ScreenBase>
     :
    <ScreenBase {...props} children={children}/>
})

Screen.displayName = 'TigerScreen';

Screen.defaultProps = {
  disableStyle: false,
  container: false,
  display: false,
}

Screen.propTypes = {
  /**
   * Transform it into a container to wrap routes. `<Navigation />` already
   * does that. If you want to create a display container with transitions,
   * use the `display` props.
   */
  container: PropTypes.bool,

  /**
   * Create a display of routes. Works the same way, but does not animate
   * on arriving and leaving to the base url of the screen.
   */
  display: PropTypes.bool,

  /**
   * Disable default styles applied to div container. You can
   * still use `className` to set your own styles.
   */
  disableStyle: PropTypes.bool,

  /**
   * Div container `className`. A string or a function returning a string.
   * If not `disableStyle`, this `className` will be chained to
   * `react-tiger-transition--screen`.
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
}

export default Screen
