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
    
   sum = arr.reduce((acc,item) => acc + item, 0); 
   return sum;
  }


function makeWork(arrOfArr, worker) {
  let max;
  max = worker(arrOfArr [0]);
   
  
  for (let i = 0; i < arrOfArr.length; i++){
    if (worker(arrOfArr[i]) > max)
    max = worker(arrOfArr[i]);
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  
  let min = arr[0];
  let max = arr[0];
  let difference =  min -max;
   
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > max)
    max = arr[i];
  }

  for (let i = 0; i < arr.length; i++){
    if(arr[i] < min)
    min=arr[i]; 
}
  
return Math.abs(difference);
}
function makeWork(arrOfArr, worker2) { 
  let max1;
  max1 = worker2(arrOfArr [0]);
   
  
  for (let i = 0; i < arrOfArr.length; i++){
    if (worker2(arrOfArr[i]) > max1)
    max1 = worker2(arrOfArr[i]);
  } 
  return max1;
}