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
//pause
const person = hero;

const weapon = {
  type: "dagger",
  damage: 2,
};

function rest(person){
  if(person.health !== 10){
    person.health = 10;
  }else{
    alert('Person health is already 10 !');
    console.log('Person health is already 10 !');
  };
  return person;
};

//pause

function pickUpItem(person, weapon){
  person.inventory.push(weapon);
  return person;
};
//console.log(pickUpItem(person,weapon));

//pause
function equipWeapon(person) {
  const inventoryCount = person.inventory.length;
  const weapon = person.inventory[0];
  if (inventoryCount >= 1) {
    person.weapon = weapon;
    return person;
  }
  return person;
};
//console.log(equipWeapon(person));

//pause

document.getElementById("inn").addEventListener("click", function() {
  rest(hero);
});

// When the dagger is clicked it will add a weapon object to the inventory array with `type`: `dagger` and `damage`: 2
document.getElementById("dagger").addEventListener("click", function() {
  pickUpItem(hero, weapon);
});

document.getElementById("bag").addEventListener("click", function() {
  equipWeapon(hero);
});

console.log('contentTestjeEinde');

//let sleep = document.getElementById('inn');
//sleep.onclick = rest;

//let pickIt = document.getElementById('bag');
//pickIt.onclick = pickUpItem;

//let equipIt = document.getElementById('dagger');
//equipIt.onclick = equipWeapon;

/*
document.getElementById('link-with-image').addEventListener('click', function(event){
    event.preventDefault();
    console.log('link clicked, target is ', event.target);
});
*/

/*
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded', document.getElementById('header-id'))
});
*/

/*
function handler() {
  alert( "..." );
  return false;
}
*/


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