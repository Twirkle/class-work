function getMultiples(numbers) {
    var result = [];
  
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0 && numbers[i] % 7 === 0) {
        result.push(numbers[i]);
      }
    }
  
    return result;
  }