class Person{

constructor(name,age){
this.name = name;
this.age = age;
}

print(){console.log(`Имя:${this.name},возраст: ${this.age}`)

}

}

class Work extends Person{
    company;
    constructor(name,age,company){
super(name,age);
this.company= company;
    }

    Work(){
        console.log(`${this.name} работает в ${this.company}`);
    }
}

let tom= new Work ("Tom", 18,"WTB")
tom.print();
tom.Work();