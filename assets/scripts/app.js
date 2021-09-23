const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VAL = 14;
let chosenmaxLife, currentMonsterhealth, currentPlayerhealth;

chosenmaxLife = 100;
currentMonsterhealth = chosenmaxLife;
currentPlayerhealth = chosenmaxLife;

adjustHealthBars(chosenmaxLife);
const winCondition = () => {
  if (currentMonsterhealth <= 0 && currentPlayerhealth > 0) {
    alert('You Won!');
  }
  if (currentPlayerhealth <= 0 && currentMonsterhealth > 0) {
    alert('You Lost!');
  }
  if (currentMonsterhealth <= 0 && currentPlayerhealth <= 0) {
    alert('Draw');
  } else {
  }
};
const attackhandler = () => {
  const monsterDamage = dealMonsterDamage(ATTACK_VALUE);
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VAL);

  currentMonsterhealth -= monsterDamage;
  currentPlayerhealth -= playerDamage;
  winCondition();
};

attackBtn.addEventListener('click', attackhandler);
