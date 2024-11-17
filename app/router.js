import EmberRouter from '@ember/routing/router';
import config from 'articles/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}
 
Router.map(function() {
  this.route('article', { path: '/article/:id' });
  this.route('articles',  { path: '/' });
  this.route('articles',  { path: '/articles' });
  this.route("not-found", { path: "*path"});
}); 
 
