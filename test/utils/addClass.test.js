import  { addClass } from '../../src/utils';

const someDiv = document.createElement("DIV");

test('Add class to div', () => {
  addClass(someDiv, 'some-class');
  expect(someDiv.classList[0])
  .toBe('some-class');
});
