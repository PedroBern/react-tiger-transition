/**
 *  Copy of the Original CSSTransition
 *
 *  https://github.com/reactjs/react-transition-group/blob/master/src/CSSTransition.js
 *
 *  The difference is it accepts 'css' bool prop
 *  true: return CSSTransition
 *  false: return Transition
 *
 *  Why?
 *
 *  In order to allow smooth back and forth between 'string' and 'object/function'
 *  types for 'transition' prop of Link component, we need a single Transition
 *  component to handle both cases. If we use something like:
 *
 *  string ? CSSTransition : Transition
 *
 *  Would not work because CSSTransition is child of Transition, inserting
 *  one more node and breaking the Link animation cycle when changing from
 *  string to object/function or vice versa.
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import { Transition } from 'react-transition-group'

import {
  addClass as addOneClass,
  removeClass as removeOneClass
} from './utils';

const addClasses = (node, classes) => node && classes && classes.split(' ').forEach(c => addOneClass(node, c));
const removeClasses = (node, classes) => node && classes && classes.split(' ').forEach(c => removeOneClass(node, c));

/**
 * @docIgnore
 *
 */
const BoolCSSTransition = (props) => {

  const appliedClasses = {
    appear: {},
    enter: {},
    exit: {},
  }

  const getClassNames = (type) => {
    const { classNames } = props;
    const isStringClassNames = typeof classNames === 'string';
    const prefix = isStringClassNames && classNames
      ? `${classNames}-`
      : '';

    let baseClassName = isStringClassNames
      ? `${prefix}${type}`
      : classNames[type]

    let activeClassName = isStringClassNames
      ? `${baseClassName}-active`
      : classNames[`${type}Active`];

    let doneClassName = isStringClassNames
      ? `${baseClassName}-done`
      : classNames[`${type}Done`];

    return {
      baseClassName,
      activeClassName,
      doneClassName
    };
  }

  const onEnter = (node, appearing) => {
    removeClassNames(node, 'exit');
    addClassNames(node, appearing ? 'appear' : 'enter', 'base');

    if (props.onEnter) {
      props.onEnter(node, appearing);
    }
  }

  const onEntering = (node, appearing) => {
    const type = appearing ? 'appear' : 'enter';
    addClassNames(node, type, 'active')

    if (props.onEntering) {
      props.onEntering(node, appearing);
    }
  }

  const onEntered = (node, appearing) => {
    const type = appearing ? 'appear' : 'enter'
    removeClassNames(node, type);
    addClassNames(node, type, 'done');

    if (props.onEntered) {
      props.onEntered(node, appearing);
    }
  }

  const onExit = (node) => {
    removeClassNames(node, 'appear');
    removeClassNames(node, 'enter');
    addClassNames(node, 'exit', 'base')

    if (props.onExit) {
      props.onExit(node);
    }
  }

  const onExiting = (node) => {
    addClassNames(node, 'exit', 'active')

    if (props.onExiting) {
      props.onExiting(node);
    }
  }

  const onExited = (node) => {
    removeClassNames(node, 'exit');
    addClassNames(node, 'exit', 'done');

    if (props.onExited) {
      props.onExited(node);
    }
  }

  function addClassNames(node, type, phase) {
    let className = getClassNames(type)[`${phase}ClassName`];

    if (type === 'appear' && phase === 'done') {
      className += ` ${getClassNames('enter').doneClassName}`;
    }

    if (phase === 'active') {
      node && node.scrollTop;
    }

    appliedClasses[type][phase] = className
    addClasses(node, className)
  }

  function removeClassNames(node, type) {
    const {
      base: baseClassName,
      active: activeClassName,
      done: doneClassName
    } = appliedClasses[type]

    appliedClasses[type] = {};

    if (baseClassName) {
      removeClasses(node, baseClassName);
    }
    if (activeClassName) {
      removeClasses(node, activeClassName);
    }
    if (doneClassName) {
      removeClasses(node, doneClassName);
    }
  }

  const { css, classNames, ...other } = props;

  return (
    <Transition
      {...other}
      onEnter={css ? onEnter : other.onEnter || {} }
      onEntered={css ? onEntered : other.onEntered || {} }
      onEntering={css ? onEntering : other.onEntering || {} }
      onExit={css ? onExit : other.onExit || {} }
      onExiting={css ? onExiting : other.onExiting || {} }
      onExited={css ? onExited : other.onExited || {} }
    />
  );
}

BoolCSSTransition.defaultProps = {
  css: false,
}

BoolCSSTransition.propTypes = {
  ...Transition.propTypes,
  onEnter: PropTypes.func,
  onEntering: PropTypes.func,
  onEntered: PropTypes.func,
  onExit: PropTypes.func,
  onExiting: PropTypes.func,
  onExited: PropTypes.func,
  css: PropTypes.bool,
};

export default BoolCSSTransition
