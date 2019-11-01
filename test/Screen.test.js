import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter, Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { createMemoryHistory } from "history";


import  { Screen, Route, Link, Navigation } from '../src';

describe('Screen', () => {

  describe('Snapshots', () => {

    test('default props', () => {
      const component = renderer.create(<Screen  />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    test('container', () => {
      const component = renderer.create(<Screen container />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    test('display', () => {
      const component = renderer.create(
        <BrowserRouter>
          <Screen display />
        </BrowserRouter>
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    test('disableStyle', () => {
      const component = renderer.create(<Screen disableStyle />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    test('className', () => {
      const component = renderer.create(<Screen className='custom-classname' />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    test('pass children to SimpleScreen', () => {
      const component = renderer.create(
        <Screen>
          <div className='child' />
        </Screen>);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    test('pass props to container in SimpleScreen', () => {
      const component = renderer.create(
        <Screen someProp='something'>
          <div className='child' />
        </Screen>
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    test('display pass cancelAnimation true to children on first render', () => {
      const component = renderer.create(
        <BrowserRouter>
          <Screen display>
            <div key='child' className='child' />
          </Screen>
        </BrowserRouter>
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    test('display renders only valid elements', () => {
      const component = renderer.create(
        <BrowserRouter>
          <Screen display>
            {'not a element'}
          </Screen>
        </BrowserRouter>
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

  });

  describe('display', () => {

    const mockCallback = jest.fn(cancelAnimation => cancelAnimation);

    const FakeComponent = ({
      cancelAnimation
    }) => {
      mockCallback(cancelAnimation);
      return (
        <div id='child-prop'>{cancelAnimation}</div>
      )
    };

    FakeComponent.defaultProps = {
      cancelAnimation: undefined,
    };

    const history = createMemoryHistory();

    const wrapper = mount(
      <Router history={history}>
        <Navigation>
          <Route path={['/', '/valid']}>
            <Screen display>
              <FakeComponent key='child' className='child'/>
            </Screen>
          </Route>
          <Link to='/valid'>
            valid
          </Link>
        </Navigation>
      </Router>
    );

    const validLink = wrapper.find('Link');

    it('compute cancelAnimation from true to false after first render', () => {
      expect(wrapper.find('FakeComponent').props().cancelAnimation)
      .toBe(false);
      expect(mockCallback.mock.calls.length).toBe(2);
      expect(mockCallback.mock.results[0].value).toBe(true);
      expect(mockCallback.mock.results[1].value).toBe(false);
    });

    it('keep cancelAnimation as false on base match routing', () => {
      validLink.simulate('click', { button: 0 });
      wrapper.update();
      expect(wrapper.find('FakeComponent').props().cancelAnimation)
      .toBe(false);
      expect(mockCallback.mock.calls.length).toBe(2);
    });

    it('renders only children with key', () => {
      expect(() => shallow(
        <BrowserRouter>
          <Screen display>
            <div className='child' />
          </Screen>
        </BrowserRouter>
      ).toThrowError());
    });

    it('renders only children with unique keys', () => {
      expect(() => shallow(
        <BrowserRouter>
          <Screen display>
            <div key='a' className='child' />
            <div key='a' className='child' />
          </Screen>
        </BrowserRouter>
      ).toThrowError());
    });

    // #newTest: test turn cancelAnimation to true on leaving base match path

  });


});
