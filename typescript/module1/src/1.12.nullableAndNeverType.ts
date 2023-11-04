{
    // nullable , unknown and never types 

    const search = (value: string | null) => {
        if (value) {
            console.log("searcing")
        }
        else {
            console.log("noting to search")
        }
    }

    search(null)

    // unknown type : when are will make decision on runtime depending on type 

    const kmhToMps = (value: unknown) => {
        if (typeof value === "number") {
            console.log(`meter / s is ${(value * 1000) / 3600}`)
        }
        else if (typeof value === "string") {
            const resval: number = parseInt(value.split(" ")[0])
            console.log({ resval })
            console.log(`meter / s is ${(resval * 1000) / 3600}`)
        }
        else {
            console.log("unknown value")
        }
    }

    kmhToMps(1000)
    kmhToMps("1000 ms^-1")
    kmhToMps(false)



    // type never : when we know for sure , function will never return anything 
    type ThrowError = (val: string) => never
    
    const throwError : ThrowError = (value) => {
        throw new Error(value)
    }

    throwError("throwing error")



















}