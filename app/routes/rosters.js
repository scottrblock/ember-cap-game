import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      roster: this.store.findRecord('roster', params.roster_id)
    }); 
  }
});
