import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'Example',
  TEDEvents: [],

// BEGIN-SNIPPET basic
// controller.js / component.js
selected: null,

actions: {
  update(newOption){
    this.set('selected', newOption);
  }
}
// END-SNIPPET
});
