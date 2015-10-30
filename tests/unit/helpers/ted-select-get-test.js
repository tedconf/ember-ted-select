import { tedSelectGet } from '../../../helpers/ted-select-get';
import { module, test } from 'qunit';

module('Unit | Helper | ted select get');

// Replace this with your real tests.
test('it works', function(assert) {
  var result = tedSelectGet([{title: 'test'}, 'title']);
  assert.equal(result, 'test');
});
