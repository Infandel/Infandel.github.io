import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bicycle/detail', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bicycle/detail');
    assert.ok(route);
  });
});
