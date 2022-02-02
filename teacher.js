class TEACHER {
    constructor(name, surname, age, gender, degree){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.degree = degree;
        this.students = [];
    }

    toString(){
        let teacherDescription = "Nome: " + this.name + "\n"
                               + "Cognome: " + this.surname + "\n"
                               + "Eta: " + this.age + "\n"
                               + "Classe: " + this.degree + "\n"
                               + "----------------- \n"
                               + "Studenti: \n" + this.students + "\n";
        return teacherDescription;
    }

    addStudent(student){
        for (const student of this.students) {
            if (student.generateCode() === student.generateCode()) {
                return;
            }
        }
        return this.students.push(student);
    }

    addGrade(studentCode, grade){
        for (const student of this.students) {
            if (student.generateCode() === studentCode) {
                student.addGrade(grade);
            }
        }
    }

    bestStudent(){
        if (this.students.length === 0) {
            return "Nessuno studente"
        }
        return this.students.reduce((std1, std2) => std1.calculateMean() > std2.calculateMean() ? std1 : std2).toString();
    }




}