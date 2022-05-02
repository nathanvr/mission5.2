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


const ObjUniqueStudents = students.map(obj => {
    const nameStudent = obj.name;
    uniqueStudents[nameStudent]= [];
    
});

const objUniqueCourses = courses.map(obj => {
    const nameCourse = obj.title;
    uniqueCourses[nameCourse]=[];
});


enrollments.forEach(enrollObj=>{
    const {course_id, student_id} = enrollObj
    let curso = courses.filter(course => course._id === course_id)
    let studiante = students.filter(student => student._id === student_id)
    uniqueCourses[curso[0].title].push(studiante[0].name)
    uniqueStudents[studiante[0].name].push(curso[0].title)
    
} )

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
// printData(uniqueCourses)
// console.log("\n")
// printData(uniqueStudents)