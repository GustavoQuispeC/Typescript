export class Person {
    constructor(
        public name: string,
        private address: string = "Not specified"
    ){}
};

const iroman = new Person("Iron Man", "New York, USA");
console.log(iroman)