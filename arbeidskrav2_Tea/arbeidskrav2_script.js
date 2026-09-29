const students = [
    { name: "Alice", age: 20, grade: 6, workexperience: 2 },
    { name: "Bob", age: 22, grade: 5, workexperience: 1 },
    { name: "Charlie", age: 19, grade: 4, workexperience: 0 },
    { name: "David", age: 21, grade: 5, workexperience: 3 },
    { name: "Eve", age: 23, grade: 6, workexperience: 4 },
    { name: "Frank", age: 20, grade: 3, workexperience: 1 },
    { name: "Grace", age: 22, grade: 2, workexperience: 2 },
    { name: "Hannah", age: 39, grade: 1, workexperience: 5 },
    { name: "Ian", age: 21, grade: 4, workexperience: 1 },
    { name: "Jack", age: 23, grade: 5, workexperience: 3 },
    { name: "Kathy", age: 20, grade: 6, workexperience: 4 },
    { name: "Liam", age: 22, grade: 3, workexperience: 2 },
    { name: "Mia", age: 19, grade: 2, workexperience: 1 },
    { name: "Noah", age: 21, grade: 1, workexperience: 0 },
    { name: "Olivia", age: 23, grade: 4, workexperience: 3 },
    { name: "Paul", age: 40, grade: 5, workexperience: 10 },
    { name: "Quinn", age: 22, grade: 6, workexperience: 0 },
    { name: "Ryan", age: 19, grade: 3, workexperience: 0 },
    { name: "Sophia", age: 21, grade: 2, workexperience: 0 },
    { name: "Tyler", age: 23, grade: 1, workexperience: 0 }
];

const grades = [
    { letter: "A", score: 6 },
    { letter: "B", score: 5 },
    { letter: "C", score: 4 },
    { letter: "D", score: 3 },
    { letter: "E", score: 2 },
    { letter: "F", score: 1}
]


//Skriv ut antall studenter i arrayen students til #studentCount
document.getElementById("studentCount").innerHTML = students.length

//Beregn og skriv ut gjennomsnittskarakter (som bokstavkarakter, rund gjennomsnittet opp) til #averageGrade
//Fjernet "" rundt tallene i grade for å konverte dem til intergr i stedet for string
let totalGrades = 0
students.map(gradesContainer => {totalGrades += gradesContainer.grade})
    console.log("totalGrades: ", totalGrades)

let average = totalGrades / students.length
    console.log("average: ", average)

    //Viser resultatet av average som bokstavkarakter rundet opp.
if (average > 5){
    document.getElementById("averageGrade").innerHTML = "A"
}else if (average > 4){
    document.getElementById("averageGrade").innerHTML = "B"
}else if (average > 3){
    document.getElementById("averageGrade").innerHTML = "C"
}else if (average > 2){
    document.getElementById("averageGrade").innerHTML = "D"
}else if (average > 1){
    document.getElementById("averageGrade").innerHTML = "E"
}else{
    document.getElementById("averageGrade").innerHTML = "F"
}

//Tell og skriv ut antall av hver karakter til #gradeA, #gradeB og så videre.
const gradeA = students.filter(gradeAcontainer => gradeAcontainer.grade == 6)
console.log("gradeA: ", gradeA)
document.getElementById("gradeA").innerHTML = gradeA.length

const gradeB = students.filter(gradeBcontainer => gradeBcontainer.grade == 5)
document.getElementById("gradeB").innerHTML = gradeB.length

const gradeC = students.filter(gradeCcontainer => gradeCcontainer.grade == 4)
document.getElementById("gradeC").innerHTML = gradeC.length

const gradeD = students.filter(gradeDcontainer => gradeDcontainer.grade == 3)
document.getElementById("gradeD").innerHTML = gradeD.length

const gradeE = students.filter(gradeEcontainer => gradeEcontainer.grade == 2)
document.getElementById("gradeE").innerHTML = gradeE.length

const gradeF = students.filter(gradeFcontainer => gradeFcontainer.grade == 1)
document.getElementById("gradeF").innerHTML = gradeF.length

//Beregn og skriv ut gjennomsnittsalder (rund av til to desimaler) til #averageAge
let totalAge = 0
students.map(ageContainer => {totalAge += ageContainer.age})
console.log("totalAge: ", totalAge)
let averageAge = totalAge / students.length
document.getElementById("averageAge").innerHTML = averageAge
console.log("averageAge: ", averageAge)

//Tell og skriv ut antallet studenter som kommer rett fra videregående til #highSchool. Regelen for hvem som kommer rett fra videregående er at de er 19 år gamle.
const highSchool = students.filter(highSchoolContainer => highSchoolContainer.age == 19)
document.getElementById("highSchool").innerHTML = highSchool.length

//Tell og skriv ut antallet studenter som har yrkeserfaring til #workExperience. Regelen for hvem som har yrkeserfaring er at workExperience er 1 eller høyere.
const workExperience = students.filter(workExpContainer => workExpContainer.workexperience >= 1)
document.getElementById("workExperience").innerHTML = workExperience.length