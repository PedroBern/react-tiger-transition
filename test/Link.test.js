import React, { useContext } from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { createMemoryHistory } from "history";
import { act } from 'react-dom/test-utils';


import  { Screen, Route, Link, Navigation } from '../src';
import { NavigationContext } from '../src/context';


jest.useFakeTimers();

describe('Link', () => {

  let history, callback;

  beforeEach(() => {
    history = createMemoryHistory();
    callback = jest.fn(args => null);
  })

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('works only when not transitioning', () => {

    const wrapper = mount(
      <Router history={history}>
        <Navigation defaultTransition='fade'>
          <Route path='/'>
            <Link to='/second' onClick={callback}>
              Second
            </Link>
          </Route>
          <Route path='/second'>
            <div />
          </Route>
          <Link to='/' onClick={callback}>
            Home
          </Link>
        </Navigation>
      </Router>
    );

    const homeLink = wrapper.find('Link').last()
    const secondLink = wrapper.find('Link').first();

    // change path
    secondLink.simulate('click', { button: 0 });

    // try to change path during transition
    // instead of '/', home link go to 'second',
    // beacause it is on transition
    homeLink.simulate('click', { button: 0 });

    wrapper.update();

    expect(callback).toHaveBeenCalledTimes(1);

    // first entry: '/'
    // second: '/second' secondLink click
    // third: '/second' homeLink click
    expect(history.length).toBe(3);
    expect(history.location.pathname).toBe('/second');

    // transition end
    act(() => {
      jest.runAllTimers();
    });

    // after transition end, link starts to work again
    homeLink.simulate('click', { button: 0 });
    wrapper.update();
    expect(callback).toHaveBeenCalledTimes(2);
    expect(history.length).toBe(4);
    expect(history.location.pathname).toBe('/');

  });

  it('update navigation context "transition", while routing', () => {

    const ConnectedToContextComponent = () => {
      const { transition } = useContext(NavigationContext);
      callback(transition.classNames);
      return (
        <div />
      )
    };

    const wrapper = mount(
      <Router history={history}>
        <Navigation defaultTransition='fade'>
          <Route path='/'>
            <Link to='/second' transition='foo'>
              Second
            </Link>
          </Route>
          <Route path='/second'>
            <Link to='/' transition='baz'>
              Home
            </Link>
          </Route>
          <ConnectedToContextComponent />
        </Navigation>
      </Router>
    );

    const secondLink = wrapper.find('Link').first();
    secondLink.simulate('click', { button: 0 });
    wrapper.update();
    expect(callback).toHaveBeenLastCalledWith('foo');

    act(() => {
      jest.runAllTimers();
    });

    const homeLink = wrapper.find('Link').last()
    homeLink.simulate('click', { button: 0 });
    wrapper.update();
    expect(callback).toHaveBeenLastCalledWith('baz');

  })

});
