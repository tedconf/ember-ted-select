import Ember from 'ember';


/* passed;in:
*  `changeSelection`
*  `updateFilter` typing in searchable input
*  `addItem`  new item added to searchable input
*/


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
  allowAddItem: false,
  searchPrompt: 'Type to search...',
  selectClassNames: '',

  selectizeSelection: null,
  isShowingSearchInput: false,

  searchableLabel: Ember.computed('selectedOption', 'prompt', function(){
    if (this.get('selectedOption')){
      var labelProperty = 'selectedOption.' + this.get('optionLabelPath').split('.')[1];
      return this.get(labelProperty);
    } else {
      return this.get('prompt');
    }
  }),

  setup: Ember.on('didInsertElement', function(){
    //esc key listener
    this.$().on('keyup', e => {
      if (e.keyCode === 27){
        this.send('closeSearchInput');
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

    closeSearchInput(){
      this.$('.selectize-input input').blur();
      this.$('select')[0].selectize.close();
      this.set('isShowingSearchInput', false);
    },

    updateOptionFromSearch(option){
      this.set('selectedOption', option);
      this.set('selectizeSelection', null);
      this.set('isShowingSearchInput', false);
    },

    addItem(item){
      this.send('closeSearchInput');
      this.sendAction('addItem', item);
    },
    updateFilter(text){
      this.sendAction('updateFilter', text);
    }
  },

  selectionChanged: Ember.observer('selectedOption', function(){

    //send out non-null selections
    if (this.get('selectedOption')){
      this.sendAction('changeSelection', this.get('selectedOption'));
    }

    if (this.get('resetOnChange')){
      this.send('resetSelection');
    } else if (this.get('search')) {
      var labelProperty = 'selectedOption.' + this.get('optionLabelPath').split('.')[1];
      return this.get(labelProperty);
    }

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
