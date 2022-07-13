let cars = ['Ford','Toyota','BMW','Mercedes',]
console.log('cars:',cars)
let moreCars = ['Lamborghini','Porsche', 'Fiat','Honda']
console.log("More Cars:", moreCars)

let carsLength = cars.length
console.log('"Cars" length is:',carsLength)

const totalCars = cars.concat(moreCars)
console.log("Total Cars:", totalCars)

let hondaMeth = totalCars.indexOf("Honda")
console.log('Position of "Honda":', hondaMeth)

let lastFord = totalCars.lastIndexOf("Ford")
console.log('Position of "Ford":',lastFord)

let stringOfCars = totalCars.join();
console.log('String of cars:', stringOfCars)

let carsFromString = stringOfCars.split(",")
console.log('Split array of Cars:', carsFromString)

let carsInReverse = totalCars.reverse()
console.log('Cars in Reverse:', carsInReverse)

let alphabetCars = carsInReverse.sort()
console.log('Alphabetical cars:', alphabetCars, 'This should be 0:', carsInReverse.indexOf('BMW'))

const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
console.log('These are my pets:', pets)

let reptiles = pets.slice(4,6)
console.log('There are scaly boys:', reptiles)

let removedReptiles = pets.splice(4,2,'hamster')
console.log('Most people only like these:', pets)

let removedPet = pets.pop()
console.log('Current Pets:', pets, 'Removed Pets:', removedPet)

let remadePets = pets.push(removedPet)
console.log('Modified Pets:', remadePets)

let shiftedPets = pets.shift()
console.log('Shifted:', shiftedPets, 'Current:', pets)

let unshiftedPets = pets.unshift('turtle')
console.log(pets)

const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

numbers.forEach(num => console.log('Results', num +2))

