import Ember from 'ember';

export default Ember.Component.extend({
  content: Ember.A([]),
  selectedOption: null,
  optionValuePath: 'content.id',
  optionLabelPath: 'content.title',
  prompt: 'Select an option',
  resetOnChange: false,
  changeSelection: null,
  sortBy: null,
  search: false,
  searchPrompt: 'Type to search...',
  selectClassNames: '',

  selectizeSelection: null,
  isShowingSearchInput: false,

  selectedOptionLabel: Ember.computed('selectedOption', 'optionLabelPath', function(){
    var labelProperty = 'selectedOption.' + this.get('optionLabelPath').split('.')[1];
    return this.get(labelProperty);
  }),

  setup: Ember.on('didInsertElement', function(){
    //esc key listener
    this.$().on('keyup', e => {
      if (e.keyCode === 27){
        this.$('.selectize-input input').blur();
        this.$('select')[0].selectize.close();
        this.set('isShowingSearchInput', false);
      }
    });
  }),

  actions: {
    resetSelection(){
      this.set('selectedOption', null);
    },

    toggleSearchInput(){
      if (this.get('isShowingSearchInput')){
        this.$('select')[0].selectize.close();
      } else {
        this.$('select')[0].selectize.open();

        Ember.run.next(this, function() {
          this.$('.selectize-input input').focus();
        });
      }

      this.toggleProperty('isShowingSearchInput');
    },

    updateOptionFromSearch(option){
      this.set('selectedOption', option);
      this.set('selectizeSelection', null);
    }
  },

  selectionChanged: Ember.observer('selectedOption', function(){

    //send out non-null selections
    if (this.get('selectedOption')){
      this.sendAction('changeSelection', this.get('selectedOption'));
    }

    if (this.get('resetOnChange')){
      this.send('resetSelection');
    }

    this.set('isShowingSearchInput', false);

  }),

  sortArray: Ember.computed('sortBy', function(){
    if (this.get('sortBy')){
      return [this.get('sortBy')];
    }
    return [];
  }),

  sortedContent: Ember.computed.sort('content', 'sortArray'),

  optionsContent: Ember.computed('content', 'sortedContent', 'sortBy', function(){
    if (this.get('sortBy')){
      return this.get('sortedContent');
    } else {
      return this.get('content');
    }
  })
});
