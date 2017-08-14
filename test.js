#!/usr/bin/env node

//�ڹ����������ڲ��������ķ�����
function Person(firstname, lastname, age, eyecolor) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.eyecolor = eyecolor;
    this.changeName = function(name) {
        this.firstname = name;
    };
}

var jim = new Person("james", "carter", 12, "bule");
console.log(jim.firstname);
jim.changeName("Tom");
console.log(jim.firstname);
console.log(jim.firstname);
console.log(jim.firstname);