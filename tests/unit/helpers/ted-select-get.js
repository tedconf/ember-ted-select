import {
  tedSelectGet
} from '../../../helpers/ted-select-get';
import { module, test } from 'qunit';

module('TedSelectGetHelper');

test('it works', function(assert) {
  var result = tedSelectGet({title: 'test'}, 'title');
  assert.equal(result, 'test');
});
