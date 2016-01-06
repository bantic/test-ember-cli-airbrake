export function initialize(application) {
  // application.inject('route', 'foo', 'service:foo');
  let filter = function(notice) {
    notice.session.username = 'bob' + Math.random();
    return notice;
  };
  let airbrake = application.lookup('service:airbrake');
  airbrake.addFilter(filter);
}

export default {
  name: 'airbrake-filter',
  after: 'ember-cli-airbrake',
  initialize
};
