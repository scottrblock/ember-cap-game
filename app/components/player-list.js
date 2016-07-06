import Ember from 'ember';

export default Ember.Component.extend({
  roster: [],
  rosterPrice: Ember.computed('roster.@each', function(){
    let totalPrice = 0;
    this.get('roster').mapBy('price').forEach((price) => {
      totalPrice += price;
    });

    return totalPrice;
  }),

  validRoster: Ember.computed('roster.@each', function(){
    return this.get('rosterPrice') <= 15 && this.get('roster').length === 5;
  }),

  actions:{
    publishTeam(){
      this.sendAction('newRoster', this.get('roster'), this.get('newRosterName'));
    },
    toggleSelected(player){
      let selected = (this.get('rosterPrice') + player.get('price') ) <= 15;
      if(player.get('selected')){
        selected = false;
      }
      player.set('selected', selected);

      if(selected){
        this.get('roster').pushObject(player);
      } else{
        this.get('roster').removeObject(player);
      }
    }
  }

});