const returnFirstTwoDrivers = function (arr){
  return arr.slice(0,2);
};

const returnLastTwoDrivers = function (arr){
  return arr.slice(-2);
};

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

const createFareMultiplier = function(intMult){
  return function (fare){return fare*intMult;};
};

const fareDoubler = function(){
};

const fareTripler = function(){
};

const selectDifferentDrivers = function(){
};
