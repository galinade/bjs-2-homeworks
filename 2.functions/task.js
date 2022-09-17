// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > max)
    max = arr[i];
  }
  for (let i = 0; i < arr.length; i++){
    if(arr[i] < min)
    min=arr[i];
  }
  for(let i = 0; i < arr.length; i++){
    sum +=arr[i];
  }
  avg=+((sum/arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;
    const result = [];
    for(let i = 0; i < arr.length; i++){
       sum = 0; 
      for(let j = 0; j < arr[i].length; j++){
        sum += arr[i][j]
      };
      result[i] = sum
    };
    return sum;
  }


function makeWork(arrOfArr, func) {
  let max;
  max = arrOfArr[0];
  for (let i = 0; i < arrOfArr.length; i++){
    if (arrOfArr[i] > max)
    max = arrOfArr[i];
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
