//ho iniziato scrivendo il codice nel main.js, poi spostato nel student.js e poi usato per implementare la classe - infine spostato nel file di teoria:

//da guardare in ordine ---> FILETEORIA.JS ---> STUDENT.JS ---> MAIN.JS

let student1 = {name:"pippo", surname:"de paolis", age:13, gender:"m", grades: [7, 9, 10, 3, 2.5]};  //creo studente a cui do proprietà (string, number, array(with number))

function calculateGradeMean(student) {
    let sum = student.grades.reduce((p,c) => p + c);                //uso la reduce per calcolare la somma dei voti
    let mean = sum / student.grades.length;                         //faccio la media 
    return mean; 
}
console.log(calculateGradeMean(student1));                          //ALTRI DUE MODI PER CALCOLARE LA SOMMA SENZA USARE LA REDUCE.
                                                                    // let sum = 0;                                                 
                                                                    // for (const grade of student.grades) {
                                                                    //     sum = sum + grade;
                                                                    // }

                                                                    // for (let i = 0; i < student.grade.length; i++) {
                                                                    //     const grade = student.grade[i];
                                                                    //     sum = sum + grade;
                                                                    // }

function generateStudentCode(student) {
    let now = new Date();                                           //CREO L'OGGETTO DATE --> il codice viene riempito con la data in cui passa da quel punto!!! 
    let actualYear = now.getFullYear();                             //data la data, posso prendere solo l'anno
    let birthYear = actualYear - student.age;                       //così calcolo l'anno di nascita dello studente
    let code = student.name[0] + student.name[1] + student.surname[0] + student.surname[1] + birthYear; 
                                                                    //qui sopra genero codice studente con le prime 2 lettere di nome e cognome + anno di nascita
    
    console.log(now);                                               //--> result: Date Wed Feb 02 2022 09:48:26 GMT+0100 (Ora standard dell’Europa centrale)
    console.log(actualYear);                                        //--> result: 2022
    console.log(birthYear);                                         //--> result: 2009
    console.log(code);                                              //--> result: pide2009 
}
generateStudentCode(student1);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PROPRIETà DEGLI OGGETTI:

//per evitare che una proprità venga cambiata (SOLO PER CONVENZIONE!!!!!) si scrive un _ davanti alla proprietà:
class STUDENT {

    constructor(name, surname, age, gender){                      
        this.name = name;                                          
        this.surname = surname;
        this.age = age;
        this._gender = gender;
        this._grades = [];
    }


    set grade(value){                                   //questo rimpiazzerebbe l'addGrade() di prima e si chiama nel main come se fosse una proprietà:
        if (value >= 0 && value <= 10) {                //student1.grade = 8;
            this._grades.push(value)                    //student2.grade = 10;
        }
    }



    get gender(){
        return this._gender;                            //questo fa in modo che possa fare student1.gender e leggere il gender ma NON POSSO fare student1.gender = "f"
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//STRUTTURA CHE SI RIPETE:
//creo una nuova classe (PERSON):
class Person{
    constructor(name, surname, age, gender){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
    }
}

//cancello le altre proprietà dai costruttori dove queste proprietà si ripetono e li scrivo con EXTEND E SUPER:

class STUDENT extends Person {
    constructor(name, surname, age, gender){
        super(name, surname, age, gender)
        this.grades = [];
    }
}

class Teacher extends Person{
    constructor(name, surname, age, gender, degree){
        super(name, surname, age, gender)
        this.degree = degree;
        this.students = [];
    }
}

class Principal extends Person{
    constructor(name, surname, age, gender, school){
        super(name, surname, age, gender)
        this.school = school;
        this.teachers = [];
    }
}

//INOLTRE POSSO DARE A PERSON DELLE FUNZIONI CHE TUTTI POSSONO USARE!!
//VEDI GENERATECODE().

//NB: --> UNA CLASSE HA UN SOLO GENITORE!!!!!!!!!!!! --> posso solo ereditare da un solo genitore!!!

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//CLASSI STATICHE:

const result = Math.sqrt(64);
console.log(result);               //--> risultato: 8

//math è una classe come student, teacher ecc ma non necessita di essere invocata perchè non ha bisogno di diverse variabili!!

