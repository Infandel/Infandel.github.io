import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bicycle/create', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bicycle/create');
    assert.ok(route);
  });
});
