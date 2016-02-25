import Ember from 'ember';
/* global $ */
// import layout from '../templates/components/ted-select';

export default Ember.Component.extend({
  // layout: layout,

  classNames: 'Ted-select',
  selectClassNames: null,
  content: Ember.A([]),
  optionValueKey: 'id',
  optionLabelKey: 'title',
  optionDisabledKey: null,
  selected: null,
  prompt: 'Select an option',
  sortBy: null,
  multiple: false,
  disabled: false,
  resetOnChange: false,
  'on-change': Ember.K, //no-op if no action passed in

  sortArray: Ember.computed('sortBy', function(){
    if (this.get('sortBy')){
      return this.get('sortBy').replace(' ', '').split(',');
    }
    return [];
  }),

  sortedContent: Ember.computed.sort('content', 'sortArray'),

  actions: {
    onChange(target){
      let value = $(target).val(),
          selection;

      //if multiple, .val() returns an array. if not, it's a single value
      if (this.get('multiple')){
        let values = Ember.A(value);
        selection = this.get('content').filter(option => {
          let optionVal = Ember.get(option, this.get('optionValueKey')).toString();
          return values.contains(optionVal);
        });
      } else {
        selection = this.get('content').find(option => {
          return Ember.get(option, this.get('optionValueKey')).toString() === value;
        });
      }

      this['on-change'].call(this, selection);

      if (this.get('resetOnChange')){
        this.send('resetSelection');
      }
    },

    resetSelection(){
      this.$('select').val('');
    }
  }

});
