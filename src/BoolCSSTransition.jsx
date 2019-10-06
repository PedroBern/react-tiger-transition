/**

  Copy of the Original CSSTransition

  https://github.com/reactjs/react-transition-group/blob/master/src/CSSTransition.js

  The difference is it accepts 'css' bool prop
  true: return CSSTransition
  false: return Transition

  Why?

  In order to allow smooth back and forth between 'string' and 'object/function'
  types for 'animation' prop of Link component, we need a single Transition
  component to handle both cases. If we use something like:

  string ? CSSTransition : Transition

  Would not work because CSSTransition is child of Transition, inserting
  one more node and breaking the Link animation cycle when changing from
  string to object/function or vice versa.

 */

import PropTypes from 'prop-types';
import React from 'react';
import { Transition } from 'react-transition-group'

import {
  addClass as addOneClass,
  removeClass as removeOneClass
} from './utils';

const addClass = (node, classes) => node && classes && classes.split(' ').forEach(c => addOneClass(node, c));
const removeClass = (node, classes) => node && classes && classes.split(' ').forEach(c => removeOneClass(node, c));


class BoolCSSTransition extends React.Component {

  appliedClasses = {
    appear: {},
    enter: {},
    exit: {},
  }

  onEnter = (node, appearing) => {
    this.removeClasses(node, 'exit');
    this.addClass(node, appearing ? 'appear' : 'enter', 'base');

    if (this.props.onEnter) {
      this.props.onEnter(node, appearing)
    }
  }

  onEntering = (node, appearing) => {
    const type = appearing ? 'appear' : 'enter';
    this.addClass(node, type, 'active')

    if (this.props.onEntering) {
      this.props.onEntering(node, appearing)
    }
  }

  onEntered = (node, appearing) => {
    const type = appearing ? 'appear' : 'enter'
    this.removeClasses(node, type);
    this.addClass(node, type, 'done');

    if (this.props.onEntered) {
      this.props.onEntered(node, appearing)
    }
  }

  onExit = (node) => {
    this.removeClasses(node, 'appear');
    this.removeClasses(node, 'enter');
    this.addClass(node, 'exit', 'base')

    if (this.props.onExit) {
      this.props.onExit(node)
    }
  }

  onExiting = (node) => {
    this.addClass(node, 'exit', 'active')

    if (this.props.onExiting) {
      this.props.onExiting(node)
    }
  }

  onExited = (node) => {
    this.removeClasses(node, 'exit');
    this.addClass(node, 'exit', 'done');

    if (this.props.onExited) {
      this.props.onExited(node)
    }
  }

  getClassNames = (type) => {
    const { classNames } = this.props;
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

  addClass(node, type, phase) {
    let className = this.getClassNames(type)[`${phase}ClassName`];

    if (type === 'appear' && phase === 'done') {
      className += ` ${this.getClassNames('enter').doneClassName}`;
    }

    if (phase === 'active') {
      node && node.scrollTop;
    }

    this.appliedClasses[type][phase] = className
    addClass(node, className)
  }

  removeClasses(node, type) {
    const {
      base: baseClassName,
      active: activeClassName,
      done: doneClassName
    } = this.appliedClasses[type]

    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }
    if (activeClassName) {
      removeClass(node, activeClassName);
    }
    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  }

  render() {
    const { classNames: _, css, ...other } = this.props;

    return (
      <Transition
        {...other}
        onEnter={css ? this.onEnter : other.onEnter }
        onEntered={css ? this.onEntered : other.onEntered }
        onEntering={css ? this.onEntering : other.onEntering }
        onExit={css ? this.onExit : other.onExit }
        onExiting={css ? this.onExiting : other.onExiting }
        onExited={css ? this.onExited : other.onExited }
      />
    );
  }
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
