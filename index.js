// Write your solution here!

//remember that this is global scope 
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name);
};

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
};

function destructivelyRemoveLastDriver() {
  drivers.pop();  
};

function destructivelyRemoveLastDriver() {
   drivers.shift();
};

function destructivelyRemoveLastDriver() {
  drivers.pop();  
};

function destructivelyRemoveFirstDriver() {
    drivers.shift();
};

function appendDriver(name) {
    const newDriver = [...drivers, name];
    return newDriver;

};

function prependDriver(name) {
    const newerDriver = [name, ...drivers];
    return newerDriver;
};

function removeLastDriver() {
    const removeDriver = [...drivers.slice(0,2)];
    return removeDriver;

};

function removeFirstDriver() {
    const removeFirst = [...drivers.slice(1)];
    return removeFirst;
}