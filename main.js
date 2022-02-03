let student1 = new STUDENT("pippo", "de paolis", 13, "m");
let student2 = new STUDENT("paperino", "duck", 13, "m");
//----
let student3 = new STUDENT("clarabella", "clark", 10, "f");
let student4 = new STUDENT("eta", "beta", 10, "m");
let student5 = new STUDENT("etalix", "etax", 10, "m");

let teacher1 = new Teacher("paperone", "duck", 70, "m", "terza media");
let teacher2 = new Teacher("topolino", "smith", 50, "m", "prima media")


let principal = new Principal("James", "Hatfield", 60, "m", "Conservatorio J. Metallica")



//teacher 1
teacher1.addStudent(student1);
teacher1.addStudent(student2);


//teacher 2
teacher2.addStudent(student3);
teacher2.addStudent(student4);


//student 1
student1.addGrade(10);
student1.addGrade(9);
student1.addGrade(10);
student1.addGrade(3);
student1.addGrade(10);

console.log("VOTI STUD 1:\n", student1.grades);
console.log("MEDIA STUD 1:\n",student1.calculateMean());
//console.log(student1.generateCode());
//console.log(student1.toString());


//student2
teacher1.addGrade("padu2009", 7);
teacher1.addGrade("padu2009", 3);
teacher1.addGrade("padu2009", 9);
teacher1.addGrade("padu2009", 10);
teacher1.addGrade("padu2009", 5);

console.log("VOTI STUD 2:\n",student2.grades);
console.log("MEDIA STUD 2:\n",student2.calculateMean());
//console.log(student2.generateCode());
//console.log(student2.toString())
//console.log(student2.toString());


//student3
student3.addGrade(8);
student3.addGrade(5);
student3.addGrade(7);
student3.addGrade(9.5);
student3.addGrade(8);

console.log("VOTI STUD 3:\n",student2.grades);
console.log("MEDIA STUD 3:\n",student2.calculateMean());


//student4
student4.addGrade(5);
student4.addGrade(6);
student4.addGrade(7);
student4.addGrade(9);
student4.addGrade(4.5);

console.log("VOTI STUD 4:\n",student2.grades);
console.log("MEDIA STUD 4:\n",student2.calculateMean());



//teach1- continua
console.log("PROFILO PROF 1:\n",teacher1.toString());
console.log("STUDENTI PROF 1:\n",teacher1.students);
console.log("MIGLIOR STUDENTE PROF 1:\n", teacher1.bestStudent());

//teach2- continua
console.log("PROFILO PROF 2:\n",teacher2.toString());
console.log("STUDENTI PROF 2:\n",teacher2.students);
console.log("MIGLIOR STUDENTE PROF 2:\n", teacher2.bestStudent());




//PRINCIPAL
principal.addTeacher(teacher1);
principal.addTeacher(teacher2);
console.log("DATI PRESIDE:\n", principal.toString());

console.log("MIGLIOR PROFESSORE:\n",principal.bestTeacher());

principal.addStudentToTeacher("smith", "etet2012");
console.log(teacher2.students);