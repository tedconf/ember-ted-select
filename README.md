# Ember-ted-select [WIP]

A data-down actions up select component rendered with real DOM elements.Supports disabled options, multi-select, option sorting and custom prompt.

## Installation

* `npm install git+ssh://git@github.com/tedconf/ember-ted-select.git`

## Examples

### Data-down, actions up

````
{{ted-select
  content=TEDevents
  selectClassNames="form-control"
  optionLabelKey="name"
  optionValueKey="val"
  on-change=(action "update")
  selected=initialSelection
}}
````

###Two-way-bound

If you would like to two-way bind to a property, pass that property into the `on-change` action using the `mut` helper.

````
{{ted-select
  content=TEDevents
  selectClassNames="form-control"
  optionLabelKey="name"
  optionValueKey="val"
  selected=selectedOption
  on-change=(action (mut selectedOption))
}}
````

##Configurable options

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Property</th>
      <th>Purpose</th>
      <th>Expected Type</th>
      <th>Default value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>optionLabelKey</code></td>
      <td>[optional] Specify a property of the content object to use as each option's <code>value</code> attribute.</td>
      <td>string</td>
      <td><code>'id'</code></td>
    </tr>
    <tr>
      <td><code>optionValueKey</code></td>
      <td>[optional] Specify a property of the content object to use as each option's label.</td>
      <td>string</td>
      <td><code>'title'</code></td>
    </tr>
    <tr>
      <td><code>optionDisabledKey</code></td>
      <td>[optional] Specify a boolean property of the content object to use as a flag for the <code>disabled</code>attribute.</td>
      <td>string, null</td>
      <td><code>null</code></td>
    </tr>
    <tr>
      <td><code>multiple</code></td>
      <td>
        [optional] When <code>true</code>, adds the <code>multiple</code> attribute to the rendered <code>&lt;select&lt;</code>element.<br>
        When active, the <code>on-change</code> action will pass an array of objects rather than a single selected object.
      </td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>selectClassNames</code></td>
      <td>Adds one or more custom class names to the select element. Pass multiple classes as a space separated list: <code>form-control My-select</code></td>
      <td>string, null</td>
      <td><code>null</code></td>
    </tr>
    <tr>
    </tr>
    <tr>
      <td><code>prompt</code></td>
      <td>[optional] String or <code>null</code>. Sets the prompt text or hides the prompt option when set to <code>null</code>.</td>
      <td>string, null</td>
      <td><code>'Select an item'</code></td>
    </tr>
    <tr>
      <td><code>on-change</code></td>
      <td>
        Specify your own named action to trigger when the select value changes. Standard usage is: <code>(action "update")</code>. Your action handler will receive the new value, as a single value for a standard select or as an array if <code>multiple</code> is active.<br>
        You can also force a two-way binding by using the [`mut` helper](http://emberjs.com/api/classes/Ember.Templates.helpers.html#method_mut). See <strong>two-way-bound</strong> for an example.
      </td>
      <td>Ember action</td>
      <td><code>Ember.K</code> (noop)</td>
    </tr>
    <tr>
      <td><code>resetOnChange</code></td>
      <td>
        [optional] When <code>true</code>, clears the select element's value after a selection is made. Intended to be used with data-down, actions up only. Use with two-way binding at your own risk!
      </td>
      <td>boolean</td>
      <td>
        <code>false</code>
      </td>
    </tr>
  </tbody>
</table>

## Running a demo

* `git clone` this repository
* `npm install`
* `bower install`
* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
