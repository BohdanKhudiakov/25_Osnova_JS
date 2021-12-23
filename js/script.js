var myNameIs = 'Bohdan';
let oneName = 'Jack';
const twoName = 'Jon';
var fourName = 'Steav';
let fiveName = 'Bob';
console.log(myNameIs);

// Пример коментированния кода
/*const 6$Name = 'Jon';
var 7__Name = 'Steav';*/
// let EiGhTName = 'Bob';
// let n!neTName = 'Joi';

var myName = prompt('Please enter your name.');
alert('Hello, ' + myName)

var myOld = prompt('What year were you born in?');
const yearNow = '2021'
alert('You are ' + (yearNow - myOld) )

var squereSide = prompt('set the side of the square');
alert('Perimeter of a square ' + (squereSide * 4) )

var radiusCircle = prompt('set the radius of the circle');
alert('Площадь круга ' + (3.14 * radiusCircle**2) )

var rasstoyanie = prompt('Какое расстояние между городами? (км)');
var skorost = prompt('За сколько часов хочешь добраться?');
alert('Скорость с которой нужно двигаться ' + (rasstoyanie/skorost) + ' (км/час), что-бы прибыть вовремя')

var bucks = prompt('Сколько долларов хотите поменять?');
const euro = 0.87
sum = bucks * euro
alert('Вы получите ' + (sum .toFixed(2)) + ' EUR' )