import  { buildTiger } from '../../src/tigers/buildTiger';
import  { ReplaceBackground } from '../../src/utils/ReplaceBackground';
import { glideInRules, glideOutRules } from '../../src/tigers/transitions';

const args = {
  direction: 'left',
  backgroundColor: null,
};

const enter = {
  duration: 700,
  easing: 'ease',
  opacity: 1,
  zIndex: 2,

  delay: 0,
}

const exit = {
  duration: 700,
  easing: 'ease',
  opacity: 0.3,
  zIndex: 1,

}

const tiger= buildTiger(
  args,
  enter,
  glideInRules,
  exit,
  glideOutRules
)

describe('buildTiger computes the timeout correctly with', () => {

  test('dafault args', () => {
    expect(tiger().timeout)
    .toBe(700);
  });

  test('timeout function and duration', () => {
    expect(tiger({timeout: d => d * 3, duration: 500}).timeout)
    .toBe(1500);
  });

  test('timeout defined not as function', () => {
    expect(tiger({timeout: 10, duration: 500}).timeout)
    .toBe(500);
  });

  test('duration', () => {
    expect(tiger({duration: 1000}).timeout)
    .toBe(1000);
  });

  test('duration defined on enter', () => {
    expect(tiger({enter: {duration: 1000}}).timeout)
    .toBe(1000);
  });

  test('duration defined on exit', () => {
    expect(tiger({exit: {duration: 1000}}).timeout)
    .toBe(1000);
  });

  test('duration and delay 1', () => {
    expect(tiger({enter: {duration: 1000, delay: 200}}).timeout)
    .toBe(1200);
  });

  test('duration and delay 2', () => {
    expect(tiger({enter: {duration: 500, delay: 100}}).timeout)
    .toBe(700);
  });

  test('duration and delay defined globaly', () => {
    expect(tiger({duration: 1000, delay: 200}).timeout)
    .toBe(1200);
  });

  test('duration globally delay on enter', () => {
    expect(tiger({duration: 1000, enter: { delay: 200}}).timeout)
    .toBe(1200);
  });

  test('duration globally delay on enter >= exit duration', () => {
    expect(tiger({enter: {duration: 1000, delay: 200}, exit: {duration: 1100}}).timeout)
    .toBe(1200);
  });

});


const fakeFunc = tag => args => {
  let obj = {};
  obj[tag] = {...args};
  return obj
};

const fakeTiger= buildTiger(
  args,
  enter,
  fakeFunc('enter'),
  exit,
  fakeFunc('exit'),
)

describe('buildTiger return a function that handle args correctly with', () => {

  test('default args', () => {
    expect(fakeTiger())
    .toStrictEqual({
      timeout: 700,
      enter: { ...enter, ...args },
      exit: { ...exit, ...args }
    });
  });

  test('custom global args', () => {
    expect(fakeTiger({duration: 2000}))
    .toStrictEqual({
      timeout: 2000,
      enter: { ...enter, ...args, duration: 2000 },
      exit: { ...exit, ...args, duration: 2000 }
    });
  });

  test('custom enter args', () => {
    expect(fakeTiger({enter: { duration: 2000 }}))
    .toStrictEqual({
      timeout: 2000,
      enter: { ...enter, ...args, duration: 2000 },
      exit: { ...exit, ...args }
    });
  });

  test('custom exit args', () => {
    expect(fakeTiger({exit: { duration: 2000 }}))
    .toStrictEqual({
      timeout: 2000,
      enter: { ...enter, ...args },
      exit: { ...exit, ...args, duration: 2000  }
    });
  });

  test('custom enter and exit args', () => {
    expect(fakeTiger({enter: { duration: 2000 }, exit: { duration: 1000 }}))
    .toStrictEqual({
      timeout: 2000,
      enter: { ...enter, ...args, duration: 2000 },
      exit: { ...exit, ...args, duration: 1000  }
    });
  });

  test('custom global, enter and exit args', () => {
    expect(fakeTiger({direction: 'right', enter: { duration: 2000 }, exit: { duration: 1000 }}))
    .toStrictEqual({
      timeout: 2000,
      enter: { ...enter, ...args, direction: 'right', duration: 2000 },
      exit: { ...exit, ...args, direction: 'right',  duration: 1000  }
    });
  });

  test('global args have higher priority', () => {
    expect(fakeTiger({duration: 300, enter: { duration: 2000 }, exit: { duration: 1000 }}))
    .toStrictEqual({
      timeout: 300,
      enter: { ...enter, ...args, duration: 300 },
      exit: { ...exit, ...args,  duration: 300  }
    });
  });

  test('creates ReplaceBackground if backgroundColor on args', () => {
    const res = fakeTiger({backgroundColor: 'white'});
    expect(res.enter.replaceBackground instanceof ReplaceBackground)
    .toBe(true);
    expect(res.exit.replaceBackground instanceof ReplaceBackground)
    .toBe(true);
  });

});
