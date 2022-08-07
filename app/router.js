import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('books');
  this.route('speakers');
  this.route('edit-book', { path: '/edit-book/:id' });
  this.route('edit-speaker', { path: '/edit-speaker/:id' });
  this.route('404', { path: '/*path' });
  this.route('create-book');
  this.route('create-speaker');
  this.route('meetings');
  this.route('edit-meeting',{ path: '/edit-meeting/:id' });
  this.route('create-meeting');
  this.route('register');
  this.route('login');
});

export default Router;
