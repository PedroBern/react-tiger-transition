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

  test('onEnter not replace background', () => {
    const transition = buildTransitionIn({...mock, replaceBackground: null});
    transition.onEnter(node);
    expect(document.body.style.backgroundColor).toBe('');
  });

  test('onEntered not replace background', () => {
    const transition = buildTransitionIn({...mock, replaceBackground: null});
    transition.onEntered(node);
    expect(document.body.style.backgroundColor).toBe('');
  });

  const transition = buildTransitionIn({...mock});

  test('onEnter replace background', () => {
    transition.onEnter(node);
    expect(document.body.style.backgroundColor).toBe('black');
  });

  test('onEntered replace background if is appearing', () => {
    transition.onEnter(node, true);
    transition.onEntering(node, true);
    transition.onEntered(node, true);
    expect(document.body.style.backgroundColor).toBe('');
  });

});

describe('buildTransitionOut', () => {

  test('return always the same function signature', () => {
    expect(buildTransitionOut({...mock}).toString())
    .toStrictEqual(buildTransitionOut().toString());
  });

  const node = document.createElement("DIV");

  test('onExit not replace background', () => {
    const transition = buildTransitionOut({...mock, replaceBackground: null});
    transition.onExit(node);
    expect(document.body.style.backgroundColor).toBe('');
  });

  test('onExited not replace background', () => {
    const transition = buildTransitionOut({...mock, replaceBackground: null});
    transition.onExited(node);
    expect(document.body.style.backgroundColor).toBe('');
  });

  const transition = buildTransitionOut({...mock});

  test('onExit replace background', () => {
    transition.onExit(node);
    expect(document.body.style.backgroundColor).toBe('black');
  });

  test('onExited replace background if is appearing', () => {
    transition.onExit(node);
    transition.onExiting(node);
    transition.onExited(node);
    expect(document.body.style.backgroundColor).toBe('');
  });

});
