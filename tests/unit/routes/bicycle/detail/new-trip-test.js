import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bicycle/detail/new-trip', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bicycle/detail/new-trip');
    assert.ok(route);
  });
});
