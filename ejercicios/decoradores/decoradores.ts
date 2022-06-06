type Move = {
  name: string,
  power: number
};

const checkPP = (ppAvailable: number) => (
  target: any,
  prop: string,
  descriptor: PropertyDescriptor
) => {
  const original = descriptor.value;

  descriptor.value = function (...args: any) {
    if (this.ppAvailable > ppAvailable)
      original.apply(this, args);
    else
      console.log('Not enough PP');

  }
  return descriptor
}



class Pokemon {
  name: string;
  ppAvailable = 1;
  constructor(name: string, ppAvailable: number) {
    this.name = name;
    this.ppAvailable = ppAvailable;
  }


  @checkPP(1)
  figth(move: Move) {
    console.log(`${this.name} used ${move?.name}!`);
    this.ppAvailable = this.ppAvailable - 1;
  }

  calculateDamage(move: any) {
    return move.power;
  }
}

const thunderbolt: Move = { name: 'thunderbolt', power: 90 };
const pikachu = new Pokemon('pikachu', 2);
pikachu.figth(thunderbolt);
pikachu.figth(thunderbolt);


