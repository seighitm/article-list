import { module, test } from 'qunit';
import { setupRenderingTest } from 'articles/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | compare', function(hooks) {
  setupRenderingTest(hooks);

  test('it returns true for equal values', async function(assert) {
    this.set('inputValue1', 'value1');
    this.set('inputValue2', 'value1');
    
    await render(hbs`{{compare this.inputValue1 "==" this.inputValue2}}`);

    assert.dom().hasText('true');
  });

  test('it returns false for unequal values', async function(assert) {
    this.set('inputValue1', 'value1');
    this.set('inputValue2', 'value2');
    
    await render(hbs`{{compare this.inputValue1 "==" this.inputValue2}}`);

    assert.dom().hasText('false');
  });

  test('it returns true for greater-than operator', async function(assert) {
    this.set('inputValue1', 5);
    this.set('inputValue2', 3);
    
    await render(hbs`{{compare this.inputValue1 ">" this.inputValue2}}`);

    assert.dom().hasText('true');
  });

  test('it returns false for less-than operator', async function(assert) {
    this.set('inputValue1', 3);
    this.set('inputValue2', 5);
    
    await render(hbs`{{compare this.inputValue1 "<" this.inputValue2}}`);

    assert.dom().hasText('true');
  });

  test('it handles "include" operator', async function(assert) {
    this.set('inputValue1', 'Hello, world!');
    this.set('inputValue2', 'world');
    
    await render(hbs`{{compare this.inputValue1 "include" this.inputValue2}}`);

    assert.dom().hasText('true');
  });
});
