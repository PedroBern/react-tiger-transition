import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies
import { withRouter, matchPath } from 'react-router-dom';

import { computeClassName } from './utils';


const ScreenBase = React.forwardRef(({
  className, // eslint-disable-line react/prop-types
  children, // eslint-disable-line react/prop-types
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

ScreenBase.displayName = 'TigerScreenBase';

ScreenBase.defaultProps = {
  className: '',
};


const Display = withRouter(({
  match,
  location,
  children,
}) => {

  const [isFirstRender, setIsFirstRender] = useState(true);
  const [baseMatch, setBaseMatch] = useState(match); // eslint-disable-line no-unused-vars
  const [mountedChild, setMountedChild] = useState(null);

  useEffect(() => {
    try {
      React.Children.forEach(children, child => {
        if (React.isValidElement(child)) {
          if (children.length > 0) {
            if (!child.key
              || children.filter(c => !c).filter(c => c.key === child.key).length > 0
            ) {
              throw new Error('Each child of <Screen display /> should have a unique key.');
            }
          }
          else if (!child.key) {
            throw new Error('Each child of <Screen display /> should have a unique key.');
          }
        }
      });
    }
    catch (e) {
      try {
        console.error(e);
      } // Non-standard
      catch {
        console.log(e);
      }
    }
    setIsFirstRender(false);
  }, []);

  const onDisplayPath = matchPath(location.pathname, { ...baseMatch }) !== null;
  const cancelAnimation = isFirstRender || !onDisplayPath;

  const computeChildren = useMemo(() => {
    const clonedChildren = [];
    let element;
    React.Children.forEach(children, child => {
      if (React.isValidElement(child)) {
        const overridesPath = !isFirstRender && cancelAnimation
          && child.key === mountedChild
          ? { path: location.pathname }
          : {};
        element = child;
        clonedChildren.push(React.cloneElement(
          element, {
            cancelAnimation,
            ...overridesPath
          }
        ));
      }
    });
    return clonedChildren;
  }, [children, cancelAnimation]);

  useEffect(() => {
    if (!isFirstRender && onDisplayPath) {
      React.Children.forEach(computeChildren, child => {
        if (React.isValidElement(child)
        && child.props.path === location.pathname) {
          setMountedChild(child.key);
        }
      });
    }
  }, [location.pathname, isFirstRender]);

  return useMemo(() => (
    <React.Fragment>
      {computeChildren}
    </React.Fragment>
  ), [computeChildren, cancelAnimation]);
});


/**
 * @description
 * A div with some default css applied to it. Designed to be child of [`<route />`](/docs/route),
 * or parent if passed the `display` prop.
 *
 * @afterProps
 * \*Ref and other props are passed to div container.
 *
 */
const Screen = React.forwardRef(({
  className,
  disableStyle,
  container,
  display,
  children, // eslint-disable-line react/prop-types
  ...other
}, ref) => {

  const _className = computeClassName(
    disableStyle,
    className,
    `react-tiger-transition--${container || display ? 'container' : 'screen'}`
  );

  const props = {
    className: _className,
    ref,
    ...other
  };

  return display
    ? <ScreenBase {...props}>
      <Display>
        {children}
      </Display>
    </ScreenBase>
    : <ScreenBase {...props}>
      {children}
    </ScreenBase>;
});

Screen.displayName = 'TigerScreen';

Screen.defaultProps = {
  disableStyle: false,
  container: false,
  display: false,
};

Screen.propTypes = {
  /**
   * Transform it into a container to wrap routes. `<Navigation />` already
   * does that. If you want to create a display container with transitions,
   * use the `display` props.
   */
  container: PropTypes.bool,

  /**
   * Create a display of routes. Works the same way, but does not animate
   * on arriving and leaving to the base url of the screen (url where the
   * screen was mounted).
   *
   * ```javascript
   * <Screen
   *    //write routes inside this screen
   *    display
   *  >
   *    { ...children }
   * </Screen>
   * ```
   */
  display: PropTypes.bool,

  /**
   * Disable default styles applied to div container. You can
   * still use `className` to set your own styles.
   *
   * ```javascript
   * <Screen
   *    // will have only "my-class-name" styles
   *    disableStyle
   *    className="my-class-name"
   *  >
   *    {screenChildren}
   * </Screen>
   * ```
   */
  disableStyle: PropTypes.bool,

  /**
   * Div container `className`. A string or a function returning a string.
   * If not `disableStyle`, this `className` will be chained to
   * `react-tiger-transition--screen`.
   *
   * ```javascript
   * <Screen
   *    // className will be "react-tiger-transition--screen my-class-name"
   *    className="my-class-name"
   *  >
   *    {routeChildren}
   * </Screen>
   * ```
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

export default Screen;
