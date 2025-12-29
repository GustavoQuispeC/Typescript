function addNumbers(a: number, b: number): number {
  return a + b;
}
const result: number = addNumbers(10, 15);
console.log("Result of addition:", result);

//! Arrow function version
const addNumbersArrow = (a: number, b: number): number => a + b;

const resultArrow: number = addNumbersArrow(20, 25);
console.log("Result of arrow addition:", resultArrow);

//! Function with optional and default parameters
function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
): number {
  return firstNumber * base;
}
const multiplyResult = multiply(5);
console.log("Result of multiplication:", multiplyResult);

//! Using an interface with a function
interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number): void => {
  character.hp += amount;
  console.log(
    `${character.name} healed by ${amount}. Current HP: ${character.hp}`
  );
};

const strider: Character = {
    name: "Strider",
    hp: 100,
    showHp() {
      console.log(`Current HP of ${this.name}: ${this.hp}`);
    }

}

healCharacter(strider, 20);

strider.showHp();




export {};
