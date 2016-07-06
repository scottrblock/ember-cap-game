let players = 
[
  ["DeMarcus", "Cousins", 5],
  ["Anthony", "Davis", 5],
  ["Blake", "Griffin", 5],
  ["James", "Harden", 5],
  ["Kawhi", "Leonard", 5],
  ["Chris", "Paul", 5],
  ["Russell", "Westbrook", 5],
  ["Carmelo", "Anthony", 4],
  ["Jimmy", "Butler", 4],
  ["DeMar", "DeRozan", 4],
  ["Andre", "Drummond", 4],
  ["Paul", "George", 4],
  ["Kyrie", "Irving", 4],
  ["Damian", "Lillard", 4],
  ["Paul", "Millsap", 4],
  ["Karl-Anthony", "Towns", 4],
  ["John", "Wall", 4],
  ["Hassan", "Whiteside", 4],
  ["Giannis", "Antetokounmpo", 3],
  ["Eric", "Bledsoe", 3],
  ["Chris", "Bosh", 3],
  ["Derrick", "Favors", 3],
  ["Marc", "Gasol", 3],
  ["Al", "Horford", 3],
  ["Dwight", "Howard", 3],
  ["Serge", "Ibaka", 3],
  ["DeAndre", "Jordan", 3],
  ["Kevin", "Love", 3],
  ["Kyle", "Lowry", 3],
  ["Dirk", "Nowitzki", 3],
  ["Isaiah", "Thomas", 3],
  ["Dwyane", "Wade", 3],
  ["Andrew", "Wiggins", 3],
  ["Bradley", "Beal", 2],
  ["Mike", "Conley", 2],
  ["Tyreke", "Evans", 2],
  ["Kenneth", "Faried", 2],
  ["Pau", "Gasol", 2],
  ["Rudy", "Gobert", 2],
  ["Gordon", "Hayward", 2],
  ["Brook", "Lopez", 2],
  ["C.J.", "McCollum", 2],
  ["Khris", "Middleton", 2],
  ["Chandler", "Parsons", 2],
  ["Kristaps", "Porzingis", 2],
  ["Zach", "Randolph", 2],
  ["Jonas", "Valanciunas", 2],
  ["Nikola", "Vucevic", 2],
  ["Kemba", "Walker", 2]
]

for(var i = 0; i < players.length; i++){
  var player = players[i];
  let newPlayer = this.store.createRecord('player', {
    firstName: player[0],
    lastName: player[1],
    price: player[2]
  });
  newPlayer.save();
}