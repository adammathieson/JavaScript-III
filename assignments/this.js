/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Object Binding- "this" references the browser.
* 2. Implicit Binding - "this" refers to an object and changes as is implied when obj is referenced (function call preceding . /dot)
* 3. New Binding - Functions creating objects to which "this" will refer
* 4. Explicit Binding - Using .call, .bind, or .apply
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
 function myName(name) {
        console.log(this);
        return name;
    }
    myName("Adam");

// Principle 2

// code example for Implicit Binding

const testObj = {
    name: "Tester",
    saying: function() {
        return `Hi, my name is ${this.name}`;
    
    }
};
console.log(testObj.saying('How are you?'));
// Principle 3

// code example for New Binding

function StoreClerk(worker) {
    this.greeting = "reporting for duty";
    this.worker = worker;
    this.speak = function() {
        console.log(this.greeting + this.worker);
        console.log(this);
    };
}

const Bill = new StoreClerk(Karen);
const Karen = new StoreClerk(Bill);

Karen.speak();
Bill.speak();

// Principle 4

// code example for Explicit Binding

Karen.speak.call(Bill);