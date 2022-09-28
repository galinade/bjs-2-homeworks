// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) { 
    max = arr[i];
    }
    if(arr[i] < min) {
    min = arr[i];
    }

    sum +=arr[i];
  
    avg=+((sum/arr.length).toFixed(2));
  }
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  return  arr.reduce((acc,item) => acc + item, 0);  
}
 
function makeWork(arrOfArr, func) {
  let max;
  max = func(arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; i++) {
    if (func(arrOfArr[i]) > max) {
    max = func(arrOfArr[i]);
    }
  }
  return max;
}
makeWork(arrOfArr, worker);
// Задание 3
function worker2(arr) {

  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) { 
    if (arr[i] > max) {
    max = arr[i];
    }
    if(arr[i] < min) {
    min=arr[i]; 
    }
  }
  return Math.abs(max - min);
}
makeWork(arrOfArr, worker2);
 