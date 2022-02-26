const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
// const returnFirstTwoDrivers  = function (drivers) {
//     return drivers.slice (0,2);
// };

// const returnLastTwoDrivers =  (drivers) => {
//     return drivers.slice(-2);
// };

// const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// function createFareMultiplier (int) {
//     return function (fare) {
//         return int * fare
//     }
// }

//   const fareDoubler = function (fare) {
//     return fare * 2;
// }

//   const fareTripler = function (fare) {
//       return fare * 3;
//   }

// function selectDifferentDrivers (drivers,func) {
//     return func(drivers)
// }
// selectDifferentDrivers (drivers, returnLastTwoDrivers)

const returnFirstTwoDrivers = (arrayOfDrivers) => arrayOfDrivers.slice(0,2);

const returnLastTwoDrivers = (arrayOfDrivers) => arrayOfDrivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (number) => {
    return (fare) => number * fare
}

const fareDoubler = (fare) => fare * 2