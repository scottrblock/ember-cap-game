import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('players', { path:'/' });
  this.route('rosters', { path:'/roster/:roster_id' });

});

export default Router;
