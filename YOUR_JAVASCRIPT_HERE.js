// Write your JS here

const hero = {
  name: "Dark Empath",
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {
    type: "dagger",
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
let sleep = document.getElementById('rest');
sleep.onclick = rest();



const weapon = {
  type: "sword",
  damage: 5,
};
console.log('before pick up');
console.log(person.inventory);
console.log(person.weapon);
console.log(weapon);

function pickUpItem(person, weapon){
  person.inventory.push(weapon);
  return person.inventory;
};
//pickUpItem(person,weapon);
console.log('after pick up');
console.log(person.inventory);
console.log(person.weapon);
console.log(weapon);

function equipWeapon(person){
  if(person.inventory !== []){
    person.weapon = person.inventory[0];
  };
  return person.weapon;
};
//equipWeapon(person);
console.log('after equip');
console.log(person.inventory);
console.log(person.weapon);
console.log(weapon);




/*
console.log('testje');
const rollerDeck = function(){
  const hero = {
    name: "Dark Empath",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
      type: "dagger",
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
  
  const dagger = person.weapon
  console.log(dagger);
  
  function pickUpItem(){
    let startInventory = person.inventory;
    console.log(startInventory);
    person.inventory.push(dagger);
    return person.inventory;
  };
  
  function equipWeapon(){};
};

if (
  document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
rollerDeck();
} else {
document.addEventListener("DOMContentLoaded", rollerDeck);
};
*/