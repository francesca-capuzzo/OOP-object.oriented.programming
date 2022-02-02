let student1 = new STUDENT("pippo", "de paolis", 13, "m");
let student2 = new STUDENT("paperino", "duck", 13, "m");

let teacher1 = new TEACHER("paperone", "duck", 80, "m", "terza media");
let teacher2 = new TEACHER("topolino", "smith", 50, "m", "prima media")



teacher1.addGrade("padu2009", 9);
teacher1.addGrade("padu2009", 7);
teacher1.addGrade("padu2009", 5);


student1.addGrade(7);
student1.addGrade(9);
student1.addGrade(10);
student1.addGrade(3);
student1.addGrade(2.5);

teacher1.addStudent(student1);
teacher1.addStudent(student2);


console.log(teacher1.bestStudent());
console.log(teacher1.toString(student2));


// console.log(student1.calculateMean());
// console.log(student1.generateCode());
// console.log(student1.toString());

// console.log(student2.toString());