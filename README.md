# Ember-ted-select [WIP]

One select component to rule them all.  Supports data-down, actions-up and type to search (with [ember-cli-selectize](https://github.com/miguelcobain/ember-cli-selectize)).

Still in development, USE WITH CAUTION!

## Usage

Shares most options with the default Ember select view.

### 2-way bound

````
{{ted-select
  content=selectOptions
  selectClassNames="form-control"
  optionLabelPath="content.name"
  optionValuePath="content.val"
  selectedOption=boundValue
}}
````

### Data-down, actions up

````
{{ted-select
  content=selectOptions
  selectClassNames="form-control"
  optionLabelPath="content.name"
  optionValuePath="content.val"
  changeSelection="yourChangeAction"
  resetOnChange=true
}}
````

### type to search with selectize 

depends on <a href="https://github.com/miguelcobain/ember-cli-selectize">ember-cli-selectize</a>!

````
{{ted-select
  content=selectOptions
  selectClassNames="form-control"
  optionLabelPath="content.name"
  optionValuePath="content.val"
  selectedOption=boundValue
  updateFilter="doSomethingWhenIType"
  search=true
}}
````


<h3>selectize with new item creation</h3>
<p>depends on <a href="https://github.com/miguelcobain/ember-cli-selectize">ember-cli-selectize</a>!</p>
<p>won't work with 2-way binding! you'll need to handle adding the item to model yourself and updating the selectedOption yourself, this just sends out an action with the added text!</p>

````
{{ted-select
  content=selectOptions
  selectClassNames="form-control"
  optionLabelPath="content.name"
  optionValuePath="content.val"
  selectedOption=mySelectedOption
  search=true
  allowAddItem=true
  addItem="addNewItem"
}}
````

````
//in your controller.js or component.js where {{ted-select}} is being used
actions: {
  addNewItem(itemName){
    var newOption = {
      val: 3,
      name: itemName
    };

    this.get('selectOptions').addObject(newOption);

    this.set('mySelectedOption', newOption);
  },
}
````

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running a demo

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
