import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | loader', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the loader svg', async function(assert) {
    await render(hbs`<Loader />`);

    assert.dom('svg').exists('SVG is rendered');
    assert.dom('svg').hasClass('lucide-loader-circle', 'Has the correct class');
    assert.dom('svg').hasClass('animate-spin', 'Has the correct animation class');
    assert.dom('path').exists('SVG path is rendered');
    assert.dom('path').hasAttribute('d', 'M21 12a9 9 0 1 1-6.219-8.56', 'Has the correct path data');
  });
});
