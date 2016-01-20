import DS from 'ember-data';

export default DS.Model.extend({
  nev: DS.attr('string'),
  termekek: DS.hasMany('termek', {async: true})
});