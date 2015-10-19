import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('ted-select', 'Integration | Component | ted select',{
  integration: true
});

var options= Ember.A([{
  id: 1,
  code: 'es',
  title: 'Spanish',
  nativeTitle: 'Espanol',
  isNotSpokenInCanada: true,
}, {
  id: 2,
  code: 'fr',
  title: 'French',
  nativeTitle: 'Francais',
  isNotSpokenInCanada: false,
}, {
  id: 3,
  code: 'en',
  title: 'English',
  nativeTitle: 'English',
  isNotSpokenInCanada: false,
}]);

test('it renders a select element', function(assert) {

  assert.expect(6);

  this.set('content', options);

  this.render(hbs`{{ted-select content=content}}`);

  var $component = this.$('.Ted-select');
  var $options = $component.find('option');

  assert.equal($component.find('select').length, 1);
  assert.equal($options.not('.Ted-select__prompt').length, 3);

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

test('can pass in an initial selection', function(assert) {
  assert.expect(1);
  this.set('content', options);
  this.set('selected', options.findBy('code', 'fr'));

  this.render(hbs`{{ted-select content=content selected=selected}}`);

  var $selected = this.$('option:selected');
  assert.equal($selected.text().trim(), 'French');
});

test('can sort the options by a provided key', function(assert) {
  assert.expect(3);
  this.set('content', options);
  this.set('sortBy', 'title');

  this.render(hbs`{{ted-select content=content sortBy=sortBy}}`);

  var $options = this.$('option:not(.Ted-select__prompt)');

  assert.equal($options.eq(0).text().trim(), 'English');
  assert.equal($options.eq(1).text().trim(), 'French');
  assert.equal($options.eq(2).text().trim(), 'Spanish');
});

test('selection gets passed out with the on-change action', function(assert) {
  assert.expect(1);
  this.set('content', options);
  // this.set('changeAction', (action "assertChanged"));

  var itemToSelect = options.findBy('code', 'en');

  this.render(hbs`{{ted-select content=content on-change=(action "assertChanged")}}`);

  this.$('select').val(3);
  this.$('select').trigger('change');

  this.on('assertChanged', selection => assert.equal(selection, itemToSelect));
});

// test('multiple selection gets passed out as an Uint32Array();', function(assert) {
// });

