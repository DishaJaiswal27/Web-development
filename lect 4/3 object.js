// Object is also known as hashmap(java) and dictionary (python).
//it is static in java but in js its our choice whether to create it static or dynamic

//object -> group of key : value pair
// object -> value : property
//object -> function : method

//creation using {}
let obj = {
    name : "Disha",
    age : 19,
    student : true,
    income : null,
    address : {
        town : "digthan",
        district : "Dhar",
        State : "MP"
    },
    skill : ["DSA","Basic of Programming"],
    SayHi : function(name){
        console.log("HI " + name);
    }
}

//get object's key
{
console.log(obj.name);
console.log(obj.age);
console.log(obj.student);
console.log(obj.income);
console.log(obj.address);
console.log(obj.address.town);
console.log(obj.address.district);
console.log(obj.address.State);
for(let x in obj.address){
    console.log(x);
    console.log(obj.address[x]);
}
console.log(obj.skill);
for(let i = 0 ; i < obj.skill.length;i++ ){
    console.log(obj.skill[i]);
}
obj.SayHi("Momma");
console.log(obj);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

}

//Set/UPDATE
obj.age = 20; // update
obj.school = "higher secondary"; // add
console.log(obj);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

//DELETE
delete obj.income;
console.log(obj);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

let prop = "name";
console.log(obj[prop]);
console.log(obj.name);
//both work same but (.) operator directly goes to that value while ([]) operator first 
//replace with the stored string and then searches in the object.

//if there is no such defined property or method , then value will be undefined.
console.log(obj.clg);