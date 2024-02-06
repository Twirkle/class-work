// // // // // class Main{
// // // // //     name;
// // // // //     age;

// // // // // constructor(mName, mAge){
// // // // //     this.name = mName;
// // // // //     this.age = mAge;
// // // // // }

// // // // // print(){
// // // // //     console.log (`Имя: ${this.name},возраст: ${this.age}`)
// // // // // }

// // // // // }

// // // // // const tom = new Main("Tom",24);
// // // // // tom.print();



// // // // 1 zadanie

// // // class NumberFilter {
// // //     constructor(numbers) {
// // //       this.numbers = numbers;
// // //     }
  
// // //     filter() {
// // //       const filteredNumbers = [3,5,7];
  
// // //       for (let number of this.numbers) {
// // //         if (number % 3 === 0 && number % 5 === 0 && number % 7 === 0) {
// // //           filteredNumbers.push(number);
// // //         }
// // //       }
  
// // //       return filteredNumbers;
// // //     }
// // //   }

// // //   const numbers = [3, 5, 7, 10, 14, 15, 21, 30, 35, 42];
// // // const numberFilter = new NumberFilter(numbers);
// // // const filteredNumbers = numberFilter.filter();
// // // console.log(filteredNumbers);


// // 3 zadanie

// class MaxNumber {
//     constructor(num1, num2) {
//       this.num1 = num1;
//       this.num2 = num2;
//     }
  
//     getMax() {
//       return Math.max(this.num1, this.num2);
//     }
//   }
  
//   const maxNumber = new MaxNumber(5, 10);
  
//   console.log(maxNumber.getMax()); 

// 4 zadanie

// class ArraySum {
//     constructor(array) {
//       this.array = array;
//     }
  
//     calculateSum() {
//       return this.array.reduce((acc, curr) => acc + curr, 0);
//     }
//   }
  
//   const numbers = [1, 2, 3, 4, 5];
//   const arraySum = new ArraySum(numbers);
//   console.log(arraySum.calculateSum()); 


// 5 zadanie

// class dailinet  {
//     constructor(numberArr) {
//       this.numberArr = numberArr;
//     }
  
//     netilida() {
//       for (let i = 0; i < this.numberArr.length; i++) {
//         if (this.numberArr[i] < 0) {
//           return "Да";
//         }
//       }
//       return "Нет";
//     }
//   }
  
//   const numbers = [1, 2, -3, 4, 5];
//   const checkNumbers = new dailinet(numbers);
//   console.log(checkNumbers.netilida()); 

// 6 zadanie


// class dailida {
//     constructor(arr) {
//       this.arr = arr;
//     }
  
//     netilinet() {
//       for (let i = 0; i < this.arr.length; i++) {
//         if (this.arr[i] % 3 === 0) {
//           return "da";
//         }
//       }
//       return "net";
//     }
//   }
  
//   const array1 = [1, 2, 3, 4, 5];
//   const array2 = [2, 4, 6, 8, 10];
  
  
//   const check1 = new dailida(array1);
//   console.log(check1.netilinet()); 
  
//   const check2 = new dailida(array2);
//   console.log(check2.netilinet()); 




// 2 zadanie 


class pomogite {

    pechatayu() {
        for (let i = 1; i <= 100; i++) {
            if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
              console.log(i);
            }
          }
        }
    }
  
  const numbers = new pomogite();
  numbers.pechatayu();