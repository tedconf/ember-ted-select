# Ember-ted-select

A data down, actions up select component rendered with real DOM elements.Supports disabled options, multi-select, option sorting and custom prompt.

> This addon is prepared for internal use at TED. We're happy to share our code as open-source, but be aware that it may not be maintianed for broader community use. 

## Installation

* `ember install ember-ted-select`

## Examples

### Standard Usage

You'll need to give `ted-select` an array of options (`content`), specifying a property to use for both option value and option label. A selection can be passed in (data down) using the `selected` property, and the add-on will send an `onchange` action out (actions-up)

```hbs
{{ted-select
  selectClassNames="form-control"
  content=TEDevents
  optionValueKey="id"
  optionLabelKey="title"
  onchange=(action "update")
  selected=initialSelection
}}
````

### Demo and additional examples

Visit the [docs site](http://tedconf.github.io/ember-ted-select/) for demos and more detailed usage examples.


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
      <td><code>content</code></td>
      <td>Pass in a content array to populate the select options. Each array element must be an object with properties for both the 'value' attribute and option label text.</td>
      <td>array</td>
      <td><code>null</code></td>
    </tr>
    <tr>
      <td><code>optionLabelKey</code></td>
      <td>[optional] Specify a property of the content object to use as each option's label.</td>
      <td>string</td>
      <td><code>'id'</code></td>
    </tr>
    <tr>
      <td><code>optionValueKey</code></td>
      <td>[optional] Specify a property of the content object to use as each option's <code>value</code> attribute.</td>
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
      <td><code>onchange</code></td>
      <td>
        Specify your own named action to trigger when the select value changes. Standard usage is: <code>(action "update")</code>. Your action handler will receive the new value, as a single value for a standard select or as an array if <code>multiple</code> is active.<br>
        You can also force a two-way binding by using the [`mut` helper](http://emberjs.com/api/classes/Ember.Templates.helpers.html#method_mut). See <strong>two-way-bound</strong> for an example.
      </td>
      <td>Ember action</td>
      <td><code>Ember.K</code> (noop)</td>
    </tr>
    <tr>
      <td><code>selected</code></td>
      <td>
        Pass in an initial selection or update the selected value from outside the component. Must match one of the options in the content array for single select, or be an array of objects for multi-select.
      </td>
      <td>Object, Array</td>
      <td><code>null</code></td>
    </tr>
    <tr>
      <td><code>sortBy</code></td>
      <td>[optional] Specify a property of the content array to use for sorting the options. When set to null, options will remain in the order of the original array.</td>
      <td>string, null</td>
      <td><code>null</code></td>
    </tr>
    <tr>
      <td><code>multiple</code></td>
      <td>
        [optional] When <code>true</code>, adds the <code>multiple</code> attribute to the rendered <code>&lt;select&gt;</code>element.<br>
        When active, the <code>onchange</code> action will pass an array of objects rather than a single selected object.
      </td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>[optional] Pass a boolean value in to disabled the entire input.</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>name</code></td>
      <td>[optional] Add a name attribute to the select element.</td>
      <td>string, null</td>
      <td><code>null</code></td>
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
  </tbody>
</table>

## Running a demo

* `git clone` this repository
* `npm install`
* `bower install`
* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs ember try:testall to test your addon against multiple Ember versions)

or to run a test server while developing:

* `ember test --server`

## Building

* `ember build`

## For contributors:
PRs that do not include the following will not be merged:

* a passing test suite
* test coverage for your new code
* updated README docs (if applicable)
* updated docs and/or examples in the docs site found in `tests/dummy` (if applicable)

## For maintainers:

### Updating the GitHub pages docs site
* `ember github-pages:commit --message "update gh-pages"`
* `git push origin gh-pages`

### Creating a new release and publishing to npm

* `npm version $TYPE -m "message about this version"` where $TYPE indicates the semver release type, eg. `patch`, `major` or `minor`. see the [npm-version docs](https://docs.npmjs.com/cli/version) and (semver docs)[http://semver.org/] if you're not sure which applies
* `npm publish`
* `git push --tags`
* document the changes by [creating a new release](https://github.com/tedconf/ember-ted-select/releases)


For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
