class emailParser{
    constructor(email){
        this.email = email;
    }

    get isCorrect(){
        return /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(this.email);
    }

    get name(){
        const find = this.email.indexOf("@");
        if (this.isCorrect){
            return this.email.slice(0, find);
        }
    }

    get domain(){
        const find = this.email.indexOf("@");
        if (this.isCorrect){
            return this.email.slice(find+1);
        }
    }
}

const email = new emailParser("test@gmail.com");

console.log(email.isCorrect);
console.log(email.name);
console.log(email.domain);
