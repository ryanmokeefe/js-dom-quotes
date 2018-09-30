console.log('hello')

// when inside of a CLASS, you do NOT  need the keyword FUNCTION, or COMMAS


class Person {
    constructor (name) {
        this.name = name
        this.skin = true
        this.species = "homosapien"

    }
    // method ( outside of the constructor )
    breathe () {
        console.log('breathing')
    }

}
const ryan = new Person('ryan')

///////

class Person {
    constructor (name) {
      this.name = name
      this.skin = true
      this.species = 'human'
    }
  
    breathe () {
      console.log('breathing')
    }
  }
  
  const ali = new Person('Ali')
