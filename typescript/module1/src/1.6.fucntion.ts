function add(num1:number, num2:number):number{
    return num1 + num2
}

const addans : number = add(2, 9)

const arrow = (num3: number, num4: number):string => `my multiply is ${num3 * num4}`

const multip: string = arrow(3, 9)

const method:{
    numk: number,
    numz: number,
    addition(): number,

} = {
    numk : 99,
    numz : 1,
    addition():number{
        return this.numk + this.numz
    },
   
}

method.numz = 101

console.log(method.addition())

const arr:number[] = [1, 3, 4, 5]

const sqr:string[] = arr.map((ele:number):string=> ele ** 2 + "hello")
console.log(sqr)