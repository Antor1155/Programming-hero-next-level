{

    const creactArrWithGeneric = <T>(value: T): T[] =>{
        return [value]
    }

    const asd = creactArrWithGeneric<boolean>(true)
    const str = creactArrWithGeneric<string>("hello")
    const num = creactArrWithGeneric<number>(22)


    const nonFun =  (value1: string, value2: number) : string=>{
        return value1 + " " + value2
    }

    const kk = nonFun("hello", 23)

    const createTuple = <T ,X>(param1: T , param2: X): [T , X] => {
        return [param1, param2]
    }

    const tuple1 = createTuple<boolean, string>(true, "hello")

    console.log(tuple1)


    const addCourseToStu = <T>(student: T) => {
        const course = "web development course"

        return {
            ...student,
            course
        }
    }

    const hero = addCourseToStu<{name: string, id: number}>({name: "antor", id: 244})

    const rich = addCourseToStu<{name: string, id: string, hasWatch: boolean}>({name: "antor", id: "2kc", hasWatch: true})

    console.log(hero, rich)

















}