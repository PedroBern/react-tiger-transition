import React, { useContext } from 'react';
import  { Navigation, Route, Link } from '../src';
import { evalTransition, reducer } from '../src/Navigation';
import { NavigationContext } from '../src/context';
import { mount } from 'enzyme';
import { Router, Redirect } from 'react-router-dom';
import { createMemoryHistory } from "history";
import { act } from 'react-dom/test-utils';


jest.useFakeTimers();

afterEach(() => {
    jest.clearAllTimers();
});

describe('Navigation', () => {

  describe('reducer', () => {

    const state = { onTransition: false };
    const action = {
      type: 'setTransition',
      value: {
        transition: 'some-transition',
        timeout: 600
      }
    };

    test('type "setTransition" schedule type "endTransition" correctly', () => {
      const dispatch = jest.fn();
      jest.clearAllTimers();
      reducer({...state}, {...action, dispatch});
      expect(dispatch).not.toBeCalled();
      jest.runAllTimers();
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 800);
      expect(dispatch).toHaveBeenLastCalledWith({type: 'endTransition'});
    });

    action.dispatch = args => reducer(args);

    test('type "endTransition" return { onTransition: false }', () => {
      const state = { onTransition: true };
      const action = {type: 'endTransition' };
      expect(reducer(state, action).onTransition)
      .toBe(false);
    });

    test('type "setTransition" return { onTransition: true }', () => {
      expect(reducer({...state}, {...action}).onTransition)
      .toBe(true);
    });

    test('type "setTransition" return new transition', () => {
      expect(reducer({...state}, {...action}).transition)
      .toStrictEqual({
        timeout: 600,
        classNames: 'some-transition',
      });
    });

    test('default return state', () => {
      expect(reducer({...state}, {}))
      .toStrictEqual({...state});
    });

  });

  describe('evalTransition', () => {

    test('works with function', () => {
      expect(evalTransition({
        transition: () => ({a: 1}),
        timeout: 100,
      })).toStrictEqual({
        timeout: 100,
        a: 1,
      });
    });

    test('works with object', () => {
      expect(evalTransition({
        transition: {a: 1},
        timeout: 100,
      })).toStrictEqual({
        timeout: 100,
        a: 1,
      });
    });

    test('works with string', () => {
      expect(evalTransition({
        transition: 'class',
        timeout: 100,
      })).toStrictEqual({
        timeout: 100,
        classNames: 'class',
      });
    });

  });

  describe('onTransition updates correctly', () => {

    const mockCallback = jest.fn(onTransition => onTransition);

    const FakeComponent = () => {
      const {
        onTransition
      } = useContext(NavigationContext);
      mockCallback(onTransition);
      return (
        <div id='child-prop'>{onTransition}</div>
      )
    };

    const history = createMemoryHistory();

    const wrapper = mount(
      <Router history={history}>
        <Navigation defaultTransition='fade'>
          <Route exact path='/'>
            <div />
          </Route>
          <Route exact path='/second'>
            <div />
          </Route>
          <Link to='/second'>
            second
          </Link>
          <FakeComponent />
        </Navigation>
      </Router>
    );

    const secondLink = wrapper.find('Link');

    it('false if no transition was started', () => {
      expect(mockCallback.mock.calls.length).toBe(1);
      expect(mockCallback.mock.results[0].value).toBe(false);
    });

    it('true during transition, false after', () => {
      secondLink.simulate('click', { button: 0 });
      wrapper.update();
      expect(mockCallback.mock.calls.length).toBe(2);
      expect(mockCallback.mock.results[1].value).toBe(true);
      act(() => {
        jest.runOnlyPendingTimers();
      });
      wrapper.update();
      expect(mockCallback.mock.calls.length).toBe(3);
      expect(mockCallback.mock.results[2].value).toBe(false);
    });

  });

  describe('on routing', (() => {

    const history = createMemoryHistory();

    history.push('/not-valid-route');

    const ComponentWithOutPathProp = () => <div />

    const wrapper = mount(
      <Router history={history}>
        <Navigation
          defaultTransition='fade'
          defaultRoute={<Redirect to='/default-route' />}
        >
          <Route exact path='/'>
            <div />
          </Route>
          <Route exact path='/default-route'>
            <div />
          </Route>
          <ComponentWithOutPathProp />
        </Navigation>
      </Router>
    );

    it('render default route if not route match', () => {
      expect(history.location.pathname).toBe('/default-route');
      expect(history.action).toBe('REPLACE');
    });


  }))

});
