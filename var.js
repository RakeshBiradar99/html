

let name=(name)=>{
    console.log(name);
}
name("raj");



const pi=3.14;
function fname(){
    var pi=22;
    console.log(pi);{
        if (true){
            var pi=10;
             pi++;
            console.log(pi);
        }
    }
    console.log(pi);
}
fname();
console.log(pi);


let lname=(lname="raj")=>console.log(lname);
name("ram");

let firstName="raj";
let lastNmae="raju";
console.log(`the name is: ${firstName} ${lastNmae}`);

// rest opretor
const person={
    firstName:"ravi",
lastNmae:"rk",
weight:55,
height:5
}
const {weight,lastname}=person;
const mass=person.weight;
const height=person.height;
console.log(`${weight}, ${height}`);


const player={
    main:"rajesh",
    age:22,
    game:"ccricket"
};
const {main,...rest}=player;
console.log(`${main} and ${rest}`);
console.log(rest);


const one=[1,2,3];
const three=[7,8,9];
const two=[...one,4,5,6,...three];
console.log(two);


const four={
    name:"max",
    age:22
};
const threee={
    weight:107,
    ...four

};
let arr=[1,2,3];
const newArr=[...arr,4,5,6];
console.log(newArr);
console.log(threee);
