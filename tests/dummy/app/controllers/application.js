import Ember from 'ember';

export default Ember.Controller.extend({
  updatedBySelect: null,
  selectedOptions: null,

  selectedOption: Ember.computed('TEDevents', function(){
     return this.get('TEDevents').findBy('val', 4);
  }),

  initialSelection: Ember.computed('TEDevents', function() {
    return this.get('TEDevents').findBy('val', 3);
  }),

  actions: {
    update(newOption){
      this.set('updatedBySelect', newOption);
    },
    alsoUpdate(newOption){
       this.set('alsoUpdatedBySelect', newOption);
    },
    clear(){
      this.set('alsoUpdatedBySelect', null);
    },
    updateMultiple(selectedOptions){
      this.set('selectedOptions', selectedOptions);
    }
  },

  TEDevents: Ember.A([
    {
     val: 1,
     name: 'TED 2015',
    },
    {
      val: 2,
      name: 'TEDxNASA',
      isTEDxEvent: true
    },
    {
     val: 3,
     name: 'TED 2014',
    },
    {
      val: 4,
      name: 'TEDGlobal 2014'
    },
    {
      val: 5,
      name: 'TEDxNewYork',
      isTEDxEvent: true
    },
    {
      val: 6,
      name: 'TEDGlobal 2013'
    },
    {
      val: 7,
      name: 'TED 2013'
    }
  ]),

});
