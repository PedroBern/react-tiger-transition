import  { ReplaceBackground } from '../../src/utils';

test('Replace body background color', () => {
  const newBackground = new ReplaceBackground('black')
  expect(document.body.style.backgroundColor).toBe('');
  newBackground.fake();
  expect(document.body.style.backgroundColor).toBe('black');
  newBackground.original();
  expect(document.body.style.backgroundColor).toBe('');
});

test('Replace body background color from colored body', () => {
  document.body.style.backgroundColor = 'white';
  const newBackground = new ReplaceBackground('black')
  newBackground.fake();
  expect(document.body.style.backgroundColor).toBe('black');
  newBackground.original();
  expect(document.body.style.backgroundColor).toBe('white');
});
