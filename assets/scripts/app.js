const ATTACK_VALUE = 10;
let chosenmaxLife, currentMonsterhealth, currentPlayerhealth; 



chosenmaxLife = 100;
currentMonsterhealth = chosenmaxLife;
currentPlayerhealth = chosenmaxLife;

adjustHealthBars(chosenmaxLife);

const attackhandler = () => {
   const damage=  dealMonsterDamage(ATTACK_VALUE);

   currentMonsterhealth -= damage;
};

attackBtn.addEventListener('click', attackhandler);
