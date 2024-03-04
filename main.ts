export {}
let message="Welcome back";
console.log(message);
// ================variable===================
let x=10;
const y=20;
// let x=30; //!cannot redeclare let and const
let sum;//hoisting
const title="typescript" // not hoisting
// ================variable Type===================
let isAvailable:boolean=true;
let num1:number=10;
let name:string="Monika";
let sentence:string=`my name is ${name} I am a beginner in typescript`;
console.log(sentence);
// num1="none";//!assign different types not support
let n:null=null;
let u:undefined=undefined;

// let isSet: boolean=null;
// let myName: string=undefined;

let list1:number[]=[1,2,3];
let list2:Array<number>=[1,2,3];

let person1:[string,number]=["monika",21];

enum Color{green=3,red,blue};
let c:Color=Color.green;
console.log(c);

let randomValue:any=10;
randomValue=true;
randomValue="Veena";

// let myVariable:any=10;
// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase(); //!it will not throw any error so we use unknown 

// let myVar:unknown=10;
// console.log(myVar);
// (myVar as string).toUpperCase();

// =====================================variable without type prblm================================
let a;
a=10;
a=true;

let b=20;
// b=true;

//===========================================union type=========================================
let multiType:number|boolean;
multiType=10;
multiType=true;//!has restriction and have intelligence
//=========================================anytype================================================
let anyType:any;
anyType=10;
anyType="blue"; //!no restriction but no intelligence(does not show any suggestion for type method)

//================================================functions=======================================

function add(num1:number,num2:number):number 
// :number->returnType ?optional parameter
{
    return num1+num2;
}
add(5,10);
// add(4,"10");//!it throws error

function addition(num1:number,num2?:number):number  //required parameters should be first and optional parametrs should be second
// ?optional parameter
{
    if(num2)
    {
        return num1+num2;
    }
    else
    {
        return num1;
    }
    
}
addition(5,10);
addition(5); 

function add1(num1:number,num2:number=30):number  //default parametrs
{
    if(num2)
    {
        return num1+num2;
    }
    else
    {
        return num1;
    }
    
}
add1(10,20);
add1(10);

//===========================interface============================================

interface Person{
    firstName:string,
    lastName?:string,
}
function fullName(person:Person)
{
    console.log(`${person.firstName} ${person.lastName}`);
}
let p={
    firstName:"Monika",
    lastName:"Krish",
}
fullName(p);

//===========================class============================================
 class Employee
 {
    employeeName:string;
    constructor(name:string)
    {
        this.employeeName=name;
    }

    greet()
    {
        console.log(`Good Morning ${this.employeeName}`);
    }
 }
 let emp1=new Employee("Monika");
 console.log(emp1.employeeName);
 emp1.greet();

 class Manager extends Employee
 {
    constructor(managerName:string)
    {
        super(managerName);
    }

    delegateWork()
    {
        console.log(`Manager delegating tasks`)
    }
 }
 let m1=new Manager("Veena");
 m1.delegateWork();
 m1.greet();
 console.log(m1.employeeName);
 
 //================================access modifiers=========================================
 //!public ---public employeename access outside the class or anywhere
 //!private--- private employeenameaccess only within the class not outsideown class or not derived inside class or outside class
 //!protected---protected inside derived or own class not outside the class