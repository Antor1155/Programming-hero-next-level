{
    // type alias 

    type Age = number

    type Student  = {
        name: string,
        age: Age,
        contact ?: string,
        address: string
    }

    const student1 : Student = {
        name: "antor",
        age: 15,
        contact: "0000303030",
        address: "ctg",
    }

    const student2: Student = {
        name: "someOne",
        age: 55,
        address: "dhk"
    }


    type IsAdmin = boolean
    type Name = string

    const Place: Name = "hello"
    const admin : IsAdmin = true

    type Funct = (anyNum1: number, anyNum2: number) => number

    const fun : Funct = (num1, num2) => num1 + num2

    console.log(fun(2, 5))










}