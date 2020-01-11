// Write your JS here
console.log('contentTestje1');
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

const weapon = hero.weapon;

function pickUpItem(person, weapon){
  let array = person.inventory;
  array.push(weapon);
  person.weapon = person.inventory[0];
};
//console.log(pickUpItem(person,weapon));

function equipWeapon(person){
  if(person.inventory !== []){
    
    let array = person.inventory;
    array.push(weapon);
  };
};
//console.log(equipWeapon(person));

let sleep = document.getElementById('inn');
//sleep.onclick = rest;

let pickIt = document.getElementById('bag');
//pickIt.onclick = pickUpItem;

let equipIt = document.getElementById('dagger');
//equipIt.onclick = equipWeapon;

/*
function handler() {
  alert( "..." );
  return false;
}
*/

console.log('contentTestjeEinde');

//sleep.addEventListener('click', rest);

/*
window.onload = function(){
  let sleep = document.querySelector('inn');
  sleep.onclick = rest;

  let pickIt = document.getElementById('bag');
  pickIt.onclick = pickUpItem;

  let equipIt = document.getElementById('dagger');
  equipIt.onclick = equipWeapon;
};

/*
let sleep = document.querySelector('inn');
sleep.onclick = rest;
/*if(sleep.clicked == true){
  rest(person);
}*/
//eventTarget.addEventListener('click', eventHandlerFunction);

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
let sleep = document.getElementById('inn');

function rest(person){
  if(person.health !== 10){
    person.health = 10;
  }else{
    alert('Person health is already 10 !');
    console.log('Person health is already 10 !');
  };
  return person;
};

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