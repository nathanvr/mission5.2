const courses = [
    { _id: 1, title: "JavaScript I" },
    { _id: 2, title: "HTML y CSS I" },
  ]
  
const students = [
    { _id: 1, name: "Pedro Perez" },
    { _id: 2, name: "Maria Gomez" },
  ]
  
const enrollments = [
    { course_id: 1, student_id: 1 },
    { course_id: 2, student_id: 1 },
    { course_id: 2, student_id: 2 }
  ]


let uniqueStudents = new Object;
let uniqueCourses = new Object;

for (let i = 0; i < students.length; i++ ){
    const nameStudent= students[i].name;
    uniqueStudents[nameStudent]= [];
}

for (let i = 0; i < courses.length; i++ ){
    const nameCourse= courses[i].title;
    uniqueCourses[nameCourse] = [];
}

for(let i = 0; i<enrollments.length; i++){
    const {course_id, student_id} = enrollments[i]
    let curso = courses.filter(course => course._id === course_id)
    let studiante = students.filter(student => student._id === student_id)
    uniqueCourses[curso[0].title].push(studiante[0].name)
    uniqueStudents[studiante[0].name].push(curso[0].title)

}

// we improve the code and create a function to print the data only passing the argunment (object)
const printData = (obj) =>{
    const arr = Object.entries(obj);

    for(let i = 0; i < arr.length; i++) {
        console.log(`- ${arr[i][0]}`)
        for (let j = 0; j < arr[i][1].length;j++){
            console.log(`   *${arr[i][1][j]}`)
        }
}
}
printData(uniqueCourses)
console.log("\n")
printData(uniqueStudents)






// THIS IS THE FIRST WAY TO DELIVER A SOLUTION - WORKING
// const arrEntriesCourses = Object.entries(uniqueCourses)

// for(let i = 0; i < arrEntriesCourses.length; i++) {
//     console.log(`- ${arrEntriesCourses[i][0]}`)
//     for (let j = 0; j < arrEntriesCourses[i][1].length;j++){
//         console.log(`   *${arrEntriesCourses[i][1][j]}`)
//     }
// }

// console.log("\n")
// const arrEntriesStudents = Object.entries(uniqueStudents);

// for(let i = 0; i < arrEntriesStudents.length; i++) {
//     console.log(`- ${arrEntriesStudents[i][0]}`)
//     for (let j = 0; j < arrEntriesStudents[i][1].length;j++){
//         console.log(`   *${arrEntriesStudents[i][1][j]}`)
//     }
// }
