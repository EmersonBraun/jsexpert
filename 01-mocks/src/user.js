class User {
    constructor({ id, name, profession, age }) {
        this.id = +id
        this.name = name.trim()
        this.profession = profession.trim()
        this.age = +age 
    }
}

module.exports = User