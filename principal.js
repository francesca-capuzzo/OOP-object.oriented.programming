class Principal {
    constructor(name, surname, age, gender, school){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.school = school;
        this.teachers = [];
    }

    toString(){
        let principalDescription = "Nome: " + this.name + "\n"
                                 + "Cognome: " + this.surname + "\n"
                                 + "Eta: " + this.age + "\n"
                                 + "Scuola: " + this.school + "\n"
                                 + "----------------- \n"
                                 + "Insegnanti: \n" + this.teachers + "\n";
        return principalDescription;
    }

    addTeacher(teacher){
        for (const teach of this.teachers) {
            if (teach.generateCode() === teacher.generateCode()) {
                return;
            }
        }
        this.teachers.push(teacher);

        // let hasTeacher = false;
        // for (const teach of this.teachers) {
        //     if (teach.generateCode() === teacher.generateCode()) {
        //         hasTeacher = true;
        //     }
        // }
        // if (hasTeacher === false) {
        //     this.teachers.push(teacher);
        // }
    }

    addStudentToTeacher(teacherSurname, studentToAdd) {

        let hasStudent = false;
        if (this.teachers.surname === teacherSurname) {
            for (const stud of this.teachers.students) {
                if (stud.generateCode() === studentToAdd.generateCode()) {
                    hasStudent = true;
                }
            }
            if (hasStudent === false) {
                this.teachers.students.push(studentToAdd);
            }
        }

        // if (this.teachers.includes(studentToAdd.generateCode())) {
        //     return;
        // }
        // for (const teach of this.teachers) {
        //     this.teachers.push(this.addStudent())
        // }
    }



    bestTeacher() {

        if (this.teachers.length === 0) {
            return "Nessun Professore"
        }
        let bestTeacher = this.teachers[0];
        for (let i = 1; i < this.teachers.length; i++) {
            const teach = this.teachers[i];
            if (teach.bestStudent() > bestTeacher.bestStudent()) {
                bestTeacher = teach;
            }
        }
        return bestTeacher.toString();


        // if (this.teachers === 0) {
        //     return "Nessun Professore"
        // }
        // return this.teachers.reduce((p, c) => p.bestStudent() > c.bestStudent() ? c : p).toString();
    }
}