import  { prefixer } from '../../src/utils';

describe('Prefixer', () => {

  test('Prefix styles', () => {

    const string = `
    transform: translateX(100px);
    `

    const expected = [
      '-webkit-transform: translateX(100px);',
      '-ms-transform: translateX(100px);',
      'transform: translateX(100px);',
    ];

    const prefixed = prefixer(string);

    expected.map(e => (
      expect(prefixed.indexOf(e) > -1).toBe(true)
    ))
  });

  test('Prefix keyframes', () => {

    const string = `
    @keyframes {}
    `

    const expected = [
      '@keyframes {}',
      '@-webkit-keyframes {}',
    ] ;

    const prefixed = prefixer(string);

    expected.map(e => (
      expect(prefixed.indexOf(e) > -1).toBe(true)
    ))
  });

  test('Dont prefix', () => {
    const string = "not-a-property: not-a-value;"
    const prefixed = prefixer(string);
    expect(prefixed).toBe(string)
  });

})
