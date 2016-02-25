import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('ted-select', 'Integration | Component | ted select',{
  integration: true
});

var options= Ember.A([{
  id: 1,
  code: 'es',
  regionCode: 1,
  title: 'Spanish',
  nativeTitle: 'Espanol',
  isNotSpokenInCanada: true,
}, {
  id: 2,
  code: 'fr',
  regionCode: 1,
  title: 'French',
  nativeTitle: 'Francais',
  isNotSpokenInCanada: false,
}, {
  id: 3,
  code: 'en',
  regionCode: 2,
  title: 'English',
  nativeTitle: 'English',
  isNotSpokenInCanada: false,
}, {
  id: 4,
  code: 'de',
  regionCode: 1,
  title: 'German',
  nativeTitle: 'Deutsch',
  isNotSpokenInCanada: false,
}]);

test('it renders a select element', function(assert) {

  assert.expect(6);

  this.set('content', options);

  this.render(hbs`{{ted-select content=content}}`);

  var $component = this.$('.Ted-select');
  var $options = $component.find('option');

  assert.equal($component.find('select').length, 1);
  assert.equal($options.not('.Ted-select__prompt').length, options.length);

  //renders with a prompt by default
  assert.equal($component.find('.Ted-select__prompt').length, 1);

  //item values default to 'id' if not otherwise specified
  assert.equal($options.not('.Ted-select__prompt').eq(0).val(), 1);

  //item labels default to 'title' if not otherwise specified
  assert.equal($options.not('.Ted-select__prompt').eq(0).text().trim(), 'Spanish');

  //nothing selected to start
  assert.equal($options.find(':selected').length, 0);
});

test('can change the prompt to a new string', function(assert) {
  assert.expect(1);
  this.set('prompt', 'select language');

  this.render(hbs`{{ted-select prompt=prompt}}`);

  assert.equal(this.$('.Ted-select__prompt').text().trim(), 'select language');
});

test('can hide the prompt by setting it to null', function(assert) {
  assert.expect(1);
  this.set('prompt', null);

  this.render(hbs`{{ted-select prompt=prompt}}`);

  assert.equal(this.$('.Ted-select__prompt').length, 0);
});

test('can specify an alternate path for option value and label', function(assert) {
  assert.expect(2);
  this.set('content', options);
  this.set('optionValueKey', 'code');
  this.set('optionLabelKey', 'nativeTitle');

  this.render(hbs`{{ted-select content=content optionValueKey=optionValueKey optionLabelKey=optionLabelKey}}`);

  var $options = this.$('option:not(.Ted-select__prompt)');

  assert.equal($options.eq(0).val(), 'es');
  assert.equal($options.eq(0).text().trim(), 'Espanol');
});


test('can specify a path for a disabled flag', function(assert) {
  assert.expect(1);
  this.set('content', options);
  this.set('optionDisabledKey', 'isNotSpokenInCanada');

  this.render(hbs`{{ted-select content=content optionDisabledKey=optionDisabledKey}}`);

  var $options = this.$('option:not(.Ted-select__prompt)');

  assert.equal($options.filter(':disabled').length, 1);
});

test('can disable the input', function(assert) {
  assert.expect(1);
  this.set('content', options);
  this.set('isDisabled', true);

  this.render(hbs`{{ted-select content=content disabled=isDisabled}}`);

  assert.ok(this.$('select').prop('disabled'));
});

test('can pass in an initial selection', function(assert) {
  assert.expect(1);
  this.set('content', options);
  this.set('selected', options.findBy('code', 'fr'));

  this.render(hbs`{{ted-select content=content selected=selected}}`);

  var $selected = this.$('option:selected');
  assert.equal($selected.text().trim(), 'French');
});

test('can sort the options by a provided key', function(assert) {
  assert.expect(4);
  this.set('content', options);
  this.set('sortBy', 'title');

  this.render(hbs`{{ted-select content=content sortBy=sortBy}}`);

  var $options = this.$('option:not(.Ted-select__prompt)');

  assert.equal($options.eq(0).text().trim(), 'English');
  assert.equal($options.eq(1).text().trim(), 'French');
  assert.equal($options.eq(2).text().trim(), 'German');
  assert.equal($options.eq(3).text().trim(), 'Spanish');
});


test('can reverse sort the options by a provided key', function(assert) {
  assert.expect(4);
  this.set('content', options);
  this.set('sortBy', 'title:desc');

  this.render(hbs`{{ted-select content=content sortBy=sortBy}}`);

  var $options = this.$('option:not(.Ted-select__prompt)');

  assert.equal($options.eq(0).text().trim(), 'Spanish');
  assert.equal($options.eq(1).text().trim(), 'German');
  assert.equal($options.eq(2).text().trim(), 'French');
  assert.equal($options.eq(3).text().trim(), 'English');
});

test('can sort the options by a comma separated list of keys', function(assert) {
  assert.expect(4);
  this.set('content', options);
  this.set('sortBy', 'regionCode, title');

  this.render(hbs`{{ted-select content=content sortBy=sortBy}}`);

  var $options = this.$('option:not(.Ted-select__prompt)');

  assert.equal($options.eq(0).text().trim(), 'French');
  assert.equal($options.eq(1).text().trim(), 'German');
  assert.equal($options.eq(2).text().trim(), 'Spanish');
  assert.equal($options.eq(3).text().trim(), 'English');
});

test('selection gets passed out with the on-change action', function(assert) {
  assert.expect(1);
  this.set('content', options);

  var itemToSelect = options.findBy('code', 'en');

  this.actions = { assertChanged: function(selection) {
    assert.deepEqual(selection, itemToSelect);
  }};

  this.render(hbs`{{ted-select content=content on-change=(action "assertChanged")}}`);

  this.$('select').val(3);
  this.$('select').trigger('change');

});

test('multiple selection gets passed out as an array;', function(assert) {
  assert.expect(1);
  this.set('content', options);

  this.actions = { assertChanged: function(selection) {
    assert.deepEqual(selection, itemsToSelect);
  }};

  var itemsToSelect = options.rejectBy('code', 'en');

  this.render(hbs`{{ted-select content=content multiple=true on-change=(action "assertChanged")}}`);

  this.$('select').val([1,2,4]);
  this.$('select').trigger('change');

});

test('can create a two way binding on the selection', function(assert) {
  assert.expect(1);

  this.set('content', options);
  this.set('selection', null);
  var itemToSelect = options.findBy('id', 2);

  this.render(hbs`{{ted-select content=content on-change=(action (mut selection))}}`);

  this.$('select').val(2);
  this.$('select').trigger('change');

  assert.equal(this.get('selection'), itemToSelect);

});

test('can add a custom class name to the select element', function(assert) {
  assert.expect(1);

  this.render(hbs`{{ted-select content=content selectClassNames="my-select"}}`);

  assert.equal(this.$('select.my-select').length, 1);
});
