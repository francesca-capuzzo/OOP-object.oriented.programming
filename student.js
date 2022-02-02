class STUDENT {
    constructor(name, surname, age, gender){                       //il costruttore è fondamentale in ogni classe per la costruzione dell'oggetto studenti e va a prendere tutte le key fondamentali per la creazione del suo oggetto
        this.name = name;                                          //il nome che viene dato in fase di costruzione sarà il nome attribuito alla proprietà (THIS si riferisce all'oggetto che verrà creato)
        this.surname = surname;
        this.gender = gender;
        this.age = age;
        this.grades = [];
    }

    addGrade(grade){                                               //faccio un check per vedere se i voti sono numeri effettivamente possibili e se lo sono li push() nella key grades = []
        if (grade >= 0 && grade <= 10) {
            this.grades.push(grade);
        }
    }

    calculateMean(){
        if (this.grades.length === 0){                             //questo serve perchè lo studente non ha ancora voti e mettere una stringa SI PUò ma sarebbe meglio mettere un numero per evitare che a volte il risultato sia una stringa e altre volte un numero
            return -1;
        }
        let sum = this.grades.reduce((p, c) => p + c, 0);
        let mean = sum / this.grades.length;
        return mean;
    }

    generateCode() {
        let now = new Date();                                           
        let actualYear = now.getFullYear();                             
        let birthYear = actualYear - this.age;                     
        let code = this.name[0] + this.name[1] + this.surname[0] + this.surname[1] + birthYear; 
        return code;                                            
    }
}






















