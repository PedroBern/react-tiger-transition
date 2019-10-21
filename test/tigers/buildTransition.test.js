import  {
  buildTransitionIn,
  buildTransitionOut
} from '../../src/tigers/transitions';

import { InjectStyle, ReplaceBackground } from '../../src/utils';

const mock = {
  rules: {
    style: new InjectStyle('.some-style {};'),
    animation: new InjectStyle('.some-animation {};'),
  },
  replaceBackground: new ReplaceBackground('black'),
  className: `some-classname`,
}

describe('buildTransitionIn', () => {

  test('return always the same function signature', () => {
    expect(buildTransitionIn({...mock}).toString())
    .toStrictEqual(buildTransitionIn().toString());
  });

  const node = document.createElement("DIV");
  const transition = buildTransitionIn({...mock});

  test('onEnter inject style', () => {
    transition.onEnter(node);
    expect(document.head.children.length).toBe(1);
  });

  test('onEnter add classname', () => {
    transition.onEnter(node);
    expect(node.classList[0]).toBe('some-classname');
  });

  test('onEnter replace background', () => {
    transition.onEnter(node);
    expect(document.body.style.backgroundColor).toBe('black');
  });

  test('onEntering inject animation', () => {
    transition.onEnter(node);
    transition.onEntering(node);
    expect(document.head.children.length).toBe(2);
  });

  test('onEntered replace background if is appearing', () => {
    transition.onEnter(node, true);
    transition.onEntering(node, true);
    transition.onEntered(node, true);
    expect(document.body.style.backgroundColor).toBe('');
  });

  test('onEntered remove injected styles', () => {
    transition.onEnter(node);
    transition.onEntering(node);
    transition.onEntered(node);
    expect(document.head.children.length).toBe(0);
  });

});

describe('buildTransitionOut', () => {

  test('return always the same function signature', () => {
    expect(buildTransitionOut({...mock}).toString())
    .toStrictEqual(buildTransitionOut().toString());
  });

  const node = document.createElement("DIV");
  const transition = buildTransitionOut({...mock});

  test('onExit inject style', () => {
    transition.onExit(node);
    expect(document.head.children.length).toBe(1);
  });

  test('onExit add classname', () => {
    transition.onExit(node);
    expect(node.classList[0]).toBe('some-classname');
  });

  test('onExit replace background', () => {
    transition.onExit(node);
    expect(document.body.style.backgroundColor).toBe('black');
  });

  test('onExiting inject animation', () => {
    transition.onExit(node);
    transition.onExiting(node);
    expect(document.head.children.length).toBe(2);
  });

  test('onExited replace background if is appearing', () => {
    transition.onExit(node);
    transition.onExiting(node);
    transition.onExited(node);
    expect(document.body.style.backgroundColor).toBe('');
  });

  test('onExited remove injected styles', () => {
    transition.onExit(node);
    transition.onExiting(node);
    transition.onExited(node);
    expect(document.head.children.length).toBe(0);
  });

});
