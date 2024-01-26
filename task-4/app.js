// let person ={
//     name: 'Egor',
//     age: 29,
//     hobby: ['Ribalka','Knigi','Igri','Kino'],
//     contacts:{
//         phones:
//         {
//             phone_1:41243244,
//             phone_2:31231331
//         },
//         email:['dqudi@djq.ru','dqgkdjg@fd.com'],
//         github: 'www.github.ru/',
//         nomer_gruppi : ['ccp-1-22-m'],
//         predmeti:
//         {
//             mdk:
//             {
//                 perviy: ['02.02'],
//                 vtoroy: ['11.01'],
//                 tretiy: ['04.02']
//             }
//         }
//     }
// }

// // console.log(person['name'], person['age']);
// console.log(person['contacts']['nomer_gruppi'][0]);
// console.log(person['contacts']['predmeti']['mdk']['vtoroy']);


// let people = [
//     {name:'Ivan', age: 29, hobbies:['Igri','Kino']},
//     {name:'Egor', age: 27, hobbies:['Igri','Memes']},
//     {name:'IMasha', age: 30, hobbies:['Igri','Anime']},
//     {name:'Elena', age: 32, hobbies:['Igri','Kosmetika']}

// ];

// function filterPeople(peopleArray,targetAge)
// {
// return peopleArray.filter(person =>person.age ===targetAge );
// }


// let peopleWithAge = filterPeople(people,30);
// console.log (peopleWithAge);

// let people =
// {
// grupp:
// {
// gruppa_1:
// [
//     {name:'Ivan', age: 29 },
//     {name:'Egor', age: 27 },
//     {name:'IMasha', age:30}
// ],
// gruppa_2:
// [
//     {name:'Evgenii', age: 41 },
//     {name:'Pavel', age: 14 },
//     {name:'IMasha', age:19}
// ]


// }



// }


let students = 
[
    { name: "Dmitrii" , age: 20, group: ["ssp-1-21-a"] },
    { name: "Evgenii" , age: 20, group: ["sp-1-22-m"] },
    { name: "Avan", age: 19, group: ["sp-1-22-m"] },
    { name: "Pasha", age: 21, group: ["ssa-1-21-z"] },
    { name: "Daniil", age: 18, group: ["sp-1-22-m"] },
    { name: "Masha", age: 18, group: ["ssp-1-22-m"] }
];

function filterStudents(studentsArray, targetGroup)
{
    return studentsArray.filter(person => person.group == targetGroup);
}

let studentsWithGroup = filterStudents(students, 'ssp-1-22-m');

console.log(studentsWithGroup);