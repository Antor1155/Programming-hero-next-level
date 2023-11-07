{
    const addCourseToStu = <T extends { name: string, id: number }>(student: T) => {
        const course = "web dev next level"

        return {
            ...student,
            course
        }
    }



    const hero = addCourseToStu<{ name: string, id: number }>({ name: "antor", id: 244 })

    const rich = addCourseToStu<{ name: string, id: number, hasWatch: boolean }>({ name: "antor", id: 323, hasWatch: true })

    const emni = addCourseToStu({ name: "alu", id: 234, emni: "emni" })

    console.log(hero, rich, emni)

















}