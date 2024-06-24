const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const minSpaceperPlant = 0.8;
const startingCount = 20;
const weeks = [1, 2, 3];

//Space required by startingCount
try{
let startingSpacerequired = startingCount * minSpaceperPlant 

if (startingSpacerequired > area)
    throw new Error('Total Space not sufficient for starting plant count')

//what is the maximum capacity of the garden??
const maxCapacity = Math.floor(area/minSpaceperPlant)

// console.log(area)
// console.log(maxCapacity)

weeks.forEach(week => {
    
    let projectedCount = startingCount * Math.pow(2, week);
// console.log(projectedCount)

    let action;

    if (projectedCount > maxCapacity*0.8){
        action = 'Prune';}
        else if (projectedCount > maxCapacity*0.5){
            action = 'Monitor';}
        else if (projectedCount < maxCapacity*0.5){
            action = 'Plant';}


            console.log(`Week ${week}:`);
            console.log(`Predicted Plant Count: ${projectedCount}`);
            console.log(`suggested action: ${action}`);
            console.log('-----------------------------------------')
});



const initialplantcount = 100;
const time = 10;
const plantCountaftertime = initialplantcount * Math.pow(2, time);
console.log(`Plant count after 10 weeks: ${plantCountaftertime}`);
console.log('-----------------------------------------------------');
const totalSpaceRequired = plantCountaftertime * minSpaceperPlant
console.log(`Total Space Required by Plants after 10 weeks: ${totalSpaceRequired} Square meters`);
console.log('-----------------------------------------------------');
let additionalSpace = totalSpaceRequired - area
console.log(`Additional Space Required by 100 Plants after 10 weeks: ${additionalSpace} Square meters`);
console.log('-----------------------------------------------------');
let newRadius = Math.sqrt(totalSpaceRequired/PI)
console.log(`Radius of the new garden in meters: ${newRadius}`);
console.log('-----------------------------------------------------');
}

catch (Error){
console.error(`Error: ${Error.message}`);
}