{
// union type 

type FrontEnd = "fakibaz" | "juniorFront"
type FullStack = "frontEnd" | "expert"

const antor : FrontEnd = "fakibaz" 
const cat : FullStack = "expert"

type Developer = FrontEnd | FullStack

const mew: Developer = "juniorFront"

type Info = {
    name: string,
    email?: string,
    isExpert: boolean,
    gender: "Male" | "Female",
    blood: "A+" | "B+" | "AB+",
}

const devInfo1 : Info ={
    name:"antor",
    email: "antor@email.com",
    gender: "Male",
    isExpert: true,
    blood: "A+"
}

const devInfo2 : Info = {
    name: "meo",
    gender: "Male",
    isExpert: true,
    blood: "AB+"
}


type Xinof = {
    komola: number,
    alu: string
}

type Super = Info | Xinof

const dog : Super = {
    name: "antor",
    email: "alsdfj@lsjf.com",
    blood: "A+",
    isExpert: true,
    gender: "Male",
    
    alu: "another alu",

}

console.log(dog)





// intersection type

type FrontEndDeveloper = {
    qualities : string[],
    des1: "frontEnd" | "backend"
}

type BackendDeveloper = {
    qualities : string[],
    des2: "express" | "mongoDb"
}

type FullStackDeveloper = FrontEndDeveloper & BackendDeveloper

const alamin : FullStackDeveloper = {
    qualities : ["html", "css", "js"],
    des1: "frontEnd",
    des2: "express",
}
















}