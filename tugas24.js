var deretAngka = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66]
console.log("Sebelumnya : ", deretAngka)

function desc(deret){
    return(deret.reverse())
}

function asc(deret){
    desc(deret)
    return(deret.sort())
}
console.log("Ascending : ", asc(deretAngka))
console.log("Descending : ", desc(deretAngka))

