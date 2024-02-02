

let showStudent = (student) => 
{ 
    
    console.log(`Имя: ${student.name}`); 
    console.log(`Фамилия: ${student.familiya}`); 
    console.log(`Почта: ${student.email}`); 
    console.log(`Адрес: ${student.contacts.adress}`); 
    console.log(`Группа: ${student.group}`); 
 
    for(contact in student.contacts ) 
    { 
        console.log(student.contacts[contact]); 
    } 
} 
 
const student1=  
{ 
    name: "Evgenii",  
    familiya: "Gavrlenko",  
    email: "evgenii.gavrilenko.com", 
    contacts: 
    { 
        phone: "+78005553535",
        github:  "www.github.com",
        adress: "г.Волгоград,Елецкая, дом 7", 
        social: {
           vk: "www.vk.com" ,
           telegramm: "twirkle"
    } ,
    group: "SSP-1-22-M"
}
 }
 
showStudent(student1);