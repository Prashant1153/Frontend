// let age ;
// age = 19;
// if (age >=13 && age <=19){
//     console.log("Teenager");
// }
// else {
//     console.log("Not a teenager");
// }

// for(let i=0;i<4;i++){
//       let str = "";
//       for (let j=0;j<4-i;j++){
//         str += "*";
//       }
//       console.log(str);
// }


// const calculator = {
//     add: function(a, b) {
//       return a + b;
//     },
//     subtract: function(a, b) {
//       return a - b;
//     }
// }
// let result1 = calculator.add(5, 3);      
// let result2 = calculator.subtract(10, 4);       
// console.log(result1);   
// console.log(result2);
// Output:
// 8
// 6

// function greet(name) {
//     console.log("Hello, " + name + "!"); 
// }    
// greet("Alice");  
// Output: Hello, Alice!
// function multiply(a, b) {  
//     return a * b;    
// }      
// let product = multiply(4, 5);  
// console.log(product);
// Output: 20 

// let num = 7;
// if (num % 2 === 0) {                                                       


//     console.log(num + " is even.");  

// }


const person = {
    firstname: "Prashant",
    lastname:"Pandey",
    age:20,
   introduction: function() {
    console.log(`hi my name is ${this.firstname}${this.lastname} and age is ${this.age}`)
   }
};
// console.log(person.firstname);
// console.log(person.lastname);
// person.introduction();

person.birthYear = 2025 - person.age;
person.birthintro = function(){
  console.log(` my birth year is ${this.birthYear}`);
};
console.log(person.birthYear);









