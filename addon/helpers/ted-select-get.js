import Ember from 'ember';

export function tedSelectGet([object, path]) {
  if (!path) {
    return;
  }

  return Ember.get(object, path);

}

export default Ember.Helper.helper(tedSelectGet);
