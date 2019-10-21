import  { removeClass, addClass } from '../../src/utils';

const someDiv = document.createElement("DIV");
someDiv.classList.add('some-class');

test('Remove class from div', () => {
  removeClass(someDiv, 'some-class');
  expect(someDiv.classList[0])
  .not.toBe('some-class');
});
