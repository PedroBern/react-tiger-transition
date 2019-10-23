import  { ReplaceBackground } from '../../src/utils';


describe('ReplaceBackground', () => {

  test('replace body background color', () => {
    const newBackground = new ReplaceBackground('black')
    expect(document.body.style.backgroundColor).toBe('');
    newBackground.fake();
    expect(document.body.style.backgroundColor).toBe('black');
    newBackground.original();
    expect(document.body.style.backgroundColor).toBe('');
  });

  test('replace body background color from colored body', () => {
    document.body.style.backgroundColor = 'white';
    const newBackground = new ReplaceBackground('black')
    newBackground.fake();
    expect(document.body.style.backgroundColor).toBe('black');
    newBackground.original();
    expect(document.body.style.backgroundColor).toBe('white');
  });

  test('dont replace if the background color is the same', () => {
    document.body.style.backgroundColor = 'white';
    const newBackground = new ReplaceBackground()
    newBackground.fake();
    expect(document.body.style.backgroundColor).toBe('rgb(51, 51, 51)');
    document.body.style.backgroundColor = 'white';
    newBackground.original();
    expect(document.body.style.backgroundColor).toBe('white');
  });

});
