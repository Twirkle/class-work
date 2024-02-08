// 1 zadanie

class Vehicle {
    constructor(model, speed) {
      this.model = model;
      this.speed = speed;
    }
    
    print() {
      console.log(`Модель: ${this.model}`);
      console.log(`Скорость: ${this.speed} км/ч`);
    }
  }
  
  class Car extends Vehicle {
    constructor(model, speed, doors, engineType) {
      super(model, speed);
      this.doors = doors;
      this.engineType = engineType;
    }
    
    print() {
      super.print();
      console.log(`Двери: ${this.doors}`);
      console.log(`Тип двигателя: ${this.engineType}`);
    }
  }
  
  class Bicycle extends Vehicle {
    constructor(model, speed, brakeType, gears) {
      super(model, speed);
      this.brakeType = brakeType;
      this.gears = gears;
    }
    
    print() {
      super.print();
      console.log(`Тип тормозов: ${this.brakeType}`);
      console.log(`Кол-во скоростей: ${this.gears}`);
    }
  }
  
  
  let car1 = new Car("Toyota Camry", 180, 4, "Petrol");
  car1.print();
  
  let bicycle1 = new Bicycle("Giant", 30, "Disc", 21);
  bicycle1.print();
  

  // 2 zadanie

  class Asset {
    constructor(name, cost) {
      this.name = name;
      this.cost = cost;
    }
  }
  
  class FinancialAsset extends Asset {
    constructor(name, cost, profitability, investmentType) {
      super(name, cost);
      this.profitability = profitability;
      this.investmentType = investmentType;
    }
  }
  
  class RealAsset extends Asset {
    constructor(name, cost, address, assetType) {
      super(name, cost);
      this.address = address;
      this.assetType = assetType;
    }
  }
  
  const asset = new Asset("Общая стоимость", 1000);
  const financialAsset = new FinancialAsset("Акции", 2000, 5, "Облигации");
  const realAsset = new RealAsset("Реальный актив", 500000, "Улица Буржуева", "Материальные");
  
  console.log(asset);
  console.log(financialAsset);
  console.log(realAsset);
  
  console.log(financialAsset.name);
  console.log(realAsset.cost);


  // 3 zadanie

  class Animal {
    constructor(вид, среда_обитания) {
        this.вид = вид;
        this.среда_обитания = среда_обитания;
    }
}
class Mammal extends Animal {
    constructor(вид, среда_обитания, тип_питания, метод_размножения) {
        super(вид, среда_обитания);
        this.тип_питания = тип_питания;
        this.метод_размножения = метод_размножения;
    }
}
class Bird extends Animal {
    constructor(вид, среда_обитания, способ_передвижения, места_гнездования) {
        super(вид, среда_обитания);
        this.способ_передвижения = способ_передвижения;
        this.места_гнездования = места_гнездования;
    }
}

let lion = new Mammal('тигр', 'саванна', 'плотоядное', 'внутреннее оплодотворение');
console.log(lion);

let eagle = new Bird('воробей', 'горы', 'пролетает', 'вершины деревьев');
console.log(eagle);


