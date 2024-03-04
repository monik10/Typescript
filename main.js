"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var message = "Welcome back";
console.log(message);
// ================variable===================
var x = 10;
var y = 20;
// let x=30; //!cannot redeclare let and const
var sum; //hoisting
var title = "typescript"; // not hoisting
// ================variable Type===================
var isAvailable = true;
var num1 = 10;
var name = "Monika";
var sentence = "my name is ".concat(name, " I am a beginner in typescript");
console.log(sentence);
// num1="none";//!assign different types not support
var n = null;
var u = undefined;
// let isSet: boolean=null;
// let myName: string=undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ["monika", 21];
var Color;
(function (Color) {
    Color[Color["green"] = 3] = "green";
    Color[Color["red"] = 4] = "red";
    Color[Color["blue"] = 5] = "blue";
})(Color || (Color = {}));
;
var c = Color.green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = "Veena";
// let myVariable:any=10;
// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase(); //!it will not throw any error so we use unknown
// let myVar:unknown=10;
// console.log(myVar);
// (myVar as string).toUpperCase();
// =====================================variable without type prblm================================
var a;
a = 10;
a = true;
var b = 20;
// b=true;
//===========================================union type=========================================
var multiType;
multiType = 10;
multiType = true; //!has restriction and have intelligence
//=========================================anytype================================================
var anyType;
anyType = 10;
anyType = "blue"; //!no restriction but no intelligence(does not show any suggestion for type method)
//================================================functions=======================================
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
// add(4,"10");//!it throws error
function addition(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
addition(5, 10);
addition(5);
function add1(num1, num2) {
    if (num2 === void 0) { num2 = 30; }
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
add1(10, 20);
add1(10);
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: "Monika",
    lastName: "Krish",
};
fullName(p);
//===========================class============================================
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee("Monika");
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Veena");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
//================================access modifiers=========================================
//!public ---public employeename access outside the class or anywhere
//!private--- private employeenameaccess only within the class not outsideown class or not derived inside class or outside class
//!protected---protected inside derived or own class not outside the class
