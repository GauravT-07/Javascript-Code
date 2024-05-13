class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email=email
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com")

chai.addCourse()

const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);