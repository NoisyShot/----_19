'use strict';
// Используя литерал объекта создайте пустой объект cat.
// Добавьте свойство name со значением "Roxy".
// Добавьте свойство lags со значением 4.
// Добавьте свойство color со значением "grey".
// Добавьте свойство full name со значением "Roxy, красивая кошка".
// Выведите full name через console.log().

// let cat = {};
// cat.name = `Roxy`;
// cat.lags = 4;
// cat.color = `grey`;
// cat[`full name`]= cat.name + `, красивая кошка`;
// console.log(cat["full name"]);

   
// Напишите функцию-конструктор Person, которая принимает два параметра: 
// name (имя) и age (возраст).
// С помощью оператора new создайте объект person_1, передающий в 
// функцию-конструктор аргументы: имя "Andrey" и возраст 28.
// Выведите свойства объекта person_1 через console.log().
// Добавьте к шаблону объекта Person свойство specialty с помощью 
// prototype. Значением свойства будет "менеджер".
// Выведите свойство specialty объекта person_1 через console.log().

// function Person (name, age) {
// this.name=name;
// this.age= age;
// }
// let person_1 = new Person("Andrey", 28);
// console.log (person_1)

// Person.prototype.specialty = `менеджер`;
// console.log (person_1.specialty);

// Используя литерал объекта создайте объект cat с тремя свойствами: 
// name, legs и color.
// С помощью Object.create() создайте объект kitten 
// объектом-прототипом которого будет cat.
// Выведите свойства объекта kitten через console.log().

// let cat = {
// name: `Roxy`,
// legs:  4 ,
// color: `white`
// };
// let kitten = Object.create(cat);
// console.log(kitten);

// Реализуйте класс Worker (Работник), который будет иметь следующие 
// свойства: name (имя), surname (фамилия), rate (ставка за день работы), 
// days (количество отработанных дней). Также класс должен иметь метод 
// getSalary(), который будет выводить зарплату работника. Зарплата - 
// это произведение (умножение) ставки rate на количество отработанных 
// дней days.

// class worker {
//    constructor(name, surname, rate, days){
//       this.name = name;
//       this.surname = surname;
//       this.rate = rate;
//       this.days = days;
//    }
//    getSalary() {
//       return this.rate * this.days;
//    }
// }
// worker = new worker (`Andrey`, `Makeenko`, 50, 5)
// console.log(worker.getSalary());



//Домашнее задание
// Задание №1:
// Создайте объект city1 (var city1 = {}), укажите у него свойства name 
// (название города, строка) со значением «ГородN» и population 
// (населенность города, число) со значением 10 млн.

let city1 = {};
   city1.name = `ГородN`;
   city1.population =  10000000;

// Задание №2:
// Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.

let city2 = {
   name: `ГородMom`,
   population: 2e6
};

// Задание №3:
// Создайте у объектов city1 и city2 методы getName(), которые вернут 
// соответствующие названия городов.

/*
city1.getName = function(){
   return this.name
};
city2.getName  = function(){
   return this.name
};
console.log (city1.getName());
console.log (city2.getName());
*/

// Задание №4: 
// Создайте методы exportStr() у каждого из объектов. Этот метод должен 
// возвращать информацию о городе в формате 
// «name=ГородN\npopulation=10000000\n». Для второго города будет строка 
// со своими значениями. Примечание: можно обращаться к каждому свойству 
// через цикл for/in, но методы объекта возвращать не нужно.

/*
city1.exportStr = function(){
   return `name=` + this.name + `\n` + `population=` + this.population + `\n`
}
city2.exportStr = function() {
   return `name=` + this.name + `\n` + `population=` + this.population + `\n`
}
console.log(city1.exportStr());
console.log(city2.exportStr());
*/

// Задание №5: 
// Создайте глобальную функцию getObj(), которая возвращает this. 
// А у каждого из объектов city1 или city2 метод getCity, который 
// ссылается на getObj. Проверьте работу метода. Примечание: к объекту 
// вызова можно обратиться через this..

window.getObj = function() {
   return this 
};
city1.getCity = getObj;
city2.getCity = getObj;
console.log(city1.getCity());
console.log(city2.getCity());


// Создайте массив d1 с числовыми величинами 45,78,10,3.  
// Добавьте в массив d1 еще одно число ( d1[7] = 100). 
// Выведите в консоль весь массив и его элементы с индексами 6 и 7.

let d1 = [45,78,10,3];
d1[7] = 100;
console.log (d1, d1.slice(6,8));

// Создайте массив d2 с числовыми величинами 45,78,10,3. 
// Посчитайте в переменную sum2 сумму чисел в нем, при помощи цикла for.

let d2 = [45,78,10,3];
let sum2 = 0;
for ( let i=0; i<d2.length; i++) {
   sum2 += d2[i];
}
console.log(sum2);

// Создайте массив d3 с числовыми величинами 45,78,10,3. 
// Добавьте в массив d3 еще одно число (например, d[7] = 100) 
// Посчитайте в переменную sum3 сумму чисел в нем, при помощи цикла for/in.

let d3 = [45,78,10,3];
d3[7]=100;
let sum3=0;
for(let number in d3){
   sum3 += d3[number];
}
console.log(sum3);

// Создайте массив d4 с числовыми величинами 45,78,10,3. 
// Напишите функцию сортировки my(a,b), которая при вызове d4.sort(my) 
// отсортирует элементы массива по убыванию чисел. Вызовите d4.sort(my)

let d4 = [45,78,10,3];
d4.sort(function (a,b){
return b-a;
});
console.log(d4);



class city3 {
   constructor(name, population){
      this.name = name;
      this.population = population;
   };
   getName() {
      return this.name;
   };
   exportStr() { 
      for (let key in this){
         console.log(`${key}=${this[key]}`)
         };
   };
}
city3 = new city3 (`ГородN`, 1e7);

/*№1*/console.log (city3); 
/*№3*/console.log (city3.getName());
/*№4*/city3.exportStr();


class city4 {
   constructor(name, population){
      this.name = name;
      this.population = population;
   }
   getName() {
            return this.name;
   }
   exportStr() {
      return `name=${this.name}\npopulation=${this.population}\n`
   }
}
city4 = new city4 (`ГородMom`, 2e6);

/*№2*/console.log (city4); 
/*№3*/console.log (city4.getName());
/*№4*/console.log (city4.exportStr());