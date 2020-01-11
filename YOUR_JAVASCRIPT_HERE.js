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


const dagger = hero.weapon
console.log(dagger);

function pickUpItem(dagger){
  let startInventory = hero.inventory;
  console.log(firstInventory);

  let newInventory = startInventory.push(dagger);
  console.log(newInventory);
  return newInventory;
};

function equipWeapon(){};

//Adds the weapon object as the last element of the inventory array of person

//let newLength = fruits.push('Orange')
// ["Apple", "Banana", "Orange"]

//array.push(objectName)