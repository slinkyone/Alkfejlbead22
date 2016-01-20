import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveEdit: function () {
      this.model.save();
    },
    addNew: function () {
      var _this = this;
      var uj = this.store.createRecord('termek', {
        nev: this.ujTermekNev,
        mennyiseg: this.ujTermekDarab,
        ar: this.ujTermekAr
      });
      uj.save().then(function () {
        _this.model.get('termekek').pushObject(uj);
        console.log(uj);
        _this.model.save();
        _this.ujTermekNev.set("");
        _this.ujTermekDarab.set("");
        _this.ujTermekAr.set("");
      }).catch(function () {});
    },
    delete: function (id) {
      this.store.find('termek', id).then(function (h) { h.destroyRecord();
      });
    },
  }

});