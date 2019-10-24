/**
 *  tests from the great lib dom-helpers
 *  https://github.com/react-bootstrap/dom-helpers/blob/master/test/class.js
 *
 *  As I borrow 2 functions from them (addClass and removeClass)
 *  I took the tests too!
 *
 */

 import  { addClass, removeClass } from '../../src/utils';
 import { hasClass } from '../../src/utils/addClass';

 function removeProperty(property, element) {
  Object.defineProperty(element, property, {
    value: undefined,
  })
}

describe('Class helpers', () => {

  beforeEach(() => {
    const root = document.createElement("DIV");
    const item1 = document.createElement("DIV");
    const item2 = document.createElement("DIV");
    item1.id = 'item-1';
    item2.id = 'item-2';
    item2.className = 'test-class';
    root.append(item1);
    root.append(item2);
    document.body.append(root);
  })

  afterEach(() => {
    document.body.removeChild(document.body.childNodes[0])
  })

  it('should add a class', () => {
    const el = document.getElementById('item-1')

    addClass(el, 'my-class')

    expect(el.className).toContain('my-class')
  })

  it('should add a class properly when using a fallback path', () => {
    const el = document.getElementById('item-1')
    removeProperty('classList', el)

    addClass(el, 'test-class')
    expect(hasClass(el, 'test-class')).toBe(true)

    addClass(el, 'test-class')
    removeClass(el, 'test-class')
    expect(hasClass(el, 'test-class')).toBe(false)

    addClass(el, 'undefined')
    addClass(el, 'test-class2')
    expect(hasClass(el, 'test-class2')).toBe(true)
  })

  it('should remove a class', () => {
    const el = document.getElementById('item-2')

    removeClass(el, 'test-class')

    expect(el.className).toBe('')
  })

  it('should check for a class', () => {
    expect(
      hasClass(document.getElementById('item-2'), 'test-class')
    ).toBe(true)
    expect(
      hasClass(document.getElementById('item-1'), 'test-class')
    ).toBe(false)
  })

})
