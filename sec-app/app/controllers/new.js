import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addNew: function () {
      var uj = this.store.createRecord('bolt', {
        nev: this.ujBoltNev
      });
      var _this = this;
      uj.save().then(function () {
	_this.transitionTo('index');
      });
    }
  }
});