import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findAll('player');
  },
  actions: {
    createPlayer(firstName, lastName, price){
      let newPlayer = this.store.createRecord('player', {
        firstName: firstName,
        lastName: lastName,
        price: 1
      });
      newPlayer.save();
    },

    newRoster(roster, name){
      let newRoster = this.store.createRecord('roster', {
        name: name,
        players: roster
      });

      var self = this;
      function transitionToRoster(roster) {
        self.transitionTo('rosters', roster.get('id'));
      }

      newRoster.save().then(transitionToRoster);
    }
  }
});
