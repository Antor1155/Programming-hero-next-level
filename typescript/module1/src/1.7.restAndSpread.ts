{
// using block scope, as ts finds for same funcitons,
//  objects in other fiels of same directory     

// spread operators

const friends1 : string[] = ["kola", "vola", "sola"]
const friends2 : string[] = ["mola", "zola", "kusum"]

const allFriedns : string[] = [...friends1, ...friends2]

const group1:{
    a: string,
    b: string,
    c: string,
    d?: string,
} = {
    a: "allu", 
    b: "ballu", 
    c: "sallu"
}

const group2 = {
    m: "mallu", 
    n: "naga", 
    o: "onto"
}

const allGroups = {group1, group2}

allGroups.group1.d = "balma"

const groupsSpread = {...group1, ...group2}

console.log(groupsSpread)


// rest operator 

function sayHalloTogether (fried1:string, firend2:string):string{
    return `hellow, ${fried1} ${firend2}`
}

console.log(sayHalloTogether("antor", "antu"))


function seperateHello(...firends: string[]){

    firends.forEach((friend: string)=>{
        console.log(`hi ${friend}`)
    })
}


seperateHello(...allFriedns, "antor", "raza")

}
