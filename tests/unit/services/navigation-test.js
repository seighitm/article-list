import { module, test } from 'qunit';
import { setupTest } from 'articles/tests/helpers';

module('Unit | Service | navigation', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let service = this.owner.lookup('service:navigation');
    assert.ok(service);
  });
});
