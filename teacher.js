class Teacher extends Person{
    constructor(name, surname, age, gender, degree){
        // this.name = name;
        // this.surname = surname;
        // this.age = age;
        // this.gender = gender;
        super(name, surname, age, gender)
        this.degree = degree;
        this.students = [];
    }

    toString(){
        let teacherDescription = "\nNome: " + this.name + "\n"
                               + "Cognome: " + this.surname + "\n"
                               + "Eta: " + this.age + "\n"
                               + "Classe: " + this.degree + "\n"
                               + "----------------- \n"
                               + "Studenti: \n"; //+ this.students + "\n";
        for (const stud of this.students) {
            teacherDescription += stud.toString() + "\n";
        }
        return teacherDescription;
    }

    addStudent(student) {
        // for (const student of this.students) {
        //     if (student.generateCode() === student.generateCode()) {
        //         return;
        //     }
        // this.students.push(student);
        // }


        let hasStudent = false;
        for (const stud of this.students) {
            if (stud.generateCode() === student.generateCode()) {
                hasStudent = true;
            }
        }
        if (hasStudent === false) {
            this.students.push(student);
        }

        // if (!this.students.some(stud => stud.generateCode() === student.generateCode())) {
        //     this.students.push(student);
        // }
    }

    addGrade(studentCode, grade){
        for (const student of this.students) {
            if (student.generateCode() === studentCode) {
                student.addGrade(grade);
            }
        }


        // this.students = this.students.map((stud) => {
        //     if (stud.generateCode() === studentCode) {
        //         stud.addGrade(grade);
        //     }
        //     return stud;
        // })

        // this.students.forEach(stud => {
        //     if (stud.generateCode() === studentCode) {
        //         stud.addGrade(grade);
        //     }
        // });
    }

    bestStudent(){
        if (this.students.length === 0) {
            return null;
        }
        let bestStudent = this.students[0];
        for (let i = 1; i < this.students.length; i++){
            const stud = this.students[i];
            if (stud.calculateMean() > bestStudent.calculateMean()) {
                bestStudent = stud;
            }
        }
        return bestStudent;

    //     if (this.students.length === 0) {
    //         return null;
    //     }
    //     return this.students.reduce((std1, std2) => std1.calculateMean() > std2.calculateMean() ? std1 : std2);
    }

    bestStudentToString(){
       return this.bestStudent().toString();
    }

    generateCode() {
        let now = new Date();                                           
        let actualYear = now.getFullYear();                             
        let birthYear = actualYear - this.age;                     
        let code = this.name[0] + this.name[1] + this.surname[0] + this.surname[1] + birthYear; 
        return code;                                            
    }


}