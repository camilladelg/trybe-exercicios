const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};
  
const battleMembers = { mage, warrior, dragon };

const danoDragon = () => {
  const danoMaximo = dragon.strength;
  const dano = Math.floor(Math.random() * (danoMaximo - 15 + 1) + 15);
  return dano;
}
console.log(danoDragon());

const danoWarrior = () => {
  const danoMinimo = warrior.strength;
  const danoMaximo = warrior.weaponDmg * danoMinimo;
  const dano = Math.floor(Math.random() * (danoMaximo - danoMinimo + 1) + danoMinimo);
  return dano;
}
console.log(danoWarrior());

const danoManaMago = () => {
  const danoMinimo = mage.intelligence;
  const danoMaximo = danoMinimo * 2;
  const manaPorTurno = 15;
  if (manaPorTurno < 15) {
    return 'Não possui mana suficiente';
  }
  const dano = Math.floor(Math.random() * (danoMaximo - danoMinimo + 1) + danoMinimo);
  return dano;
}
console.log(danoManaMago());
