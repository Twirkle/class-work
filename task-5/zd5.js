function dailinet(arr) {
    
    for (let i = 0; i < arr.length; i++) {
      
      if (arr[i] < 0) {
        return "Да";
      }
    }
    
    return "Нет";
  }

  const numbers = [2, 4, -6, 8, 10];
console.log(dailinet(numbers)); 

const numbers2 = [1, 2, 3, 4, 5];
console.log(dailinet(numbers2)); 
