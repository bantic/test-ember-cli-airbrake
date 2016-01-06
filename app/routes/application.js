import Ember from 'ember';

export default Ember.Route.extend({
  airbrake: Ember.inject.service(),

  actions: {
    makeError: function(type) {
      switch (type) {
        case 'thrown':
          throw new Error('thrown error ABC');
        case 'explicit':
          this.get('airbrake').notify(new Error('explicit error'));
          break;
        case 'setTimeout':
          setTimeout(() => {
            throw new Error('setTimeout error');
          }, 1000);
          break;
        case 'promise':
          return new Ember.RSVP.Promise((resolve, reject) => {
            reject('promise error');
          });
      }
    }
  }
});
