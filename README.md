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
  search=true
}}
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
