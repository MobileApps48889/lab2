let myNumber : number = 5;
console.log("My number is: "+myNumber);

let myString: string = "Hello World";
console.log("My string is: "+myString);

let myBoolean:Boolean = true;
console.log("The value of my booelan is: "+myBoolean);

let list:any[] =[22,33,44];
for(let i = 0;i<list.length;i++){
    console.log("The value at position "+(i+1)+ " is "+list[i]);
}