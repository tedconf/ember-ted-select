import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'Example',
  TEDevents: [],
  selectedOptions: null,

  initialSelection: Ember.computed('TEDevents', function() {
    return this.get('TEDevents').findBy('id', 3);
  }),

  actions: {
    updateMultiple(selectedOptions){
      this.set('selectedOptions', selectedOptions);
    }
  }
});
