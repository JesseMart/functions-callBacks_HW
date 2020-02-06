//          POSITIVE NUMBERS

/*var arr = [-1, -3, -4, 5, 6, 7];
var newArr = arr.filter(function(element){
    return element >= 0;
});
console.log(newArr);*/

//          EVEN NUMBERS

/*var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var newArr = arr.filter(function(element){
    if (element % 2 == 0){
        return element;
    }
});
console.log(newArr);*/

//          SQUARE THE NUMBERS

/*var arr = [2, 4, 6, 8, 10];
var newArr = arr.map(function(element){
    return element * 2;
});
console.log(newArr);*/

//          CITIES 1

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 } ];

let newCitiesList = cities.filter(function(newTempt){
    return newTempt.temperature < 70.0;
})
console.log(newCitiesList);

//          CITIES 2

/*var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 } ];

let newCitiesList = cities.map(function({name}){
    console.log(name);
})*/

//          GOOD JOB!

/*var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
people.forEach(function(element){
    console.log("Good Job, " + element + "!");
})*/

//          SORT AN ARRAY

/*var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
people.forEach(function(element){
    return people.sort(element);
})
console.log(people);*/
