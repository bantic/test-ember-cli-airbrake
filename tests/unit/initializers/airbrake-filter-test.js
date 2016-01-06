import Ember from 'ember';
import AirbrakeFilterInitializer from '../../../initializers/airbrake-filter';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | airbrake filter', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  AirbrakeFilterInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
