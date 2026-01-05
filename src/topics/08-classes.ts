export class Person {
    constructor(
        public name: string,
        private address: string = "Not specified"
    ){}
};



export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ){
        super(realName, "New York, USA");
    }
}

const iroman = new Hero("IronMan", 45, "Tony Stark");
console.log(iroman)