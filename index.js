const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = reducer();

// Code your solution here
function reducer(){
  let totalBatteries = batteryBatches.reduce(batteries, 0);
  return totalBatteries;
}

function batteries(totalBatteries, element){
  return totalBatteries += element;
}

