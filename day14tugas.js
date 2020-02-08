const berapaTahun = (pen,lah,dat,tar) => {
    let count = 0
    while (pen<tar) {
    pen += (pen*(lah/100))+dat
    count ++
    }
    return `Dibutuhkan ${count} tahun untuk mencapai +-${tar} penduduk.`
}

console.log(berapaTahun(1000,2,50,1200))
console.log(berapaTahun(1500,5,100,5000))
console.log(berapaTahun(1500000,2.5,10000,2000000))