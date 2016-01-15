import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'Example',
  TEDevents: [],
  selected: null,

  actions: {
    update(newOption){
      this.set('selected', newOption);
    }
  }
});
