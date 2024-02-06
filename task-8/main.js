// // class Main{
// //     name;
// //     age;

// // constructor(mName, mAge){
// //     this.name = mName;
// //     this.age = mAge;
// // }

// // print(){
// //     console.log (`Имя: ${this.name},возраст: ${this.age}`)
// // }

// // }

// // const tom = new Main("Tom",24);
// // tom.print();



// 1 zadanie

class NumberFilter {
    constructor(numbers) {
      this.numbers = numbers;
    }
  
    filter() {
      const filteredNumbers = [3,5,7];
  
      for (let number of this.numbers) {
        if (number % 3 === 0 && number % 5 === 0 && number % 7 === 0) {
          filteredNumbers.push(number);
        }
      }
  
      return filteredNumbers;
    }
  }

  const numbers = [3, 5, 7, 10, 14, 15, 21, 30, 35, 42];
const numberFilter = new NumberFilter(numbers);
const filteredNumbers = numberFilter.filter();
console.log(filteredNumbers);