function printSegitiga(tinggi) {
    if (typeof tinggi === "number") {
        for (let i = tinggi; i > 0; i--) {
            let baris = ''
            for (let h = 1; h <= i; h++) {
                baris += h + ' ';
            }
            console.log(baris);
        }
    } else {
        console.log("Data harus number")
    }
}
printSegitiga(5);
//printSegitiga("enam")