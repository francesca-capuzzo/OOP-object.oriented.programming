let student1 = new STUDENT("pippo", "de paolis", 13, "m");
let student2 = new STUDENT("paperino", "duck", 13, "m");

student1.addGrade(7);
student1.addGrade(9);
student1.addGrade(10);
student1.addGrade(3);
student1.addGrade(2.5);

console.log(student1.calculateMean());
console.log(student1.generateCode());
console.log(student1.toString());

console.log(student2.toString());