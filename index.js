

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function (drivers){
    return (drivers.slice(0,2))
}

const returnLastTwoDrivers = function (drivers){
    return (drivers.slice(-2))
}


const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers];


function createFareMultiplier(factor){
    return nm1 =>  nm1* factor;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, cb){
    return cb(arrayOfDrivers)

}