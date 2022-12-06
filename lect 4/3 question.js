// question - 1
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulating-complex-objects

let myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
  ];

  myMusic.push({
    artist : "Daft Punk",
    title : "Homework",
    release_year : 1997,
    formats: ["CD", 
    "Cassette", 
    "LP"]
  })

  //question - 2
   //https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup
  // Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  // function lookName(name){
  //   for(let i = 0 ; i < contacts.length ;i++){
  //     if(contacts[i].firstName == name){
  //       return contacts[i];
  //     }
  //   }
  //   return false;
  // }
  function lookUpName(name){
    for(let x in contacts){
      if(contacts[x].firstName == name){
        return contacts[x];
      }
    }
    return false;
  }
  
  function lookProp(contact,prop){
      for(let x in contact){
          if(x == prop){
            return contact[x];
          }
      }
      return false;
  }
  function lookUpProfile(name, prop) {
    // Only change code below this line
        let val = lookName(name);
        if(val == false){
          return "No such contact"
        }
        else{
          let val2 = lookProp(val,prop);
          if(val2==false){
             return "No such property"
          }
          else{
            return val2
          }
        }
    // Only change code above this line
  }
  
  lookUpProfile("Akira", "likes");


  //question - 3
  //https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection
  // Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if(value == ""){
    delete records[id][prop];
  }
  else if(prop != "tracks"){
      records[id][prop] = value;
  }
  else if(prop == "tracks"){
     let flag = false;
     for(let i in records[id]){
       if(i == "tracks"){
         flag = true;
       }
     }
     if(flag){
       records[id][prop].push(value);
     }
     else{
       records[id][prop] = [value];
     }

  }

  return records;
}
// function lookUpId(records,id){
//   for(let i in records){
//     if(i == id){
//       return records[i];
//     }
//   }
// }
// function containProp(val,prop){
//   for(let i in val){
//     if(i == prop){
//       return true;
//     }
//   }
//   return false;
// }
// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//   let val = lookUpId(records,id);
//   if(value == ""){
//     delete val[prop]; 
//   }
//   else if(prop != "tracks" ){
//     val[prop] = value;
//   }
//   else if(prop == "tracks"){
//     if(containProp(val,prop)){
//       val[prop].push(value);
//     }
//     else{
//       val[prop] = [value];
//     }
//   }
//   return records;
// }

updateRecords(recordCollection, 5439, 'artist', 'ABBA');