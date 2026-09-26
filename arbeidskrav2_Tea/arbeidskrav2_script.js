const students = [
    { name: "Alice", age: 20, grade: "6", workexperience: 2 },
    { name: "Bob", age: 22, grade: "5", workexperience: 1 },
    { name: "Charlie", age: 19, grade: "4", workexperience: 0 },
    { name: "David", age: 21, grade: "5", workexperience: 3 },
    { name: "Eve", age: 23, grade: "6", workexperience: 4 },
    { name: "Frank", age: 20, grade: "3", workexperience: 1 },
    { name: "Grace", age: 22, grade: "2", workexperience: 2 },
    { name: "Hannah", age: 39, grade: "1", workexperience: 5 },
    { name: "Ian", age: 21, grade: "4", workexperience: 1 },
    { name: "Jack", age: 23, grade: "5", workexperience: 3 },
    { name: "Kathy", age: 20, grade: "6", workexperience: 4 },
    { name: "Liam", age: 22, grade: "3", workexperience: 2 },
    { name: "Mia", age: 19, grade: "2", workexperience: 1 },
    { name: "Noah", age: 21, grade: "1", workexperience: 0 },
    { name: "Olivia", age: 23, grade: "4", workexperience: 3 },
    { name: "Paul", age: 40, grade: "5", workexperience: 10 },
    { name: "Quinn", age: 22, grade: "6", workexperience: 0 },
    { name: "Ryan", age: 19, grade: "3", workexperience: 0 },
    { name: "Sophia", age: 21, grade: "2", workexperience: 0 },
    { name: "Tyler", age: 23, grade: "1", workexperience: 0 }
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
let totalGrades = 0
students.grade.map(grade => {totalGrades += grade}) 
    console.log(totalGrades)
//+= students.age.map //trenger å hente alle grades i arrayen og plusse dem sammen

let average = totalGrades / students.length
    console.log(average)

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

//Tell og skriv ut antall av hver karakter til #gradeA, #gradeB og så videre
//document.getElementById("gradeA").innerHTML = students.grade.indexOf("6").length


//Beregn og skriv ut gjennomsnittsalder (rund av til to desimaler) til #averageAge
let totalAge = students.age 
let averageAge = totalAge / students.length

//Tell og skriv ut antallet studenter som kommer rett fra videregående til #highSchool. Regelen for hvem som kommer rett fra videregående er at de er 19 år gamle.


//Tell og skriv ut antallet studenter som har yrkeserfaring til #workExperience. Regelen for hvem som har yrkeserfaring er at workExperience er 1 eller høyere.