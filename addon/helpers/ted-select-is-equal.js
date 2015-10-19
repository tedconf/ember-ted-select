import Ember from 'ember';

export function tedSelectIsEqual([leftside, rightside]) {
  return leftside === rightside;
}

export default Ember.Helper.helper(tedSelectIsEqual);
