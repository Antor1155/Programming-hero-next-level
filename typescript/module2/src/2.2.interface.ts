{

    type User1 = {
        name: string,
        age: number
    }
    
    interface User2 {
        name : string,
        age: number
    }
    
    const user : User2= {
        name: "antor", 
        age: 55,
    }
    
    type UserWithRole1 = User1 & {role: number}
    
    interface UserWithRole2 extends User1 {role: number}
    
    const newUser1 : UserWithRole2 = {
        name: "antor",
        age: 33,
        role: 22
    }
    console.log(newUser1)
    
    type Arr = number[]

    interface Arr2 {
        [ind: number] : number
    }
    
    const arr: Arr2 = [2, 4, 5]
    console.log(arr)

    
    type Fun = (val1 : number, val2: number) => number
    interface Fun2{
        (val1: number, val2: number) : number
    }


    const fun : Fun2  = (value, value2) =>{
        return value * value2
    }















}