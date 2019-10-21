import  { InjectStyle } from '../../src/utils';

test('Add and remove style tag to head', () => {
  const styleString = '.some-class { background-color: white; }'
  const style = new InjectStyle(styleString);
  style.add();
  expect(document.head.children.length).toBe(1);
  style.remove();
  expect(document.head.children.length).toBe(0);
});
