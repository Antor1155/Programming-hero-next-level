let unknown : any ;

unknown = "hello world";

const str = (unknown as string).toLowerCase()

console.log(str)
console.log(str + 99 + unknown)

type KgTg = (val : string | number) => string | number | undefined

const kgTg : KgTg = (value) =>{

    if(typeof value == "number"){
        return (value * 1000)

    }else if( typeof value === "string"){
        return (`value is ${parseInt(value) * 1000}`)
    }
}

const numAns = kgTg(1) as number
const strAns = kgTg('2') as string

console.log(numAns, strAns)

type CustomErroMsg = {
    message: string
} 


try{

}catch(error){
    console.log((error as  CustomErroMsg).message)
}