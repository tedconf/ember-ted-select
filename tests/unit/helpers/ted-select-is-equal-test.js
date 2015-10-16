import {
  tedSelectIsEqual
} from '../../../helpers/ted-select-is-equal';
import { module, test } from 'qunit';

module('TedSelectIsEqualHelper');

test('it returns true when the two sides are equal', function(assert) {
  var result = tedSelectIsEqual('123', '123');
  assert.ok(result);
});

test('it returns false when the two sides are not equal', function(assert) {
  var result = tedSelectIsEqual('123', '1234');
  assert.ok(!result);
});
