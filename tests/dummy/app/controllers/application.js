import Ember from 'ember';

export default Ember.Controller.extend({
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
    updateSearchable(){
      console.log('hi');
    },
    addNewItem(itemName){
      this.set('lastAdded', itemName);
    },
    updateFilter(text){
      this.set('filterText', text)
    }
  },

  selectOptions: Ember.A([
    {
      val: 1,
      name: 'first option'
    },
    {
      val: 2,
      name: 'second option'
    }
  ]),
  selectedOption: Ember.computed('selectOptions', function(){
    return this.get('selectOptions').get('firstObject');
  }),

  updatedBySelect: null,
  alsoUpdatedBySelect: null,

  selectedSearchable: Ember.computed('selectOptions', function(){
    return this.get('selectOptions').get('firstObject');
  }),

  selectedSearchableWithAdd: null,

  lastAdded: null,
  filterText: null,
  prepopulateWithThis: 'prepopulated value',

});
