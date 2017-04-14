class HumanBeing { 
    public name: string;
    public age: number;

    constructor(name: string, age: number) { 
        this.name = name;
        this.age = age;
    }
    walk() { 
        alert(`${this.name} can walk.`);
    }
    getAge() { 
        alert(`${this.name} of age ${this.age}.`);
    }
}

// extend class Teacher from HumanBeing
class Teacher extends HumanBeing{ 
    public subject: string;

    constructor(name:string,age:number,subject: string) { 
        super(name,age);
        this.subject = subject;
    }
    teachSubject() { 
        alert(`${this.name} teaches ${this.subject}`);
    }
}

// call them to see if they retruns
let nav = new Teacher('naveen', 12, 'Maths');
nav.getAge();
nav.teachSubject();
