class Principal extends Person{
    constructor(name, surname, age, gender, school){
        // this.name = name;
        // this.surname = surname;
        // this.age = age;
        // this.gender = gender;
        super(name, surname, age, gender)
        this.school = school;
        this.teachers = [];
    }

    toString(){
        let principalDescription = "Nome: " + this.name + "\n"
                                 + "Cognome: " + this.surname + "\n"
                                 + "Eta: " + this.age + "\n"
                                 + "Scuola: " + this.school + "\n"
                                 + "----------------- \n"
                                 + "Insegnanti: \n"; // + this.teachers + "\n";
        for (const teach of this.teachers) {
            principalDescription += teach.toString() + "\n\n";
        }
        return principalDescription;
    }

    addTeacher(teacher){

        // for (const teach of this.teachers) {
        //     if (teach.generateCode() === teacher.generateCode()) {
        //         return;
        //     }
        // }
        // this.teachers.push(teacher);

        let hasTeacher = false;
        for (const teach of this.teachers) {
            if (teach.surname === teacher.surname) {
                hasTeacher = true;
            }
        }
        if (hasTeacher === false) {
            this.teachers.push(teacher);
        }
    }

    addStudentToTeacher(teacherSurname, studentToAdd) {
        
        for (const teacher of this.teachers) {
            if (teacher.surname === teacherSurname) {
                teacher.addStudent(studentToAdd);
            }
        }


        // let hasStudent = false;
        // if (this.teachers.surname === teacherSurname) {
        //     for (const stud of this.teachers) {
        //         if (stud.generateCode() === studentToAdd.generateCode()) {
        //             hasStudent = true;
        //         }
        //     }
        //     if (hasStudent === false) {
        //         this.teachers.students.push(studentToAdd);
        //     }
        // }

        // if (this.teachers.includes(studentToAdd.generateCode())) {
        //     return;
        // }
        // for (const teach of this.teachers) {
        //     this.teachers.push(this.addStudent())
        // }
    }



    bestTeacher() {

        if (this.teachers.length === 0) {
            return null;
        }
        let bestTeacher = this.teachers[0];
        for (let i = 1; i < this.teachers.length; i++) {
            const teach = this.teachers[i];
            if (bestTeacher.bestStudent().calculateMean() < teach.bestStudent().calculateMean()) {
                bestTeacher = teach;
            }
        }
        return bestTeacher;

        // if (this.teachers === 0) {
        //     return "Nessun Professore"
        // }
        // return this.teachers.reduce((p, c) => p.bestStudent() > c.bestStudent() ? c : p).toString();
    }

    bestTeacherToString(){
        this.bestTeacher().toString();
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //voglio che principal abbia un codice diverso dagli altri nonostante lo erediti dagli altri ---> posso copiarlo e cambiarlo (con lo stesso nome non è un problema perche prima guarderà dentro se stesso poi andrà a guardare dentro person!!)
    //OPPURE --> lo richiamo con SUPER. e aggiungo quello che mi serve.

    generateCode() {
       const code = super.generateCode() + this.school[0];
       return code;                                          
    }
}