import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'Example',
  TEDevents: [],
  updatedBySelect: null,

  initialSelection: Ember.computed('TEDevents', function() {
    return this.get('TEDevents').findBy('id', 3);
  }),

  actions: {
    update(newOption){
      this.set('updatedBySelect', newOption);
    }
  }
});
