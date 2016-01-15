import Ember from 'ember';

export default Ember.Controller.extend({
  // updatedBySelect: null,
  // selectedOptions: null,

  // selectedOption: Ember.computed('TEDevents', function(){
  //    return this.get('TEDevents').findBy('id', 4);
  // }),

  // initialSelection: Ember.computed('TEDevents', function() {
  //   return this.get('TEDevents').findBy('id', 3);
  // }),

  actions: {
    // update(newOption){
    //   this.set('updatedBySelect', newOption);
    // },
    alsoUpdate(newOption){
       this.set('alsoUpdatedBySelect', newOption);
       this.set('selected', null);
    },
    // clear(){
    //   this.set('alsoUpdatedBySelect', null);
    // },
    // updateMultiple(selectedOptions){
    //   this.set('selectedOptions', selectedOptions);
    // }
  },

  TEDevents: Ember.A([
    {
     id: 1,
     title: 'TED 2015',
    },
    {
      id: 2,
      title: 'TEDxNASA',
      isTEDxEvent: true
    },
    {
     id: 3,
     title: 'TED 2014',
    },
    {
      id: 4,
      title: 'TEDGlobal 2014'
    },
    {
      id: 5,
      title: 'TEDxNewYork',
      isTEDxEvent: true
    },
    {
      id: 6,
      title: 'TEDGlobal 2013'
    },
    {
      id: 7,
      title: 'TED 2013'
    }
  ]),

});
