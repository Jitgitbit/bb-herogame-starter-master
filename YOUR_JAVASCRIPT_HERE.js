// Write your JS here
const hero = {
  name: "Dark Empath",
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {
    type: "Black Mirror",
    damage: 2,
  },
};

const person = hero;

function rest(person){
  if(person.health !== 10){
    person.health = 10;
  }else{
    alert('Person health is already 10 !');
    console.log('Person health is already 10 !');
  };
  return person;
};

function pickUpItem(){};
function equipWeapon(){};

//Creates an alert popup with a message, If the health property of person already has the value 10